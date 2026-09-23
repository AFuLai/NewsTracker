/**
 * SUPER MARIO BROS HD: ALL-STARS REMASTER - Complete 4-World 16-Bit Engine
 * Worlds 1-1 (Overworld), 1-2 (Underground), 1-3 (Athletic), 1-4 (Bowser Castle).
 * Small, Super, and Fire Mario; Goombas, Koopas with Shell Kicking, Piranha Plants, Bowser Boss.
 * Zero external image or audio dependencies.
 */

const TILE_SIZE = 32;
const GRAVITY = 0.48;

// --- Web Audio NES Synthesizer ---
class MarioAudio {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof AudioContext !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type, duration, gainVal = 0.1, rampTo = null) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      if (rampTo) {
        osc.frequency.exponentialRampToValueAtTime(rampTo, this.ctx.currentTime + duration);
      }
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playJump(isSuper = false) {
    this.playTone(isSuper ? 180 : 220, 'square', 0.22, 0.12, isSuper ? 600 : 750);
  }

  playCoin() {
    if (!this.enabled || !this.ctx) return;
    this.init();
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, t); // B5
      osc.frequency.setValueAtTime(1318.51, t + 0.08); // E6
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(t + 0.35);
    } catch (e) {}
  }

  playStomp() {
    this.playTone(120, 'triangle', 0.08, 0.15, 40);
  }

  playKick() {
    this.playTone(200, 'square', 0.1, 0.15, 80);
  }

  playFireball() {
    this.playTone(600, 'triangle', 0.1, 0.1, 150);
  }

  playPowerup() {
    const freqs = [330, 392, 659, 523, 587, 784];
    freqs.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'square', 0.08, 0.1), idx * 60);
    });
  }

  playPipe() {
    const freqs = [150, 120, 100];
    freqs.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.12, 0.12), idx * 80);
    });
  }

  playDeath() {
    const freqs = [500, 400, 300, 250, 180];
    freqs.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.15, 0.15), idx * 100);
    });
  }

  playStageClear() {
    const melody = [523, 659, 784, 1046, 784, 1046];
    melody.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'square', 0.18, 0.12), idx * 120);
    });
  }

  playBowserDefeat() {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => this.playTone(180 - i * 15, 'sawtooth', 0.1, 0.15), i * 80);
    }
  }
}

