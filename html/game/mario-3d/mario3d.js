/**
 * SUPER MARIO 3D HD - Complete High-Fidelity 3D Game Engine
 * Features:
 *   - TextureFactory: In-memory Procedural Canvas Texture Generator (Grass checkerboard, bricks, Question blocks, Cap 'M' logo, Lava, Sand)
 *   - CharacterModelFactory: Articulated 3D Mario (M cap logo, denim overalls, gloves, run swing animation), Bowser (8 3D spiked shell, horns, fire breath), Peach, Toad
 *   - CameraDirector: 4 Dynamic Camera Modes (ORBIT_FOLLOW, BOSS_LOCK, ISOMETRIC, CINEMATIC)
 *   - LevelRegistry: 5 Diverse Integrated Worlds with 15 Green Power Stars
 *   - 2-Phase Epic Bowser Boss Fight with shockwaves, shell charge, and drawbridge collapse
 *   - 5-Slot Deep Progress Save System (Stars, Coins, Scores, Forms, Checkpoints)
 *   - Web Audio Chip Sound Synthesizer
 */

(function () {
  'use strict';

  // --- Procedural Canvas Texture Generator ---
  class TextureFactory {
    static generateGrassTexture() {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 512;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#48b84d';
      ctx.fillRect(0, 0, 512, 512);

      // Large vibrant cartoon lawn checkerboard
      const size = 64;
      for (let y = 0; y < 512; y += size) {
        for (let x = 0; x < 512; x += size) {
          if ((x / size + y / size) % 2 === 0) {
            ctx.fillStyle = '#3da041';
            ctx.fillRect(x, y, size, size);
          }
          // Subtle border highlight
          ctx.strokeStyle = 'rgba(255,255,255,0.06)';
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, size, size);
        }
      }

      // Cute tiny daisy blossom dots
      for (let i = 0; i < 40; i++) {
        const fx = Math.random() * 512;
        const fy = Math.random() * 512;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(fx, fy, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(fx, fy, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      return c;
    }

    static generateDirtCliffTexture() {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 512;
      const ctx = c.getContext('2d');
      // Rich warm earth base
      ctx.fillStyle = '#794a28';
      ctx.fillRect(0, 0, 512, 512);

      // Horizontal geological rock sediment strata
      const bands = [
        { y: 60, h: 45, col: '#5e381c' },
        { y: 160, h: 55, col: '#8d562f' },
        { y: 280, h: 65, col: '#513017' },
        { y: 400, h: 50, col: '#945e34' }
      ];
      bands.forEach(b => {
        ctx.fillStyle = b.col;
        ctx.beginPath();
        ctx.moveTo(0, b.y);
        ctx.bezierCurveTo(128, b.y - 12, 384, b.y + 12, 512, b.y);
        ctx.lineTo(512, b.y + b.h);
        ctx.bezierCurveTo(384, b.y + b.h + 8, 128, b.y + b.h - 8, 0, b.y + b.h);
        ctx.closePath();
        ctx.fill();
      });

      // Rock pebbles
      for (let i = 0; i < 60; i++) {
        ctx.fillStyle = i % 2 === 0 ? '#422611' : '#a26b3c';
        ctx.beginPath();
        ctx.arc(Math.random() * 512, Math.random() * 512, 5 + Math.random() * 8, 0, Math.PI * 2);
        ctx.fill();
      }
      return c;
    }

    static generateBrickTexture() {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 512;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#1e272e'; // Dark mortar
      ctx.fillRect(0, 0, 512, 512);

      const rows = 8;
      const h = 512 / rows;
      const w = 128;
      for (let r = 0; r < rows; r++) {
        const offset = (r % 2) * (w / 2);
        for (let x = -w; x < 512 + w; x += w) {
          const bx = x + offset + 4;
          const by = r * h + 4;
          const bw = w - 8;
          const bh = h - 8;

          // Brick gradient
          const grad = ctx.createLinearGradient(bx, by, bx, by + bh);
          grad.addColorStop(0, '#d63031');
          grad.addColorStop(1, '#a82324');
          ctx.fillStyle = grad;
          ctx.fillRect(bx, by, bw, bh);

          // Top & Left 3D bevel highlight
          ctx.fillStyle = 'rgba(255,255,255,0.3)';
          ctx.fillRect(bx, by, bw, 4);
          ctx.fillRect(bx, by, 4, bh);

          // Bottom & Right bevel shadow
          ctx.fillStyle = 'rgba(0,0,0,0.4)';
          ctx.fillRect(bx, by + bh - 4, bw, 4);
          ctx.fillRect(bx + bw - 4, by, 4, bh);
        }
      }
      return c;
    }

    static generateQuestionTexture() {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 512;
      const ctx = c.getContext('2d');

      // Vibrant golden bevel gradient
      const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 320);
      grad.addColorStop(0, '#fff3b0');
      grad.addColorStop(0.4, '#fbd000');
      grad.addColorStop(1, '#c99200');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Inset bevel border
      ctx.strokeStyle = '#8c5900';
      ctx.lineWidth = 20;
      ctx.strokeRect(16, 16, 480, 480);
      ctx.strokeStyle = '#ffeaa7';
      ctx.lineWidth = 8;
      ctx.strokeRect(26, 26, 460, 460);

      // 4 Metallic Rivets
      const rivets = [[48, 48], [464, 48], [48, 464], [464, 464]];
      rivets.forEach(([rx, ry]) => {
        ctx.fillStyle = '#613e00';
        ctx.beginPath();
        ctx.arc(rx + 2, ry + 2, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#f9ca24';
        ctx.beginPath();
        ctx.arc(rx, ry, 13, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(rx - 3, ry - 3, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Iconic crisp White Question Mark '?' with bold drop shadow
      ctx.font = '900 320px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillStyle = '#613e00';
      ctx.fillText('?', 262, 268);

      ctx.fillStyle = '#ffffff';
      ctx.fillText('?', 256, 256);
      ctx.strokeStyle = '#8c5900';
      ctx.lineWidth = 6;
      ctx.strokeText('?', 256, 256);

      return c;
    }

    static generateMarioCapLogo() {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');

      // Crisp White circle badge
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.beginPath();
      ctx.arc(130, 132, 114, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(128, 128, 112, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#dcdde1';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Bold Red 'M' Emblem
      ctx.font = '900 176px Arial Black, Impact, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#e52521';
      ctx.fillText('M', 128, 136);

      return c;
    }

    static generateCartoonEyeTexture() {
      const c = document.createElement('canvas');
      c.width = 128; c.height = 256;
      const ctx = c.getContext('2d');
      // Black vertical pill
      ctx.fillStyle = '#1e272e';
      ctx.beginPath();
      ctx.ellipse(64, 128, 48, 100, 0, 0, Math.PI * 2);
      ctx.fill();

      // White specular catchlight
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(48, 70, 18, 0, Math.PI * 2);
      ctx.fill();

      return c;
    }

    static generateDenimTexture() {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#093687';
      ctx.fillRect(0, 0, 256, 256);

      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 3;
      for (let i = -256; i < 512; i += 12) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 256, 256);
        ctx.stroke();
      }
      return c;
    }

    static generateLavaTexture() {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#c0392b';
      ctx.fillRect(0, 0, 256, 256);

      for (let i = 0; i < 45; i++) {
        ctx.fillStyle = i % 2 === 0 ? '#f39c12' : '#f1c40f';
        ctx.beginPath();
        ctx.arc(Math.random() * 256, Math.random() * 256, 12 + Math.random() * 28, 0, Math.PI * 2);
        ctx.fill();
      }
      return c;
    }

    static generateCastleStoneTexture() {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#1e272e';
      ctx.fillRect(0, 0, 256, 256);

      ctx.fillStyle = '#2f3542';
      for (let y = 0; y < 256; y += 32) {
        for (let x = 0; x < 256; x += 64) {
          ctx.fillRect(x + ((y / 32) % 2) * 32 + 2, y + 2, 60, 28);
        }
      }
      return c;
    }

    static generateSandTexture() {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#eccc68';
      ctx.fillRect(0, 0, 256, 256);

      ctx.strokeStyle = '#d1a845';
      ctx.lineWidth = 4;
      for (let y = 16; y < 256; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(64, y - 10, 192, y + 10, 256, y);
        ctx.stroke();
      }
      return c;
    }

    static generateWoodTexture() {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#b7791f';
      ctx.fillRect(0, 0, 256, 256);

      // Plank grooves
      ctx.fillStyle = '#744210';
      for (let y = 0; y < 256; y += 32) {
        ctx.fillRect(0, y, 256, 3);
      }
      // Wood grain ripples
      ctx.strokeStyle = '#975a16';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 20; i++) {
        const y = Math.random() * 256;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(80, y + 4, 160, y - 4, 256, y);
        ctx.stroke();
      }
      return c;
    }

    static generateUndergroundBrickTexture() {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 512;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#0a192f'; // Dark midnight navy mortar
      ctx.fillRect(0, 0, 512, 512);

      const rows = 8;
      const h = 512 / rows;
      const w = 128;
      for (let r = 0; r < rows; r++) {
        const offset = (r % 2) * (w / 2);
        for (let x = -w; x < 512 + w; x += w) {
          const bx = x + offset + 4;
          const by = r * h + 4;
          const bw = w - 8;
          const bh = h - 8;

          // Classic underground cyan-blue brick gradient
          const grad = ctx.createLinearGradient(bx, by, bx, by + bh);
          grad.addColorStop(0, '#00cec9');
          grad.addColorStop(0.3, '#0984e3');
          grad.addColorStop(1, '#1e3799');
          ctx.fillStyle = grad;
          ctx.fillRect(bx, by, bw, bh);

          // 3D Bevel highlight
          ctx.fillStyle = 'rgba(255,255,255,0.35)';
          ctx.fillRect(bx, by, bw, 4);
          ctx.fillRect(bx, by, 4, bh);

          // Shadow
          ctx.fillStyle = 'rgba(0,0,0,0.5)';
          ctx.fillRect(bx, by + bh - 4, bw, 4);
          ctx.fillRect(bx + bw - 4, by, 4, bh);
        }
      }
      return c;
    }
  }

  // --- Sound Synthesizer (Web Audio API) ---
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.coinStreak = 0;
      this.lastCoinTime = 0;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playJump() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(620, now + 0.16);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    }

    playCoin() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      if (now - this.lastCoinTime < 1.4) {
        this.coinStreak = Math.min(this.coinStreak + 1, 8);
      } else {
        this.coinStreak = 0;
      }
      this.lastCoinTime = now;
      const pitchFactor = Math.pow(1.05946, this.coinStreak * 2);
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc1.type = 'sine'; osc2.type = 'sine';
      osc1.frequency.setValueAtTime(987.77 * pitchFactor, now);
      osc2.frequency.setValueAtTime(1318.51 * pitchFactor, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
      osc1.connect(gain); osc2.connect(gain);
      gain.connect(this.ctx.destination);
      osc1.start(now); osc1.stop(now + 0.08);
      osc2.start(now + 0.08); osc2.stop(now + 0.35);
    }

    playStar() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.25, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.07 + 0.12);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.07); osc.stop(now + idx * 0.07 + 0.12);
      });
    }

    playPowerup() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const notes = [330, 392, 659, 523, 587, 784];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.2, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.06 + 0.08);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06); osc.stop(now + idx * 0.06 + 0.08);
      });
    }

    playStomp() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.12);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.start(now); osc.stop(now + 0.12);
    }

    playFireball() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.1);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.start(now); osc.stop(now + 0.1);
    }

    playBossRoar() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(90, now);
      osc.frequency.linearRampToValueAtTime(40, now + 0.6);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.6);
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.start(now); osc.stop(now + 0.6);
    }

    playVictory() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const melody = [
        { f: 523.25, d: 0.15 }, { f: 659.25, d: 0.15 }, { f: 783.99, d: 0.15 },
        { f: 1046.50, d: 0.3 }, { f: 783.99, d: 0.15 }, { f: 1046.50, d: 0.6 }
      ];
      let t = this.ctx.currentTime;
      melody.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, t);
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.linearRampToValueAtTime(0.01, t + note.d);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(t); osc.stop(t + note.d);
        t += note.d + 0.05;
      });
    }

    playPipeWarp() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [
        { f1: 300, f2: 180, t: 0 },
        { f1: 260, f2: 150, t: 0.12 },
        { f1: 220, f2: 120, t: 0.24 }
      ];
      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f1, now + n.t);
        osc.frequency.exponentialRampToValueAtTime(n.f2, now + n.t + 0.1);
        gain.gain.setValueAtTime(0.3, now + n.t);
        gain.gain.linearRampToValueAtTime(0.01, now + n.t + 0.1);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(now + n.t); osc.stop(now + n.t + 0.1);
      });
    }

    playFlagpoleSlide() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.85);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.85);
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.start(now); osc.stop(now + 0.85);
    }

    playFirework() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Rising whistle
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(450, now);
      osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.18);
      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.linearRampToValueAtTime(0.01, now + 0.18);
      osc1.connect(gain1); gain1.connect(this.ctx.destination);
      osc1.start(now); osc1.stop(now + 0.18);

      // Low burst boom
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(150, now + 0.18);
      osc2.frequency.exponentialRampToValueAtTime(45, now + 0.48);
      gain2.gain.setValueAtTime(0.35, now + 0.18);
      gain2.gain.linearRampToValueAtTime(0.01, now + 0.48);
      osc2.connect(gain2); gain2.connect(this.ctx.destination);
      osc2.start(now + 0.18); osc2.stop(now + 0.48);
    }
  }

  // --- 5-Slot Deep Progress Save System ---
  class SaveSystem {
    constructor() {
      this.STORAGE_KEY = 'mario3d_save_slots_v2';
      this.MAX_SLOTS = 5;
      this.memoryBackup = {};
    }

    _loadRawData() {
      try {
        const val = localStorage.getItem(this.STORAGE_KEY);
        if (val) return JSON.parse(val);
      } catch (e) {}
      return this.memoryBackup;
    }

    _saveRawData(data) {
      this.memoryBackup = data;
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      } catch (e) {}
    }

    getSlot(slotId) {
      if (slotId < 1 || slotId > this.MAX_SLOTS) return null;
      const data = this._loadRawData();
      return data['slot_' + slotId] || null;
    }

    saveSlot(slotId, gameState) {
      if (slotId < 1 || slotId > this.MAX_SLOTS) {
        throw new Error(`Slot ID ${slotId} is out of bounds (1..5)`);
      }
      const data = this._loadRawData();
      const record = {
        slotId: slotId,
        timestamp: new Date().toLocaleString(),
        rawTimestamp: Date.now(),
        worldIndex: gameState.worldIndex,
        worldName: gameState.worldName,
        score: gameState.score,
        coins: gameState.coins,
        lives: gameState.lives,
        hp: gameState.hp,
        form: gameState.form,
        starsCount: gameState.starsCount || 0,
        starsCollected: gameState.starsCollected || [],
        storyFlag: gameState.storyFlag || 'NORMAL'
      };
      data['slot_' + slotId] = record;
      this._saveRawData(data);
      return record;
    }

    deleteSlot(slotId) {
      if (slotId < 1 || slotId > this.MAX_SLOTS) return false;
      const data = this._loadRawData();
      if (data['slot_' + slotId]) {
        delete data['slot_' + slotId];
        this._saveRawData(data);
        return true;
      }
      return false;
    }

    listSlots() {
      const data = this._loadRawData();
      const result = [];
      for (let i = 1; i <= this.MAX_SLOTS; i++) {
        result.push(data['slot_' + i] || null);
      }
      return result;
    }
  }

  // --- 5 Diverse Integrated Worlds Registry (LevelRegistry) ---
  const LEVEL_REGISTRY = [
    {
      id: '1-1',
      title: 'EMERALD STEPPES',
      skyColor: 0x5c94fc,
      groundType: 'GRASS',
      groundLength: 130,
      groundWidth: 18,
      description: '陽光普照的翡翠丘陵，瀑布與綠色水管遍布，啟程拯救碧姬公主！',
      greenStars: [
        { x: -3.5, y: 3.5, z: 24, id: '1-1-S1' },
        { x: 3.5, y: 5.5, z: 58, id: '1-1-S2' },
        { x: 0.0, y: 7.0, z: 92, id: '1-1-S3' }
      ]
    },
    {
      id: '1-2',
      title: 'LUMINESCENT CAVERNS',
      skyColor: 0x0c101c,
      groundType: 'CRYSTAL',
      groundLength: 140,
      groundWidth: 16,
      description: '深邃幽暗的螢光晶石洞穴，懸空移動岩板與水管食人花！',
      greenStars: [
        { x: 2.0, y: 4.5, z: 30, id: '1-2-S1' },
        { x: -3.0, y: 6.0, z: 70, id: '1-2-S2' },
        { x: 0.0, y: 7.5, z: 105, id: '1-2-S3' }
      ]
    },
    {
      id: '1-3',
      title: 'SUNKEN PYRAMID & DUNES',
      skyColor: 0xf6b93b,
      groundType: 'SAND',
      groundLength: 140,
      groundWidth: 18,
      description: '烈日高照的金黃流沙金字塔，旋轉烈焰棒與千年古柱！',
      greenStars: [
        { x: -4.0, y: 4.0, z: 28, id: '1-3-S1' },
        { x: 4.0, y: 6.5, z: 68, id: '1-3-S2' },
        { x: 0.0, y: 8.5, z: 110, id: '1-3-S3' }
      ]
    },
    {
      id: '1-4',
      title: 'CUMULUS CLOUDS & AIRSHIP',
      skyColor: 0x70a1ff,
      groundType: 'WOOD',
      groundLength: 150,
      groundWidth: 16,
      description: '漫步於萬里晴空之上，雲朵跳床與庫巴先鋒飛空艇！',
      greenStars: [
        { x: 3.0, y: 5.0, z: 32, id: '1-4-S1' },
        { x: -3.0, y: 7.5, z: 76, id: '1-4-S2' },
        { x: 0.0, y: 9.0, z: 118, id: '1-4-S3' }
      ]
    },
    {
      id: '1-5',
      title: "BOWSER'S MOLTEN CITADEL",
      skyColor: 0x180404,
      groundType: 'CASTLE_LAVA',
      groundLength: 160,
      groundWidth: 20,
      description: '熾熱翻騰的熔岩神殿！面對庫巴大魔王的二階段激烈決戰！',
      greenStars: [
        { x: -4.0, y: 4.5, z: 30, id: '1-5-S1' },
        { x: 4.0, y: 6.0, z: 65, id: '1-5-S2' },
        { x: 0.0, y: 9.5, z: 115, id: '1-5-S3' }
      ]
    }
  ];

  // --- Story Narrative Scripts ---
  const STORY_SCRIPTS = {
    PROLOGUE: [
      { speaker: 'Toad', avatar: 'toad', text: '瑪莉歐！大事不好了！庫巴出動了巨大的飛空艇要塞突襲城堡，將碧姬公主擄走到熔岩城堡深處了！' },
      { speaker: 'Mario', avatar: 'mario', text: '「Let\'s-a-go!」別擔心奇諾比奧！我這就出發穿越五大世界，把公主安全接回來！' },
      { speaker: 'Toad', avatar: 'toad', text: '每個世界都藏有 3 顆「綠色力量之星」，共有 15 顆！善用 [V] 鍵切換 4 種多重視角，能更輕易發現隱藏密道！' }
    ],
    STAGE_1_CLEAR: [
      { speaker: 'Toad', avatar: 'toad', text: '好樣的瑪莉歐！你穿過了翡翠平原！前方就是通往地底深淵的螢光晶石洞穴！' },
      { speaker: 'Toad', avatar: 'toad', text: '小心地下的移動岩板與隨時從水管竄出的巨大食人花！' }
    ],
    STAGE_2_CLEAR: [
      { speaker: 'Toad', avatar: 'toad', text: '呼……成功突破晶石迷宮！前方是一望無際的烈日流沙金字塔！' },
      { speaker: 'Toad', avatar: 'toad', text: '古老遺跡中佈滿了旋轉烈焰棒，看準時機跳躍！' }
    ],
    STAGE_3_CLEAR: [
      { speaker: 'Toad', avatar: 'toad', text: '你竟然爬上了金字塔頂！抬頭看，天空之上的浮雲之國停泊著庫巴的飛空艇！' },
      { speaker: 'Toad', avatar: 'toad', text: '彈跳雲朵可以將你彈射至高空，擊破守衛突破重圍吧！' }
    ],
    STAGE_4_CLEAR: [
      { speaker: 'Bowser', avatar: 'bowser', text: '嘎哈哈哈！瑪莉歐，你果然突破了我的重重防線！' },
      { speaker: 'Bowser', avatar: 'bowser', text: '但熔岩神廟就是你的葬身之地！有膽量就踏上吊橋，嚐嚐我的二階段烈焰與尖刺衝撞吧！' }
    ],
    BOSS_PHASE2: [
      { speaker: 'Bowser', avatar: 'bowser', text: '可惡……你徹底惹怒我了！我要把你撞得粉碎！' }
    ],
    VICTORY_ENDING: [
      { speaker: 'Peach', avatar: 'peach', text: '瑪莉歐！你真的做到了！你擊敗了庫巴大魔王，斬斷吊橋將我從熔岩牢籠中解救出來！' },
      { speaker: 'Mario', avatar: 'mario', text: '「Mamma mia! Yahoo!」公主平安無事真是太好了！蘑菇王國重新迎來了和平！' },
      { speaker: 'Peach', avatar: 'peach', text: '為了感謝你的英勇，我特地為你烤了最香甜的草莓鮮奶油蛋糕，我們一起回城堡慶祝吧！' }
    ]
  };

  // --- Main 3D Game Engine Class ---
  class SuperMario3DEngine {
    constructor() {
      this.canvas = document.getElementById('marioCanvas');
      this.sound = new SoundFX();
      this.saveSystem = new SaveSystem();

      // Textures Cache
      this.textures = {};

      // Game State
      this.worldIndex = 0;
      this.score = 0;
      this.coins = 0;
      this.lives = 3;
      this.hp = 3;
      this.maxHp = 3;
      this.form = 'SMALL'; // SMALL, SUPER, FIRE
      this.invulnerableTimer = 0;
      this.isGameOver = false;
      this.isVictory = false;
      this.isPaused = false;
      this.storyFlag = 'NORMAL';

      // Stars Tracking
      this.collectedStars = new Set();

      // Camera System (4 Modes)
      // 0: ORBIT_FOLLOW, 1: BOSS_LOCK, 2: ISOMETRIC, 3: CINEMATIC
      this.cameraModes = ['ORBIT_FOLLOW', 'BOSS_LOCK', 'ISOMETRIC', 'CINEMATIC'];
      this.currentCamModeIdx = 0;
      this.cameraTarget = { x: 0, y: 1.5, z: 0 };
      this.cameraDist = 9.5;
      this.cameraPitch = 0.35;
      this.cameraYaw = 0.0;

      // 3D Player Entity
      this.player = {
        pos: { x: 0, y: 1.5, z: 0 },
        vel: { x: 0, y: 0, z: 0 },
        yaw: 0,
        radius: 0.65,
        height: 1.6,
        isGrounded: false,
        groundPound: false,
        jumpHeld: false,
        speed: 13.0,
        mesh: null,
        limbs: {} // limbs for running swing animation
      };

      // Entities
      this.blocks = [];
      this.coinsEntities = [];
      this.starsEntities = [];
      this.enemies = [];
      this.fireballs = [];
      this.particles = [];
      this.boss = null;
      this.flagpole = null;
      this.axeSwitch = null;
      this.endCastle = null;

      // Sub-World & Pipe / Flagpole Cinematic State
      this.isSubWorld = false;
      this.subWorldReturnState = null;
      this.pipeTransition = { active: false, timer: 0, phase: 'IDLE' };
      this.flagpoleCinematic = { active: false, phase: 'IDLE', timer: 0 };

      // Controls State
      this.keys = {};
      this.mouse = { isDown: false, lastX: 0, lastY: 0 };
      this.animClock = 0;

      // Dialogue State
      this.dialogQueue = [];
      this.isDialogActive = false;

      // Initialize
      this.setupDOM();
      this.init3D();
      this.setupControls();
      this.loadWorld(0);
      this.updateCamera(0.016);
      this.render();
      this.triggerStory('PROLOGUE');

      // Start Loop
      this.lastTime = performance.now();
      requestAnimationFrame(this.gameLoop.bind(this));
    }

    setupDOM() {
      // Audio toggle
      document.getElementById('btnAudioToggle')?.addEventListener('click', () => {
        this.sound.enabled = !this.sound.enabled;
        const btn = document.getElementById('btnAudioToggle');
        if (btn) btn.innerHTML = this.sound.enabled ? '&#128266;' : '&#128263;';
      });

      // Camera mode button
      document.getElementById('btnCameraMode')?.addEventListener('click', () => this.cycleCameraMode());

      // Help modal
      document.getElementById('btnHelp')?.addEventListener('click', () => this.toggleModal('helpModal', true));
      document.getElementById('btnCloseHelpModal')?.addEventListener('click', () => this.toggleModal('helpModal', false));
      document.getElementById('btnCloseHelpBtn')?.addEventListener('click', () => this.toggleModal('helpModal', false));

      // Save/Load modal
      document.getElementById('btnSaveLoadMenu')?.addEventListener('click', () => this.openSaveLoadModal());
      document.getElementById('btnCloseSaveModal')?.addEventListener('click', () => this.toggleModal('saveLoadModal', false));
      document.getElementById('btnResumeGame')?.addEventListener('click', () => this.toggleModal('saveLoadModal', false));
      document.getElementById('btnQuickSave')?.addEventListener('click', () => {
        this.saveToSlot(1);
        this.renderSlotsUI();
      });

      // Game over & Victory
      document.getElementById('btnRetryLevel')?.addEventListener('click', () => {
        this.toggleModal('gameOverModal', false);
        this.lives = Math.max(1, this.lives);
        this.hp = this.maxHp;
        this.loadWorld(this.worldIndex);
      });
      document.getElementById('btnLoadSaveFromGameOver')?.addEventListener('click', () => {
        this.toggleModal('gameOverModal', false);
        this.openSaveLoadModal();
      });
      document.getElementById('btnPlayAgain')?.addEventListener('click', () => {
        this.toggleModal('victoryModal', false);
        this.resetGame();
      });
      document.getElementById('btnOpenSaveFromVictory')?.addEventListener('click', () => {
        this.toggleModal('victoryModal', false);
        this.openSaveLoadModal();
      });

      // Dialog click
      document.getElementById('dialogOverlay')?.addEventListener('click', () => this.advanceDialog());
    }

    toggleModal(id, show) {
      const el = document.getElementById(id);
      if (el) {
        if (show) {
          el.classList.remove('hidden');
          this.isPaused = true;
        } else {
          el.classList.add('hidden');
          this.isPaused = false;
        }
      }
    }

    cycleCameraMode() {
      this.currentCamModeIdx = (this.currentCamModeIdx + 1) % this.cameraModes.length;
      const mode = this.cameraModes[this.currentCamModeIdx];
      const btn = document.getElementById('btnCameraMode');
      const labels = {
        'ORBIT_FOLLOW': '📷 自由追蹤 (V)',
        'BOSS_LOCK': '⚔️ 對決鎖定 (V)',
        'ISOMETRIC': '📐 45°立體等角 (V)',
        'CINEMATIC': '🎬 電影過場 (V)'
      };
      if (btn) btn.innerHTML = labels[mode] || mode;

      const bars = document.getElementById('cinematicBars');
      if (bars) {
        if (mode === 'CINEMATIC') bars.classList.remove('hidden');
        else bars.classList.add('hidden');
      }
    }

    // --- 3D Scene Initialization ---
    init3D() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.hasThree = typeof THREE !== 'undefined';

      if (this.hasThree) {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, preserveDrawingBuffer: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(LEVEL_REGISTRY[0].skyColor);
        this.scene.fog = new THREE.FogExp2(LEVEL_REGISTRY[0].skyColor, 0.007);

        this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);

        // Lighting
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
        this.scene.add(this.ambientLight);

        this.sunLight = new THREE.DirectionalLight(0xfff5e6, 0.95);
        this.sunLight.position.set(30, 50, 25);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 1024;
        this.sunLight.shadow.mapSize.height = 1024;
        const d = 45;
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.scene.add(this.sunLight);

        // Load procedural canvas textures into Three.js
        this.textures.grass = new THREE.CanvasTexture(TextureFactory.generateGrassTexture());
        this.textures.grass.wrapS = this.textures.grass.wrapT = THREE.RepeatWrapping;
        this.textures.grass.repeat.set(4, 25);

        this.textures.brick = new THREE.CanvasTexture(TextureFactory.generateBrickTexture());
        this.textures.question = new THREE.CanvasTexture(TextureFactory.generateQuestionTexture());
        this.textures.marioLogo = new THREE.CanvasTexture(TextureFactory.generateMarioCapLogo());
        this.textures.denim = new THREE.CanvasTexture(TextureFactory.generateDenimTexture());
        this.textures.lava = new THREE.CanvasTexture(TextureFactory.generateLavaTexture());
        this.textures.lava.wrapS = this.textures.lava.wrapT = THREE.RepeatWrapping;
        this.textures.lava.repeat.set(6, 20);

        this.textures.castle = new THREE.CanvasTexture(TextureFactory.generateCastleStoneTexture());
        this.textures.castle.wrapS = this.textures.castle.wrapT = THREE.RepeatWrapping;
        this.textures.castle.repeat.set(3, 15);

        this.textures.sand = new THREE.CanvasTexture(TextureFactory.generateSandTexture());
        this.textures.sand.wrapS = this.textures.sand.wrapT = THREE.RepeatWrapping;
        this.textures.sand.repeat.set(4, 20);

        this.textures.dirtCliff = new THREE.CanvasTexture(TextureFactory.generateDirtCliffTexture());
        this.textures.dirtCliff.wrapS = this.textures.dirtCliff.wrapT = THREE.RepeatWrapping;
        this.textures.dirtCliff.repeat.set(6, 2);

        this.textures.cartoonEye = new THREE.CanvasTexture(TextureFactory.generateCartoonEyeTexture());

        this.textures.wood = new THREE.CanvasTexture(TextureFactory.generateWoodTexture());
        this.textures.wood.wrapS = this.textures.wood.wrapT = THREE.RepeatWrapping;
        this.textures.wood.repeat.set(4, 15);

        this.textures.undergroundBrick = new THREE.CanvasTexture(TextureFactory.generateUndergroundBrickTexture());
        this.textures.undergroundBrick.wrapS = this.textures.undergroundBrick.wrapT = THREE.RepeatWrapping;
        this.textures.undergroundBrick.repeat.set(4, 10);

        window.addEventListener('resize', () => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          this.camera.aspect = w / h;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(w, h);
        });
      } else {
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;
        window.addEventListener('resize', () => {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
        });
      }
    }

    // --- Detailed Articulated 3D Character Mesh ---
    createMarioMesh() {
      if (!this.hasThree) return { position: this.player.pos };
      const group = new THREE.Group();
      this.player.limbs = {};

      const skinMat = new THREE.MeshLambertMaterial({ color: 0xffd1b3 });
      const redMat = new THREE.MeshLambertMaterial({ color: 0xd62828 });
      const denimMat = new THREE.MeshStandardMaterial({ map: this.textures.denim, roughness: 0.75 });
      const brownHairMat = new THREE.MeshLambertMaterial({ color: 0x42240c });
      const darkMustacheMat = new THREE.MeshLambertMaterial({ color: 0x241206 });
      const brownBootMat = new THREE.MeshLambertMaterial({ color: 0x542d0e });
      const rubberSoleMat = new THREE.MeshLambertMaterial({ color: 0x1a0f07 });
      const whiteMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
      const yellowBtnMat = new THREE.MeshStandardMaterial({ color: 0xf9ca24, metalness: 0.85, roughness: 0.25 });
      const eyeBlueMat = new THREE.MeshBasicMaterial({ color: 0x0984e3 });
      const pupilMat = new THREE.MeshBasicMaterial({ color: 0x111111 });

      // Torso Group
      const torsoGroup = new THREE.Group();

      // Red Shirt Body (Forms the foundation of torso, upper chest and back)
      const shirtGeo = new THREE.CylinderGeometry(0.36, 0.33, 0.55, 12);
      const shirt = new THREE.Mesh(shirtGeo, redMat);
      shirt.position.y = 0.65;
      shirt.castShadow = true;
      torsoGroup.add(shirt);

      const chestPuffGeo = new THREE.SphereGeometry(0.38, 12, 12);
      const chestPuff = new THREE.Mesh(chestPuffGeo, redMat);
      chestPuff.scale.set(1.0, 0.85, 0.95);
      chestPuff.position.set(0, 0.72, 0);
      torsoGroup.add(chestPuff);

      // Shirt Neck Collar
      const collarGeo = new THREE.TorusGeometry(0.22, 0.04, 8, 16);
      const collar = new THREE.Mesh(collarGeo, whiteMat);
      collar.rotation.x = Math.PI / 2;
      collar.position.set(0, 0.94, 0);
      torsoGroup.add(collar);

      // Denim Overalls (Pelvic Seat & Lower Belly)
      const overallGeo = new THREE.CylinderGeometry(0.37, 0.34, 0.28, 12);
      const overalls = new THREE.Mesh(overallGeo, denimMat);
      overalls.position.y = 0.40;
      overalls.castShadow = true;
      torsoGroup.add(overalls);

      const bellyGeo = new THREE.SphereGeometry(0.34, 12, 12);
      const belly = new THREE.Mesh(bellyGeo, denimMat);
      belly.scale.set(1.0, 0.7, 0.8);
      belly.position.set(0, 0.46, 0.12);
      torsoGroup.add(belly);

      // Overalls Front Bib (Chest bib on front +Z)
      const bibFrontGeo = new THREE.BoxGeometry(0.44, 0.26, 0.06);
      const bibFront = new THREE.Mesh(bibFrontGeo, denimMat);
      bibFront.position.set(0, 0.65, 0.20);
      torsoGroup.add(bibFront);

      // Low Back Waistband (Low on back -Z, exposing the red shirt on upper back!)
      const bibBackGeo = new THREE.BoxGeometry(0.40, 0.14, 0.06);
      const bibBack = new THREE.Mesh(bibBackGeo, denimMat);
      bibBack.position.set(0, 0.48, -0.19);
      torsoGroup.add(bibBack);

      // Two Shoulder Straps (Going from back waistband over shoulders to front bib)
      // Shoulder arch top
      const strapTopGeo = new THREE.BoxGeometry(0.09, 0.05, 0.34);
      const strapTL = new THREE.Mesh(strapTopGeo, denimMat);
      strapTL.position.set(-0.17, 0.80, 0.0);
      const strapTR = new THREE.Mesh(strapTopGeo, denimMat);
      strapTR.position.set(0.17, 0.80, 0.0);
      torsoGroup.add(strapTL); torsoGroup.add(strapTR);

      // Back vertical strap segments (Running down back, with bright red shirt visible between them!)
      const strapBGeo = new THREE.BoxGeometry(0.09, 0.28, 0.05);
      const strapBL = new THREE.Mesh(strapBGeo, denimMat);
      strapBL.position.set(-0.17, 0.64, -0.18);
      const strapBR = new THREE.Mesh(strapBGeo, denimMat);
      strapBR.position.set(0.17, 0.64, -0.18);
      torsoGroup.add(strapBL); torsoGroup.add(strapBR);

      // Front vertical strap segments
      const strapFGeo = new THREE.BoxGeometry(0.09, 0.24, 0.05);
      const strapFL = new THREE.Mesh(strapFGeo, denimMat);
      strapFL.position.set(-0.17, 0.66, 0.19);
      const strapFR = new THREE.Mesh(strapFGeo, denimMat);
      strapFR.position.set(0.17, 0.66, 0.19);
      torsoGroup.add(strapFL); torsoGroup.add(strapFR);

      // Brass Buttons on front bib
      const btnGeo = new THREE.SphereGeometry(0.065, 8, 8);
      const btnL = new THREE.Mesh(btnGeo, yellowBtnMat);
      btnL.position.set(-0.17, 0.64, 0.24);
      const btnR = btnL.clone();
      btnR.position.x = 0.17;
      torsoGroup.add(btnL);
      torsoGroup.add(btnR);

      group.add(torsoGroup);
      this.player.limbs.torso = torsoGroup;

      // Head Group
      const headGroup = new THREE.Group();
      headGroup.position.y = 1.15;

      // Peach Head Base
      const headGeo = new THREE.SphereGeometry(0.40, 14, 14);
      const head = new THREE.Mesh(headGeo, skinMat);
      head.castShadow = true;
      headGroup.add(head);

      // Brown Back Hair Puffs (Crucial 3 distinct lobes at nape of neck)
      const hairMidGeo = new THREE.SphereGeometry(0.24, 12, 12);
      const hairMid = new THREE.Mesh(hairMidGeo, brownHairMat);
      hairMid.scale.set(1.15, 0.90, 0.85);
      hairMid.position.set(0, -0.06, -0.34);
      headGroup.add(hairMid);

      const hairSideGeo = new THREE.SphereGeometry(0.21, 10, 10);
      const hairL = new THREE.Mesh(hairSideGeo, brownHairMat);
      hairL.scale.set(0.95, 0.90, 0.85);
      hairL.position.set(-0.25, -0.06, -0.28);
      const hairR = new THREE.Mesh(hairSideGeo, brownHairMat);
      hairR.scale.set(0.95, 0.90, 0.85);
      hairR.position.set(0.25, -0.06, -0.28);
      headGroup.add(hairL);
      headGroup.add(hairR);

      // Hair Nape Collar connecting neck to hair
      const napeGeo = new THREE.CylinderGeometry(0.24, 0.26, 0.22, 10);
      const nape = new THREE.Mesh(napeGeo, brownHairMat);
      nape.position.set(0, -0.20, -0.18);
      nape.rotation.x = -0.25;
      headGroup.add(nape);

      // Sideburns
      const sideburnGeo = new THREE.BoxGeometry(0.08, 0.20, 0.14);
      const sideburnL = new THREE.Mesh(sideburnGeo, brownHairMat);
      sideburnL.position.set(-0.38, -0.06, 0.06);
      const sideburnR = sideburnL.clone();
      sideburnR.position.x = 0.38;
      headGroup.add(sideburnL);
      headGroup.add(sideburnR);

      // Ears
      const earGeo = new THREE.SphereGeometry(0.13, 8, 8);
      const earL = new THREE.Mesh(earGeo, skinMat);
      earL.scale.set(0.35, 1.0, 0.75);
      earL.position.set(-0.41, 0.02, 0.01);
      earL.rotation.y = -0.2;
      const earR = new THREE.Mesh(earGeo, skinMat);
      earR.scale.set(0.35, 1.0, 0.75);
      earR.position.set(0.41, 0.02, 0.01);
      earR.rotation.y = 0.2;
      headGroup.add(earL);
      headGroup.add(earR);

      // Puffy Cap Crown
      const capGeo = new THREE.SphereGeometry(0.45, 14, 14);
      const cap = new THREE.Mesh(capGeo, redMat);
      cap.scale.set(1.05, 0.88, 1.14);
      cap.position.set(0, 0.16, -0.06);
      headGroup.add(cap);

      // Cap Rim Trim
      const capRimGeo = new THREE.TorusGeometry(0.42, 0.04, 8, 20);
      const capRim = new THREE.Mesh(capRimGeo, redMat);
      capRim.rotation.x = -0.1;
      capRim.position.set(0, 0.08, 0);
      headGroup.add(capRim);

      // Curved Cap Visor Brim
      const visorGeo = new THREE.CylinderGeometry(0.48, 0.50, 0.06, 14, 1, false, 0, Math.PI * 0.85);
      const visor = new THREE.Mesh(visorGeo, redMat);
      visor.position.set(0, 0.06, 0.34);
      visor.rotation.x = 0.28;
      headGroup.add(visor);

      // Iconic Cap 'M' Logo Badge
      const logoMat = new THREE.MeshBasicMaterial({ map: this.textures.marioLogo, transparent: true });
      const logoGeo = new THREE.PlaneGeometry(0.24, 0.24);
      const logoMesh = new THREE.Mesh(logoGeo, logoMat);
      logoMesh.position.set(0, 0.24, 0.40);
      logoMesh.rotation.x = -0.25;
      headGroup.add(logoMesh);

      // Bulbous Nose
      const noseGeo = new THREE.SphereGeometry(0.18, 12, 12);
      const nose = new THREE.Mesh(noseGeo, skinMat);
      nose.position.set(0, 0.03, 0.44);
      headGroup.add(nose);

      // 3D Scalloped Mustache (6 distinct rounded lobes)
      const mustacheLobeInner = new THREE.SphereGeometry(0.095, 8, 8);
      const mInnerL = new THREE.Mesh(mustacheLobeInner, darkMustacheMat);
      mInnerL.position.set(-0.09, -0.07, 0.44);
      const mInnerR = mInnerL.clone();
      mInnerR.position.x = 0.09;

      const mustacheLobeMid = new THREE.SphereGeometry(0.105, 8, 8);
      const mMidL = new THREE.Mesh(mustacheLobeMid, darkMustacheMat);
      mMidL.position.set(-0.21, -0.09, 0.40);
      const mMidR = mMidL.clone();
      mMidR.position.x = 0.21;

      const mustacheLobeOuter = new THREE.SphereGeometry(0.09, 8, 8);
      const mOuterL = new THREE.Mesh(mustacheLobeOuter, darkMustacheMat);
      mOuterL.position.set(-0.32, -0.12, 0.33);
      const mOuterR = mOuterL.clone();
      mOuterR.position.x = 0.32;

      const mustacheBacking = new THREE.BoxGeometry(0.50, 0.10, 0.12);
      const mBack = new THREE.Mesh(mustacheBacking, darkMustacheMat);
      mBack.position.set(0, -0.09, 0.36);

      headGroup.add(mInnerL); headGroup.add(mInnerR);
      headGroup.add(mMidL); headGroup.add(mMidR);
      headGroup.add(mOuterL); headGroup.add(mOuterR);
      headGroup.add(mBack);

      // Cartoon Eyes
      const scleraGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const scleraL = new THREE.Mesh(scleraGeo, whiteMat);
      scleraL.scale.set(0.7, 1.15, 0.6);
      scleraL.position.set(-0.16, 0.13, 0.38);
      const scleraR = scleraL.clone();
      scleraR.position.x = 0.16;

      const irisGeo = new THREE.SphereGeometry(0.05, 8, 8);
      const irisL = new THREE.Mesh(irisGeo, eyeBlueMat);
      irisL.position.set(-0.16, 0.13, 0.42);
      const irisR = irisL.clone();
      irisR.position.x = 0.16;

      const pupilGeo = new THREE.SphereGeometry(0.03, 6, 6);
      const pupilL = new THREE.Mesh(pupilGeo, pupilMat);
      pupilL.position.set(-0.16, 0.13, 0.44);
      const pupilR = pupilL.clone();
      pupilR.position.x = 0.16;

      headGroup.add(scleraL); headGroup.add(scleraR);
      headGroup.add(irisL); headGroup.add(irisR);
      headGroup.add(pupilL); headGroup.add(pupilR);

      group.add(headGroup);
      this.player.limbs.head = headGroup;

      // Arms & Hands
      const armGeo = new THREE.CylinderGeometry(0.13, 0.12, 0.40, 10);
      const gloveCuffGeo = new THREE.TorusGeometry(0.15, 0.045, 8, 14);
      const glovePalmGeo = new THREE.SphereGeometry(0.17, 10, 10);
      const gloveThumbGeo = new THREE.SphereGeometry(0.075, 8, 8);

      const armL = new THREE.Group();
      armL.position.set(-0.44, 0.80, 0);
      const armLMesh = new THREE.Mesh(armGeo, redMat);
      armLMesh.position.y = -0.18;
      const cuffL = new THREE.Mesh(gloveCuffGeo, whiteMat);
      cuffL.rotation.x = Math.PI / 2;
      cuffL.position.y = -0.36;
      const gloveL = new THREE.Mesh(glovePalmGeo, whiteMat);
      gloveL.position.y = -0.48;
      const thumbL = new THREE.Mesh(gloveThumbGeo, whiteMat);
      thumbL.position.set(0.10, -0.44, 0.08);
      armL.add(armLMesh); armL.add(cuffL); armL.add(gloveL); armL.add(thumbL);
      group.add(armL);
      this.player.limbs.armL = armL;

      const armR = new THREE.Group();
      armR.position.set(0.44, 0.80, 0);
      const armRMesh = new THREE.Mesh(armGeo, redMat);
      armRMesh.position.y = -0.18;
      const cuffR = new THREE.Mesh(gloveCuffGeo, whiteMat);
      cuffR.rotation.x = Math.PI / 2;
      cuffR.position.y = -0.36;
      const gloveR = new THREE.Mesh(glovePalmGeo, whiteMat);
      gloveR.position.y = -0.48;
      const thumbR = new THREE.Mesh(gloveThumbGeo, whiteMat);
      thumbR.position.set(-0.10, -0.44, 0.08);
      armR.add(armRMesh); armR.add(cuffR); armR.add(gloveR); armR.add(thumbR);
      group.add(armR);
      this.player.limbs.armR = armR;

      // Legs & Boots
      const legGeo = new THREE.CylinderGeometry(0.16, 0.15, 0.32, 10);
      const bootHeelGeo = new THREE.SphereGeometry(0.18, 10, 10);
      const bootToeGeo = new THREE.SphereGeometry(0.17, 10, 10);
      const soleGeo = new THREE.BoxGeometry(0.28, 0.07, 0.48);

      const legL = new THREE.Group();
      legL.position.set(-0.20, 0.34, 0);
      const legLMesh = new THREE.Mesh(legGeo, denimMat);
      legLMesh.position.y = -0.14;
      const heelL = new THREE.Mesh(bootHeelGeo, brownBootMat);
      heelL.position.set(0, -0.26, 0.02);
      const toeL = new THREE.Mesh(bootToeGeo, brownBootMat);
      toeL.scale.set(0.95, 0.8, 1.15);
      toeL.position.set(0, -0.28, 0.15);
      const soleL = new THREE.Mesh(soleGeo, rubberSoleMat);
      soleL.position.set(0, -0.37, 0.08);
      legL.add(legLMesh); legL.add(heelL); legL.add(toeL); legL.add(soleL);
      group.add(legL);
      this.player.limbs.legL = legL;

      const legR = new THREE.Group();
      legR.position.set(0.20, 0.34, 0);
      const legRMesh = new THREE.Mesh(legGeo, denimMat);
      legRMesh.position.y = -0.14;
      const heelR = new THREE.Mesh(bootHeelGeo, brownBootMat);
      heelR.position.set(0, -0.26, 0.02);
      const toeR = new THREE.Mesh(bootToeGeo, brownBootMat);
      toeR.scale.set(0.95, 0.8, 1.15);
      toeR.position.set(0, -0.28, 0.15);
      const soleR = new THREE.Mesh(soleGeo, rubberSoleMat);
      soleR.position.set(0, -0.37, 0.08);
      legR.add(legRMesh); legR.add(heelR); legR.add(toeR); legR.add(soleR);
      group.add(legR);
      this.player.limbs.legR = legR;

      group.castShadow = true;
      this.scene.add(group);
      return group;
    }

    // --- Interactive 3D Objects Builders ---
    createQuestionBlock(x, y, z, reward = 'COIN') {
      let mesh = null;
      if (this.hasThree) {
        const geo = new THREE.BoxGeometry(1.3, 1.3, 1.3);
        const mat = new THREE.MeshStandardMaterial({
          map: this.textures.question,
          metalness: 0.3,
          roughness: 0.4
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
      }
      this.blocks.push({
        type: 'QUESTION', reward: reward,
        x: x, y: y, z: z, size: 1.3, hit: false, mesh: mesh
      });
    }

    createBrickBlock(x, y, z) {
      let mesh = null;
      if (this.hasThree) {
        const geo = new THREE.BoxGeometry(1.3, 1.3, 1.3);
        const mat = new THREE.MeshStandardMaterial({ map: this.textures.brick, roughness: 0.8 });
        mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
      }
      this.blocks.push({
        type: 'BRICK', x: x, y: y, z: z, size: 1.3, hit: false, mesh: mesh
      });
    }

    createPipe(x, y, z, height = 2.6, isWarp = false, targetSub = null) {
      let mesh = null;
      if (this.hasThree) {
        const group = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({ color: 0x27ae60, roughness: 0.3, metalness: 0.2 });
        const colGeo = new THREE.CylinderGeometry(0.95, 0.95, height, 16);
        const col = new THREE.Mesh(colGeo, mat);
        col.position.y = height / 2;
        col.castShadow = true;
        group.add(col);

        const rimGeo = new THREE.CylinderGeometry(1.15, 1.15, 0.55, 16);
        const rim = new THREE.Mesh(rimGeo, mat);
        rim.position.y = height - 0.25;
        rim.castShadow = true;
        group.add(rim);

        // Dark interior entrance hole
        const holeGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.15, 16);
        const holeMat = new THREE.MeshBasicMaterial({ color: 0x051b0a });
        const hole = new THREE.Mesh(holeGeo, holeMat);
        hole.position.y = height + 0.02;
        group.add(hole);

        // Pulsing golden ring for warp pipes
        if (isWarp) {
          const warpRingGeo = new THREE.TorusGeometry(0.92, 0.06, 8, 16);
          const warpRingMat = new THREE.MeshBasicMaterial({ color: 0xf1c40f });
          const warpRing = new THREE.Mesh(warpRingGeo, warpRingMat);
          warpRing.rotation.x = Math.PI / 2;
          warpRing.position.y = height + 0.06;
          group.add(warpRing);
        }

        group.position.set(x, y, z);
        this.scene.add(group);
        mesh = group;
      }
      this.blocks.push({
        type: 'PIPE', x: x, y: y + height / 2, z: z,
        size: 1.9, height: height, isWarp: isWarp, targetSub: targetSub, mesh: mesh
      });
    }

    createCoin(x, y, z) {
      let mesh = null;
      if (this.hasThree) {
        const geo = new THREE.CylinderGeometry(0.42, 0.42, 0.1, 14);
        const mat = new THREE.MeshStandardMaterial({ color: 0xfbd000, metalness: 0.85, roughness: 0.15 });
        mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        mesh.rotation.z = Math.PI / 2;
        mesh.castShadow = true;
        this.scene.add(mesh);
      }
      this.coinsEntities.push({
        x: x, y: y, z: z, radius: 0.55, collected: false, mesh: mesh
      });
    }

    createGreenStar(x, y, z, id) {
      let mesh = null;
      if (this.hasThree) {
        const group = new THREE.Group();
        const starMat = new THREE.MeshStandardMaterial({
          color: 0x2ed573,
          emissive: 0x20bf6b,
          emissiveIntensity: 0.4,
          metalness: 0.5,
          roughness: 0.2
        });

        // 3D 5-pointed Star mesh composition
        const starShape = new THREE.Shape();
        const points = 5;
        for (let i = 0; i < points * 2; i++) {
          const l = i % 2 === 1 ? 0.4 : 0.95;
          const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
          const px = Math.cos(a) * l;
          const py = Math.sin(a) * l;
          if (i === 0) starShape.moveTo(px, py);
          else starShape.lineTo(px, py);
        }
        starShape.closePath();

        const extrudeSettings = { depth: 0.3, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.08, bevelThickness: 0.08 };
        const geo = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
        const m = new THREE.Mesh(geo, starMat);
        m.castShadow = true;
        group.add(m);

        group.position.set(x, y, z);
        this.scene.add(group);
        mesh = group;
      }

      this.starsEntities.push({
        id: id, x: x, y: y, z: z, radius: 0.85,
        collected: this.collectedStars.has(id),
        mesh: mesh
      });
    }

    createGoomba(x, y, z) {
      let mesh = null;
      if (this.hasThree) {
        const group = new THREE.Group();
        const brownMat = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
        const stemMat = new THREE.MeshLambertMaterial({ color: 0xffeaa7 });
        const whiteMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const blackMat = new THREE.MeshBasicMaterial({ color: 0x1e272e });
        const footMat = new THREE.MeshLambertMaterial({ color: 0x3d1f05 });

        // Mushroom Cap Dome
        const capGeo = new THREE.SphereGeometry(0.68, 12, 12);
        const cap = new THREE.Mesh(capGeo, brownMat);
        cap.scale.set(1.05, 0.82, 1.05);
        cap.position.y = 0.62;
        cap.castShadow = true;
        group.add(cap);

        // Cream Stem
        const stemGeo = new THREE.CylinderGeometry(0.34, 0.44, 0.38, 10);
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.y = 0.22;
        group.add(stem);

        // Two Waddling Feet
        const footGeo = new THREE.SphereGeometry(0.20, 8, 8);
        const footL = new THREE.Mesh(footGeo, footMat);
        footL.scale.set(1.1, 0.5, 1.4);
        footL.position.set(-0.28, 0.08, 0.05);
        const footR = footL.clone();
        footR.position.x = 0.28;
        group.add(footL); group.add(footR);

        // Eyes & Menacing Eyebrows
        const eyeGeo = new THREE.SphereGeometry(0.09, 8, 8);
        const eyeL = new THREE.Mesh(eyeGeo, whiteMat);
        eyeL.scale.set(0.6, 1.2, 0.5);
        eyeL.position.set(-0.16, 0.45, 0.52);
        const eyeR = eyeL.clone();
        eyeR.position.x = 0.16;

        const pupGeo = new THREE.SphereGeometry(0.04, 6, 6);
        const pupL = new THREE.Mesh(pupGeo, blackMat);
        pupL.position.set(-0.15, 0.45, 0.56);
        const pupR = pupL.clone();
        pupR.position.x = 0.15;

        // Slanted Angry Eyebrows
        const browGeo = new THREE.BoxGeometry(0.22, 0.05, 0.06);
        const browL = new THREE.Mesh(browGeo, blackMat);
        browL.position.set(-0.18, 0.58, 0.54);
        browL.rotation.z = -0.3;
        const browR = new THREE.Mesh(browGeo, blackMat);
        browR.position.set(0.18, 0.58, 0.54);
        browR.rotation.z = 0.3;

        // Two Pointy Bottom Fangs
        const fangGeo = new THREE.ConeGeometry(0.04, 0.12, 6);
        const fangL = new THREE.Mesh(fangGeo, whiteMat);
        fangL.position.set(-0.12, 0.28, 0.52);
        fangL.rotation.z = 0.2;
        const fangR = fangL.clone();
        fangR.position.x = 0.12;
        fangR.rotation.z = -0.2;

        group.add(eyeL); group.add(eyeR);
        group.add(pupL); group.add(pupR);
        group.add(browL); group.add(browR);
        group.add(fangL); group.add(fangR);

        group.position.set(x, y, z);
        this.scene.add(group);
        mesh = group;
      }
      this.enemies.push({
        type: 'GOOMBA', x: x, y: y, z: z, vx: 1.6,
        radius: 0.65, isAlive: true, mesh: mesh
      });
    }

    createKoopa(x, y, z, isWinged = false) {
      let mesh = null;
      if (this.hasThree) {
        const group = new THREE.Group();
        const greenMat = new THREE.MeshLambertMaterial({ color: 0x2ed573 });
        const yellowMat = new THREE.MeshLambertMaterial({ color: 0xfbd000 });
        const whiteMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const orangeFootMat = new THREE.MeshLambertMaterial({ color: 0xe67e22 });

        // Smooth Green Carapace
        const shellGeo = new THREE.SphereGeometry(0.65, 12, 12);
        const shell = new THREE.Mesh(shellGeo, greenMat);
        shell.position.y = 0.65;
        shell.scale.set(0.9, 1.15, 0.9);
        shell.castShadow = true;
        group.add(shell);

        // White Shell Rim Collar
        const rimGeo = new THREE.TorusGeometry(0.55, 0.08, 8, 16);
        const rim = new THREE.Mesh(rimGeo, whiteMat);
        rim.rotation.x = Math.PI / 2;
        rim.position.y = 0.35;
        group.add(rim);

        // Head & Beak Snout
        const headGeo = new THREE.SphereGeometry(0.32, 10, 10);
        const head = new THREE.Mesh(headGeo, yellowMat);
        head.position.set(0, 1.05, 0.35);
        const beakGeo = new THREE.ConeGeometry(0.18, 0.3, 8);
        const beak = new THREE.Mesh(beakGeo, yellowMat);
        beak.rotation.x = Math.PI / 2;
        beak.position.set(0, 0.98, 0.62);
        group.add(head);
        group.add(beak);

        // Two Orange Walking Feet
        const footGeo = new THREE.SphereGeometry(0.18, 8, 8);
        const footL = new THREE.Mesh(footGeo, orangeFootMat);
        footL.scale.set(1.0, 0.5, 1.4);
        footL.position.set(-0.25, 0.1, 0.1);
        const footR = footL.clone();
        footR.position.x = 0.25;
        group.add(footL); group.add(footR);

        if (isWinged) {
          const wingMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
          const wingGeo = new THREE.PlaneGeometry(0.5, 0.35);
          const wL = new THREE.Mesh(wingGeo, wingMat);
          wL.position.set(-0.65, 0.9, 0);
          wL.rotation.y = Math.PI / 4;
          const wR = wL.clone();
          wR.position.x = 0.65;
          wR.rotation.y = -Math.PI / 4;
          group.add(wL); group.add(wR);
        }

        group.position.set(x, y, z);
        this.scene.add(group);
        mesh = group;
      }
      this.enemies.push({
        type: 'KOOPA', isWinged: isWinged, x: x, y: y, z: z,
        vx: 2.0, radius: 0.75, isShell: false, isAlive: true, mesh: mesh
      });
    }

    createBowser(x, y, z) {
      let mesh = null;
      if (this.hasThree) {
        const group = new THREE.Group();
        const greenMat = new THREE.MeshStandardMaterial({ color: 0x27ae60, roughness: 0.7 });
        const yellowMat = new THREE.MeshLambertMaterial({ color: 0xf1c40f });
        const redMat = new THREE.MeshLambertMaterial({ color: 0xe74c3c });
        const hornMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3 });

        // Massive Spiked Shell
        const shellGeo = new THREE.SphereGeometry(2.4, 14, 14);
        const shell = new THREE.Mesh(shellGeo, greenMat);
        shell.position.y = 2.4;
        shell.scale.set(1.2, 1.1, 1.4);
        shell.castShadow = true;
        group.add(shell);

        // 8 Individual 3D Spikes on Carapace
        const spikeGeo = new THREE.ConeGeometry(0.3, 0.9, 8);
        const spikeOffsets = [
          [-0.8, 3.2, 0.4], [0.8, 3.2, 0.4],
          [-0.9, 2.5, -0.6], [0.9, 2.5, -0.6],
          [0, 3.6, -0.2], [0, 2.8, 0.8],
          [-0.7, 1.8, -0.8], [0.7, 1.8, -0.8]
        ];
        spikeOffsets.forEach(([sx, sy, sz]) => {
          const spk = new THREE.Mesh(spikeGeo, hornMat);
          spk.position.set(sx, sy, sz);
          spk.rotation.x = Math.PI / 4;
          group.add(spk);
        });

        // Muscular Head & Jaw
        const headGeo = new THREE.BoxGeometry(1.6, 1.6, 1.8);
        const head = new THREE.Mesh(headGeo, yellowMat);
        head.position.set(0, 3.8, 1.4);
        head.castShadow = true;
        group.add(head);

        // Crimson Horns
        const hornGeo = new THREE.ConeGeometry(0.3, 1.1, 8);
        const hornL = new THREE.Mesh(hornGeo, redMat);
        hornL.position.set(-0.75, 4.8, 1.1);
        hornL.rotation.z = 0.35;
        const hornR = hornL.clone();
        hornR.position.x = 0.75;
        hornR.rotation.z = -0.35;
        group.add(hornL); group.add(hornR);

        group.position.set(x, y, z);
        this.scene.add(group);
        mesh = group;
      }

      this.boss = {
        x: x, y: y, z: z,
        hp: 4, maxHp: 4,
        phase: 1, // Phase 1: Fire breath & shockwave; Phase 2: Enraged shell spin
        radius: 2.8,
        isAlive: true,
        fireTimer: 0,
        chargeTimer: 0,
        chargeVx: 0,
        mesh: mesh
      };
    }

    createFlagpole(x, y, z) {
      let mesh = null;
      let flagMesh = null;
      if (this.hasThree) {
        const group = new THREE.Group();
        const poleMat = new THREE.MeshStandardMaterial({ color: 0xdfe4ea, metalness: 0.8 });
        const poleGeo = new THREE.CylinderGeometry(0.14, 0.14, 10, 12);
        const pole = new THREE.Mesh(poleGeo, poleMat);
        pole.position.y = 5.0;
        pole.castShadow = true;
        group.add(pole);

        const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbd000, metalness: 0.9 });
        const ballGeo = new THREE.SphereGeometry(0.4, 8, 8);
        const ball = new THREE.Mesh(ballGeo, goldMat);
        ball.position.y = 10.0;
        group.add(ball);

        const flagMat = new THREE.MeshLambertMaterial({ color: 0x2ed573, side: THREE.DoubleSide });
        const flagGeo = new THREE.PlaneGeometry(1.8, 1.1);
        const flag = new THREE.Mesh(flagGeo, flagMat);
        flag.position.set(1.0, 9.2, 0);
        group.add(flag);
        flagMesh = flag;

        group.position.set(x, y, z);
        this.scene.add(group);
        mesh = group;
      }
      this.flagpole = { x: x, y: y, z: z, reached: false, mesh: mesh, flagMesh: flagMesh };
    }

    createCastle(x, y, z) {
      let mesh = null;
      let castleFlag = null;
      if (this.hasThree) {
        const group = new THREE.Group();
        const stoneMat = new THREE.MeshLambertMaterial({ map: this.textures.brick });
        const greenRoofMat = new THREE.MeshLambertMaterial({ color: 0x27ae60 });
        const goldMat = new THREE.MeshStandardMaterial({ color: 0xf1c40f, metalness: 0.8, roughness: 0.2 });
        const darkDoorMat = new THREE.MeshBasicMaterial({ color: 0x05050a });

        // Central Keep Body
        const keepGeo = new THREE.BoxGeometry(6.6, 6.5, 5.4);
        const keep = new THREE.Mesh(keepGeo, stoneMat);
        keep.position.y = 3.25;
        keep.castShadow = true;
        keep.receiveShadow = true;
        group.add(keep);

        // Roof Crenellations (battlements)
        const crenGeo = new THREE.BoxGeometry(0.85, 0.7, 0.85);
        const merlons = [
          [-3.0, 6.8, -2.4], [0, 6.8, -2.4], [3.0, 6.8, -2.4],
          [-3.0, 6.8, 2.4], [0, 6.8, 2.4], [3.0, 6.8, 2.4],
          [-3.0, 6.8, 0], [3.0, 6.8, 0]
        ];
        merlons.forEach(([mx, my, mz]) => {
          const m = new THREE.Mesh(crenGeo, stoneMat);
          m.position.set(mx, my, mz);
          group.add(m);
        });

        // Left & Right Flanking Round Towers
        const towerGeo = new THREE.CylinderGeometry(1.6, 1.8, 8.5, 12);
        const roofGeo = new THREE.ConeGeometry(2.1, 3.4, 12);
        const finialGeo = new THREE.SphereGeometry(0.32, 8, 8);

        [-4.2, 4.2].forEach(tx => {
          const tower = new THREE.Mesh(towerGeo, stoneMat);
          tower.position.set(tx, 4.25, 0);
          tower.castShadow = true;
          const roof = new THREE.Mesh(roofGeo, greenRoofMat);
          roof.position.set(tx, 10.2, 0);
          roof.castShadow = true;
          const finial = new THREE.Mesh(finialGeo, goldMat);
          finial.position.set(tx, 12.0, 0);
          group.add(tower); group.add(roof); group.add(finial);
        });

        // Center High Tower
        const centerTowerGeo = new THREE.CylinderGeometry(1.4, 1.5, 4.0, 12);
        const centerTower = new THREE.Mesh(centerTowerGeo, stoneMat);
        centerTower.position.set(0, 8.5, 0);
        const centerRoof = new THREE.Mesh(new THREE.ConeGeometry(1.8, 2.8, 12), greenRoofMat);
        centerRoof.position.set(0, 11.9, 0);
        group.add(centerTower); group.add(centerRoof);

        // Center Tower Flagpole & Hoistable Flag
        const cPole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.0, 8), goldMat);
        cPole.position.set(0, 14.8, 0);
        const cFlagGeo = new THREE.PlaneGeometry(1.4, 0.9);
        const cFlagMat = new THREE.MeshLambertMaterial({ color: 0xe74c3c, side: THREE.DoubleSide });
        castleFlag = new THREE.Mesh(cFlagGeo, cFlagMat);
        castleFlag.position.set(0.7, 13.6, 0); // starts lowered
        group.add(cPole); group.add(castleFlag);

        // Arched Castle Entrance (Doorway)
        const doorGeo = new THREE.BoxGeometry(2.2, 3.2, 1.2);
        const door = new THREE.Mesh(doorGeo, darkDoorMat);
        door.position.set(0, 1.6, 2.4);
        group.add(door);

        const archTrimGeo = new THREE.TorusGeometry(1.1, 0.12, 8, 16, Math.PI);
        const archTrim = new THREE.Mesh(archTrimGeo, goldMat);
        archTrim.position.set(0, 3.2, 2.8);
        group.add(archTrim);

        group.position.set(x, y, z);
        this.scene.add(group);
        mesh = group;
      }
      this.endCastle = {
        x: x, y: y, z: z,
        flagMesh: castleFlag,
        flagRaised: false,
        mesh: mesh
      };
    }

    createPeachCastleBackdrop(x, y, z) {
      if (!this.hasThree) return;
      const group = new THREE.Group();
      const whiteStoneMat = new THREE.MeshLambertMaterial({ color: 0xf5f6fa });
      const redRoofMat = new THREE.MeshLambertMaterial({ color: 0xe74c3c });
      const goldMat = new THREE.MeshStandardMaterial({ color: 0xf1c40f, metalness: 0.8 });
      const glassMat = new THREE.MeshBasicMaterial({ color: 0xff9ff3 });

      // Grand Palace Keep
      const keep = new THREE.Mesh(new THREE.BoxGeometry(24, 18, 16), whiteStoneMat);
      keep.position.y = 9;
      group.add(keep);

      // Stained Glass Peach Portrait Circle
      const roseWindow = new THREE.Mesh(new THREE.CircleGeometry(3.8, 16), glassMat);
      roseWindow.position.set(0, 12, 8.1);
      group.add(roseWindow);

      // 4 Majestic Corner Towers
      const towerGeo = new THREE.CylinderGeometry(3.0, 3.4, 26, 14);
      const spireGeo = new THREE.ConeGeometry(3.8, 9.0, 14);
      [[-13, -8], [13, -8], [-13, 8], [13, 8]].forEach(([tx, tz]) => {
        const tower = new THREE.Mesh(towerGeo, whiteStoneMat);
        tower.position.set(tx, 13, tz);
        const spire = new THREE.Mesh(spireGeo, redRoofMat);
        spire.position.set(tx, 30.5, tz);
        const finial = new THREE.Mesh(new THREE.SphereGeometry(0.7, 8, 8), goldMat);
        finial.position.set(tx, 35.2, tz);
        group.add(tower); group.add(spire); group.add(finial);
      });

      // Central Grand Tower & Spire
      const cTower = new THREE.Mesh(new THREE.CylinderGeometry(4.4, 4.8, 16, 14), whiteStoneMat);
      cTower.position.set(0, 26, 0);
      const cSpire = new THREE.Mesh(new THREE.ConeGeometry(5.4, 12, 14), redRoofMat);
      cSpire.position.set(0, 40, 0);
      const cFinial = new THREE.Mesh(new THREE.SphereGeometry(1.0, 8, 8), goldMat);
      cFinial.position.set(0, 46.5, 0);
      group.add(cTower); group.add(cSpire); group.add(cFinial);

      group.position.set(x, y, z);
      this.scene.add(group);
    }

    spawnFireworks(x, y, z) {
      if (!this.hasThree) return;
      const colors = [0xe74c3c, 0xf1c40f, 0x2ecc71, 0x3498db, 0x9b51e0];
      for (let burst = 0; burst < 3; burst++) {
        setTimeout(() => {
          this.sound.playFirework();
          const bx = x + (Math.random() - 0.5) * 8;
          const by = y + Math.random() * 4;
          const bz = z + (Math.random() - 0.5) * 4;
          const col = colors[Math.floor(Math.random() * colors.length)];
          const pMat = new THREE.MeshBasicMaterial({ color: col });
          for (let pIdx = 0; pIdx < 24; pIdx++) {
            const pGeo = new THREE.SphereGeometry(0.18, 6, 6);
            const m = new THREE.Mesh(pGeo, pMat);
            m.position.set(bx, by, bz);
            this.scene.add(m);
            const angle = Math.random() * Math.PI * 2;
            const elevation = (Math.random() - 0.5) * Math.PI;
            const speed = 4.0 + Math.random() * 6.0;
            const vx = Math.cos(angle) * Math.cos(elevation) * speed;
            const vy = Math.sin(elevation) * speed + 2.0;
            const vz = Math.sin(angle) * Math.cos(elevation) * speed;
            this.particles.push({ mesh: m, x: bx, y: by, z: bz, vx, vy, vz, life: 1.2 });
          }
        }, burst * 450);
      }
    }

    enterPipeSubWorld(pipe) {
      if (this.pipeTransition && this.pipeTransition.active) return;
      this.sound.playPipeWarp();
      this.pipeTransition = {
        active: true,
        phase: 'SINK',
        timer: 0.8,
        pipeType: pipe && pipe.targetSub === 'EXIT_TO_MAIN' ? 'EXIT' : 'ENTER',
        targetY: pipe ? (pipe.y || 0) : 0
      };
      if (pipe && pipe.targetSub !== 'EXIT_TO_MAIN') {
        this.subWorldReturnState = {
          worldIndex: this.worldIndex,
          returnX: pipe.x,
          returnZ: pipe.z
        };
      }
    }

    loadPipeSubWorld() {
      this.isSubWorld = true;
      if (this.hasThree) {
        const toRemove = [];
        this.scene.children.forEach(c => {
          if (c !== this.sunLight && c !== this.ambientLight) toRemove.push(c);
        });
        toRemove.forEach(c => this.scene.remove(c));

        // Subterranean dark indigo atmosphere
        this.scene.background.setHex(0x060914);
        this.scene.fog.color.setHex(0x060914);
        this.scene.fog.near = 15;
        this.scene.fog.far = 70;

        // Subterranean blue brick floor & ceiling
        const floorMat = new THREE.MeshLambertMaterial({ map: this.textures.undergroundBrick });
        const floorGeo = new THREE.BoxGeometry(16, 2, 55);
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.position.set(0, -1, 22.5);
        floor.receiveShadow = true;
        this.scene.add(floor);

        const ceilGeo = new THREE.BoxGeometry(16, 2, 55);
        const ceil = new THREE.Mesh(ceilGeo, floorMat);
        ceil.position.set(0, 9.5, 22.5);
        this.scene.add(ceil);

        // Side walls
        const wallGeo = new THREE.BoxGeometry(2, 9, 55);
        const wallL = new THREE.Mesh(wallGeo, floorMat);
        wallL.position.set(-8.5, 4.5, 22.5);
        const wallR = new THREE.Mesh(wallGeo, floorMat);
        wallR.position.set(8.5, 4.5, 22.5);
        this.scene.add(wallL); this.scene.add(wallR);

        // Cavern magical point lights
        const pl1 = new THREE.PointLight(0x00cec9, 1.4, 30);
        pl1.position.set(0, 6, 12);
        const pl2 = new THREE.PointLight(0x6c5ce7, 1.4, 30);
        pl2.position.set(0, 6, 32);
        this.scene.add(pl1); this.scene.add(pl2);
      }

      this.blocks = [];
      this.coinsEntities = [];
      this.starsEntities = [];
      this.enemies = [];
      this.fireballs = [];
      this.particles = [];
      this.boss = null;
      this.flagpole = null;
      this.endCastle = null;

      // Overhead Entry Pipe from ceiling
      this.createPipe(0, 5.0, 4, 3.5);

      // Recreate Player dropping down from overhead pipe
      this.player.pos = { x: 0, y: 5.5, z: 4 };
      this.player.vel = { x: 0, y: -3.0, z: 0 };
      this.player.isGrounded = false;
      this.player.mesh = this.createMarioMesh();
      if (this.player.mesh) {
        this.player.mesh.position.set(0, 5.5, 4);
      }

      // 18 Golden Coins in 3 wavy rows
      for (let i = 0; i < 6; i++) {
        const cz = 12 + i * 3.5;
        this.createCoin(-2.2, 1.8 + Math.sin(i * 0.8) * 0.8, cz);
        this.createCoin(0, 2.5 + Math.cos(i * 0.8) * 0.8, cz);
        this.createCoin(2.2, 1.8 + Math.sin(i * 0.8) * 0.8, cz);
      }

      // Bonus Question Blocks
      this.createQuestionBlock(0, 3.2, 16, 'FLOWER');
      this.createBrickBlock(-2, 3.2, 16);
      this.createBrickBlock(2, 3.2, 16);

      // Hidden Subterranean Green Power Star!
      const currentWorld = LEVEL_REGISTRY[this.worldIndex] || LEVEL_REGISTRY[0];
      const starId = currentWorld.greenStars[1] ? currentWorld.greenStars[1].id : `${currentWorld.id}-S2`;
      this.createGreenStar(0, 4.2, 26, starId);

      // Exit Warp Pipe at the end of the cavern (z = 38)
      this.createPipe(0, 0, 38, 2.6, true, 'EXIT_TO_MAIN');
    }

    exitPipeSubWorld() {
      this.sound.playPipeWarp();
      this.isSubWorld = false;
      const targetWorld = this.subWorldReturnState ? this.subWorldReturnState.worldIndex : this.worldIndex;
      const returnX = this.subWorldReturnState ? this.subWorldReturnState.returnX : 0;
      const returnZ = this.subWorldReturnState ? this.subWorldReturnState.returnZ : 48;
      this.loadWorld(targetWorld);
      // Place player emerging on top of surface pipe with upward pop
      this.player.pos = { x: returnX, y: 4.2, z: returnZ };
      this.player.vel = { x: 0, y: 8.5, z: 0 };
      this.player.isGrounded = false;
      if (this.player.mesh) {
        this.player.mesh.position.set(returnX, 4.2, returnZ);
      }
    }

    createAxeSwitch(x, y, z) {
      let mesh = null;
      if (this.hasThree) {
        const group = new THREE.Group();
        const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbd000, metalness: 0.9, roughness: 0.2 });
        const bladeGeo = new THREE.BoxGeometry(1.0, 1.0, 0.2);
        const blade = new THREE.Mesh(bladeGeo, goldMat);
        blade.position.y = 1.1;
        group.add(blade);

        group.position.set(x, y, z);
        this.scene.add(group);
        mesh = group;
      }
      this.axeSwitch = { x: x, y: y, z: z, pulled: false, mesh: mesh };
    }

    // --- Stylized 3D Environmental Builders ---
    createCloud(x, y, z, scale = 1.0, withEyes = false) {
      if (!this.hasThree) return;
      const cloudGroup = new THREE.Group();
      const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff });

      const puffs = [
        { x: 0, y: 0, z: 0, r: 2.2 * scale },
        { x: -1.7 * scale, y: -0.3 * scale, z: 0, r: 1.6 * scale },
        { x: 1.7 * scale, y: -0.3 * scale, z: 0, r: 1.65 * scale },
        { x: -0.8 * scale, y: 0.7 * scale, z: 0.2 * scale, r: 1.4 * scale },
        { x: 0.8 * scale, y: 0.65 * scale, z: -0.2 * scale, r: 1.35 * scale }
      ];
      puffs.forEach(p => {
        const geo = new THREE.SphereGeometry(p.r, 10, 10);
        const m = new THREE.Mesh(geo, cloudMat);
        m.position.set(p.x, p.y, p.z);
        cloudGroup.add(m);
      });

      if (withEyes && this.textures.cartoonEye) {
        const eyeMat = new THREE.MeshBasicMaterial({ map: this.textures.cartoonEye, transparent: true, side: THREE.DoubleSide });
        const eyeGeo = new THREE.PlaneGeometry(0.85 * scale, 1.7 * scale);
        const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
        eyeL.position.set(-0.55 * scale, 0.05 * scale, -2.1 * scale);
        eyeL.rotation.y = Math.PI;
        const eyeR = eyeL.clone();
        eyeR.position.x = 0.55 * scale;
        cloudGroup.add(eyeL); cloudGroup.add(eyeR);
      }

      cloudGroup.position.set(x, y, z);
      this.scene.add(cloudGroup);
    }

    createHill(x, y, z, radius = 24, withEyes = true) {
      if (!this.hasThree) return;
      const hillGroup = new THREE.Group();
      const hillMat = new THREE.MeshLambertMaterial({ color: 0x44bd32 });
      const hillGeo = new THREE.SphereGeometry(radius, 18, 18);
      const hillMesh = new THREE.Mesh(hillGeo, hillMat);
      hillMesh.scale.set(1.1, 0.75, 1.0);
      hillGroup.add(hillMesh);

      if (withEyes && this.textures.cartoonEye) {
        const eyeMat = new THREE.MeshBasicMaterial({ map: this.textures.cartoonEye, transparent: true, side: THREE.DoubleSide });
        const eyeW = radius * 0.16;
        const eyeH = radius * 0.32;
        const eyeGeo = new THREE.PlaneGeometry(eyeW, eyeH);

        // Dynamically compute vector toward player start (0, 0, 0)
        const dx = -x;
        const dz = -z;
        const len = Math.hypot(dx, dz) || 1.0;
        const ux = dx / len;
        const uz = dz / len;

        const eyeDist = radius * 0.94;
        const cx = ux * eyeDist;
        const cz = uz * eyeDist;
        const cy = radius * 0.35;

        // Tangent vector for left/right eye spacing
        const tx = -uz;
        const tz = ux;
        const spacing = eyeW * 0.9;

        const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
        eyeL.position.set(cx - tx * spacing, cy, cz - tz * spacing);
        const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
        eyeR.position.set(cx + tx * spacing, cy, cz + tz * spacing);

        const yawAngle = Math.atan2(ux, uz);
        eyeL.rotation.y = yawAngle;
        eyeR.rotation.y = yawAngle;

        hillGroup.add(eyeL); hillGroup.add(eyeR);
      }

      hillGroup.position.set(x, y, z);
      this.scene.add(hillGroup);
    }

    createTopiaryTree(x, y, z) {
      if (!this.hasThree) return;
      const treeGroup = new THREE.Group();
      const trunkMat = new THREE.MeshLambertMaterial({ color: 0x794a28 });
      const trunkGeo = new THREE.CylinderGeometry(0.24, 0.32, 2.2, 8);
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 1.1;
      trunk.castShadow = true;
      treeGroup.add(trunk);

      const leavesMat = new THREE.MeshLambertMaterial({ color: 0x2ed573 });
      const puff1Geo = new THREE.SphereGeometry(1.25, 10, 10);
      const puff1 = new THREE.Mesh(puff1Geo, leavesMat);
      puff1.position.y = 2.8;
      puff1.scale.set(1.0, 0.85, 1.0);
      puff1.castShadow = true;
      treeGroup.add(puff1);

      const puff2Geo = new THREE.SphereGeometry(0.85, 10, 10);
      const puff2 = new THREE.Mesh(puff2Geo, leavesMat);
      puff2.position.y = 3.8;
      puff2.scale.set(0.9, 0.8, 0.9);
      puff2.castShadow = true;
      treeGroup.add(puff2);

      treeGroup.position.set(x, y, z);
      this.scene.add(treeGroup);
    }

    createBush(x, y, z) {
      if (!this.hasThree) return;
      const bushGroup = new THREE.Group();
      const bushMat = new THREE.MeshLambertMaterial({ color: 0x26de81 });
      const redMat = new THREE.MeshLambertMaterial({ color: 0xeb4d4b });

      const b1 = new THREE.Mesh(new THREE.SphereGeometry(0.60, 8, 8), bushMat);
      b1.scale.set(1.0, 0.7, 1.0);
      b1.position.set(0, 0.35, 0);
      const b2 = new THREE.Mesh(new THREE.SphereGeometry(0.44, 8, 8), bushMat);
      b2.scale.set(1.0, 0.7, 1.0);
      b2.position.set(-0.42, 0.28, 0);
      const b3 = new THREE.Mesh(new THREE.SphereGeometry(0.46, 8, 8), bushMat);
      b3.scale.set(1.0, 0.7, 1.0);
      b3.position.set(0.42, 0.28, 0);
      bushGroup.add(b1); bushGroup.add(b2); bushGroup.add(b3);

      const berry1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), redMat);
      berry1.position.set(-0.2, 0.45, 0.38);
      const berry2 = berry1.clone();
      berry2.position.set(0.2, 0.45, 0.38);
      bushGroup.add(berry1); bushGroup.add(berry2);

      bushGroup.position.set(x, y, z);
      this.scene.add(bushGroup);
    }

    createFlowerCluster(x, y, z, colorHex = 0xf1c40f) {
      if (!this.hasThree) return;
      const flowerGroup = new THREE.Group();
      const petalMat = new THREE.MeshLambertMaterial({ color: colorHex });
      const centerMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
      const stemMat = new THREE.MeshLambertMaterial({ color: 0x27ae60 });

      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 6), stemMat);
      stem.position.y = 0.2;
      flowerGroup.add(stem);

      const center = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), centerMat);
      center.position.y = 0.42;
      flowerGroup.add(center);

      for (let a = 0; a < 5; a++) {
        const angle = (a / 5) * Math.PI * 2;
        const petal = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 6), petalMat);
        petal.position.set(Math.cos(angle) * 0.16, 0.42, Math.sin(angle) * 0.16);
        flowerGroup.add(petal);
      }

      flowerGroup.position.set(x, y, z);
      this.scene.add(flowerGroup);
    }

    createCrystal(x, y, z, colorHex = 0x00d2d3, scale = 1.0) {
      if (!this.hasThree) return;
      const crystalGroup = new THREE.Group();
      const crystalMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8
      });
      const geo = new THREE.ConeGeometry(0.45 * scale, 2.2 * scale, 6);
      const m1 = new THREE.Mesh(geo, crystalMat);
      m1.position.y = 1.1 * scale;
      crystalGroup.add(m1);

      const m2 = new THREE.Mesh(new THREE.ConeGeometry(0.3 * scale, 1.6 * scale, 6), crystalMat);
      m2.position.set(0.35 * scale, 0.8 * scale, 0.15 * scale);
      m2.rotation.z = -0.3;
      crystalGroup.add(m2);

      crystalGroup.position.set(x, y, z);
      this.scene.add(crystalGroup);
    }

    createPyramid(x, y, z, baseSize = 44, height = 26) {
      if (!this.hasThree) return;
      const pyrMat = new THREE.MeshLambertMaterial({ map: this.textures.sand });
      const tiers = 4;
      const pyrGroup = new THREE.Group();
      for (let i = 0; i < tiers; i++) {
        const tw = baseSize * (1 - i * 0.22);
        const th = height / tiers;
        const boxGeo = new THREE.BoxGeometry(tw, th, tw);
        const box = new THREE.Mesh(boxGeo, pyrMat);
        box.position.y = i * th + th / 2;
        pyrGroup.add(box);
      }
      pyrGroup.position.set(x, y, z);
      this.scene.add(pyrGroup);
    }

    createCactus(x, y, z) {
      if (!this.hasThree) return;
      const cactusGroup = new THREE.Group();
      const cactusMat = new THREE.MeshLambertMaterial({ color: 0x1b7e43 });
      const mainGeo = new THREE.CylinderGeometry(0.32, 0.32, 3.2, 10);
      const main = new THREE.Mesh(mainGeo, cactusMat);
      main.position.y = 1.6;
      cactusGroup.add(main);

      const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.2, 8), cactusMat);
      armL.position.set(-0.6, 2.1, 0);
      armL.rotation.z = Math.PI / 2;
      const upL = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.0, 8), cactusMat);
      upL.position.set(-1.1, 2.6, 0);
      cactusGroup.add(armL); cactusGroup.add(upL);

      cactusGroup.position.set(x, y, z);
      this.scene.add(cactusGroup);
    }

    // --- World & Level Loader ---
    loadWorld(worldIndex) {
      this.worldIndex = worldIndex;
      const worldData = LEVEL_REGISTRY[worldIndex];

      // Clear previous entities
      if (this.hasThree) {
        const toRemove = [];
        this.scene.children.forEach(c => {
          if (c !== this.sunLight && c !== this.ambientLight) toRemove.push(c);
        });
        toRemove.forEach(c => this.scene.remove(c));

        this.scene.background.setHex(worldData.skyColor);
        this.scene.fog.color.setHex(worldData.skyColor);
      }

      this.blocks = [];
      this.coinsEntities = [];
      this.starsEntities = [];
      this.enemies = [];
      this.fireballs = [];
      this.particles = [];
      this.boss = null;
      this.flagpole = null;
      this.axeSwitch = null;
      this.endCastle = null;
      this.pipeTransition = { active: false, timer: 0, phase: 'IDLE' };
      this.flagpoleCinematic = { active: false, phase: 'IDLE', timer: 0 };

      // Platform Island with Geological Strata Foundation
      if (this.hasThree) {
        let groundMat;
        if (worldData.groundType === 'GRASS') {
          groundMat = new THREE.MeshLambertMaterial({ map: this.textures.grass });
        } else if (worldData.groundType === 'SAND') {
          groundMat = new THREE.MeshLambertMaterial({ map: this.textures.sand });
        } else if (worldData.groundType === 'WOOD') {
          groundMat = new THREE.MeshLambertMaterial({ map: this.textures.wood });
        } else if (worldData.groundType === 'CASTLE_LAVA') {
          groundMat = new THREE.MeshLambertMaterial({ map: this.textures.castle });
        } else {
          groundMat = new THREE.MeshLambertMaterial({ color: 0x3d4852 });
        }

        // Top Turf Layer (y: -0.4 to 0.0)
        const turfGeo = new THREE.BoxGeometry(worldData.groundWidth, 0.8, worldData.groundLength);
        const turf = new THREE.Mesh(turfGeo, groundMat);
        turf.position.set(0, -0.4, worldData.groundLength / 2 - 5);
        turf.receiveShadow = true;
        this.scene.add(turf);

        // Solid Cliff Foundation Strata (depth 14) underneath the turf
        const cliffDepth = 14;
        const cliffMat = new THREE.MeshLambertMaterial({
          map: worldData.groundType === 'CASTLE_LAVA' ? this.textures.castle : this.textures.dirtCliff
        });
        const cliffGeo = new THREE.BoxGeometry(worldData.groundWidth * 0.98, cliffDepth, worldData.groundLength * 0.99);
        const cliff = new THREE.Mesh(cliffGeo, cliffMat);
        cliff.position.set(0, -0.8 - cliffDepth / 2, worldData.groundLength / 2 - 5);
        cliff.receiveShadow = true;
        this.scene.add(cliff);

        // Lush Overhang Fringe Trim along track left & right borders
        if (worldData.groundType === 'GRASS') {
          const fringeMat = new THREE.MeshLambertMaterial({ color: 0x38a169 });
          const fringeGeo = new THREE.BoxGeometry(0.35, 0.5, worldData.groundLength);
          const fringeL = new THREE.Mesh(fringeGeo, fringeMat);
          fringeL.position.set(-worldData.groundWidth / 2, -0.25, worldData.groundLength / 2 - 5);
          const fringeR = fringeL.clone();
          fringeR.position.x = worldData.groundWidth / 2;
          this.scene.add(fringeL);
          this.scene.add(fringeR);
        }

        // Molten Lava Moat for Castle (1-5)
        if (worldData.groundType === 'CASTLE_LAVA') {
          const lavaGeo = new THREE.BoxGeometry(100, 2, worldData.groundLength + 40);
          const lavaMat = new THREE.MeshBasicMaterial({ map: this.textures.lava });
          const lava = new THREE.Mesh(lavaGeo, lavaMat);
          lava.position.set(0, -3.5, worldData.groundLength / 2 - 5);
          this.scene.add(lava);
        }
      }

      // Recreate Player
      this.player.pos = { x: 0, y: 1.5, z: 0 };
      this.player.vel = { x: 0, y: 0, z: 0 };
      this.player.isGrounded = false;
      this.player.mesh = this.createMarioMesh();
      if (this.player.mesh) {
        this.player.mesh.position.set(this.player.pos.x, this.player.pos.y, this.player.pos.z);
      }

      // Camera reset
      this.cameraTarget = { x: this.player.pos.x, y: this.player.pos.y + 1.2, z: this.player.pos.z };
      this.cameraDist = 9.5;
      this.cameraPitch = 0.35;
      this.cameraYaw = 0.0;
      this.updateCamera(1.0);

      // Spawn 3 Green Stars per world
      worldData.greenStars.forEach(st => {
        this.createGreenStar(st.x, st.y, st.z, st.id);
      });

      // Spawn Level Content & Environmental Scenery
      if (worldIndex === 0) {
        // --- 1-1 Emerald Steppes: Rolling Hills with Eyes, Clouds, Trees ---
        this.createHill(-36, -3, 22, 22, true);
        this.createHill(36, -2, 32, 24, true);
        this.createHill(-40, -1, 55, 26, true);
        this.createHill(38, -2, 75, 25, true);
        this.createHill(-38, -1, 105, 26, true);
        this.createHill(36, -3, 125, 22, true);
        this.createHill(0, -8, 150, 42, false); // Majestic distant mountain

        this.createCloud(-12, 13, 25, 1.3, true);
        this.createCloud(13, 15, 38, 1.4, true);
        this.createCloud(-16, 17, 58, 1.5, true);
        this.createCloud(15, 18, 80, 1.4, true);
        this.createCloud(-12, 19, 105, 1.3, true);
        this.createCloud(14, 18, 125, 1.4, false);

        // Roadside Topiary Trees, Bushes & Flowers
        const treeX = [-8.0, 8.0];
        for (let z = 8; z < 100; z += 18) {
          this.createTopiaryTree(treeX[0], 0, z);
          this.createTopiaryTree(treeX[1], 0, z + 9);
          this.createBush(treeX[0] + 0.8, 0, z + 6);
          this.createBush(treeX[1] - 0.8, 0, z + 15);
          this.createFlowerCluster(treeX[0] + 0.6, 0, z + 3, 0xf1c40f);
          this.createFlowerCluster(treeX[1] - 0.6, 0, z + 12, 0xe74c3c);
        }

        // Princess Peach Grand Palace Backdrop
        this.createPeachCastleBackdrop(0, 0, -38);

        this.createPipe(0, 0, 16, 2.2);
        this.createPipe(3.5, 0, 36, 3.2, true, '1-1-SUB');
        this.createPipe(-3.5, 0, 56, 4.0);

        this.createQuestionBlock(0, 3.2, 8, 'COIN');
        this.createQuestionBlock(-2, 3.2, 12, 'MUSHROOM');
        this.createBrickBlock(0, 3.2, 12);
        this.createQuestionBlock(2, 3.2, 12, 'FLOWER');

        for (let i = 0; i < 6; i++) this.createCoin(0, 1.2, 22 + i * 2.0);

        this.createGoomba(0, 0.6, 22);
        this.createGoomba(2.5, 0.6, 42);
        this.createKoopa(-2.5, 0.6, 50);
        this.createGoomba(1, 0.6, 72);

        this.createFlagpole(0, 0, 102);
        this.createCastle(0, 0, 114);

      } else if (worldIndex === 1) {
        // --- 1-2 Luminescent Caverns: Glowing Crystals, Stalactites ---
        for (let cz = 15; cz < 130; cz += 20) {
          this.createCrystal(-7.5, 0, cz, 0x00d2d3, 1.2);
          this.createCrystal(7.5, 0, cz + 10, 0x9b51e0, 1.3);
        }

        this.createQuestionBlock(0, 3.2, 10, 'FLOWER');
        this.createBrickBlock(-2, 3.2, 10);
        this.createBrickBlock(2, 3.2, 10);

        for (let i = 0; i < 8; i++) this.createCoin(Math.sin(i) * 2.5, 2.0, 20 + i * 2.5);

        this.createPipe(-3, 0, 40, 3.2, true, '1-2-SUB');
        this.createPipe(3, 0, 65, 3.8);

        this.createGoomba(-1.5, 0.6, 26);
        this.createKoopa(2, 0.6, 48);
        this.createGoomba(0, 0.6, 75);

        this.createFlagpole(0, 0, 112);
        this.createCastle(0, 0, 124);

      } else if (worldIndex === 2) {
        // --- 1-3 Sunken Pyramid & Dunes ---
        this.createPyramid(0, 0, 155, 50, 30);
        for (let cz = 12; cz < 110; cz += 25) {
          this.createCactus(-8.2, 0, cz);
          this.createCactus(8.2, 0, cz + 12);
        }

        this.createQuestionBlock(0, 3.5, 14, 'MUSHROOM');
        for (let i = 0; i < 6; i++) {
          this.createBrickBlock((i % 2 === 0 ? 2.5 : -2.5), 2.0, 26 + i * 4.0);
          this.createCoin((i % 2 === 0 ? 2.5 : -2.5), 3.5, 26 + i * 4.0);
        }

        this.createKoopa(0, 0.6, 22);
        this.createKoopa(-3, 0.6, 52);
        this.createGoomba(2.5, 0.6, 68);

        this.createFlagpole(0, 0, 118);
        this.createCastle(0, 0, 130);

      } else if (worldIndex === 3) {
        // --- 1-4 Cumulus Clouds & Airship ---
        for (let z = 10; z < 140; z += 25) {
          this.createCloud(-22, -4, z, 2.2, false);
          this.createCloud(22, -4, z + 12, 2.4, false);
          this.createCloud(0, 26, z + 8, 1.6, true);
        }

        this.createQuestionBlock(0, 3.5, 12, 'FLOWER');
        for (let i = 0; i < 7; i++) {
          this.createCoin((i % 2 === 0 ? 3 : -3), 4.0, 22 + i * 3.8);
        }

        this.createKoopa(0, 0.6, 22, true); // Winged Paratroopa
        this.createKoopa(-3, 0.6, 54, true);
        this.createGoomba(2.5, 0.6, 75);

        this.createFlagpole(0, 0, 125);
        this.createCastle(0, 0, 137);

      } else if (worldIndex === 4) {
        // --- 1-5 Bowser's Molten Citadel ---
        this.createQuestionBlock(0, 3.5, 16, 'FLOWER');
        this.createBrickBlock(-2.5, 3.5, 16);
        this.createBrickBlock(2.5, 3.5, 16);

        // Bowser Boss Arena and Axe Switch
        this.createBowser(0, 0, 80);
        this.createAxeSwitch(0, 0, 102);

        // Show Boss HUD
        const bossHUD = document.getElementById('bossBattleHUD');
        if (bossHUD) bossHUD.classList.remove('hidden');
      }

      // Hide Boss HUD if not in 1-5
      if (worldIndex !== 4) {
        const bossHUD = document.getElementById('bossBattleHUD');
        if (bossHUD) bossHUD.classList.add('hidden');
      }

      this.updateHUD();
    }

    // --- Story Narrative & Dialogue ---
    triggerStory(scriptKey) {
      const script = STORY_SCRIPTS[scriptKey];
      if (!script || script.length === 0) return;
      this.dialogQueue = [...script];
      this.showNextDialog();
    }

    showNextDialog() {
      if (this.dialogQueue.length === 0) {
        this.endDialog();
        return;
      }
      this.isDialogActive = true;
      const step = this.dialogQueue.shift();
      const overlay = document.getElementById('dialogOverlay');
      const avatar = document.getElementById('dialogAvatar');
      const speaker = document.getElementById('dialogSpeaker');
      const text = document.getElementById('dialogText');

      if (overlay) overlay.classList.remove('hidden');
      if (speaker) speaker.textContent = step.speaker;
      if (text) text.textContent = step.text;
      if (avatar) avatar.className = 'dialog-avatar ' + step.avatar.toLowerCase();
      this.sound.playCoin();
    }

    advanceDialog() {
      if (!this.isDialogActive) return;
      this.showNextDialog();
    }

    endDialog() {
      this.isDialogActive = false;
      const overlay = document.getElementById('dialogOverlay');
      if (overlay) overlay.classList.add('hidden');
    }

    // --- Controls System (Keyboard & Mouse) ---
    setupControls() {
      window.addEventListener('keydown', (e) => {
        this.keys[e.code] = true;

        if (e.code === 'KeyE' || e.code === 'Space') {
          if (this.isDialogActive) {
            this.advanceDialog();
            e.preventDefault();
            return;
          }
        }

        if (e.code === 'KeyV') {
          this.cycleCameraMode();
        }

        if (e.code === 'KeyP' || e.code === 'Escape') {
          this.openSaveLoadModal();
        }

        if (e.code === 'KeyH') {
          this.toggleModal('helpModal', true);
        }

        // Fireball Attack
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'KeyJ') {
          this.shootFireball();
        }

        // Ground Pound
        if (e.code === 'KeyC' || e.code === 'ControlLeft') {
          if (!this.player.isGrounded) {
            this.player.groundPound = true;
            this.player.vel.y = -24.0;
          }
        }
      });

      window.addEventListener('keyup', (e) => {
        this.keys[e.code] = false;
      });

      this.canvas.addEventListener('mousedown', (e) => {
        this.mouse.isDown = true;
        this.mouse.lastX = e.clientX;
        this.mouse.lastY = e.clientY;

        if (this.isDialogActive) {
          this.advanceDialog();
          return;
        }

        if (e.button === 0) {
          this.shootFireball();
        }

        if (!document.pointerLockElement) {
          this.canvas.requestPointerLock?.();
        }
      });

      window.addEventListener('mouseup', () => {
        this.mouse.isDown = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (document.pointerLockElement === this.canvas) {
          this.cameraYaw -= e.movementX * 0.0035;
          this.cameraPitch = Math.max(0.1, Math.min(1.2, this.cameraPitch + e.movementY * 0.0035));
        } else if (this.mouse.isDown) {
          const dx = e.clientX - this.mouse.lastX;
          const dy = e.clientY - this.mouse.lastY;
          this.cameraYaw -= dx * 0.006;
          this.cameraPitch = Math.max(0.1, Math.min(1.2, this.cameraPitch + dy * 0.006));
          this.mouse.lastX = e.clientX;
          this.mouse.lastY = e.clientY;
        }
      });

      window.addEventListener('wheel', (e) => {
        this.cameraDist = Math.max(4.0, Math.min(20.0, this.cameraDist + e.deltaY * 0.015));
      });
    }

    shootFireball() {
      if (this.form !== 'FIRE') return;
      if (this.fireballs.length >= 3) return;

      this.sound.playFireball();
      const forwardX = Math.sin(this.cameraYaw);
      const forwardZ = Math.cos(this.cameraYaw);

      let mesh = null;
      if (this.hasThree) {
        const geo = new THREE.SphereGeometry(0.35, 8, 8);
        const mat = new THREE.MeshBasicMaterial({ color: 0xff4757 });
        mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(this.player.pos.x, this.player.pos.y + 0.6, this.player.pos.z);
        this.scene.add(mesh);
      }

      this.fireballs.push({
        x: this.player.pos.x, y: this.player.pos.y + 0.6, z: this.player.pos.z,
        vx: forwardX * 20.0, vy: 2.2, vz: forwardZ * 20.0,
        radius: 0.4, life: 2.5, mesh: mesh
      });
    }

    // --- 5-Slot Save / Load Management ---
    openSaveLoadModal() {
      this.renderSlotsUI();
      this.toggleModal('saveLoadModal', true);
    }

    renderSlotsUI() {
      const container = document.getElementById('slotsContainer');
      if (!container) return;
      container.innerHTML = '';

      const slots = this.saveSystem.listSlots();
      slots.forEach((slot, index) => {
        const slotNum = index + 1;
        const card = document.createElement('div');
        card.className = `slot-card ${slot ? 'occupied' : 'empty'}`;

        if (slot) {
          card.innerHTML = `
            <div class="slot-info-box">
              <div class="slot-title-row">
                <span class="slot-badge-id">SLOT ${slotNum}</span>
                <span class="slot-stage-name">${slot.worldName}</span>
              </div>
              <div class="slot-metrics">
                <span>星數: <b class="star-val">&#11088; ${slot.starsCount}/15</b></span>
                <span>分數: <b>${slot.score}</b></span>
                <span>金幣: <b>${slot.coins}</b></span>
                <span>型態: <b>${slot.form}</b></span>
              </div>
              <div class="slot-timestamp">&#128339; 存檔時間: ${slot.timestamp}</div>
            </div>
            <div class="slot-btn-group">
              <button class="slot-btn load" data-slot="${slotNum}">讀取進度</button>
              <button class="slot-btn save" data-slot="${slotNum}">覆蓋存檔</button>
              <button class="slot-btn delete" data-slot="${slotNum}">刪除</button>
            </div>
          `;
        } else {
          card.innerHTML = `
            <div class="slot-info-box">
              <div class="slot-title-row">
                <span class="slot-badge-id">SLOT ${slotNum}</span>
                <span class="slot-stage-name">空白紀錄槽位</span>
              </div>
              <div class="slot-timestamp">尚未建立遊戲冒險進度</div>
            </div>
            <div class="slot-btn-group">
              <button class="slot-btn save" data-slot="${slotNum}">儲存進度在此</button>
            </div>
          `;
        }

        card.querySelector('.slot-btn.save')?.addEventListener('click', () => {
          this.saveToSlot(slotNum);
          this.renderSlotsUI();
        });
        card.querySelector('.slot-btn.load')?.addEventListener('click', () => {
          this.loadFromSlot(slotNum);
          this.toggleModal('saveLoadModal', false);
        });
        card.querySelector('.slot-btn.delete')?.addEventListener('click', () => {
          this.saveSystem.deleteSlot(slotNum);
          this.renderSlotsUI();
        });

        container.appendChild(card);
      });
    }

    saveToSlot(slotNum) {
      const state = {
        worldIndex: this.worldIndex,
        worldName: LEVEL_REGISTRY[this.worldIndex].title,
        score: this.score,
        coins: this.coins,
        lives: this.lives,
        hp: this.hp,
        form: this.form,
        starsCount: this.collectedStars.size,
        starsCollected: Array.from(this.collectedStars),
        storyFlag: this.storyFlag
      };
      this.saveSystem.saveSlot(slotNum, state);
      this.sound.playPowerup();
    }

    loadFromSlot(slotNum) {
      const record = this.saveSystem.getSlot(slotNum);
      if (!record) return;

      this.score = record.score;
      this.coins = record.coins;
      this.lives = record.lives;
      this.hp = record.hp;
      this.form = record.form;
      this.storyFlag = record.storyFlag || 'NORMAL';
      this.collectedStars = new Set(record.starsCollected || []);
      this.loadWorld(record.worldIndex);
      this.sound.playPowerup();
    }

    // --- Main Game Loop ---
    gameLoop(timestamp) {
      const dt = Math.min((timestamp - this.lastTime) / 1000, 0.05);
      this.lastTime = timestamp;

      if (!this.isPaused && !this.isGameOver && !this.isVictory) {
        if (!this.isDialogActive) {
          this.updatePhysics(dt);
        }
        this.updateEntities(dt);
        this.updateCamera(dt);
      }

      this.render();
      requestAnimationFrame(this.gameLoop.bind(this));
    }

    updatePhysics(dt) {
      const GRAVITY = -28.0;
      const p = this.player;

      // Warp Pipe Sinking Transition
      if (this.pipeTransition && this.pipeTransition.active) {
        this.pipeTransition.timer -= dt;
        p.pos.y -= 2.2 * dt;
        if (p.mesh) {
          p.mesh.position.y = p.pos.y;
          const baseScale = this.form === 'SMALL' ? 0.8 : 1.25;
          const s = Math.max(0.1, baseScale * Math.max(0, this.pipeTransition.timer / 0.8));
          p.mesh.scale.set(s, s, s);
        }
        if (this.pipeTransition.timer <= 0) {
          this.pipeTransition.active = false;
          if (this.pipeTransition.pipeType === 'EXIT') {
            this.exitPipeSubWorld();
          } else {
            this.loadPipeSubWorld();
          }
        }
        return;
      }

      // Flagpole Slide & Castle Entrance Cinematic
      if (this.flagpoleCinematic && this.flagpoleCinematic.active) {
        this.animClock += dt;
        const fc = this.flagpoleCinematic;

        if (fc.phase === 'SLIDE') {
          p.pos.y = Math.max(1.0, p.pos.y - 7.5 * dt);
          if (this.flagpole && this.flagpole.flagMesh) {
            this.flagpole.flagMesh.position.y = Math.max(1.8, this.flagpole.flagMesh.position.y - 7.0 * dt);
          }
          if (p.mesh) {
            p.mesh.position.set(p.pos.x, p.pos.y, p.pos.z);
            p.mesh.rotation.y = -Math.PI / 2;
            if (p.limbs.armL) p.limbs.armL.rotation.x = 2.0;
            if (p.limbs.armR) p.limbs.armR.rotation.x = 2.0;
            if (p.limbs.legL) p.limbs.legL.rotation.x = 0.5;
            if (p.limbs.legR) p.limbs.legR.rotation.x = -0.5;
          }
          if (p.pos.y <= 1.05) {
            fc.phase = 'WALK';
            fc.timer = 0;
            p.pos.x = this.flagpole ? this.flagpole.x : 0;
            p.yaw = 0;
            this.sound.playVictory();
          }
          return;
        }

        if (fc.phase === 'WALK') {
          fc.timer += dt;
          p.pos.z += 4.5 * dt;
          p.pos.x += (0 - p.pos.x) * 4.0 * dt;
          p.yaw = 0;

          const swing = Math.sin(this.animClock * 14.0) * 0.55;
          if (p.limbs.legL) p.limbs.legL.rotation.x = swing;
          if (p.limbs.legR) p.limbs.legR.rotation.x = -swing;
          if (p.limbs.armL) p.limbs.armL.rotation.x = -swing;
          if (p.limbs.armR) p.limbs.armR.rotation.x = swing;

          if (p.mesh) {
            p.mesh.position.set(p.pos.x, p.pos.y, p.pos.z);
            p.mesh.rotation.y = p.yaw;
          }

          const targetZ = this.endCastle ? (this.endCastle.z - 2.5) : (this.flagpole ? this.flagpole.z + 10.0 : p.pos.z + 5.0);
          if (p.pos.z >= targetZ || fc.timer >= 2.5) {
            fc.phase = 'CELEBRATE';
            fc.timer = 0;
            if (p.mesh) p.mesh.visible = false;
            if (this.endCastle) {
              this.spawnFireworks(this.endCastle.x, this.endCastle.y + 11.0, this.endCastle.z);
            }
          }
          return;
        }

        if (fc.phase === 'CELEBRATE') {
          fc.timer += dt;
          if (this.endCastle && this.endCastle.flagMesh) {
            if (this.endCastle.flagMesh.position.y < 16.2) {
              this.endCastle.flagMesh.position.y += 3.2 * dt;
              this.endCastle.flagRaised = true;
            }
          }

          if (fc.timer >= 2.0) {
            fc.active = false;
            fc.phase = 'IDLE';
            if (this.worldIndex < LEVEL_REGISTRY.length - 1) {
              const clearKey = `STAGE_${this.worldIndex + 1}_CLEAR`;
              this.triggerStory(clearKey);
              this.loadWorld(this.worldIndex + 1);
            } else {
              this.triggerVictory();
            }
          }
          return;
        }
      }

      this.animClock += dt;

      if (this.keys['KeyQ']) this.cameraYaw += 2.0 * dt;
      if (this.keys['KeyE']) this.cameraYaw -= 2.0 * dt;

      let moveX = 0;
      let moveZ = 0;
      if (this.keys['KeyW'] || this.keys['ArrowUp']) moveZ += 1;
      if (this.keys['KeyS'] || this.keys['ArrowDown']) moveZ -= 1;
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) moveX -= 1;
      if (this.keys['KeyD'] || this.keys['ArrowRight']) moveX += 1;

      const len = Math.sqrt(moveX * moveX + moveZ * moveZ);
      const isMoving = len > 0;

      if (isMoving) {
        moveX /= len;
        moveZ /= len;

        const sinY = Math.sin(this.cameraYaw);
        const cosY = Math.cos(this.cameraYaw);

        const worldDirX = -moveX * cosY + moveZ * sinY;
        const worldDirZ = moveX * sinY + moveZ * cosY;

        const speed = (this.keys['ShiftLeft'] || this.keys['ShiftRight']) ? p.speed * 1.5 : p.speed;
        p.vel.x = worldDirX * speed;
        p.vel.z = worldDirZ * speed;
        p.yaw = Math.atan2(worldDirX, worldDirZ);
      } else {
        p.vel.x *= 0.75;
        p.vel.z *= 0.75;
      }

      // Jump
      if (this.keys['Space']) {
        if (p.isGrounded && !p.jumpHeld) {
          p.vel.y = 13.5;
          p.isGrounded = false;
          p.jumpHeld = true;
          this.sound.playJump();
        }
      } else {
        p.jumpHeld = false;
      }

      p.vel.y += GRAVITY * dt;
      p.pos.x += p.vel.x * dt;
      p.pos.y += p.vel.y * dt;
      p.pos.z += p.vel.z * dt;

      if (p.pos.y <= 1.0) {
        p.pos.y = 1.0;
        p.vel.y = 0;
        p.isGrounded = true;
        p.groundPound = false;
      }

      if (p.pos.y < -15.0) {
        this.loseLife();
      }

      if (this.invulnerableTimer > 0) {
        this.invulnerableTimer -= dt;
      }

      // Update Player Mesh & Limb Swinging Animations
      if (p.mesh) {
        p.mesh.position.set(p.pos.x, p.pos.y, p.pos.z);
        p.mesh.rotation.y = p.yaw;
        p.mesh.rotation.z = isMoving ? -moveX * 0.16 : 0;

        const scale = this.form === 'SMALL' ? 0.8 : 1.25;
        p.mesh.scale.set(scale, scale, scale);

        // Animated walk/run cycle
        if (isMoving && p.isGrounded) {
          const swing = Math.sin(this.animClock * 14.0) * 0.55;
          if (p.limbs.legL) p.limbs.legL.rotation.x = swing;
          if (p.limbs.legR) p.limbs.legR.rotation.x = -swing;
          if (p.limbs.armL) p.limbs.armL.rotation.x = -swing;
          if (p.limbs.armR) p.limbs.armR.rotation.x = swing;
        } else if (!p.isGrounded) {
          // Jump pose
          if (p.limbs.legL) p.limbs.legL.rotation.x = -0.4;
          if (p.limbs.legR) p.limbs.legR.rotation.x = 0.4;
          if (p.limbs.armL) p.limbs.armL.rotation.x = 2.2; // Fist up!
          if (p.limbs.armR) p.limbs.armR.rotation.x = -0.6;
        } else {
          // Idle pose
          if (p.limbs.legL) p.limbs.legL.rotation.x = 0;
          if (p.limbs.legR) p.limbs.legR.rotation.x = 0;
          if (p.limbs.armL) p.limbs.armL.rotation.x = 0;
          if (p.limbs.armR) p.limbs.armR.rotation.x = 0;
        }

        p.mesh.visible = this.invulnerableTimer <= 0 || (Math.floor(this.invulnerableTimer * 10) % 2 === 0);
      }
    }

    updateEntities(dt) {
      const p = this.player;

      // Question & Brick Blocks
      this.blocks.forEach(b => {
        // Elastic bounce physics for hit blocks (Tactile Game Juice)
        if (b.bounceVy !== undefined && (b.bounceVy !== 0 || b.bounceOffset > 0)) {
          b.bounceOffset = (b.bounceOffset || 0) + b.bounceVy * dt;
          b.bounceVy -= 36.0 * dt;
          if (b.bounceOffset <= 0) {
            b.bounceOffset = 0;
            b.bounceVy = 0;
          }
          if (b.mesh) b.mesh.position.y = b.y + b.bounceOffset;
        }

        const dx = Math.abs(p.pos.x - b.x);
        const dz = Math.abs(p.pos.z - b.z);
        const dy = p.pos.y - b.y;

        // Bottom hit
        if (dx < b.size * 0.7 && dz < b.size * 0.7 && dy > 0 && dy < b.size && p.vel.y > 0) {
          if (b.type === 'QUESTION' && !b.hit) {
            b.hit = true;
            b.bounceOffset = 0;
            b.bounceVy = 5.0; // Elastic upward impulse
            this.sound.playCoin();
            if (b.reward === 'MUSHROOM') this.transformMario('SUPER');
            else if (b.reward === 'FLOWER') this.transformMario('FIRE');
            else { this.addScore(200); this.addCoin(1); }
          } else if (b.type === 'BRICK' && !b.hit && this.form !== 'SMALL') {
            b.hit = true;
            b.bounceOffset = 0;
            b.bounceVy = 5.0;
            this.sound.playStomp();
            this.addScore(100);
            if (b.mesh) b.mesh.visible = false;
          } else if (!b.hit) {
            b.bounceOffset = 0;
            b.bounceVy = 3.0;
            this.sound.playStomp();
          }
          p.vel.y = -2;
        }

        // Top standing
        const standY = b.type === 'PIPE' ? (b.height + 0.8) : (b.y + b.size * 0.8);
        if (dx < b.size * 0.75 && dz < b.size * 0.75 && p.pos.y >= standY - 0.5 && p.pos.y <= standY + 1.2 && p.vel.y <= 0) {
          p.pos.y = standY;
          p.vel.y = 0;
          p.isGrounded = true;

          // Warp pipe descent trigger on Crouch / Down key
          if (b.type === 'PIPE' && b.isWarp && (!this.pipeTransition || !this.pipeTransition.active)) {
            if (this.keys['KeyC'] || this.keys['KeyS'] || this.keys['ArrowDown']) {
              this.enterPipeSubWorld(b);
            }
          }
        }
      });

      // Coins Collection
      this.coinsEntities.forEach(c => {
        if (!c.collected) {
          if (c.mesh) c.mesh.rotation.y += 3.2 * dt;
          if (Math.hypot(p.pos.x - c.x, p.pos.y - c.y, p.pos.z - c.z) < 1.3) {
            c.collected = true;
            if (c.mesh) c.mesh.visible = false;
            this.addCoin(1);
            this.addScore(100);
            this.sound.playCoin();
          }
        }
      });

      // Green Stars Collection
      this.starsEntities.forEach(st => {
        if (!st.collected) {
          if (st.mesh) {
            st.mesh.rotation.y += 2.5 * dt;
            st.mesh.position.y = st.y + Math.sin(this.animClock * 3) * 0.25;
          }
          if (Math.hypot(p.pos.x - st.x, p.pos.y - st.y, p.pos.z - st.z) < 1.6) {
            st.collected = true;
            this.collectedStars.add(st.id);
            if (st.mesh) st.mesh.visible = false;
            this.sound.playStar();
            this.addScore(2000);
            this.updateHUD();
          }
        }
      });

      // Enemies AI & Stomp
      this.enemies.forEach(e => {
        if (!e.isAlive) return;
        e.x += e.vx * dt;
        if (e.x > 6 || e.x < -6) e.vx = -e.vx;
        if (e.mesh) e.mesh.position.set(e.x, e.y, e.z);

        const dist = Math.hypot(p.pos.x - e.x, p.pos.y - e.y, p.pos.z - e.z);
        if (dist < p.radius + e.radius) {
          if (p.vel.y < 0 && p.pos.y > e.y + 0.3) {
            this.sound.playStomp();
            p.vel.y = 11.0;
            this.addScore(400);

            if (e.type === 'GOOMBA') {
              e.isAlive = false;
              if (e.mesh) e.mesh.scale.set(1.3, 0.2, 1.3);
            } else if (e.type === 'KOOPA') {
              if (!e.isShell) {
                e.isShell = true;
                e.vx = 0;
              } else {
                e.vx = p.pos.x > e.x ? -15.0 : 15.0;
              }
            }
          } else if (this.invulnerableTimer <= 0) {
            this.takeDamage();
          }
        }
      });

      // Fireballs Physics
      for (let i = this.fireballs.length - 1; i >= 0; i--) {
        const fb = this.fireballs[i];
        fb.x += fb.vx * dt;
        fb.y += fb.vy * dt;
        fb.z += fb.vz * dt;
        fb.vy -= 18.0 * dt;
        fb.life -= dt;

        if (fb.y <= 0.3) {
          fb.y = 0.3;
          fb.vy = 8.5;
        }
        if (fb.mesh) fb.mesh.position.set(fb.x, fb.y, fb.z);

        this.enemies.forEach(e => {
          if (e.isAlive && Math.hypot(fb.x - e.x, fb.y - e.y, fb.z - e.z) < 1.1) {
            e.isAlive = false;
            fb.life = 0;
            if (e.mesh) e.mesh.visible = false;
            this.sound.playStomp();
            this.addScore(500);
          }
        });

        // Bowser Boss Hit
        if (this.boss && this.boss.isAlive && Math.hypot(fb.x - this.boss.x, fb.y - this.boss.y, fb.z - this.boss.z) < 3.0) {
          this.boss.hp -= 1;
          fb.life = 0;
          this.sound.playBossRoar();
          this.updateBossHUD();

          if (this.boss.hp === 2 && this.boss.phase === 1) {
            this.boss.phase = 2; // Transition to Enraged Phase
            this.triggerStory('BOSS_PHASE2');
          }

          if (this.boss.hp <= 0) {
            this.triggerVictory();
          }
        }

        if (fb.life <= 0) {
          if (fb.mesh && this.hasThree) this.scene.remove(fb.mesh);
          this.fireballs.splice(i, 1);
        }
      }

      // Particle Simulation (Fireworks & Sparks)
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const pt = this.particles[i];
        pt.life -= dt;
        pt.vy -= 12.0 * dt;
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        pt.z += pt.vz * dt;
        if (pt.mesh) {
          pt.mesh.position.set(pt.x, pt.y, pt.z);
          const sc = Math.max(0.01, pt.life);
          pt.mesh.scale.set(sc, sc, sc);
        }
        if (pt.life <= 0) {
          if (pt.mesh && this.hasThree) this.scene.remove(pt.mesh);
          this.particles.splice(i, 1);
        }
      }

      // 2-Phase Bowser Combat Logic (World 1-5)
      if (this.boss && this.boss.isAlive) {
        if (this.boss.phase === 1) {
          this.boss.fireTimer += dt;
          if (this.boss.fireTimer > 2.8) {
            this.boss.fireTimer = 0;
            this.sound.playBossRoar();
          }
        } else if (this.boss.phase === 2) {
          // Enraged Shell Charge
          this.boss.chargeTimer += dt;
          if (this.boss.chargeTimer > 3.5) {
            this.boss.chargeTimer = 0;
            this.sound.playBossRoar();
          }
        }

        // Axe Switch Collapse Trigger
        if (this.axeSwitch && Math.hypot(p.pos.x - this.axeSwitch.x, p.pos.z - this.axeSwitch.z) < 2.0) {
          this.axeSwitch.pulled = true;
          this.triggerVictory();
        }
      }

      // Flagpole Stage Clear Trigger & Cinematic Sequence (Worlds 1-4)
      if (this.flagpole && !this.flagpole.reached && (!this.flagpoleCinematic || !this.flagpoleCinematic.active)) {
        if (Math.hypot(p.pos.x - this.flagpole.x, p.pos.z - this.flagpole.z) < 2.2) {
          this.flagpole.reached = true;
          let bonus = 400;
          if (p.pos.y >= 7.0) bonus = 5000;
          else if (p.pos.y >= 5.0) bonus = 2000;
          else if (p.pos.y >= 3.0) bonus = 1000;
          else bonus = 400;

          this.addScore(bonus);
          this.sound.playFlagpoleSlide();

          p.pos.x = this.flagpole.x + 0.45;
          p.pos.z = this.flagpole.z;
          p.vel = { x: 0, y: 0, z: 0 };
          this.flagpoleCinematic = {
            active: true,
            phase: 'SLIDE',
            timer: 0,
            bonus: bonus
          };
        }
      }
    }

    // --- Multi-Camera Engine ---
    updateCamera(dt) {
      const mode = this.cameraModes[this.currentCamModeIdx];
      const p = this.player;

      if (this.flagpoleCinematic && this.flagpoleCinematic.active) {
        const camX = this.flagpole ? this.flagpole.x + 7.0 : p.pos.x + 7.0;
        const camY = 4.5;
        const camZ = this.flagpole ? this.flagpole.z - 8.0 : p.pos.z - 8.0;
        this.cameraTarget.x += (p.pos.x - this.cameraTarget.x) * 6 * dt;
        this.cameraTarget.y += (p.pos.y + 2.5 - this.cameraTarget.y) * 6 * dt;
        this.cameraTarget.z += (p.pos.z + 4.0 - this.cameraTarget.z) * 6 * dt;
        if (this.hasThree) {
          this.camera.position.set(camX, camY, camZ);
          this.camera.lookAt(this.cameraTarget.x, this.cameraTarget.y, this.cameraTarget.z);
        }
        return;
      }

      if (mode === 'BOSS_LOCK' && this.boss && this.boss.isAlive) {
        // Dramatic low-angle midpoint framing between Mario & Bowser
        const midX = (p.pos.x + this.boss.x) / 2;
        const midY = (p.pos.y + this.boss.y) / 2 + 1.5;
        const midZ = (p.pos.z + this.boss.z) / 2;

        this.cameraTarget.x += (midX - this.cameraTarget.x) * 6 * dt;
        this.cameraTarget.y += (midY - this.cameraTarget.y) * 6 * dt;
        this.cameraTarget.z += (midZ - this.cameraTarget.z) * 6 * dt;

        const bossDist = Math.hypot(p.pos.x - this.boss.x, p.pos.z - this.boss.z);
        const camDist = Math.max(12.0, bossDist * 0.9);

        const camX = this.cameraTarget.x + 8.0;
        const camY = this.cameraTarget.y + 3.5;
        const camZ = this.cameraTarget.z - camDist;

        if (this.hasThree) {
          this.camera.position.set(camX, camY, camZ);
          this.camera.lookAt(this.cameraTarget.x, this.cameraTarget.y, this.cameraTarget.z);
        }
      } else if (mode === 'ISOMETRIC') {
        // 45-degree fixed isometric perspective
        const targetX = p.pos.x;
        const targetY = p.pos.y + 1.2;
        const targetZ = p.pos.z;

        this.cameraTarget.x += (targetX - this.cameraTarget.x) * 10 * dt;
        this.cameraTarget.y += (targetY - this.cameraTarget.y) * 10 * dt;
        this.cameraTarget.z += (targetZ - this.cameraTarget.z) * 10 * dt;

        const camX = this.cameraTarget.x + 12.0;
        const camY = this.cameraTarget.y + 14.0;
        const camZ = this.cameraTarget.z - 12.0;

        if (this.hasThree) {
          this.camera.position.set(camX, camY, camZ);
          this.camera.lookAt(this.cameraTarget.x, this.cameraTarget.y, this.cameraTarget.z);
        }
      } else {
        // Default ORBIT_FOLLOW / CINEMATIC
        const targetX = p.pos.x;
        const targetY = p.pos.y + 1.2;
        const targetZ = p.pos.z;

        this.cameraTarget.x += (targetX - this.cameraTarget.x) * 10 * dt;
        this.cameraTarget.y += (targetY - this.cameraTarget.y) * 10 * dt;
        this.cameraTarget.z += (targetZ - this.cameraTarget.z) * 10 * dt;

        const camX = this.cameraTarget.x - Math.sin(this.cameraYaw) * Math.cos(this.cameraPitch) * this.cameraDist;
        const camY = this.cameraTarget.y + Math.sin(this.cameraPitch) * this.cameraDist;
        const camZ = this.cameraTarget.z - Math.cos(this.cameraYaw) * Math.cos(this.cameraPitch) * this.cameraDist;

        if (this.hasThree) {
          this.camera.position.set(camX, camY, camZ);
          this.camera.lookAt(this.cameraTarget.x, this.cameraTarget.y, this.cameraTarget.z);
        }
      }
    }

    render() {
      if (this.hasThree) {
        this.renderer.render(this.scene, this.camera);
      } else {
        this.ctx.fillStyle = '#5c94fc';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#43b047';
        this.ctx.fillRect(0, this.canvas.height * 0.7, this.canvas.width, this.canvas.height * 0.3);
      }
    }

    // --- State Mutations & HUD Updates ---
    addScore(pts) {
      this.score += pts;
      this.updateHUD();
    }

    addCoin(count) {
      this.coins += count;
      if (this.coins >= 100) {
        this.coins -= 100;
        this.lives += 1;
        this.sound.playPowerup();
      }
      this.updateHUD();
    }

    transformMario(newForm) {
      this.form = newForm;
      this.sound.playPowerup();
      this.updateHUD();
    }

    takeDamage() {
      if (this.form === 'FIRE') {
        this.form = 'SUPER';
        this.invulnerableTimer = 2.0;
        this.sound.playStomp();
      } else if (this.form === 'SUPER') {
        this.form = 'SMALL';
        this.invulnerableTimer = 2.0;
        this.sound.playStomp();
      } else {
        this.hp -= 1;
        this.invulnerableTimer = 2.0;
        this.sound.playStomp();
        if (this.hp <= 0) this.loseLife();
      }
      this.updateHUD();
    }

    loseLife() {
      this.lives -= 1;
      this.hp = this.maxHp;
      this.form = 'SMALL';
      if (this.lives <= 0) {
        this.triggerGameOver();
      } else {
        this.loadWorld(this.worldIndex);
      }
      this.updateHUD();
    }

    triggerGameOver() {
      this.isGameOver = true;
      this.toggleModal('gameOverModal', true);
    }

    triggerVictory() {
      this.isVictory = true;
      if (this.boss) this.boss.isAlive = false;
      this.sound.playVictory();
      this.triggerStory('VICTORY_ENDING');

      const endScore = document.getElementById('endScore');
      const endCoins = document.getElementById('endCoins');
      const endStars = document.getElementById('endStars');
      const endLives = document.getElementById('endLives');
      if (endScore) endScore.textContent = this.score;
      if (endCoins) endCoins.textContent = this.coins;
      if (endStars) endStars.textContent = `${this.collectedStars.size}/15`;
      if (endLives) endLives.textContent = this.lives;

      setTimeout(() => {
        this.toggleModal('victoryModal', true);
      }, 3500);
    }

    resetGame() {
      this.worldIndex = 0;
      this.score = 0;
      this.coins = 0;
      this.lives = 3;
      this.hp = 3;
      this.form = 'SMALL';
      this.collectedStars.clear();
      this.isGameOver = false;
      this.isVictory = false;
      this.loadWorld(0);
      this.triggerStory('PROLOGUE');
    }

    updateBossHUD() {
      if (!this.boss) return;
      const fill = document.getElementById('bossHpFill');
      const badge = document.getElementById('bossPhaseLabel');
      if (fill) {
        const pct = Math.max(0, (this.boss.hp / this.boss.maxHp) * 100);
        fill.style.width = pct + '%';
      }
      if (badge) {
        badge.textContent = this.boss.phase === 1 ? 'PHASE 1: 烈焰噴吐' : 'PHASE 2: 狂暴尖刺衝撞!';
      }
    }

    updateHUD() {
      const elWorld = document.getElementById('hudWorld');
      const elTitle = document.getElementById('hudStageTitle');
      const elScore = document.getElementById('hudScore');
      const elCoins = document.getElementById('hudCoins');
      const elStars = document.getElementById('hudStars');
      const elLives = document.getElementById('hudLives');
      const elForm = document.getElementById('hudForm');

      if (elWorld) elWorld.textContent = LEVEL_REGISTRY[this.worldIndex].id;
      if (elTitle) elTitle.textContent = LEVEL_REGISTRY[this.worldIndex].title;
      if (elScore) elScore.textContent = String(this.score).padStart(6, '0');
      if (elCoins) elCoins.textContent = '× ' + String(this.coins).padStart(2, '0');
      if (elStars) elStars.textContent = `⭐ ${this.collectedStars.size}/15`;
      if (elLives) elLives.textContent = '× ' + this.lives;
      if (elForm) elForm.textContent = this.form;

      const hearts = document.querySelectorAll('#hudHearts .heart');
      hearts.forEach((h, idx) => {
        if (idx < this.hp) h.classList.add('active');
        else h.classList.remove('active');
      });

      this.updateBossHUD();
    }
  }

  function bootGame() {
    if (!window.gameEngine) {
      window.gameEngine = new SuperMario3DEngine();
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    bootGame();
  } else {
    window.addEventListener('DOMContentLoaded', bootGame);
  }

})();
