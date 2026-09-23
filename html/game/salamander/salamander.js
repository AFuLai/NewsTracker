/**
 * salamander.js -- Authentic Konami 1986 Salamander (Life Force) Arcade Remake
 * Enhanced with Retina Canvas rendering, dynamic bloom/particles, multi-layer parallax,
 * Web Audio FM chiptune synth, 6 alternating stages (H/V), 6 bosses, and 5-slot save system.
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIZER ENGINE (Web Audio API) ---
  class AudioEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.currentTrack = null;
      this.bgmTimer = null;
      this.bgmStep = 0;
      this.tempo = 140;
    }

    init() {
      if (this.ctx) return;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      if (!this.enabled && this.ctx) {
        this.stopBGM();
      }
      return this.enabled;
    }

    playTone(freq, type, duration, vol = 0.15, slideTo = null) {
      if (!this.enabled || !this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (slideTo) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(10, slideTo), now + duration);
      }

      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    }

    playNoise(duration, vol = 0.2, filterFreq = 1000) {
      if (!this.enabled || !this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(filterFreq, now);
      filter.frequency.exponentialRampToValueAtTime(50, now + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + duration);
    }

    // Sound FX Library
    playShoot() {
      this.playTone(880, 'square', 0.08, 0.1, 220);
    }

    playMissile() {
      this.playTone(320, 'triangle', 0.18, 0.15, 80);
    }

    playRipple() {
      this.playTone(520, 'sine', 0.12, 0.15, 1040);
    }

    playLaser() {
      this.playTone(1200, 'sawtooth', 0.14, 0.12, 400);
    }

    playExplosion(large = false) {
      if (large) {
        this.playNoise(0.6, 0.35, 600);
        this.playTone(110, 'sawtooth', 0.5, 0.3, 30);
      } else {
        this.playNoise(0.25, 0.2, 1200);
      }
    }

    playPowerUp() {
      // Classic ascending Konami arpeggio: C5 -> E5 -> G5 -> C6
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'square', 0.12, 0.12);
        }, idx * 60);
      });
    }

    playShieldHit() {
      this.playTone(980, 'triangle', 0.08, 0.15, 300);
    }

    playWarning() {
      // Alternating high-low alarm
      this.playTone(660, 'sawtooth', 0.18, 0.2, 580);
      setTimeout(() => this.playTone(440, 'sawtooth', 0.18, 0.2, 380), 200);
    }

    // Background Music Synthesizer Patterns
    startBGM(trackName) {
      if (!this.enabled) return;
      this.init();
      if (this.currentTrack === trackName) return;
      this.stopBGM();
      this.currentTrack = trackName;
      this.bgmStep = 0;

      // Track definitions (frequencies in Hz, step duration ~120ms)
      const tracks = {
        'stage1': { // Power of Anger (Bio-organic stage)
          tempo: 140,
          bass: [110, 110, 130, 110, 146, 130, 110, 98],
          lead: [440, 494, 523, 659, 587, 523, 494, 440, 659, 587, 523, 440, 392, 440, 494, 523]
        },
        'stage2': { // Fly High (Asteroid Cruiser stage)
          tempo: 155,
          bass: [130, 146, 164, 146, 174, 164, 146, 130],
          lead: [523, 587, 659, 784, 659, 587, 659, 523, 587, 659, 880, 784, 659, 587, 523, 440]
        },
        'stage3': { // Planet Ratis / Fire Breath (Promethean fire stage)
          tempo: 145,
          bass: [98, 98, 123, 110, 130, 123, 98, 87],
          lead: [392, 440, 494, 587, 494, 440, 494, 392, 587, 523, 494, 440, 392, 349, 392, 440]
        },
        'stage4': { // Starfield (Skeletal graveyard stage)
          tempo: 135,
          bass: [110, 123, 130, 146, 130, 123, 110, 98],
          lead: [440, 523, 659, 587, 523, 494, 440, 392, 440, 523, 587, 659, 784, 659, 587, 523]
        },
        'stage5': { // Burn the Wind (Moai Temple stage)
          tempo: 150,
          bass: [146, 146, 164, 174, 164, 146, 130, 116],
          lead: [587, 659, 698, 880, 784, 698, 659, 587, 698, 784, 880, 1046, 880, 784, 698, 659]
        },
        'stage6': { // Poison of Snake (Zelos Fortress stage)
          tempo: 165,
          bass: [110, 116, 123, 130, 138, 146, 138, 123],
          lead: [440, 466, 494, 523, 554, 587, 554, 523, 587, 622, 659, 698, 740, 784, 740, 698]
        },
        'boss': { // Intense Boss Encounter
          tempo: 160,
          bass: [82, 82, 87, 82, 92, 87, 82, 73],
          lead: [330, 349, 370, 392, 415, 392, 370, 349, 440, 466, 494, 523, 494, 466, 440, 392]
        },
        'escape': { // Emergency Gate Collapse
          tempo: 180,
          bass: [73, 82, 92, 110, 92, 82, 73, 65],
          lead: [587, 554, 523, 494, 466, 440, 415, 392, 784, 740, 698, 659, 622, 587, 554, 523]
        },
        'victory': { // Peace Again (Ending theme)
          tempo: 110,
          bass: [130, 164, 196, 261],
          lead: [523, 659, 784, 1046, 880, 784, 659, 587, 523]
        }
      };

      const track = tracks[trackName] || tracks['stage1'];
      const intervalMs = (60 / track.tempo / 4) * 1000;

      this.bgmTimer = setInterval(() => {
        if (!this.enabled || !this.ctx) return;
        const bassFreq = track.bass[this.bgmStep % track.bass.length];
        const leadFreq = track.lead[this.bgmStep % track.lead.length];

        if (this.bgmStep % 2 === 0) {
          this.playTone(bassFreq, 'triangle', 0.15, 0.08);
        }
        if (this.bgmStep % 4 === 0) {
          this.playTone(leadFreq, 'square', 0.18, 0.06);
        }
        this.bgmStep++;
      }, intervalMs);
    }

    stopBGM() {
      if (this.bgmTimer) {
        clearInterval(this.bgmTimer);
        this.bgmTimer = null;
      }
      this.currentTrack = null;
    }
  }

  // --- 2D VECTOR MATH HELPER ---
  class Vec2 {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    set(x, y) { this.x = x; this.y = y; return this; }
    add(v) { return new Vec2(this.x + v.x, this.y + v.y); }
    sub(v) { return new Vec2(this.x - v.x, this.y - v.y); }
    scale(s) { return new Vec2(this.x * s, this.y * s); }
    len() { return Math.hypot(this.x, this.y); }
    normalize() {
      const l = this.len();
      return l > 1e-5 ? new Vec2(this.x / l, this.y / l) : new Vec2(0, 0);
    }
    dist(v) { return Math.hypot(this.x - v.x, this.y - v.y); }
  }

  // --- PARTICLE EFFECT SYSTEM ---
  class Particle {
    constructor(x, y, vx, vy, color, size, life, decay, isAdditive = true) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.color = color;
      this.size = size;
      this.life = life;
      this.maxLife = life;
      this.decay = decay;
      this.isAdditive = isAdditive;
    }

    update(dt) {
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.life -= this.decay * dt;
      return this.life > 0;
    }

    draw(ctx) {
      const alpha = Math.max(0, this.life / this.maxLife);
      ctx.save();
      if (this.isAdditive) ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(1, this.size * alpha), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // --- MAIN SALAMANDER GAME ENGINE ---
  class SalamanderGame {
    constructor() {
      this.canvas = document.getElementById('salamanderCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.audio = new AudioEngine();

      // Virtual dimensions
      this.vWidth = 960;
      this.vHeight = 540;
      this.scale = 1;

      // Settings
      this.bloomEnabled = true;
      this.crtEnabled = true;

      // Game state
      this.score = 0;
      this.highScore = parseInt(localStorage.getItem('salamander_high_score') || '50000', 10);
      this.lives = 3;
      this.stageIdx = 0; // 0 to 5 (Stages 1..6)
      this.state = 'TITLE'; // 'TITLE', 'PLAYING', 'BOSS_ALERT', 'BOSS_BATTLE', 'ESCAPE', 'VICTORY', 'GAMEOVER'
      this.stageScrollProgress = 0;
      this.stageLength = 3200; // pixels to travel before boss
      this.stageStartTime = 0;
      this.gameStartTime = Date.now();
      this.shakeDuration = 0;
      this.shakeIntensity = 0;

      // Escape phase timer (Stage 6)
      this.escapeTimeLeft = 30.0;
      this.escapeGates = [];

      // Ships definition
      this.selectedShip = 'VIC_VIPER'; // 'VIC_VIPER' (1P) or 'LORD_BRITISH' (2P)

      // Player State
      this.player = {
        pos: new Vec2(120, 270),
        vel: new Vec2(0, 0),
        width: 32,
        height: 16,
        baseSpeed: 230,
        speedLevel: 0, // 0..5
        hasMissile: false,
        weaponType: 'VULCAN', // 'VULCAN', 'RIPPLE', 'LASER'
        optionsCount: 0, // 0..4
        hasShield: false,
        shieldHp: 0, // max 10
        invulnerableTimer: 2.5,
        isAlive: true,
        shootCooldown: 0,
        missileCooldown: 0,
        positionHistory: [] // [{pos, time, orient}] for Option trailing
      };

      // Entities
      this.playerBullets = [];
      this.enemyBullets = [];
      this.enemies = [];
      this.capsules = [];
      this.particles = [];
      this.boss = null;

      // Background stars / parallax terrain
      this.stars = [];
      this.fleshCells = [];
      this.asteroids = [];
      this.fireEmber = [];

      // Input
      this.keys = {};
      this.autoFire = false;
      this.konamiSequence = [];
      this.konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
      ];

      // Stage configs
      this.stages = [
        {
          num: 1,
          name: 'BIO-CELL ORGANISM',
          orientation: 'HORIZONTAL',
          bossName: 'BRAIN GOLEM',
          bossSubtitle: '弱點：中央旋轉核心巨眼',
          bossHp: 120,
          bgm: 'stage1',
          bgTheme: 'bio'
        },
        {
          num: 2,
          name: 'ASTEROID CRUISER BELT',
          orientation: 'VERTICAL',
          bossName: 'TETRAN BATTLESHIP',
          bossSubtitle: '弱點：四爪旋轉雷射軸心',
          bossHp: 160,
          bgm: 'stage2',
          bgTheme: 'space'
        },
        {
          num: 3,
          name: 'PROMETHEAN FIRE HELL',
          orientation: 'HORIZONTAL',
          bossName: 'INTRUDER FIRE DRAGON',
          bossSubtitle: '弱點：烈焰魔蛇頭部炎核',
          bossHp: 180,
          bgm: 'stage3',
          bgTheme: 'fire'
        },
        {
          num: 4,
          name: 'SKELETAL GRAVEYARD',
          orientation: 'VERTICAL',
          bossName: 'TUSKER BONE BEAST',
          bossSubtitle: '弱點：雙頭猛獁胸骨心核',
          bossHp: 200,
          bgm: 'stage4',
          bgTheme: 'bone'
        },
        {
          num: 5,
          name: 'ASTEROID MOAI TEMPLE',
          orientation: 'HORIZONTAL',
          bossName: 'PLATE CORE GUARDIAN',
          bossSubtitle: '弱點：旋轉力場護盾後方主機芯',
          bossHp: 240,
          bgm: 'stage5',
          bgTheme: 'moai'
        },
        {
          num: 6,
          name: 'ZELOS MECHANICAL FORTRESS',
          orientation: 'VERTICAL',
          bossName: 'ZELOS LIFE FORCE CORE',
          bossSubtitle: '弱點：霸克特里安生命中樞 (倒數自爆)',
          bossHp: 300,
          bgm: 'stage6',
          bgTheme: 'fortress'
        }
      ];

      this.lastTime = performance.now();
      this.initCanvas();
      this.initEvents();
      this.initBackgroundElements();
      this.loadSavedSlots();
      this.initUI();
      this.startStage(0);

      // Start loop
      requestAnimationFrame(this.gameLoop.bind(this));
    }

    // --- INITIALIZATION ---
    initCanvas() {
      const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.scale = Math.min(
          this.canvas.width / this.vWidth,
          this.canvas.height / this.vHeight
        );
      };
      window.addEventListener('resize', resize);
      resize();
    }

    initBackgroundElements() {
      // 120 Parallax Stars
      this.stars = [];
      for (let i = 0; i < 120; i++) {
        this.stars.push({
          x: Math.random() * this.vWidth,
          y: Math.random() * this.vHeight,
          speed: 20 + Math.random() * 90,
          size: Math.random() * 2 + 0.8,
          layer: Math.floor(Math.random() * 3),
          color: ['#88bbff', '#ffffff', '#ffd277', '#ff66aa'][Math.floor(Math.random() * 4)]
        });
      }

      // Stage 1: Bio flesh structures
      this.fleshCells = [];
      for (let i = 0; i < 30; i++) {
        this.fleshCells.push({
          x: (i * 140) % (this.vWidth * 2),
          yTop: 30 + Math.sin(i * 0.7) * 20,
          yBottom: this.vHeight - (30 + Math.cos(i * 0.7) * 20),
          radius: 35 + Math.random() * 15,
          pulse: Math.random() * Math.PI * 2
        });
      }

      // Stage 2: Asteroids
      this.asteroids = [];
      for (let i = 0; i < 20; i++) {
        this.asteroids.push({
          x: Math.random() * this.vWidth,
          y: Math.random() * this.vHeight,
          radius: 18 + Math.random() * 32,
          speedY: 40 + Math.random() * 60,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 1.5
        });
      }
    }

    initEvents() {
      window.addEventListener('keydown', (e) => {
        this.audio.init();
        this.keys[e.code] = true;

        // Check Konami Code
        this.checkKonamiCode(e.code);

        // Stage shortcut keys (1-6)
        if (e.key >= '1' && e.key <= '6') {
          const target = parseInt(e.key, 10) - 1;
          this.startStage(target);
          this.showToast(`WARPED TO STAGE ${target + 1}: ${this.stages[target].name}`);
        }

        // L key: Auto-fire toggle
        if (e.code === 'KeyL') {
          this.autoFire = !this.autoFire;
          this.showToast(`AUTO-FIRE: ${this.autoFire ? 'ENABLED' : 'DISABLED'}`);
        }

        // M key: Audio toggle
        if (e.code === 'KeyM') {
          this.toggleAudio();
        }

        // G key: Bloom toggle
        if (e.code === 'KeyG') {
          this.toggleBloom();
        }

        // C key: CRT toggle
        if (e.code === 'KeyC') {
          this.toggleCRT();
        }

        // H key: Help modal
        if (e.code === 'KeyH') {
          document.getElementById('helpModal').classList.toggle('hidden');
        }

        // P key / Escape: Save modal
        if (e.code === 'KeyP' || e.code === 'Escape') {
          document.getElementById('saveModal').classList.toggle('hidden');
        }
      });

      window.addEventListener('keyup', (e) => {
        this.keys[e.code] = false;
      });

      // Canvas click to shoot
      this.canvas.addEventListener('mousedown', (e) => {
        this.audio.init();
        if (e.button === 0) {
          this.shootPlayerWeapons();
        }
      });

      // Touch controls
      const touchBtns = document.querySelectorAll('.touch-btn');
      touchBtns.forEach((btn) => {
        const key = btn.getAttribute('data-key');
        if (!key) return;
        btn.addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.audio.init();
          this.keys[key] = true;
          if (key === 'KeyJ') this.shootPlayerWeapons();
          if (key === 'KeyK') this.launchMissile();
          if (key === 'KeyL') {
            this.autoFire = !this.autoFire;
            this.showToast(`AUTO-FIRE: ${this.autoFire ? 'ENABLED' : 'DISABLED'}`);
          }
        });
        btn.addEventListener('touchend', (e) => {
          e.preventDefault();
          this.keys[key] = false;
        });
      });
    }

    initUI() {
      // Ship switch button
      document.getElementById('btnShipSwitch').addEventListener('click', () => {
        this.selectedShip = this.selectedShip === 'VIC_VIPER' ? 'LORD_BRITISH' : 'VIC_VIPER';
        document.getElementById('hudShipName').innerText = this.selectedShip === 'VIC_VIPER' ? 'VIC VIPER' : 'LORD BRITISH';
        document.getElementById('hudShipName').className = `hud-val ${this.selectedShip === 'VIC_VIPER' ? 'blue' : 'red'}`;
        this.showToast(`PLAYER CRAFT: ${this.selectedShip === 'VIC_VIPER' ? 'VIC VIPER (1P)' : 'LORD BRITISH (2P)'}`);
      });

      // Audio toggle button
      document.getElementById('btnAudioToggle').addEventListener('click', () => this.toggleAudio());

      // Bloom toggle button
      document.getElementById('btnBloomToggle').addEventListener('click', () => this.toggleBloom());

      // CRT toggle button
      document.getElementById('btnCrtToggle').addEventListener('click', () => this.toggleCRT());

      // Help Modal
      document.getElementById('btnHelp').addEventListener('click', () => {
        document.getElementById('helpModal').classList.remove('hidden');
      });
      document.getElementById('btnCloseHelp').addEventListener('click', () => {
        document.getElementById('helpModal').classList.add('hidden');
      });

      // Save / Load Modal
      document.getElementById('btnSaveMenu').addEventListener('click', () => {
        document.getElementById('saveModal').classList.remove('hidden');
        this.renderSaveSlots();
      });
      document.getElementById('btnCloseSave').addEventListener('click', () => {
        document.getElementById('saveModal').classList.add('hidden');
      });

      // Restart button
      document.getElementById('btnRestartGame').addEventListener('click', () => {
        document.getElementById('endGameModal').classList.add('hidden');
        this.resetGame();
      });

      // Export / Import
      document.getElementById('btnExportSave').addEventListener('click', () => this.exportSaveJSON());
      document.getElementById('btnImportSave').addEventListener('click', () => {
        document.getElementById('fileImportInput').click();
      });
      document.getElementById('fileImportInput').addEventListener('change', (e) => this.importSaveJSON(e));
    }

    toggleAudio() {
      const active = this.audio.toggle();
      const btn = document.getElementById('btnAudioToggle');
      btn.innerText = active ? '🔊' : '🔇';
      this.showToast(`AUDIO: ${active ? 'ON' : 'MUTED'}`);
      if (active) {
        this.audio.startBGM(this.getCurrentStage().bgm);
      }
    }

    toggleBloom() {
      this.bloomEnabled = !this.bloomEnabled;
      const btn = document.getElementById('btnBloomToggle');
      btn.innerText = this.bloomEnabled ? '✨ 輝光 ON' : '✨ 輝光 OFF';
      this.showToast(`BLOOM SHADERS: ${this.bloomEnabled ? 'ON' : 'OFF'}`);
    }

    toggleCRT() {
      this.crtEnabled = !this.crtEnabled;
      const crtEl = document.getElementById('scanlineOverlay');
      if (this.crtEnabled) {
        crtEl.classList.remove('disabled');
      } else {
        crtEl.classList.add('disabled');
      }
      const btn = document.getElementById('btnCrtToggle');
      btn.innerText = this.crtEnabled ? '📺 CRT ON' : '📺 CRT OFF';
      this.showToast(`CRT RETRO SCANLINES: ${this.crtEnabled ? 'ON' : 'OFF'}`);
    }

    showToast(msg) {
      const banner = document.getElementById('toastBanner');
      banner.innerText = msg;
      banner.classList.add('show');
      clearTimeout(this._toastTimeout);
      this._toastTimeout = setTimeout(() => {
        banner.classList.remove('show');
      }, 2500);
    }

    checkKonamiCode(code) {
      this.konamiSequence.push(code);
      if (this.konamiSequence.length > this.konamiCode.length) {
        this.konamiSequence.shift();
      }
      if (this.konamiSequence.join(',') === this.konamiCode.join(',')) {
        this.lives = 30;
        this.player.speedLevel = 3;
        this.player.hasMissile = true;
        this.player.weaponType = 'LASER';
        this.player.optionsCount = 4;
        this.player.hasShield = true;
        this.player.shieldHp = 10;
        this.audio.playPowerUp();
        this.showToast('KONAMI CODE UNLOCKED! 30 LIVES & FULL ARSENAL!');
        this.updateHUD();
      }
    }

    // --- STAGE LOGIC & PROGRESSION ---
    getCurrentStage() {
      return this.stages[this.stageIdx];
    }

    startStage(idx) {
      this.stageIdx = (idx + this.stages.length) % this.stages.length;
      const stage = this.getCurrentStage();
      this.stageScrollProgress = 0;
      this.state = 'PLAYING';
      this.enemies = [];
      this.enemyBullets = [];
      this.playerBullets = [];
      this.capsules = [];
      this.boss = null;
      this.escapeGates = [];

      // Reposition player based on orientation
      if (stage.orientation === 'HORIZONTAL') {
        this.player.pos.set(100, this.vHeight / 2);
      } else {
        this.player.pos.set(this.vWidth / 2, this.vHeight - 80);
      }
      this.player.positionHistory = [];
      this.player.invulnerableTimer = 2.0;

      // Update HUD
      const hudStage = document.getElementById('hudStage');
      hudStage.innerText = `ST-${stage.num}: ${stage.name.split(' ')[0]} [${stage.orientation[0]}]`;
      document.getElementById('bossHUD').classList.add('hidden');
      document.getElementById('escapeHUD').classList.add('hidden');

      this.audio.startBGM(stage.bgm);
      this.showToast(`ENTERING STAGE ${stage.num}: ${stage.name} (${stage.orientation})`);
      this.updateHUD();
    }

    triggerBossAlert() {
      this.state = 'BOSS_ALERT';
      const stage = this.getCurrentStage();
      this.audio.stopBGM();
      this.audio.playWarning();

      const bossHUD = document.getElementById('bossHUD');
      const bossName = document.getElementById('bossName');
      const bossPhase = document.getElementById('bossPhase');
      const bossHpBar = document.getElementById('bossHpBar');

      bossName.innerText = `☣ ${stage.bossName}`;
      bossPhase.innerText = stage.bossSubtitle;
      bossHpBar.style.width = '100%';
      bossHUD.classList.remove('hidden');

      // Shake screen
      this.triggerShake(1.5, 8);

      setTimeout(() => {
        this.spawnBoss();
        this.state = 'BOSS_BATTLE';
        this.audio.startBGM('boss');
      }, 2500);
    }

    spawnBoss() {
      const stage = this.getCurrentStage();
      if (this.stageIdx === 0) {
        // Stage 1 Boss: Brain Golem
        this.boss = {
          name: stage.bossName,
          hp: stage.bossHp,
          maxHp: stage.bossHp,
          pos: new Vec2(this.vWidth - 160, this.vHeight / 2),
          eyeOpen: true,
          eyeTimer: 0,
          tentacleAngle: 0,
          attackTimer: 0,
          type: 'BRAIN_GOLEM'
        };
      } else if (this.stageIdx === 1) {
        // Stage 2 Boss: Tetran (4-claw laser cruiser)
        this.boss = {
          name: stage.bossName,
          hp: stage.bossHp,
          maxHp: stage.bossHp,
          pos: new Vec2(this.vWidth / 2, 140),
          clawAngle: 0,
          attackTimer: 0,
          type: 'TETRAN'
        };
      } else if (this.stageIdx === 2) {
        // Stage 3 Boss: Intruder Fire Dragon (16 segments)
        const segments = [];
        for (let i = 0; i < 16; i++) {
          segments.push(new Vec2(this.vWidth + i * 25, this.vHeight / 2));
        }
        this.boss = {
          name: stage.bossName,
          hp: stage.bossHp,
          maxHp: stage.bossHp,
          pos: segments[0],
          segments: segments,
          waveTime: 0,
          attackTimer: 0,
          type: 'INTRUDER'
        };
      } else if (this.stageIdx === 3) {
        // Stage 4 Boss: Tusker Skeleton Beast
        this.boss = {
          name: stage.bossName,
          hp: stage.bossHp,
          maxHp: stage.bossHp,
          pos: new Vec2(this.vWidth / 2, 130),
          tuskAngle: 0,
          attackTimer: 0,
          type: 'TUSKER'
        };
      } else if (this.stageIdx === 4) {
        // Stage 5 Boss: Plate Core
        this.boss = {
          name: stage.bossName,
          hp: stage.bossHp,
          maxHp: stage.bossHp,
          pos: new Vec2(this.vWidth - 180, this.vHeight / 2),
          shieldBlocks: [0, 1, 2, 3],
          shieldAngle: 0,
          attackTimer: 0,
          type: 'PLATE_CORE'
        };
      } else if (this.stageIdx === 5) {
        // Stage 6 Boss: Zelos Life Force Core
        this.boss = {
          name: stage.bossName,
          hp: stage.bossHp,
          maxHp: stage.bossHp,
          pos: new Vec2(this.vWidth / 2, 150),
          ringAngle: 0,
          attackTimer: 0,
          pulse: 0,
          type: 'ZELOS_CORE'
        };
      }
    }

    onBossDefeated() {
      this.addScore(15000);
      this.triggerShake(2.0, 15);
      this.audio.playExplosion(true);

      // Create massive particle shower
      if (this.boss) {
        for (let i = 0; i < 80; i++) {
          const ang = Math.random() * Math.PI * 2;
          const spd = 50 + Math.random() * 220;
          this.particles.push(new Particle(
            this.boss.pos.x,
            this.boss.pos.y,
            Math.cos(ang) * spd,
            Math.sin(ang) * spd,
            ['#ff0055', '#ffbe0b', '#00f3ff', '#ffffff'][Math.floor(Math.random() * 4)],
            4 + Math.random() * 5,
            1.2 + Math.random() * 0.8,
            1.0
          ));
        }
      }

      this.boss = null;
      document.getElementById('bossHUD').classList.add('hidden');

      if (this.stageIdx === 5) {
        // Stage 6 Special: Emergency Escape Sequence!
        this.startEscapeSequence();
      } else {
        this.showToast(`STAGE ${this.stageIdx + 1} CLEARED! PREPARING WARP...`);
        setTimeout(() => {
          this.startStage(this.stageIdx + 1);
        }, 3000);
      }
    }

    startEscapeSequence() {
      this.state = 'ESCAPE';
      this.escapeTimeLeft = 30.0;
      this.audio.startBGM('escape');
      document.getElementById('escapeHUD').classList.remove('hidden');
      this.showToast('WARNING! CORE MELTDOWN! ESCAPE BEFORE GATES LOCK DOWN!');

      // Spawn 8 closing blast doors along the path
      this.escapeGates = [];
      for (let i = 1; i <= 8; i++) {
        this.escapeGates.push({
          y: -i * 500,
          gapWidth: 160,
          targetGap: 50,
          closingSpeed: 12,
          passed: false
        });
      }
    }

    onMissionVictory() {
      this.state = 'VICTORY';
      this.audio.stopBGM();
      this.audio.startBGM('victory');
      document.getElementById('escapeHUD').classList.add('hidden');

      const modal = document.getElementById('endGameModal');
      const title = document.getElementById('endGameTitle');
      const msg = document.getElementById('endGameMessage');
      const finalScore = document.getElementById('endFinalScore');
      const clearTime = document.getElementById('endClearTime');
      const rankBadge = document.getElementById('endRankBadge');

      title.innerHTML = '🏆 MISSION ACCOMPLISHED';
      msg.innerText = '恭喜摧毀霸克特里安特遣要塞生命中樞，成功從防爆閘門極限逃脫！格拉迪烏斯恆星系重獲和平！';
      finalScore.innerText = this.score.toString().padStart(6, '0');

      const elapsedSec = Math.floor((Date.now() - this.gameStartTime) / 1000);
      const mins = Math.floor(elapsedSec / 60).toString().padStart(2, '0');
      const secs = (elapsedSec % 60).toString().padStart(2, '0');
      clearTime.innerText = `${mins}:${secs}`;

      let rank = 'RANK S';
      if (this.score < 80000) rank = 'RANK A';
      if (this.score < 50000) rank = 'RANK B';
      rankBadge.innerText = rank;

      modal.classList.remove('hidden');
    }

    // --- PLAYER COMBAT & POWER-UPS ---
    shootPlayerWeapons() {
      if (!this.player.isAlive || this.state === 'GAMEOVER') return;

      const stage = this.getCurrentStage();
      const isVert = stage.orientation === 'VERTICAL';
      const dirX = isVert ? 0 : 1;
      const dirY = isVert ? -1 : 0;
      const speed = 720;

      // Primary gun
      if (this.player.weaponType === 'VULCAN') {
        // Twin shot
        this.audio.playShoot();
        const offset = isVert ? 8 : 6;
        this.playerBullets.push({
          pos: new Vec2(this.player.pos.x - (isVert ? offset : 0), this.player.pos.y - (isVert ? 0 : offset)),
          vel: new Vec2(dirX * speed, dirY * speed),
          type: 'VULCAN',
          damage: 10,
          radius: 3
        });
        this.playerBullets.push({
          pos: new Vec2(this.player.pos.x + (isVert ? offset : 0), this.player.pos.y + (isVert ? 0 : offset)),
          vel: new Vec2(dirX * speed, dirY * speed),
          type: 'VULCAN',
          damage: 10,
          radius: 3
        });
      } else if (this.player.weaponType === 'RIPPLE') {
        this.audio.playRipple();
        this.playerBullets.push({
          pos: new Vec2(this.player.pos.x, this.player.pos.y),
          vel: new Vec2(dirX * 600, dirY * 600),
          type: 'RIPPLE',
          damage: 18,
          radius: 8,
          maxRadius: 40,
          growthRate: 35
        });
      } else if (this.player.weaponType === 'LASER') {
        this.audio.playLaser();
        this.playerBullets.push({
          pos: new Vec2(this.player.pos.x, this.player.pos.y),
          vel: new Vec2(dirX * 950, dirY * 950),
          type: 'LASER',
          damage: 28,
          length: 50,
          thickness: 4
        });
      }

      // Fire from Options
      if (this.player.optionsCount > 0) {
        const optionPositions = this.getOptionPositions();
        optionPositions.forEach((optPos) => {
          if (this.player.weaponType === 'VULCAN') {
            this.playerBullets.push({
              pos: new Vec2(optPos.x, optPos.y),
              vel: new Vec2(dirX * speed, dirY * speed),
              type: 'VULCAN',
              damage: 10,
              radius: 3
            });
          } else if (this.player.weaponType === 'RIPPLE') {
            this.playerBullets.push({
              pos: new Vec2(optPos.x, optPos.y),
              vel: new Vec2(dirX * 600, dirY * 600),
              type: 'RIPPLE',
              damage: 18,
              radius: 8,
              maxRadius: 40,
              growthRate: 35
            });
          } else if (this.player.weaponType === 'LASER') {
            this.playerBullets.push({
              pos: new Vec2(optPos.x, optPos.y),
              vel: new Vec2(dirX * 950, dirY * 950),
              type: 'LASER',
              damage: 28,
              length: 50,
              thickness: 4
            });
          }
        });
      }
    }

    launchMissile() {
      if (!this.player.isAlive || !this.player.hasMissile) return;
      if (this.player.missileCooldown > 0) return;
      this.player.missileCooldown = 0.35;
      this.audio.playMissile();

      const stage = this.getCurrentStage();
      if (stage.orientation === 'HORIZONTAL') {
        // Top and bottom 2-way missile
        this.playerBullets.push({
          pos: new Vec2(this.player.pos.x, this.player.pos.y - 6),
          vel: new Vec2(180, -220),
          type: 'MISSILE',
          surfaceDir: 'UP',
          damage: 15,
          radius: 4
        });
        this.playerBullets.push({
          pos: new Vec2(this.player.pos.x, this.player.pos.y + 6),
          vel: new Vec2(180, 220),
          type: 'MISSILE',
          surfaceDir: 'DOWN',
          damage: 15,
          radius: 4
        });
      } else {
        // Vertical stage: left and right wall missiles
        this.playerBullets.push({
          pos: new Vec2(this.player.pos.x - 8, this.player.pos.y),
          vel: new Vec2(-200, -180),
          type: 'MISSILE',
          damage: 15,
          radius: 4
        });
        this.playerBullets.push({
          pos: new Vec2(this.player.pos.x + 8, this.player.pos.y),
          vel: new Vec2(200, -180),
          type: 'MISSILE',
          damage: 15,
          radius: 4
        });
      }
    }

    getOptionPositions() {
      // Historical buffer trailing
      const positions = [];
      const history = this.player.positionHistory;
      for (let i = 1; i <= this.player.optionsCount; i++) {
        const delayFrames = i * 14;
        if (history.length > delayFrames) {
          const sample = history[history.length - 1 - delayFrames];
          positions.push(new Vec2(sample.x, sample.y));
        } else {
          // Fallback if history is short
          const stage = this.getCurrentStage();
          const offset = stage.orientation === 'HORIZONTAL'
            ? new Vec2(-i * 24, 0)
            : new Vec2(0, i * 24);
          positions.push(this.player.pos.add(offset));
        }
      }
      return positions;
    }

    applyCapsuleUpgrade(type) {
      this.audio.playPowerUp();
      this.addScore(500);

      switch (type) {
        case 'SPEED':
          if (this.player.speedLevel < 5) this.player.speedLevel++;
          this.showToast(`SPEED UP! (LV.${this.player.speedLevel})`);
          break;
        case 'MISSILE':
          this.player.hasMissile = true;
          this.showToast('SURFACE MISSILES ARMED!');
          break;
        case 'RIPPLE':
          this.player.weaponType = 'RIPPLE';
          this.showToast('RIPPLE LASER ACTIVATED!');
          break;
        case 'LASER':
          this.player.weaponType = 'LASER';
          this.showToast('HIGH-ENERGY CUTTING LASER ACTIVATED!');
          break;
        case 'OPTION':
          if (this.player.optionsCount < 4) {
            this.player.optionsCount++;
            this.showToast(`OPTION ORB DEPLOYED (x${this.player.optionsCount})!`);
          }
          break;
        case 'SHIELD':
          this.player.hasShield = true;
          this.player.shieldHp = 10;
          this.showToast('FORCE FIELD BARRIER ONLINE!');
          break;
      }
      this.updateHUD();
    }

    damagePlayer() {
      if (!this.player.isAlive || this.player.invulnerableTimer > 0) return;

      // Shield absorb
      if (this.player.hasShield && this.player.shieldHp > 0) {
        this.player.shieldHp -= 2;
        this.audio.playShieldHit();
        this.triggerShake(0.2, 5);
        if (this.player.shieldHp <= 0) {
          this.player.hasShield = false;
          this.showToast('FORCE FIELD COLLAPSED!');
        }
        this.updateHUD();
        return;
      }

      // Ship destroyed
      this.player.isAlive = false;
      this.audio.playExplosion(true);
      this.triggerShake(0.8, 12);

      // Shrapnel particles
      for (let i = 0; i < 40; i++) {
        const ang = Math.random() * Math.PI * 2;
        const spd = 40 + Math.random() * 180;
        this.particles.push(new Particle(
          this.player.pos.x,
          this.player.pos.y,
          Math.cos(ang) * spd,
          Math.sin(ang) * spd,
          ['#00f3ff', '#ffbe0b', '#ff0055', '#ffffff'][Math.floor(Math.random() * 4)],
          3 + Math.random() * 4,
          0.8 + Math.random() * 0.6,
          1.2
        ));
      }

      this.lives--;
      this.updateHUD();

      if (this.lives <= 0) {
        this.onGameOver();
      } else {
        // Respawn after 1.5s
        setTimeout(() => {
          this.respawnPlayer();
        }, 1500);
      }
    }

    respawnPlayer() {
      const stage = this.getCurrentStage();
      if (stage.orientation === 'HORIZONTAL') {
        this.player.pos.set(80, this.vHeight / 2);
      } else {
        this.player.pos.set(this.vWidth / 2, this.vHeight - 80);
      }
      this.player.vel.set(0, 0);
      this.player.isAlive = true;
      this.player.invulnerableTimer = 3.0;
      this.player.positionHistory = [];
      // Downgrade 1 speed level on death
      this.player.speedLevel = Math.max(0, this.player.speedLevel - 1);
      this.updateHUD();
    }

    onGameOver() {
      this.state = 'GAMEOVER';
      this.audio.stopBGM();
      this.showToast('GAME OVER - PRESS RESTART TO TRY AGAIN');

      const modal = document.getElementById('endGameModal');
      const title = document.getElementById('endGameTitle');
      const msg = document.getElementById('endGameMessage');
      const finalScore = document.getElementById('endFinalScore');
      const rankBadge = document.getElementById('endRankBadge');

      title.innerHTML = '☠ MISSION FAILED';
      title.style.color = '#ff0055';
      msg.innerText = '機體已遭到擊墜，格拉迪烏斯防線崩潰。請再接再厲！';
      finalScore.innerText = this.score.toString().padStart(6, '0');
      rankBadge.innerText = 'DEFEATED';
      rankBadge.className = 'red';
      modal.classList.remove('hidden');
    }

    resetGame() {
      this.score = 0;
      this.lives = 3;
      this.player.speedLevel = 0;
      this.player.hasMissile = false;
      this.player.weaponType = 'VULCAN';
      this.player.optionsCount = 0;
      this.player.hasShield = false;
      this.player.shieldHp = 0;
      this.gameStartTime = Date.now();
      this.startStage(0);
    }

    addScore(val) {
      this.score += val;
      if (this.score > this.highScore) {
        this.highScore = this.score;
        localStorage.setItem('salamander_high_score', this.highScore.toString());
      }
      this.updateHUD();
    }

    triggerShake(duration, intensity) {
      this.shakeDuration = duration;
      this.shakeIntensity = intensity;
    }

    updateHUD() {
      document.getElementById('hudScore').innerText = this.score.toString().padStart(6, '0');
      document.getElementById('hudHighScore').innerText = this.highScore.toString().padStart(6, '0');
      document.getElementById('hudLives').innerHTML = `&#9829; ${this.lives}`;

      // Update Weapon Gauge
      const slotSpeed = document.getElementById('slotSpeed');
      const lvlSpeed = document.getElementById('lvlSpeed');
      lvlSpeed.innerText = `LV.${this.player.speedLevel}`;
      slotSpeed.className = `power-slot ${this.player.speedLevel > 0 ? (this.player.speedLevel >= 5 ? 'max' : 'active') : ''}`;

      const slotMissile = document.getElementById('slotMissile');
      const lvlMissile = document.getElementById('lvlMissile');
      lvlMissile.innerText = this.player.hasMissile ? 'ACTIVE' : 'OFF';
      slotMissile.className = `power-slot ${this.player.hasMissile ? 'max' : ''}`;

      const slotRipple = document.getElementById('slotRipple');
      const lvlRipple = document.getElementById('lvlRipple');
      lvlRipple.innerText = this.player.weaponType === 'RIPPLE' ? 'ACTIVE' : 'OFF';
      slotRipple.className = `power-slot ${this.player.weaponType === 'RIPPLE' ? 'max' : ''}`;

      const slotLaser = document.getElementById('slotLaser');
      const lvlLaser = document.getElementById('lvlLaser');
      lvlLaser.innerText = this.player.weaponType === 'LASER' ? 'ACTIVE' : 'OFF';
      slotLaser.className = `power-slot ${this.player.weaponType === 'LASER' ? 'max' : ''}`;

      const slotOption = document.getElementById('slotOption');
      const lvlOption = document.getElementById('lvlOption');
      lvlOption.innerText = `x${this.player.optionsCount}`;
      slotOption.className = `power-slot ${this.player.optionsCount > 0 ? (this.player.optionsCount >= 4 ? 'max' : 'active') : ''}`;

      const slotShield = document.getElementById('slotShield');
      const lvlShield = document.getElementById('lvlShield');
      lvlShield.innerText = this.player.hasShield ? `${this.player.shieldHp * 10}%` : 'OFF';
      slotShield.className = `power-slot ${this.player.hasShield ? 'max' : ''}`;
    }

    // --- ENEMY SPAWNING & FORMATIONS ---
    updateEnemies(dt) {
      const stage = this.getCurrentStage();
      const isVert = stage.orientation === 'VERTICAL';

      // Spawn regular wave during normal stage progression
      if (this.state === 'PLAYING') {
        this.stageScrollProgress += dt * 80;

        if (this.stageScrollProgress >= this.stageLength) {
          this.triggerBossAlert();
          return;
        }

        // Random wave spawns
        if (Math.random() < dt * 1.5) {
          this.spawnEnemySquadron();
        }
      }

      // Update existing enemies
      for (let i = this.enemies.length - 1; i >= 0; i--) {
        const e = this.enemies[i];
        e.age += dt;

        // Custom movement paths
        if (e.pattern === 'SINE') {
          if (!isVert) {
            e.pos.x -= e.speed * dt;
            e.pos.y = e.baseY + Math.sin(e.age * 3 + e.phase) * 45;
          } else {
            e.pos.y += e.speed * dt;
            e.pos.x = e.baseX + Math.sin(e.age * 3 + e.phase) * 45;
          }
        } else if (e.pattern === 'DIVE') {
          if (!isVert) {
            e.pos.x -= e.speed * dt;
            if (e.age > 1.0 && e.pos.y < this.player.pos.y) e.pos.y += 120 * dt;
          } else {
            e.pos.y += e.speed * dt;
            if (e.age > 1.0 && e.pos.x < this.player.pos.x) e.pos.x += 120 * dt;
          }
        } else if (e.pattern === 'TURRET') {
          // Stationary or surface crawling
          e.pos.x -= (isVert ? 0 : dt * 30);
          e.pos.y += (isVert ? dt * 30 : 0);
        }

        // Enemy shooting
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          e.shootTimer = 1.6 + Math.random() * 1.8;
          if (Math.random() < 0.6) {
            const aimDir = this.player.pos.sub(e.pos).normalize();
            this.enemyBullets.push({
              pos: new Vec2(e.pos.x, e.pos.y),
              vel: aimDir.scale(220),
              radius: 4,
              color: '#ff3366'
            });
          }
        }

        // Check offscreen
        const isOffscreen = e.pos.x < -60 || e.pos.x > this.vWidth + 60 ||
                            e.pos.y < -60 || e.pos.y > this.vHeight + 60;
        if (isOffscreen) {
          this.enemies.splice(i, 1);
        }
      }
    }

    spawnEnemySquadron() {
      const stage = this.getCurrentStage();
      const isVert = stage.orientation === 'VERTICAL';
      const isRedSquad = Math.random() < 0.35; // Red formation drops capsule on clear!
      const count = 4;
      const types = ['SINE', 'DIVE', 'TURRET'];
      const pattern = types[Math.floor(Math.random() * 2)];

      const baseY = 80 + Math.random() * (this.vHeight - 160);
      const baseX = 80 + Math.random() * (this.vWidth - 160);

      for (let k = 0; k < count; k++) {
        this.enemies.push({
          pos: isVert
            ? new Vec2(baseX + (k - count / 2) * 25, -30 - k * 35)
            : new Vec2(this.vWidth + 30 + k * 40, baseY),
          baseX: baseX,
          baseY: baseY,
          phase: k * 0.5,
          speed: 160 + Math.random() * 50,
          pattern: pattern,
          hp: 10,
          radius: 12,
          isRed: isRedSquad && k === count - 1, // last one holds capsule
          capsuleType: ['SPEED', 'MISSILE', 'RIPPLE', 'LASER', 'OPTION', 'SHIELD'][Math.floor(Math.random() * 6)],
          age: 0,
          shootTimer: 0.8 + Math.random() * 1.5
        });
      }
    }

    // --- BOSS MECHANICS ---
    updateBoss(dt) {
      if (!this.boss) return;
      const b = this.boss;
      b.attackTimer += dt;

      if (b.type === 'BRAIN_GOLEM') {
        // Eye blink open/closed
        b.eyeTimer += dt;
        if (b.eyeTimer > 3.0) {
          b.eyeOpen = !b.eyeOpen;
          b.eyeTimer = 0;
        }
        b.tentacleAngle += dt * 1.8;
        b.pos.y = this.vHeight / 2 + Math.sin(b.attackTimer * 1.2) * 90;

        // Eye projectile barrage when open
        if (b.eyeOpen && b.attackTimer % 0.8 < dt) {
          const aim = this.player.pos.sub(b.pos).normalize();
          this.enemyBullets.push({
            pos: new Vec2(b.pos.x - 20, b.pos.y),
            vel: aim.scale(260),
            radius: 5,
            color: '#00f3ff'
          });
        }
      } else if (b.type === 'TETRAN') {
        // 4 rotating quad-joint laser arms
        b.clawAngle += dt * 0.9;
        b.pos.x = this.vWidth / 2 + Math.cos(b.attackTimer * 0.8) * 160;

        // Quad laser pulse every 2s
        if (b.attackTimer % 2.0 < dt) {
          for (let i = 0; i < 4; i++) {
            const ang = b.clawAngle + (i * Math.PI) / 2;
            const dir = new Vec2(Math.cos(ang), Math.sin(ang));
            this.enemyBullets.push({
              pos: b.pos.add(dir.scale(70)),
              vel: dir.scale(230),
              radius: 5,
              color: '#ffbe0b'
            });
          }
        }
      } else if (b.type === 'INTRUDER') {
        // Undulating snake body
        b.waveTime += dt * 2.5;
        b.pos.x = this.vWidth - 140 + Math.sin(b.waveTime * 0.5) * 80;
        b.pos.y = this.vHeight / 2 + Math.sin(b.waveTime) * 140;

        // Segments follow head in chain
        let prev = b.pos;
        for (let i = 0; i < b.segments.length; i++) {
          const seg = b.segments[i];
          const diff = prev.sub(seg);
          if (diff.len() > 22) {
            const move = diff.normalize().scale(diff.len() - 22);
            seg.set(seg.x + move.x, seg.y + move.y);
          }
          prev = seg;
        }

        // Fire breath from mouth
        if (b.attackTimer % 1.2 < dt) {
          const aim = this.player.pos.sub(b.pos).normalize();
          this.enemyBullets.push({
            pos: new Vec2(b.pos.x - 20, b.pos.y),
            vel: aim.scale(280),
            radius: 6,
            color: '#ff5500'
          });
        }
      } else if (b.type === 'TUSKER') {
        b.tuskAngle += dt * 1.5;
        b.pos.x = this.vWidth / 2 + Math.sin(b.attackTimer * 1.4) * 120;
        b.pos.y = 130 + Math.cos(b.attackTimer * 0.9) * 30;

        if (b.attackTimer % 1.5 < dt) {
          // Bone tusk double spread
          this.enemyBullets.push({
            pos: new Vec2(b.pos.x - 30, b.pos.y + 40),
            vel: new Vec2(-100, 240),
            radius: 5,
            color: '#eef3ff'
          });
          this.enemyBullets.push({
            pos: new Vec2(b.pos.x + 30, b.pos.y + 40),
            vel: new Vec2(100, 240),
            radius: 5,
            color: '#eef3ff'
          });
        }
      } else if (b.type === 'PLATE_CORE') {
        b.shieldAngle += dt * 1.2;
        b.pos.y = this.vHeight / 2 + Math.sin(b.attackTimer) * 100;

        // Twin heavy core lasers
        if (b.attackTimer % 1.8 < dt) {
          this.enemyBullets.push({
            pos: new Vec2(b.pos.x - 50, b.pos.y - 15),
            vel: new Vec2(-350, 0),
            radius: 6,
            color: '#00f3ff'
          });
          this.enemyBullets.push({
            pos: new Vec2(b.pos.x - 50, b.pos.y + 15),
            vel: new Vec2(-350, 0),
            radius: 6,
            color: '#00f3ff'
          });
        }
      } else if (b.type === 'ZELOS_CORE') {
        b.ringAngle += dt * 1.6;
        b.pulse = Math.sin(b.attackTimer * 4) * 6;
        b.pos.x = this.vWidth / 2 + Math.sin(b.attackTimer) * 140;

        // Circular bullet ring barrage
        if (b.attackTimer % 1.4 < dt) {
          const count = 12;
          for (let i = 0; i < count; i++) {
            const ang = b.ringAngle + (i * Math.PI * 2) / count;
            this.enemyBullets.push({
              pos: new Vec2(b.pos.x, b.pos.y),
              vel: new Vec2(Math.cos(ang) * 210, Math.sin(ang) * 210),
              radius: 4,
              color: '#ff0055'
            });
          }
        }
      }

      // Update boss HP HUD bar
      const hpPct = Math.max(0, (b.hp / b.maxHp) * 100);
      document.getElementById('bossHpBar').style.width = `${hpPct}%`;
    }

    // --- ESCAPE SEQUENCE UPDATE ---
    updateEscape(dt) {
      if (this.state !== 'ESCAPE') return;
      this.escapeTimeLeft -= dt;
      const timerEl = document.getElementById('escapeTimerVal');
      timerEl.innerText = `${Math.max(0, this.escapeTimeLeft).toFixed(1)}s`;

      if (this.escapeTimeLeft <= 0) {
        this.damagePlayer();
        this.onGameOver();
        return;
      }

      // Fast vertical scrolling
      const scrollSpeed = 480 * dt;
      let allCleared = true;

      for (let i = 0; i < this.escapeGates.length; i++) {
        const g = this.escapeGates[i];
        g.y += scrollSpeed;

        // Narrowing gap
        if (g.gapWidth > g.targetGap) {
          g.gapWidth -= g.closingSpeed * dt;
        }

        // Gate collision check with player
        if (Math.abs(this.player.pos.y - g.y) < 18) {
          const halfGap = g.gapWidth / 2;
          const centerX = this.vWidth / 2;
          if (this.player.pos.x < centerX - halfGap || this.player.pos.x > centerX + halfGap) {
            this.damagePlayer();
            return;
          }
        }

        if (g.y < this.vHeight + 100) {
          allCleared = false;
        }
      }

      // Successfully bypassed all 8 closing blast doors!
      if (allCleared) {
        this.onMissionVictory();
      }
    }

    // --- MAIN GAME LOOP ---
    gameLoop(now) {
      const dt = Math.min((now - this.lastTime) / 1000, 0.05);
      this.lastTime = now;

      this.update(dt);
      this.render();

      requestAnimationFrame(this.gameLoop.bind(this));
    }

    update(dt) {
      // Screen shake decay
      if (this.shakeDuration > 0) {
        this.shakeDuration -= dt;
      }

      // Player kinematics
      if (this.player.isAlive && this.state !== 'GAMEOVER') {
        const speed = this.player.baseSpeed + this.player.speedLevel * 60;
        let dx = 0;
        let dy = 0;

        if (this.keys['ArrowUp'] || this.keys['KeyW']) dy -= 1;
        if (this.keys['ArrowDown'] || this.keys['KeyS']) dy += 1;
        if (this.keys['ArrowLeft'] || this.keys['KeyA']) dx -= 1;
        if (this.keys['ArrowRight'] || this.keys['KeyD']) dx += 1;

        if (dx !== 0 && dy !== 0) {
          dx *= 0.7071;
          dy *= 0.7071;
        }

        this.player.pos.x += dx * speed * dt;
        this.player.pos.y += dy * speed * dt;

        // Bounds clamp
        const pad = 18;
        this.player.pos.x = Math.max(pad, Math.min(this.vWidth - pad, this.player.pos.x));
        this.player.pos.y = Math.max(pad, Math.min(this.vHeight - pad, this.player.pos.y));

        // Save position to history buffer for Options
        this.player.positionHistory.push({
          x: this.player.pos.x,
          y: this.player.pos.y,
          t: performance.now()
        });
        if (this.player.positionHistory.length > 100) {
          this.player.positionHistory.shift();
        }

        // Invulnerability countdown
        if (this.player.invulnerableTimer > 0) {
          this.player.invulnerableTimer -= dt;
        }

        // Cooldowns
        if (this.player.shootCooldown > 0) this.player.shootCooldown -= dt;
        if (this.player.missileCooldown > 0) this.player.missileCooldown -= dt;

        // Auto-fire or manual fire key
        if ((this.autoFire || this.keys['KeyJ'] || this.keys['Space']) && this.player.shootCooldown <= 0) {
          this.shootPlayerWeapons();
          this.player.shootCooldown = 0.12;
        }

        // Missile launch
        if (this.keys['KeyK'] || this.keys['KeyX']) {
          this.launchMissile();
        }
      }

      // Update bullets
      this.updateBullets(dt);

      // Update enemies & boss
      this.updateEnemies(dt);
      this.updateBoss(dt);
      this.updateEscape(dt);

      // Update particles
      for (let i = this.particles.length - 1; i >= 0; i--) {
        if (!this.particles[i].update(dt)) {
          this.particles.splice(i, 1);
        }
      }

      // Update capsules
      for (let i = this.capsules.length - 1; i >= 0; i--) {
        const c = this.capsules[i];
        c.pos.x += c.vel.x * dt;
        c.pos.y += c.vel.y * dt;

        // Check player pickup
        if (this.player.isAlive && this.player.pos.dist(c.pos) < 22) {
          this.applyCapsuleUpgrade(c.type);
          this.capsules.splice(i, 1);
          continue;
        }

        // Offscreen remove
        if (c.pos.x < -20 || c.pos.x > this.vWidth + 20 || c.pos.y < -20 || c.pos.y > this.vHeight + 20) {
          this.capsules.splice(i, 1);
        }
      }

      // Check collisions between Player Bullets and Enemies / Boss
      this.checkCombatCollisions();
    }

    updateBullets(dt) {
      // Player bullets
      for (let i = this.playerBullets.length - 1; i >= 0; i--) {
        const b = this.playerBullets[i];
        b.pos.x += b.vel.x * dt;
        b.pos.y += b.vel.y * dt;

        // Ripple expansion
        if (b.type === 'RIPPLE') {
          if (b.radius < b.maxRadius) {
            b.radius += b.growthRate * dt;
          }
        }

        // Remove offscreen
        if (b.pos.x < -30 || b.pos.x > this.vWidth + 50 || b.pos.y < -30 || b.pos.y > this.vHeight + 50) {
          this.playerBullets.splice(i, 1);
        }
      }

      // Enemy bullets
      for (let i = this.enemyBullets.length - 1; i >= 0; i--) {
        const eb = this.enemyBullets[i];
        eb.pos.x += eb.vel.x * dt;
        eb.pos.y += eb.vel.y * dt;

        // Hit player check
        if (this.player.isAlive && this.player.pos.dist(eb.pos) < eb.radius + 6) {
          this.damagePlayer();
          this.enemyBullets.splice(i, 1);
          continue;
        }

        if (eb.pos.x < -20 || eb.pos.x > this.vWidth + 20 || eb.pos.y < -20 || eb.pos.y > this.vHeight + 20) {
          this.enemyBullets.splice(i, 1);
        }
      }
    }

    checkCombatCollisions() {
      // Bullets vs Enemies
      for (let bi = this.playerBullets.length - 1; bi >= 0; bi--) {
        const b = this.playerBullets[bi];
        let bulletDestroyed = false;

        for (let ei = this.enemies.length - 1; ei >= 0; ei--) {
          const e = this.enemies[ei];
          const hitRadius = e.radius + (b.radius || 8);
          if (b.pos.dist(e.pos) < hitRadius) {
            e.hp -= b.damage;

            // Hit spark particles
            this.particles.push(new Particle(
              b.pos.x, b.pos.y,
              (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80,
              '#ffbe0b', 2, 0.3, 2.0
            ));

            if (e.hp <= 0) {
              // Enemy destroyed
              this.addScore(e.isRed ? 400 : 200);
              this.audio.playExplosion(false);

              // Explosion particles
              for (let p = 0; p < 12; p++) {
                const ang = Math.random() * Math.PI * 2;
                const spd = 30 + Math.random() * 100;
                this.particles.push(new Particle(
                  e.pos.x, e.pos.y,
                  Math.cos(ang) * spd, Math.sin(ang) * spd,
                  ['#ff0055', '#ffbe0b', '#ffffff'][Math.floor(Math.random() * 3)],
                  3, 0.5, 1.5
                ));
              }

              // Capsule drop
              if (e.isRed) {
                this.capsules.push({
                  pos: new Vec2(e.pos.x, e.pos.y),
                  vel: new Vec2(-30, 0),
                  type: e.capsuleType
                });
              }

              this.enemies.splice(ei, 1);
            }

            // Piercing laser doesn't get consumed
            if (b.type !== 'LASER') {
              bulletDestroyed = true;
              break;
            }
          }
        }

        if (bulletDestroyed) {
          this.playerBullets.splice(bi, 1);
          continue;
        }

        // Bullets vs Boss
        if (this.boss) {
          const bossHit = this.checkBossHit(b);
          if (bossHit) {
            this.boss.hp -= b.damage;
            this.audio.playShieldHit();

            if (this.boss.hp <= 0) {
              this.onBossDefeated();
              return;
            }

            if (b.type !== 'LASER') {
              this.playerBullets.splice(bi, 1);
            }
          }
        }
      }

      // Direct player vs enemies collision
      if (this.player.isAlive && this.player.invulnerableTimer <= 0) {
        for (let ei = 0; ei < this.enemies.length; ei++) {
          if (this.player.pos.dist(this.enemies[ei].pos) < 18) {
            this.damagePlayer();
            break;
          }
        }
      }
    }

    checkBossHit(b) {
      if (!this.boss) return false;
      const boss = this.boss;

      if (boss.type === 'BRAIN_GOLEM') {
        // Eye core is hit
        return b.pos.dist(boss.pos) < 36;
      } else if (boss.type === 'TETRAN') {
        return b.pos.dist(boss.pos) < 42;
      } else if (boss.type === 'INTRUDER') {
        // Head is vulnerable
        return b.pos.dist(boss.pos) < 32;
      } else if (boss.type === 'TUSKER') {
        return b.pos.dist(boss.pos) < 40;
      } else if (boss.type === 'PLATE_CORE') {
        return b.pos.dist(boss.pos) < 45;
      } else if (boss.type === 'ZELOS_CORE') {
        return b.pos.dist(boss.pos) < 48;
      }
      return false;
    }

    // --- RENDERING PIPELINE ---
    render() {
      const ctx = this.ctx;
      const dpr = window.devicePixelRatio || 1;

      ctx.save();
      ctx.scale(this.scale * dpr, this.scale * dpr);

      // Screen shake translation
      if (this.shakeDuration > 0) {
        const sx = (Math.random() - 0.5) * this.shakeIntensity;
        const sy = (Math.random() - 0.5) * this.shakeIntensity;
        ctx.translate(sx, sy);
      }

      // Clear virtual canvas
      ctx.fillStyle = '#05070e';
      ctx.fillRect(0, 0, this.vWidth, this.vHeight);

      // Render Parallax Background
      this.renderBackground(ctx);

      // Render Escape Gates (Stage 6)
      if (this.state === 'ESCAPE') {
        this.renderEscapeGates(ctx);
      }

      // Render Capsules
      this.renderCapsules(ctx);

      // Render Enemies
      this.renderEnemies(ctx);

      // Render Boss
      if (this.boss) {
        this.renderBoss(ctx);
      }

      // Render Bullets
      this.renderBullets(ctx);

      // Render Options & Player Ship
      if (this.player.isAlive) {
        this.renderOptions(ctx);
        this.renderPlayer(ctx);
      }

      // Render Particles
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].draw(ctx);
      }

      ctx.restore();
    }

    renderBackground(ctx) {
      const stage = this.getCurrentStage();
      const isVert = stage.orientation === 'VERTICAL';

      // 1. Deep Space Nebulas (Gradient bloom)
      const grad = ctx.createRadialGradient(
        this.vWidth * 0.5, this.vHeight * 0.5, 50,
        this.vWidth * 0.5, this.vHeight * 0.5, 450
      );
      if (stage.bgTheme === 'bio') {
        grad.addColorStop(0, 'rgba(80, 10, 40, 0.25)');
        grad.addColorStop(1, 'rgba(5, 7, 14, 0.9)');
      } else if (stage.bgTheme === 'fire') {
        grad.addColorStop(0, 'rgba(120, 40, 10, 0.35)');
        grad.addColorStop(1, 'rgba(15, 5, 5, 0.9)');
      } else {
        grad.addColorStop(0, 'rgba(10, 40, 80, 0.25)');
        grad.addColorStop(1, 'rgba(5, 7, 14, 0.9)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.vWidth, this.vHeight);

      // 2. Stars
      for (let i = 0; i < this.stars.length; i++) {
        const s = this.stars[i];
        if (!isVert) {
          s.x -= s.speed * 0.016;
          if (s.x < 0) s.x = this.vWidth;
        } else {
          s.y += s.speed * 0.016;
          if (s.y > this.vHeight) s.y = 0;
        }

        ctx.fillStyle = s.color;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      // 3. Thematic environment layers
      if (stage.bgTheme === 'bio') {
        // Organic pulsating walls top & bottom
        ctx.fillStyle = '#440f26';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (let x = 0; x <= this.vWidth; x += 40) {
          const y = 35 + Math.sin(x * 0.03 + performance.now() * 0.003) * 15;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(this.vWidth, 0);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, this.vHeight);
        for (let x = 0; x <= this.vWidth; x += 40) {
          const y = this.vHeight - (35 + Math.cos(x * 0.03 + performance.now() * 0.003) * 15);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(this.vWidth, this.vHeight);
        ctx.fill();
      } else if (stage.bgTheme === 'fire') {
        // Promethean solar fire flares
        ctx.save();
        if (this.bloomEnabled) ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = 'rgba(255, 100, 20, 0.35)';
        for (let i = 0; i < 6; i++) {
          const fx = (i * 180 + performance.now() * 0.05) % (this.vWidth + 100) - 50;
          const fy = this.vHeight - 40;
          ctx.beginPath();
          ctx.arc(fx, fy, 45 + Math.sin(fx * 0.1) * 15, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    renderPlayer(ctx) {
      const p = this.player;
      const isVicViper = this.selectedShip === 'VIC_VIPER';
      const stage = this.getCurrentStage();
      const isVert = stage.orientation === 'VERTICAL';

      ctx.save();
      ctx.translate(p.pos.x, p.pos.y);

      // Flashing if invulnerable
      if (p.invulnerableTimer > 0 && Math.floor(performance.now() / 80) % 2 === 0) {
        ctx.globalAlpha = 0.4;
      }

      // Rotate 90 deg up for vertical stages
      if (isVert) {
        ctx.rotate(-Math.PI / 2);
      }

      // Jet exhaust flames
      ctx.save();
      if (this.bloomEnabled) ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = isVicViper ? '#00f3ff' : '#ffbe0b';
      ctx.beginPath();
      ctx.moveTo(-16, -4);
      ctx.lineTo(-26 - Math.random() * 8, 0);
      ctx.lineTo(-16, 4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Main Craft Hull
      ctx.fillStyle = isVicViper ? '#eaf4ff' : '#ffe8e8';
      ctx.strokeStyle = isVicViper ? '#00a6ff' : '#e63946';
      ctx.lineWidth = 1.5;

      // Supersonic Dart Shape
      ctx.beginPath();
      ctx.moveTo(18, 0); // Nose cone
      ctx.lineTo(-12, -10); // Left wingtip
      ctx.lineTo(-6, -3);
      ctx.lineTo(-14, 0); // Engine center
      ctx.lineTo(-6, 3);
      ctx.lineTo(-12, 10); // Right wingtip
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Cockpit Canopy
      ctx.fillStyle = '#00f3ff';
      ctx.beginPath();
      ctx.ellipse(2, 0, 6, 2.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Wing markings (1P Blue, 2P Red)
      ctx.fillStyle = isVicViper ? '#0055ff' : '#cc0022';
      ctx.fillRect(-8, -6, 5, 2);
      ctx.fillRect(-8, 4, 5, 2);

      // Force Field Shield
      if (p.hasShield && p.shieldHp > 0) {
        ctx.save();
        if (this.bloomEnabled) ctx.globalCompositeOperation = 'lighter';
        const shieldAlpha = Math.max(0.3, p.shieldHp / 10);
        ctx.strokeStyle = p.shieldHp > 4 ? `rgba(0, 243, 255, ${shieldAlpha})` : `rgba(255, 0, 85, ${shieldAlpha})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(10, 0, 24, -Math.PI / 2.5, Math.PI / 2.5);
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();
    }

    renderOptions(ctx) {
      const positions = this.getOptionPositions();
      positions.forEach((optPos, idx) => {
        ctx.save();
        if (this.bloomEnabled) ctx.globalCompositeOperation = 'lighter';
        ctx.translate(optPos.x, optPos.y);

        // Pulsating glowing energy orb
        const pulse = 8 + Math.sin(performance.now() * 0.008 + idx) * 2;
        const grad = ctx.createRadialGradient(0, 0, 2, 0, 0, pulse + 6);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.4, '#ff9900');
        grad.addColorStop(1, 'rgba(255, 80, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, pulse + 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffbe0b';
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }

    renderBullets(ctx) {
      // Player bullets
      for (let i = 0; i < this.playerBullets.length; i++) {
        const b = this.playerBullets[i];
        ctx.save();
        if (this.bloomEnabled) ctx.globalCompositeOperation = 'lighter';

        if (b.type === 'VULCAN') {
          ctx.fillStyle = '#00f3ff';
          ctx.beginPath();
          ctx.arc(b.pos.x, b.pos.y, b.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (b.type === 'RIPPLE') {
          ctx.strokeStyle = '#00ffcc';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(b.pos.x, b.pos.y, b.radius, 0, Math.PI * 2);
          ctx.stroke();
        } else if (b.type === 'LASER') {
          ctx.fillStyle = '#39ff14';
          ctx.shadowColor = '#39ff14';
          ctx.shadowBlur = 8;
          ctx.fillRect(b.pos.x - 20, b.pos.y - 2, 40, 4);
        } else if (b.type === 'MISSILE') {
          ctx.fillStyle = '#ffbe0b';
          ctx.fillRect(b.pos.x - 3, b.pos.y - 3, 6, 6);
        }
        ctx.restore();
      }

      // Enemy bullets
      for (let i = 0; i < this.enemyBullets.length; i++) {
        const eb = this.enemyBullets[i];
        ctx.save();
        if (this.bloomEnabled) ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = eb.color || '#ff0055';
        ctx.shadowColor = eb.color || '#ff0055';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(eb.pos.x, eb.pos.y, eb.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    renderEnemies(ctx) {
      for (let i = 0; i < this.enemies.length; i++) {
        const e = this.enemies[i];
        ctx.save();
        ctx.translate(e.pos.x, e.pos.y);

        ctx.fillStyle = e.isRed ? '#ff0055' : '#ff9900';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;

        // Fighter drone hexagon
        ctx.beginPath();
        ctx.moveTo(12, 0);
        ctx.lineTo(4, -10);
        ctx.lineTo(-10, -8);
        ctx.lineTo(-6, 0);
        ctx.lineTo(-10, 8);
        ctx.lineTo(4, 10);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      }
    }

    renderCapsules(ctx) {
      for (let i = 0; i < this.capsules.length; i++) {
        const c = this.capsules[i];
        ctx.save();
        ctx.translate(c.pos.x, c.pos.y);

        // Glowing power capsule pod
        ctx.fillStyle = '#ffbe0b';
        ctx.shadowColor = '#ffbe0b';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.roundRect(-10, -7, 20, 14, 4);
        ctx.fill();

        ctx.fillStyle = '#000';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(c.type[0], 0, 1);
        ctx.restore();
      }
    }

    renderBoss(ctx) {
      const b = this.boss;
      ctx.save();
      ctx.translate(b.pos.x, b.pos.y);

      if (b.type === 'BRAIN_GOLEM') {
        // Brain Golem: Bio eye demon with rotating arm claws
        ctx.fillStyle = '#881144';
        ctx.beginPath();
        ctx.arc(0, 0, 48, 0, Math.PI * 2);
        ctx.fill();

        // 2 Rotating Tentacle Arms
        for (let s = -1; s <= 1; s += 2) {
          const armAng = b.tentacleAngle * s;
          ctx.strokeStyle = '#aa2255';
          ctx.lineWidth = 8;
          ctx.beginPath();
          ctx.moveTo(0, s * 30);
          ctx.quadraticCurveTo(
            Math.cos(armAng) * 60,
            s * 60 + Math.sin(armAng) * 40,
            -70,
            s * 50
          );
          ctx.stroke();
        }

        // Central Eye
        if (b.eyeOpen) {
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.ellipse(0, 0, 24, 16, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#00f3ff';
          ctx.beginPath();
          ctx.arc(0, 0, 9, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.strokeStyle = '#220011';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(-20, 0);
          ctx.lineTo(20, 0);
          ctx.stroke();
        }
      } else if (b.type === 'TETRAN') {
        // Tetran 4-claw cruiser
        ctx.fillStyle = '#3a4b68';
        ctx.beginPath();
        ctx.arc(0, 0, 36, 0, Math.PI * 2);
        ctx.fill();

        // 4 Multi-segment articulated rotating arms
        for (let i = 0; i < 4; i++) {
          const ang = b.clawAngle + (i * Math.PI) / 2;
          ctx.strokeStyle = '#7c94ba';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          const midX = Math.cos(ang) * 45;
          const midY = Math.sin(ang) * 45;
          const tipX = midX + Math.cos(ang + 0.4) * 35;
          const tipY = midY + Math.sin(ang + 0.4) * 35;
          ctx.lineTo(midX, midY);
          ctx.lineTo(tipX, tipY);
          ctx.stroke();
        }

        // Glowing core
        ctx.fillStyle = '#00f3ff';
        ctx.beginPath();
        ctx.arc(0, 0, 14, 0, Math.PI * 2);
        ctx.fill();
      } else if (b.type === 'INTRUDER') {
        // Fire Dragon head
        ctx.fillStyle = '#ff3300';
        ctx.beginPath();
        ctx.arc(0, 0, 28, 0, Math.PI * 2);
        ctx.fill();

        // Dragon jaw & flaming eye
        ctx.fillStyle = '#ffbe0b';
        ctx.beginPath();
        ctx.arc(-8, -6, 6, 0, Math.PI * 2);
        ctx.fill();

        // Render chain of segments
        for (let i = 0; i < b.segments.length; i++) {
          const seg = b.segments[i];
          ctx.save();
          if (this.bloomEnabled) ctx.globalCompositeOperation = 'lighter';
          const r = Math.max(10, 24 - i * 0.9);
          ctx.fillStyle = i % 2 === 0 ? '#ff5500' : '#ffbe0b';
          ctx.beginPath();
          ctx.arc(seg.x - b.pos.x, seg.y - b.pos.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      } else if (b.type === 'TUSKER') {
        // Double-headed bone beast
        ctx.fillStyle = '#dbe5f1';
        ctx.beginPath();
        ctx.arc(0, 0, 42, 0, Math.PI * 2);
        ctx.fill();

        // Tusks
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(-30, 25, 20, 0, Math.PI * 0.7);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(30, 25, 20, Math.PI * 0.3, Math.PI);
        ctx.stroke();

        // Exposed pulsating bone heart
        ctx.fillStyle = '#ff0055';
        ctx.beginPath();
        ctx.arc(0, 5, 15, 0, Math.PI * 2);
        ctx.fill();
      } else if (b.type === 'PLATE_CORE') {
        // Moai Fortress Plate Core
        ctx.fillStyle = '#2c3345';
        ctx.fillRect(-45, -45, 90, 90);

        // Orbiting shield blocks
        for (let i = 0; i < 4; i++) {
          const ang = b.shieldAngle + (i * Math.PI) / 2;
          ctx.fillStyle = '#5c6f96';
          ctx.fillRect(Math.cos(ang) * 60 - 10, Math.sin(ang) * 60 - 10, 20, 20);
        }

        // Inner core
        ctx.fillStyle = '#00f3ff';
        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fill();
      } else if (b.type === 'ZELOS_CORE') {
        // Zelos Force life core
        const r = 42 + b.pulse;
        ctx.fillStyle = '#990033';
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing veins
        ctx.strokeStyle = '#ff0055';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, r - 10, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    renderEscapeGates(ctx) {
      ctx.save();
      const centerX = this.vWidth / 2;

      for (let i = 0; i < this.escapeGates.length; i++) {
        const g = this.escapeGates[i];
        if (g.y < -100 || g.y > this.vHeight + 100) continue;

        const halfGap = g.gapWidth / 2;
        ctx.fillStyle = '#ff0055';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;

        // Left blast door
        ctx.fillRect(0, g.y - 12, centerX - halfGap, 24);
        ctx.strokeRect(0, g.y - 12, centerX - halfGap, 24);

        // Right blast door
        ctx.fillRect(centerX + halfGap, g.y - 12, centerX - halfGap, 24);
        ctx.strokeRect(centerX + halfGap, g.y - 12, centerX - halfGap, 24);

        // Hazard stripes
        ctx.fillStyle = '#ffbe0b';
        ctx.fillRect(centerX - halfGap - 14, g.y - 10, 10, 20);
        ctx.fillRect(centerX + halfGap + 4, g.y - 10, 10, 20);
      }
      ctx.restore();
    }

    // --- 5-SLOT SAVE / LOAD SYSTEM ---
    loadSavedSlots() {
      try {
        const raw = localStorage.getItem('salamander_saves');
        this.saveSlots = raw ? JSON.parse(raw) : [null, null, null, null, null];
      } catch (e) {
        this.saveSlots = [null, null, null, null, null];
      }
    }

    saveToSlot(slotIdx) {
      if (slotIdx < 0 || slotIdx >= 5) return;
      const stage = this.getCurrentStage();
      const snapshot = {
        timestamp: new Date().toLocaleString(),
        stageIdx: this.stageIdx,
        stageName: stage.name,
        orientation: stage.orientation,
        score: this.score,
        highScore: this.highScore,
        lives: this.lives,
        ship: this.selectedShip,
        speedLevel: this.player.speedLevel,
        hasMissile: this.player.hasMissile,
        weaponType: this.player.weaponType,
        optionsCount: this.player.optionsCount,
        hasShield: this.player.hasShield,
        shieldHp: this.player.shieldHp
      };
      this.saveSlots[slotIdx] = snapshot;
      localStorage.setItem('salamander_saves', JSON.stringify(this.saveSlots));
      this.showToast(`SAVED PROGRESS TO SLOT ${slotIdx + 1}!`);
      this.renderSaveSlots();
    }

    loadFromSlot(slotIdx) {
      if (slotIdx < 0 || slotIdx >= 5 || !this.saveSlots[slotIdx]) return;
      const data = this.saveSlots[slotIdx];
      this.score = data.score;
      this.lives = data.lives;
      this.selectedShip = data.ship || 'VIC_VIPER';
      this.player.speedLevel = data.speedLevel || 0;
      this.player.hasMissile = !!data.hasMissile;
      this.player.weaponType = data.weaponType || 'VULCAN';
      this.player.optionsCount = data.optionsCount || 0;
      this.player.hasShield = !!data.hasShield;
      this.player.shieldHp = data.shieldHp || 0;

      this.startStage(data.stageIdx);
      this.showToast(`LOADED STATE FROM SLOT ${slotIdx + 1}!`);
      document.getElementById('saveModal').classList.add('hidden');
    }

    renderSaveSlots() {
      const container = document.getElementById('slotsContainer');
      container.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        const slot = this.saveSlots[i];
        const row = document.createElement('div');
        row.className = 'save-slot-row';

        const info = document.createElement('div');
        info.className = 'slot-info';
        if (slot) {
          info.innerHTML = `
            <div class="slot-title">SLOT ${i + 1}: ${slot.stageName}</div>
            <div class="slot-meta">分數: ${slot.score} | 殘機: ${slot.lives} | 武裝: ${slot.weaponType} | ${slot.timestamp}</div>
          `;
        } else {
          info.innerHTML = `
            <div class="slot-title">SLOT ${i + 1}: 空白槽位 (EMPTY)</div>
            <div class="slot-meta">尚未建立任何戰況紀錄</div>
          `;
        }

        const btns = document.createElement('div');
        btns.className = 'slot-btns';

        const btnSave = document.createElement('button');
        btnSave.className = 'slot-btn';
        btnSave.innerText = '💾 保存';
        btnSave.onclick = () => this.saveToSlot(i);

        const btnLoad = document.createElement('button');
        btnLoad.className = 'slot-btn';
        btnLoad.innerText = '📂 載入';
        btnLoad.disabled = !slot;
        btnLoad.onclick = () => this.loadFromSlot(i);

        btns.appendChild(btnSave);
        btns.appendChild(btnLoad);
        row.appendChild(info);
        row.appendChild(btns);
        container.appendChild(row);
      }
    }

    exportSaveJSON() {
      const blob = new Blob([JSON.stringify(this.saveSlots, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `salamander_saves_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('SAVED DATA EXPORTED TO JSON!');
    }

    importSaveJSON(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const parsed = JSON.parse(evt.target.result);
          if (Array.isArray(parsed) && parsed.length === 5) {
            this.saveSlots = parsed;
            localStorage.setItem('salamander_saves', JSON.stringify(this.saveSlots));
            this.renderSaveSlots();
            this.showToast('SUCCESSFULLY IMPORTED 5 SAVE SLOTS!');
          } else {
            alert('無效的存檔 JSON 結構！');
          }
        } catch (err) {
          alert('解析存檔失敗: ' + err.message);
        }
      };
      reader.readAsText(file);
    }
  }

  // Global debug and self-test harness interface
  window.addEventListener('DOMContentLoaded', () => {
    const game = new SalamanderGame();
    window.SalamanderInstance = game;

    window.SalamanderDebug = {
      game: game,
      warpStage: (idx) => game.startStage(idx),
      setArsenal: (wpn, opts, shield) => {
        game.player.weaponType = wpn;
        game.player.optionsCount = opts;
        game.player.hasShield = shield;
        game.player.shieldHp = shield ? 10 : 0;
        game.updateHUD();
      },
      addScore: (n) => game.addScore(n),
      runSelfTest: () => {
        const tests = [];
        tests.push({ name: 'Canvas Ready', pass: !!game.canvas && !!game.ctx });
        tests.push({ name: '6 Stages Registered', pass: game.stages.length === 6 });
        tests.push({ name: 'Alternating Orientations', pass: game.stages[0].orientation === 'HORIZONTAL' && game.stages[1].orientation === 'VERTICAL' });
        tests.push({ name: 'Player Initialized', pass: game.player.isAlive && game.lives === 3 });
        tests.push({ name: 'Save Slots Initialized', pass: game.saveSlots.length === 5 });
        tests.push({ name: 'Audio Engine Configured', pass: !!game.audio });
        const allOk = tests.every(t => t.pass);
        return { pass: allOk, tests: tests };
      }
    };
  });
})();