// --- HD 16-Bit Procedural Sprite & Particle Renderer ---
class HDSpriteRenderer {
  static drawTile(ctx, type, x, y, worldType = 'OVERWORLD', tick = 0) {
    ctx.save();
    switch (type) {
      case 1: // Ground Block
        if (worldType === 'UNDERGROUND') {
          ctx.fillStyle = '#004088'; // Deep Blue Stone
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = '#0088ff';
          ctx.fillRect(x, y, TILE_SIZE, 3);
          ctx.fillRect(x, y, 3, TILE_SIZE);
          ctx.strokeStyle = '#001a44';
          ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        } else if (worldType === 'CASTLE') {
          ctx.fillStyle = '#555555'; // Dark Castle Stone
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = '#888888';
          ctx.fillRect(x + 2, y + 2, 12, 12);
          ctx.fillRect(x + 16, y + 16, 12, 12);
          ctx.strokeStyle = '#222';
          ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        } else {
          // Overworld / Treetop
          ctx.fillStyle = '#d84800'; // Rich Brick Orange
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = '#00bb00'; // Top Grass Cap
          ctx.fillRect(x, y, TILE_SIZE, 6);
          ctx.fillStyle = '#88ff00';
          ctx.fillRect(x, y, TILE_SIZE, 2);
          ctx.strokeStyle = '#000';
          ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        }
        break;

      case 2: // Brick Block
        const brickCol = worldType === 'UNDERGROUND' ? '#0055bb' : (worldType === 'CASTLE' ? '#885555' : '#b84418');
        ctx.fillStyle = brickCol;
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#000';
        ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillRect(x, y + 10, TILE_SIZE, 2);
        ctx.fillRect(x, y + 21, TILE_SIZE, 2);
        ctx.fillRect(x + 15, y, 2, 10);
        ctx.fillRect(x + 8, y + 10, 2, 11);
        ctx.fillRect(x + 24, y + 10, 2, 11);
        ctx.fillRect(x + 15, y + 21, 2, 11);
        break;

      case 3: // Animated Question Block
        const goldShimmer = (Math.floor(tick / 15) % 2 === 0) ? '#fcb044' : '#fca022';
        ctx.fillStyle = goldShimmer;
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#fff';
        ctx.fillRect(x, y, TILE_SIZE, 3);
        ctx.fillRect(x, y, 3, TILE_SIZE);
        ctx.fillStyle = '#000';
        ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 20px monospace';
        ctx.fillText('?', x + 9, y + 23);
        break;

      case 4: // Spent Solid Block
        ctx.fillStyle = '#8b5a2b';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#000';
        ctx.fillRect(x + 4, y + 4, 4, 4);
        ctx.fillRect(x + 24, y + 4, 4, 4);
        ctx.fillRect(x + 4, y + 24, 4, 4);
        ctx.fillRect(x + 24, y + 24, 4, 4);
        break;

      case 5: // Pipe Top-Left
      case 6: // Pipe Top-Right
      case 7: // Pipe Body-Left
      case 8: // Pipe Body-Right
        ctx.fillStyle = '#00aa00';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#88ff33'; // Gloss shine
        ctx.fillRect(x + 4, y, 6, TILE_SIZE);
        ctx.strokeStyle = '#003300';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        break;

      case 9: // Flagpole
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x + 14, y, 4, TILE_SIZE);
        ctx.fillStyle = '#ffd700'; // Gold Finial top
        ctx.beginPath();
        ctx.arc(x + 16, y + 4, 6, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 10: // Castle Stone Block
        ctx.fillStyle = '#777788';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        break;

      case 11: // Bowser's Bridge
        ctx.fillStyle = '#aa4400';
        ctx.fillRect(x, y + 20, TILE_SIZE, 12);
        ctx.fillStyle = '#ffaa00';
        ctx.fillRect(x, y + 20, TILE_SIZE, 3);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y + 20, TILE_SIZE, 12);
        break;

      case 12: // Castle Axe (Switch)
        ctx.fillStyle = '#ffd700'; // Gold handle
        ctx.fillRect(x + 14, y + 4, 4, 24);
        ctx.fillStyle = '#ffffff'; // Silver axe blade
        ctx.beginPath();
        ctx.arc(x + 16, y + 10, 8, -Math.PI / 2, Math.PI / 2);
        ctx.fill();
        break;
    }
    ctx.restore();
  }

  static drawMario(ctx, mario) {
    if (mario.invulnerable > 0 && Math.floor(Date.now() / 50) % 2 === 0) return;

    ctx.save();
    const x = mario.x;
    const y = mario.y;
    const isSuper = mario.state === 'SUPER';
    const isFire = mario.state === 'FIRE';
    const isTall = isSuper || isFire;
    const h = isTall ? 48 : 32;
    const w = 24;

    if (!mario.facingRight) {
      ctx.translate(x + w, y);
      ctx.scale(-1, 1);
      ctx.translate(-x, -y);
    }

    // Color palettes
    let shirtColor = isFire ? '#ffffff' : '#d82800'; // White for Fire, Red for Normal
    let overallsColor = isFire ? '#d82800' : '#0055ff'; // Red for Fire, Blue for Normal
    let skinColor = '#fc9838';

    if (!isTall) {
      // Small Mario (32px)
      ctx.fillStyle = shirtColor;
      ctx.fillRect(x + 4, y + 2, 16, 6);
      ctx.fillRect(x + 6, y + 4, 18, 4);
      ctx.fillStyle = skinColor;
      ctx.fillRect(x + 6, y + 8, 14, 8);
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 14, y + 8, 3, 4); // Eye
      ctx.fillStyle = shirtColor;
      ctx.fillRect(x + 4, y + 16, 16, 8);
      ctx.fillStyle = overallsColor;
      ctx.fillRect(x + 6, y + 18, 12, 10);
      ctx.fillStyle = '#6b3a00';
      ctx.fillRect(x + 2, y + 26, 8, 6);
      ctx.fillRect(x + 14, y + 26, 8, 6);
    } else {
      // Super / Fire Mario (48px)
      ctx.fillStyle = shirtColor;
      ctx.fillRect(x + 4, y + 2, 18, 8);
      ctx.fillRect(x + 6, y + 4, 20, 6);
      ctx.fillStyle = skinColor;
      ctx.fillRect(x + 6, y + 10, 16, 12);
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 16, y + 12, 3, 5); // Eye
      ctx.fillStyle = shirtColor;
      ctx.fillRect(x + 4, y + 22, 18, 12);
      ctx.fillStyle = overallsColor;
      ctx.fillRect(x + 6, y + 26, 14, 16);
      ctx.fillStyle = '#6b3a00';
      ctx.fillRect(x + 2, y + 40, 9, 8);
      ctx.fillRect(x + 14, y + 40, 9, 8);
    }

    ctx.restore();
  }

  static drawGoomba(ctx, g, worldType = 'OVERWORLD') {
    ctx.save();
    const x = g.x;
    const y = g.y;
    const capColor = (worldType === 'UNDERGROUND') ? '#0088cc' : '#a84000';

    if (g.isSquished) {
      ctx.fillStyle = capColor;
      ctx.fillRect(x + 2, y + 20, 28, 12);
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 6, y + 22, 4, 4);
      ctx.fillRect(x + 22, y + 22, 4, 4);
    } else {
      ctx.fillStyle = capColor;
      ctx.fillRect(x + 4, y + 4, 24, 18);
      ctx.fillRect(x + 8, y + 2, 16, 4);
      ctx.fillStyle = '#fff';
      ctx.fillRect(x + 6, y + 12, 6, 8);
      ctx.fillRect(x + 20, y + 12, 6, 8);
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 10, y + 14, 3, 5);
      ctx.fillRect(x + 20, y + 14, 3, 5);
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 2, y + 24, 8, 8);
      ctx.fillRect(x + 22, y + 24, 8, 8);
    }
    ctx.restore();
  }

  static drawKoopa(ctx, k) {
    ctx.save();
    const x = k.x;
    const y = k.y;

    if (k.isShell) {
      // Green Turtle Shell
      ctx.fillStyle = '#00aa00';
      ctx.beginPath();
      ctx.arc(x + 14, y + 16, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffea88'; // Yellow rim
      ctx.fillRect(x + 2, y + 20, 24, 6);
      ctx.strokeStyle = '#004400';
      ctx.strokeRect(x + 6, y + 8, 16, 12);
    } else {
      // Walking Koopa Troopa
      ctx.fillStyle = '#ffd700'; // Yellow head
      ctx.fillRect(x + 4, y + 2, 14, 12);
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 12, y + 6, 3, 4); // Eye
      // Green Shell
      ctx.fillStyle = '#00aa00';
      ctx.fillRect(x + 2, y + 14, 20, 18);
      ctx.fillStyle = '#ffea88';
      ctx.fillRect(x + 4, y + 26, 16, 6);
      // Feet
      ctx.fillStyle = '#ffd700';
      ctx.fillRect(x + 2, y + 32, 8, 6);
      ctx.fillRect(x + 14, y + 32, 8, 6);
    }
    ctx.restore();
  }

  static drawPiranha(ctx, p) {
    ctx.save();
    const x = p.x;
    const y = p.y;
    // Red Head with white spots
    ctx.fillStyle = '#d82800';
    ctx.beginPath();
    ctx.arc(x + 16, y + 12, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillRect(x + 6, y + 6, 4, 4);
    ctx.fillRect(x + 20, y + 6, 4, 4);
    ctx.fillRect(x + 12, y + 16, 4, 4);
    // Green stem
    ctx.fillStyle = '#00aa00';
    ctx.fillRect(x + 12, y + 24, 8, 16);
    ctx.restore();
  }

  static drawBowser(ctx, b, tick = 0) {
    ctx.save();
    const x = b.x;
    const y = b.y;
    const breathe = Math.sin(tick * 0.1) * 3;

    // Green Spiked Shell
    ctx.fillStyle = '#008800';
    ctx.fillRect(x + 16, y + 10 + breathe, 44, 40);
    ctx.fillStyle = '#ffffff'; // Shell spikes
    ctx.fillRect(x + 22, y + 6 + breathe, 6, 8);
    ctx.fillRect(x + 38, y + 6 + breathe, 6, 8);
    ctx.fillRect(x + 50, y + 14 + breathe, 6, 8);

    // Yellow Body
    ctx.fillStyle = '#ffaa00';
    ctx.fillRect(x + 4, y + 20 + breathe, 24, 30);
    // Head & Horns
    ctx.fillStyle = '#00aa00';
    ctx.fillRect(x - 6, y + 6 + breathe, 22, 20);
    ctx.fillStyle = '#ffffff'; // Horns
    ctx.fillRect(x - 2, y - 2 + breathe, 4, 8);
    // Red Hair
    ctx.fillStyle = '#d82800';
    ctx.fillRect(x + 4, y + 2 + breathe, 14, 8);
    // Glowing Red Eyes
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(x - 2, y + 10 + breathe, 4, 4);
    // Fangs & Claws
    ctx.fillStyle = '#fff';
    ctx.fillRect(x - 6, y + 20 + breathe, 4, 6);
    ctx.fillRect(x + 2, y + 46 + breathe, 8, 6);
    ctx.fillRect(x + 36, y + 46 + breathe, 8, 6);

    ctx.restore();
  }
}

// --- Main Super Mario HD Engine ---
class MarioGame {
  constructor() {
    this.canvas = document.getElementById('marioCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.audio = new MarioAudio();

    this.score = 0;
    this.coins = 0;
    this.lives = 3;
    this.time = 400;
    this.world = '1-1';
    this.worldType = 'OVERWORLD'; // 'OVERWORLD', 'UNDERGROUND', 'TREETOP', 'CASTLE'

    this.isPlaying = false;
    this.isPaused = false;
    this.isGameOver = false;

    this.cameraX = 0;
    this.lastTime = 0;
    this.timeTimer = 0;
    this.tick = 0;

    // Mario state
    this.mario = {
      x: 64,
      y: 350,
      vx: 0,
      vy: 0,
      width: 24,
      height: 32,
      isGrounded: false,
      isJumping: false,
      facingRight: true,
      state: 'SMALL', // 'SMALL', 'SUPER', 'FIRE', 'DEAD', 'VICTORY'
      invulnerable: 0
    };

    this.keys = {
      left: false,
      right: false,
      jump: false,
      run: false
    };

    this.enemies = [];
    this.fireballs = [];
    this.powerups = [];
    this.particles = [];
    this.bowser = null;

    this.loadWorld('1-1');
    this.initUI();
    this.initEvents();
  }

  loadWorld(worldId) {
    this.world = worldId;
    this.levelCols = 120;
    this.levelRows = 15;
    this.tilemap = Array.from({ length: this.levelRows }, () => Array(this.levelCols).fill(0));
    this.enemies = [];
    this.fireballs = [];
    this.powerups = [];
    this.particles = [];
    this.bowser = null;
    this.time = 400;

    if (worldId === '1-1') {
      this.worldType = 'OVERWORLD';
      this.buildOverworld();
    } else if (worldId === '1-2') {
      this.worldType = 'UNDERGROUND';
      this.buildUnderground();
    } else if (worldId === '1-3') {
      this.worldType = 'TREETOP';
      this.buildTreetop();
    } else if (worldId === '1-4') {
      this.worldType = 'CASTLE';
      this.buildBowserCastle();
    }

    this.resetMario();
  }

  buildPipe(col, height) {
    const topRow = 13 - height;
    this.tilemap[topRow][col] = 5;
    this.tilemap[topRow][col + 1] = 6;
    for (let r = topRow + 1; r < 13; r++) {
      this.tilemap[r][col] = 7;
      this.tilemap[r][col + 1] = 8;
    }
  }

  buildOverworld() {
    // Ground with gaps
    for (let c = 0; c < this.levelCols; c++) {
      if ((c >= 40 && c <= 42) || (c >= 65 && c <= 67)) continue;
      this.tilemap[13][c] = 1;
      this.tilemap[14][c] = 1;
    }
    // ? Blocks & Bricks
    this.tilemap[9][16] = 3;
    this.tilemap[9][20] = 2;
    this.tilemap[9][21] = 3; // Super Mushroom
    this.tilemap[9][22] = 2;
    this.tilemap[9][23] = 3; // Fire Flower
    this.tilemap[9][24] = 2;

    this.buildPipe(28, 2);
    this.buildPipe(38, 3);
    this.buildPipe(48, 4);

    // Flagpole at col 100
    for (let r = 2; r < 13; r++) this.tilemap[r][100] = 9;
    this.tilemap[12][100] = 1;

    // Castle at col 106-112
    for (let r = 8; r < 13; r++) {
      for (let c = 106; c <= 112; c++) this.tilemap[r][c] = 10;
    }

    // Enemies
    this.enemies.push({ type: 'GOOMBA', x: 22 * TILE_SIZE, y: 12 * TILE_SIZE, vx: -1.2, isSquished: false, isAlive: true, removeTimer: 0 });
    this.enemies.push({ type: 'KOOPA', x: 34 * TILE_SIZE, y: 11.5 * TILE_SIZE, vx: -1.0, isShell: false, isAlive: true });
    this.enemies.push({ type: 'GOOMBA', x: 52 * TILE_SIZE, y: 12 * TILE_SIZE, vx: -1.2, isSquished: false, isAlive: true, removeTimer: 0 });
  }

  buildUnderground() {
    // Ceiling & Ground
    for (let c = 0; c < this.levelCols; c++) {
      this.tilemap[0][c] = 1;
      this.tilemap[1][c] = 1;
      if ((c >= 30 && c <= 33) || (c >= 60 && c <= 63)) continue;
      this.tilemap[13][c] = 1;
      this.tilemap[14][c] = 1;
    }

    // Underground Bricks & Coin Rows
    for (let c = 12; c < 24; c++) this.tilemap[8][c] = 2;
    for (let c = 40; c < 50; c++) this.tilemap[7][c] = 3; // Coin ? blocks

    this.buildPipe(70, 3);
    // Flag/Warp pipe exit at col 100
    this.buildPipe(100, 4);

    this.enemies.push({ type: 'GOOMBA', x: 18 * TILE_SIZE, y: 12 * TILE_SIZE, vx: -1.2, isSquished: false, isAlive: true, removeTimer: 0 });
    this.enemies.push({ type: 'KOOPA', x: 45 * TILE_SIZE, y: 11.5 * TILE_SIZE, vx: -1.0, isShell: false, isAlive: true });
  }

  buildTreetop() {
    // Floating tree bridges
    for (let c = 0; c < 20; c++) { this.tilemap[13][c] = 1; this.tilemap[14][c] = 1; }
    for (let c = 25; c < 35; c++) this.tilemap[10][c] = 2;
    for (let c = 42; c < 55; c++) this.tilemap[8][c] = 2;
    for (let c = 62; c < 75; c++) this.tilemap[6][c] = 2;
    for (let c = 82; c < 120; c++) { this.tilemap[13][c] = 1; this.tilemap[14][c] = 1; }

    for (let r = 2; r < 13; r++) this.tilemap[r][100] = 9; // Flagpole

    this.enemies.push({ type: 'KOOPA', x: 28 * TILE_SIZE, y: 8.5 * TILE_SIZE, vx: -1.0, isShell: false, isAlive: true });
    this.enemies.push({ type: 'KOOPA', x: 48 * TILE_SIZE, y: 6.5 * TILE_SIZE, vx: -1.0, isShell: false, isAlive: true });
  }

  buildBowserCastle() {
    // Stone roof and lava bottom with bridge
    for (let c = 0; c < this.levelCols; c++) {
      this.tilemap[0][c] = 1;
      if (c < 65 || c > 95) {
        this.tilemap[13][c] = 1;
        this.tilemap[14][c] = 1;
      }
    }

    // Bowser's Bridge (cols 70-88)
    for (let c = 70; c <= 88; c++) {
      this.tilemap[11][c] = 11; // Bridge tile
    }

    // Axe switch at col 89
    this.tilemap[10][89] = 12;

    // Bowser Boss
    this.bowser = {
      x: 78 * TILE_SIZE,
      y: 9.5 * TILE_SIZE,
      hp: 5,
      maxHp: 5,
      vx: -0.8,
      jumpTimer: 0,
      fireTimer: 0,
      isAlive: true
    };
  }

  isSolid(col, row) {
    if (col < 0 || col >= this.levelCols || row < 0 || row >= this.levelRows) return false;
    const t = this.tilemap[row][col];
    return t >= 1 && t !== 9 && t !== 12; // 9: Flagpole, 12: Axe (not solid to walk)
  }

  start() {
    this.audio.init();
    this.score = 0;
    this.coins = 0;
    this.lives = 3;
    this.loadWorld('1-1');

    this.isPlaying = true;
    this.isPaused = false;
    this.isGameOver = false;

    document.getElementById('marioOverlay').classList.add('hidden');
    this.lastTime = performance.now();
  }

  resetMario() {
    this.mario.x = 64;
    this.mario.y = 350;
    this.mario.vx = 0;
    this.mario.vy = 0;
    this.mario.height = this.mario.state === 'SMALL' ? 32 : 48;
    this.mario.isGrounded = false;
    this.mario.isJumping = false;
    this.mario.invulnerable = 0;
    this.cameraX = 0;
  }

  shootFireball() {
    if (this.mario.state !== 'FIRE' || this.fireballs.length >= 3) return;
    const { x, y, facingRight } = this.mario;
    this.fireballs.push({
      x: facingRight ? x + 24 : x - 8,
      y: y + 16,
      vx: facingRight ? 6.5 : -6.5,
      vy: 2.0,
      isAlive: true
    });
    this.audio.playFireball();
  }

  updatePhysics(dt) {
    const m = this.mario;
    if (m.state === 'DEAD') {
      m.vy += GRAVITY;
      m.y += m.vy;
      if (m.y > 600) {
        this.lives--;
        if (this.lives <= 0) this.gameOver();
        else this.resetMario();
      }
      return;
    }

    if (m.state === 'VICTORY') {
      m.vx = 2.2;
      m.x += m.vx;
      if (m.x > 108 * TILE_SIZE) {
        this.nextWorld();
      }
      return;
    }

    // Horizontal Movement
    const maxSpeed = this.keys.run ? 5.5 : 3.2;
    const accel = this.keys.run ? 0.35 : 0.25;
    const friction = 0.82;

    if (this.keys.right) {
      m.vx = Math.min(maxSpeed, m.vx + accel);
      m.facingRight = true;
    } else if (this.keys.left) {
      m.vx = Math.max(-maxSpeed, m.vx - accel);
      m.facingRight = false;
    } else {
      m.vx *= friction;
      if (Math.abs(m.vx) < 0.05) m.vx = 0;
    }

    // 1. Move X
    m.x += m.vx;
    if (m.x < this.cameraX) m.x = this.cameraX;

    const leftCol = Math.floor(m.x / TILE_SIZE);
    const rightCol = Math.floor((m.x + m.width) / TILE_SIZE);
    const topRow = Math.floor(m.y / TILE_SIZE);
    const botRow = Math.floor((m.y + m.height - 1) / TILE_SIZE);

    for (let r = topRow; r <= botRow; r++) {
      if (m.vx > 0 && this.isSolid(rightCol, r)) {
        m.x = rightCol * TILE_SIZE - m.width;
        m.vx = 0;
      } else if (m.vx < 0 && this.isSolid(leftCol, r)) {
        m.x = (leftCol + 1) * TILE_SIZE;
        m.vx = 0;
      }
    }

    // 2. Move Y & Gravity
    if (this.keys.jump && m.isGrounded) {
      m.vy = -10.5;
      m.isGrounded = false;
      m.isJumping = true;
      this.audio.playJump(m.state !== 'SMALL');
    }

    const curGravity = (this.keys.jump && m.vy < 0) ? GRAVITY * 0.55 : GRAVITY;
    m.vy += curGravity;
    m.y += m.vy;
    m.isGrounded = false;

    const nLeftCol = Math.floor(m.x / TILE_SIZE);
    const nRightCol = Math.floor((m.x + m.width) / TILE_SIZE);
    const nTopRow = Math.floor(m.y / TILE_SIZE);
    const nBotRow = Math.floor((m.y + m.height) / TILE_SIZE);

    for (let c = nLeftCol; c <= nRightCol; c++) {
      if (m.vy > 0 && this.isSolid(c, nBotRow)) {
        m.y = nBotRow * TILE_SIZE - m.height;
        m.vy = 0;
        m.isGrounded = true;
        m.isJumping = false;
      } else if (m.vy < 0 && this.isSolid(c, nTopRow)) {
        m.y = (nTopRow + 1) * TILE_SIZE;
        m.vy = 0;
        this.hitBlock(c, nTopRow);
      }
    }

    // Flagpole or Axe Trigger Check
    const curCol = Math.floor(m.x / TILE_SIZE);
    const curRow = Math.floor(m.y / TILE_SIZE);

    if (this.tilemap[curRow] && (this.tilemap[curRow][curCol] === 9 || this.tilemap[curRow][curCol] === 12)) {
      if (this.world === '1-4' && this.bowser) {
        // Drop Bowser's bridge into lava!
        for (let c = 70; c <= 88; c++) this.tilemap[11][c] = 0;
        this.bowser.isAlive = false;
        this.audio.playBowserDefeat();
        this.score += 10000;
        setTimeout(() => this.nextWorld(), 1800);
      } else {
        m.state = 'VICTORY';
        this.audio.playStageClear();
        this.score += 5000;
      }
    }

    // Pitfall Death Check
    if (m.y > this.canvas.height) {
      this.marioDie();
    }

    // Camera follow
    if (m.x - this.cameraX > this.canvas.width * 0.45) {
      this.cameraX = m.x - this.canvas.width * 0.45;
    }

    if (m.invulnerable > 0) m.invulnerable -= dt;
  }

  hitBlock(col, row) {
    const tile = this.tilemap[row][col];
    if (tile === 3) {
      this.tilemap[row][col] = 4;
      if (col === 21) {
        // Super Mushroom
        this.powerups.push({ type: 'MUSHROOM', x: col * TILE_SIZE, y: (row - 1) * TILE_SIZE, vx: 1.5, vy: -2, isAlive: true });
        this.audio.playPowerup();
      } else if (col === 23) {
        // Fire Flower
        this.powerups.push({ type: 'FLOWER', x: col * TILE_SIZE, y: (row - 1) * TILE_SIZE, vx: 0, vy: -1.5, isAlive: true });
        this.audio.playPowerup();
      } else {
        // Coin
        this.coins++;
        this.score += 200;
        this.audio.playCoin();
      }
    } else if (tile === 2) {
      if (this.mario.state !== 'SMALL') {
        this.tilemap[row][col] = 0;
        this.score += 50;
        // Spawn 4 brick breaking fragments
        for (let i = 0; i < 4; i++) {
          this.particles.push({
            x: col * TILE_SIZE + 8,
            y: row * TILE_SIZE + 8,
            vx: (i % 2 === 0 ? -3 : 3),
            vy: (i < 2 ? -6 : -3),
            life: 1.2
          });
        }
      }
    }
  }

  updateEntities(dt) {
    // Update Fireballs
    for (let i = this.fireballs.length - 1; i >= 0; i--) {
      const fb = this.fireballs[i];
      fb.vy += GRAVITY * 0.8;
      fb.x += fb.vx;
      fb.y += fb.vy;

      // Bounce on ground
      const bRow = Math.floor((fb.y + 12) / TILE_SIZE);
      const bCol = Math.floor(fb.x / TILE_SIZE);
      if (this.isSolid(bCol, bRow)) {
        fb.y = bRow * TILE_SIZE - 12;
        fb.vy = -4.5; // Bounce
      }

      // Hit enemies
      for (const e of this.enemies) {
        if (e.isAlive && Math.hypot(fb.x - e.x - 14, fb.y - e.y - 14) < 22) {
          e.isAlive = false;
          fb.isAlive = false;
          this.score += 200;
          this.audio.playKick();
          break;
        }
      }

      // Hit Bowser
      if (this.bowser && this.bowser.isAlive && Math.hypot(fb.x - this.bowser.x - 24, fb.y - this.bowser.y - 24) < 36) {
        this.bowser.hp--;
        fb.isAlive = false;
        this.audio.playKick();
        if (this.bowser.hp <= 0) {
          this.bowser.isAlive = false;
          this.score += 5000;
          this.audio.playBowserDefeat();
        }
      }

      if (fb.x > this.cameraX + this.canvas.width || fb.y > this.canvas.height || !fb.isAlive) {
        this.fireballs.splice(i, 1);
      }
    }

    // Update Enemies
    for (const e of this.enemies) {
      if (!e.isAlive) continue;

      if (e.type === 'GOOMBA') {
        if (e.isSquished) {
          e.removeTimer += dt;
          if (e.removeTimer > 0.4) e.isAlive = false;
          continue;
        }
        e.x += e.vx;
        const col = Math.floor((e.vx > 0 ? e.x + 30 : e.x) / TILE_SIZE);
        const row = Math.floor((e.y + 16) / TILE_SIZE);
        if (this.isSolid(col, row)) e.vx = -e.vx;
      } else if (e.type === 'KOOPA') {
        e.x += e.vx;
        const col = Math.floor((e.vx > 0 ? e.x + 30 : e.x) / TILE_SIZE);
        const row = Math.floor((e.y + 16) / TILE_SIZE);
        if (this.isSolid(col, row)) e.vx = -e.vx;
      }

      // Mario Collision with Enemy
      const m = this.mario;
      if (m.state !== 'DEAD' && m.state !== 'VICTORY') {
        if (m.x + m.width > e.x && m.x < e.x + 30 && m.y + m.height > e.y && m.y < e.y + 30) {
          if (m.vy > 0 && m.y + m.height - m.vy <= e.y + 14) {
            // Stomp
            if (e.type === 'GOOMBA') {
              e.isSquished = true;
              m.vy = -6.5;
              this.score += 100;
              this.audio.playStomp();
            } else if (e.type === 'KOOPA') {
              if (!e.isShell) {
                e.isShell = true;
                e.vx = 0;
                m.vy = -6.5;
                this.score += 100;
                this.audio.playStomp();
              } else if (e.vx === 0) {
                // Kick shell
                e.vx = m.facingRight ? 8.0 : -8.0;
                this.audio.playKick();
                this.score += 400;
              }
            }
          } else if (m.invulnerable <= 0) {
            if (e.type === 'KOOPA' && e.isShell && e.vx === 0) {
              // Kick motionless shell safely
              e.vx = m.facingRight ? 8.0 : -8.0;
              this.audio.playKick();
            } else {
              this.hurtMario();
            }
          }
        }
      }
    }

    // Update Bowser AI in 1-4
    if (this.bowser && this.bowser.isAlive) {
      const b = this.bowser;
      b.x += b.vx;
      if (b.x < 74 * TILE_SIZE || b.x > 84 * TILE_SIZE) b.vx = -b.vx;

      // Bowser breath fire
      b.fireTimer += dt;
      if (b.fireTimer > 2.5) {
        b.fireTimer = 0;
        this.enemies.push({
          type: 'GOOMBA', // Fire breath entity
          x: b.x - 10,
          y: b.y + 10,
          vx: -4.0,
          isSquished: false,
          isAlive: true,
          removeTimer: 0
        });
      }
    }

    // Update Powerups
    for (let i = this.powerups.length - 1; i >= 0; i--) {
      const p = this.powerups[i];
      p.vy += GRAVITY * 0.8;
      p.x += p.vx;
      p.y += p.vy;

      const bRow = Math.floor((p.y + 32) / TILE_SIZE);
      const col = Math.floor(p.x / TILE_SIZE);
      if (this.isSolid(col, bRow)) {
        p.y = bRow * TILE_SIZE - 32;
        p.vy = 0;
      }

      const m = this.mario;
      if (m.x + m.width > p.x && m.x < p.x + 32 && m.y + m.height > p.y && m.y < p.y + 32) {
        if (p.type === 'MUSHROOM') {
          m.state = (m.state === 'FIRE') ? 'FIRE' : 'SUPER';
          m.height = 48;
          m.y -= 16;
          this.score += 1000;
        } else if (p.type === 'FLOWER') {
          m.state = 'FIRE';
          m.height = 48;
          this.score += 1000;
        }
        this.audio.playPowerup();
        this.powerups.splice(i, 1);
      }
    }

    // Update Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.vy += GRAVITY;
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.life -= dt;
      if (pt.life <= 0) this.particles.splice(i, 1);
    }
  }

  hurtMario() {
    const m = this.mario;
    if (m.state === 'FIRE') {
      m.state = 'SUPER';
      m.invulnerable = 2.0;
    } else if (m.state === 'SUPER') {
      m.state = 'SMALL';
      m.height = 32;
      m.invulnerable = 2.0;
    } else {
      this.marioDie();
    }
  }

  marioDie() {
    this.mario.state = 'DEAD';
    this.mario.vy = -8.5;
    this.audio.playDeath();
  }

  nextWorld() {
    const worlds = ['1-1', '1-2', '1-3', '1-4'];
    const idx = worlds.indexOf(this.world);
    if (idx < worlds.length - 1) {
      this.loadWorld(worlds[idx + 1]);
      document.querySelectorAll('.ws-btn').forEach(b => b.classList.remove('active'));
      const activeBtn = document.getElementById(`btnW${this.world.replace('-', '')}`);
      if (activeBtn) activeBtn.classList.add('active');
    } else {
      this.stageClearAll();
    }
  }

  gameOver() {
    this.isGameOver = true;
    this.isPlaying = false;
    const overlay = document.getElementById('marioOverlay');
    const title = document.getElementById('overlayTitle');
    const sub = document.getElementById('overlaySub');
    title.innerText = 'GAME OVER';
    title.style.color = '#d82800';
    sub.innerText = `FINAL SCORE: ${this.score} | COINS: ${this.coins}`;
    document.getElementById('startBtn').innerText = 'CONTINUE (ENTER)';
    overlay.classList.remove('hidden');
  }

  stageClearAll() {
    this.isPlaying = false;
    const overlay = document.getElementById('marioOverlay');
    const title = document.getElementById('overlayTitle');
    const sub = document.getElementById('overlaySub');
    title.innerText = '★ MISSION COMPLETE ★';
    title.style.color = '#ffd700';
    sub.innerText = `CONGRATULATIONS! ALL 4 WORLDS CLEARED! SCORE: ${this.score}`;
    document.getElementById('startBtn').innerText = 'PLAY AGAIN';
    overlay.classList.remove('hidden');
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Sky Background based on world
    if (this.worldType === 'UNDERGROUND' || this.worldType === 'CASTLE') {
      this.ctx.fillStyle = '#000000';
    } else {
      this.ctx.fillStyle = '#5c94fc'; // NES Sky
    }
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.save();
    this.ctx.translate(-Math.floor(this.cameraX), 0);

    // Draw Visible Tilemap
    const startCol = Math.max(0, Math.floor(this.cameraX / TILE_SIZE));
    const endCol = Math.min(this.levelCols, Math.ceil((this.cameraX + this.canvas.width) / TILE_SIZE));

    for (let r = 0; r < this.levelRows; r++) {
      for (let c = startCol; c < endCol; c++) {
        const tile = this.tilemap[r][c];
        if (tile !== 0) {
          HDSpriteRenderer.drawTile(this.ctx, tile, c * TILE_SIZE, r * TILE_SIZE, this.worldType, this.tick);
        }
      }
    }

    // Draw Fireballs
    this.ctx.fillStyle = '#ff3300';
    for (const fb of this.fireballs) {
      this.ctx.beginPath();
      this.ctx.arc(fb.x, fb.y, 6, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Draw Enemies
    for (const e of this.enemies) {
      if (e.isAlive) {
        if (e.type === 'GOOMBA') HDSpriteRenderer.drawGoomba(this.ctx, e, this.worldType);
        else if (e.type === 'KOOPA') HDSpriteRenderer.drawKoopa(this.ctx, e);
      }
    }

    // Draw Bowser in Castle
    if (this.bowser && this.bowser.isAlive) {
      HDSpriteRenderer.drawBowser(this.ctx, this.bowser, this.tick);
    }

    // Draw Particles
    this.ctx.fillStyle = '#b84418';
    for (const pt of this.particles) {
      this.ctx.fillRect(pt.x, pt.y, 6, 6);
    }

    // Draw Mario
    HDSpriteRenderer.drawMario(this.ctx, this.mario);

    this.ctx.restore();
  }

  updateHUD() {
    document.getElementById('hudScore').innerText = String(this.score).padStart(6, '0');
    document.getElementById('hudCoins').innerText = String(this.coins).padStart(2, '0');
    document.getElementById('hudWorld').innerText = this.world;
    document.getElementById('hudPower').innerText = this.mario.state;
    document.getElementById('hudTime').innerText = Math.max(0, Math.floor(this.time));
    document.getElementById('hudLives').innerHTML = `&times; ${this.lives}`;
  }

  update(dt) {
    if (!this.isPlaying || this.isPaused) return;
    this.tick++;

    this.timeTimer += dt;
    if (this.timeTimer >= 1.0) {
      this.time -= 1;
      this.timeTimer = 0;
      if (this.time <= 0 && this.mario.state !== 'DEAD') this.marioDie();
    }

    this.updatePhysics(dt);
    this.updateEntities(dt);
    this.updateHUD();
  }

  loop(timestamp = 0) {
    const dt = Math.min(0.05, (timestamp - this.lastTime) / 1000);
    this.lastTime = timestamp;

    this.update(dt);
    this.draw();

    requestAnimationFrame(t => this.loop(t));
  }

  initUI() {
    this.updateHUD();
    document.getElementById('startBtn').addEventListener('click', () => this.start());

    // World buttons
    const bindWorldBtn = (id, w) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', () => {
          document.querySelectorAll('.ws-btn').forEach(b => b.classList.remove('active'));
          el.classList.add('active');
          this.loadWorld(w);
        });
      }
    };
    bindWorldBtn('btnW11', '1-1');
    bindWorldBtn('btnW12', '1-2');
    bindWorldBtn('btnW13', '1-3');
    bindWorldBtn('btnW14', '1-4');
  }

  initEvents() {
    window.addEventListener('keydown', e => {
      if (!this.isPlaying) {
        if (e.code === 'Enter' || e.code === 'Space') this.start();
        return;
      }

      this.audio.init();

      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          this.keys.left = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.keys.right = true;
          break;
        case 'Space':
        case 'ArrowUp':
        case 'KeyW':
        case 'KeyK':
          this.keys.jump = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'KeyJ':
          this.keys.run = true;
          this.shootFireball();
          break;
        case 'KeyP':
          this.isPaused = !this.isPaused;
          break;
        case 'KeyM':
          this.audio.enabled = !this.audio.enabled;
          break;
      }
    });

    window.addEventListener('keyup', e => {
      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          this.keys.left = false;
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.keys.right = false;
          break;
        case 'Space':
        case 'ArrowUp':
        case 'KeyW':
        case 'KeyK':
          this.keys.jump = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'KeyJ':
          this.keys.run = false;
          break;
      }
    });

    const bindTouch = (id, key) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.audio.init();
          this.keys[key] = true;
          if (key === 'run') this.shootFireball();
        });
        el.addEventListener('touchend', (e) => {
          e.preventDefault();
          this.keys[key] = false;
        });
      }
    };
    bindTouch('mBtnLeft', 'left');
    bindTouch('mBtnRight', 'right');
    bindTouch('mBtnJump', 'jump');
    bindTouch('mBtnRun', 'run');
  }
}

// Instantiate game loop
window.addEventListener('DOMContentLoaded', () => {
  const game = new MarioGame();
  game.loop();
});
