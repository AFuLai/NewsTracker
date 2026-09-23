/**
 * SUPER MARIO BROS HD: WARP PIPE ENGINE & 16-BIT ALL-STARS REMASTER
 * Complete 2D Platformer featuring:
 *   - Dedicated Pipe Mechanics: Vertical Crouch Entry, Horizontal Side Sliding, Pipe Exit Rise Animation.
 *   - Subterranean Bonus Cavern (World 1-1 Sub) with 19 Coins & Exit Pipe Warp.
 *   - Piranha Plant Ecological AI with NES-Authentic Proximity Safety Suppressor.
 *   - World 1-2 Underground Pipe Maze & Secret Warp Zone (Worlds 2, 3, 4).
 *   - Worlds 1-1 Overworld, 1-3 Treetop Athletic, 1-4 Bowser Castle with Bridge Collapse.
 *   - Enhanced HD Procedural Visuals (Metallic Beveled Pipes, Specular Highlights, Shimmering ? Blocks).
 *   - Web Audio NES Chiptune Synthesizer.
 * Zero external audio or sprite image dependencies.
 */

const TILE_SIZE = 32;
const GRAVITY = 0.48;

// --- 1. Web Audio NES Chiptune Synthesizer ---
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

  playCoin(streak = 0) {
    if (!this.enabled) return;
    this.init();
    try {
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const baseB = 987.77 * (1 + streak * 0.05);
      const baseE = 1318.51 * (1 + streak * 0.05);
      osc.type = 'square';
      osc.frequency.setValueAtTime(baseB, t);
      osc.frequency.setValueAtTime(baseE, t + 0.08);
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(t + 0.35);
    } catch (e) {}
  }

  playStomp() {
    this.playTone(130, 'triangle', 0.09, 0.16, 40);
  }

  playKick() {
    this.playTone(210, 'square', 0.11, 0.15, 75);
  }

  playFireball() {
    this.playTone(650, 'triangle', 0.1, 0.1, 140);
  }

  playPowerup() {
    const freqs = [330, 392, 659, 523, 587, 784];
    freqs.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'square', 0.08, 0.1), idx * 60);
    });
  }

  /**
   * Authentic NES Pipe Warp Sound: Sliding pitch envelope downward.
   */
  playPipe() {
    if (!this.enabled) return;
    const freqs = [170, 140, 115, 90];
    freqs.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.11, 0.14, f * 0.8), idx * 75);
    });
  }

  playBrickShatter() {
    this.playTone(180, 'sawtooth', 0.12, 0.15, 50);
  }

  playFlagpole() {
    const notes = [659, 587, 523, 440, 392, 330, 262];
    notes.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.1, 0.12), idx * 70);
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
      setTimeout(() => this.playTone(190 - i * 18, 'sawtooth', 0.1, 0.15), i * 80);
    }
  }

  playDeath() {
    const freqs = [500, 420, 330, 260, 190];
    freqs.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.15, 0.15), idx * 100);
    });
  }
}

// --- 2. Enhanced HD Procedural Sprite & Tile Renderer ---
class HDPipeRenderer {
  /**
   * Draw high-resolution procedural tile with metallic beveling and depth.
   */
  static drawTile(ctx, type, x, y, worldType = 'OVERWORLD', tick = 0) {
    ctx.save();
    switch (type) {
      case 1: // Ground Block
        if (worldType === 'UNDERGROUND') {
          // Deep Blue Subterranean Basalt
          ctx.fillStyle = '#003875';
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = '#006cd8';
          ctx.fillRect(x, y, TILE_SIZE, 3);
          ctx.fillRect(x, y, 3, TILE_SIZE);
          ctx.fillStyle = '#001a40';
          ctx.fillRect(x + TILE_SIZE - 2, y, 2, TILE_SIZE);
          ctx.fillRect(x, y + TILE_SIZE - 2, TILE_SIZE, 2);
          // Subtle crystalline glints
          ctx.fillStyle = '#55c0ff';
          ctx.fillRect(x + 6, y + 6, 2, 2);
          ctx.fillRect(x + 20, y + 18, 2, 2);
        } else if (worldType === 'CASTLE') {
          // Dark Castle Volcanic Brick
          ctx.fillStyle = '#444450';
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = '#6a6a78';
          ctx.fillRect(x + 2, y + 2, 12, 12);
          ctx.fillRect(x + 16, y + 16, 12, 12);
          ctx.strokeStyle = '#222228';
          ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
          // Glowing red mortar seepage
          ctx.fillStyle = 'rgba(255, 60, 20, 0.4)';
          ctx.fillRect(x, y + TILE_SIZE - 2, TILE_SIZE, 2);
        } else {
          // Overworld Rich Soil & Top Grass Cap
          ctx.fillStyle = '#d84400';
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          // Darker soil texture speckles
          ctx.fillStyle = '#9e2e00';
          ctx.fillRect(x + 4, y + 14, 4, 3);
          ctx.fillRect(x + 18, y + 22, 5, 3);
          // Lush gradient grass cap
          ctx.fillStyle = '#00aa00';
          ctx.fillRect(x, y, TILE_SIZE, 7);
          ctx.fillStyle = '#66ff22';
          ctx.fillRect(x, y, TILE_SIZE, 2);
          ctx.fillStyle = '#007700';
          ctx.fillRect(x, y + 6, TILE_SIZE, 2);
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        }
        break;

      case 2: // Brick Block
        const bBase = worldType === 'UNDERGROUND' ? '#0050aa' : (worldType === 'CASTLE' ? '#784848' : '#b84414');
        const bLight = worldType === 'UNDERGROUND' ? '#4488ff' : (worldType === 'CASTLE' ? '#a86868' : '#e06830');
        const bShadow = '#280c04';

        ctx.fillStyle = bBase;
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        // Mortar lines
        ctx.fillStyle = bShadow;
        ctx.fillRect(x, y + 10, TILE_SIZE, 2);
        ctx.fillRect(x, y + 21, TILE_SIZE, 2);
        ctx.fillRect(x + 15, y, 2, 10);
        ctx.fillRect(x + 7, y + 10, 2, 11);
        ctx.fillRect(x + 23, y + 10, 2, 11);
        ctx.fillRect(x + 15, y + 21, 2, 11);
        // Beveled 3D brick highlights
        ctx.fillStyle = bLight;
        ctx.fillRect(x, y, TILE_SIZE, 1.5);
        ctx.fillRect(x, y + 12, TILE_SIZE, 1);
        ctx.fillRect(x, y + 23, TILE_SIZE, 1);
        break;

      case 3: // Animated Question Block
        const shimmerPhase = (Math.sin(tick * 0.15) + 1) * 0.5;
        const qGold = shimmerPhase > 0.5 ? '#fcb833' : '#fca020';
        ctx.fillStyle = qGold;
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        // Specular outer rim
        ctx.fillStyle = '#ffe888';
        ctx.fillRect(x, y, TILE_SIZE, 3);
        ctx.fillRect(x, y, 3, TILE_SIZE);
        ctx.fillStyle = '#8b5000';
        ctx.fillRect(x + TILE_SIZE - 2, y, 2, TILE_SIZE);
        ctx.fillRect(x, y + TILE_SIZE - 2, TILE_SIZE, 2);
        // Corner rivets
        ctx.fillStyle = '#442200';
        ctx.fillRect(x + 3, y + 3, 2, 2);
        ctx.fillRect(x + TILE_SIZE - 5, y + 3, 2, 2);
        ctx.fillRect(x + 3, y + TILE_SIZE - 5, 2, 2);
        ctx.fillRect(x + TILE_SIZE - 5, y + TILE_SIZE - 5, 2, 2);
        // Glowing bold '?'
        ctx.fillStyle = '#000';
        ctx.font = 'bold 20px monospace';
        ctx.fillText('?', x + 10, y + 24);
        ctx.fillStyle = '#ffffff';
        ctx.fillText('?', x + 9, y + 23);
        break;

      case 4: // Spent Solid Block
        ctx.fillStyle = '#8a5528';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#5c3515';
        ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#221105';
        ctx.fillRect(x + 3, y + 3, 3, 3);
        ctx.fillRect(x + TILE_SIZE - 6, y + 3, 3, 3);
        ctx.fillRect(x + 3, y + TILE_SIZE - 6, 3, 3);
        ctx.fillRect(x + TILE_SIZE - 6, y + TILE_SIZE - 6, 3, 3);
        break;

      case 5: // Pipe Top-Left (Lip Rim)
      case 6: // Pipe Top-Right (Lip Rim)
      case 7: // Pipe Body-Left (Stem)
      case 8: // Pipe Body-Right (Stem)
        this.drawPipeTile(ctx, type, x, y);
        break;

      case 9: // Flagpole
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x + 14, y, 4, TILE_SIZE);
        ctx.fillStyle = '#ffd700'; // Gold Finial Ball
        ctx.beginPath();
        ctx.arc(x + 16, y + 4, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(x + 14, y + 2, 2, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 10: // Castle Rampart Stone
        ctx.fillStyle = '#7a7a88';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.strokeStyle = '#222';
        ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#9e9eac';
        ctx.fillRect(x + 2, y + 2, 6, 6);
        break;

      case 11: // Bowser Drawbridge
        ctx.fillStyle = '#aa4400';
        ctx.fillRect(x, y + 18, TILE_SIZE, 14);
        ctx.fillStyle = '#ff9922';
        ctx.fillRect(x, y + 18, TILE_SIZE, 3);
        ctx.fillStyle = '#441800';
        ctx.strokeRect(x, y + 18, TILE_SIZE, 14);
        break;

      case 12: // Castle Axe (Switch)
        ctx.fillStyle = '#ffd700'; // Gold shaft
        ctx.fillRect(x + 14, y + 2, 4, 28);
        ctx.fillStyle = '#f0f0ff'; // Silver axe head
        ctx.beginPath();
        ctx.arc(x + 16, y + 10, 10, -Math.PI / 2, Math.PI / 2);
        ctx.fill();
        ctx.strokeStyle = '#444';
        ctx.stroke();
        break;
    }
    ctx.restore();
  }

  /**
   * Draw high-fidelity procedural metallic pipe tile.
   * Features: Specular highlight stripe, cylindrical bevel, and dark interior hole.
   */
  static drawPipeTile(ctx, type, x, y) {
    const isTop = (type === 5 || type === 6);
    const isLeft = (type === 5 || type === 7);

    // Pipe base emerald green
    ctx.fillStyle = '#009800';
    ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

    if (isLeft) {
      // Left side: Specular gloss shine stripe
      ctx.fillStyle = '#58f898';
      ctx.fillRect(x + 4, y, 7, TILE_SIZE);
      // Outer border edge
      ctx.fillStyle = '#004800';
      ctx.fillRect(x, y, 2, TILE_SIZE);
    } else {
      // Right side: Deep cylindrical shadow
      ctx.fillStyle = '#005800';
      ctx.fillRect(x + TILE_SIZE - 8, y, 8, TILE_SIZE);
      ctx.fillStyle = '#003800';
      ctx.fillRect(x + TILE_SIZE - 2, y, 2, TILE_SIZE);
    }

    if (isTop) {
      // Pipe Rim Lip collar (protrudes slightly, with bevel and top hollow opening)
      // Top dark hollow hole depth
      ctx.fillStyle = '#003000';
      ctx.fillRect(x, y, TILE_SIZE, 5);
      ctx.fillStyle = '#001800';
      ctx.fillRect(x, y, TILE_SIZE, 3);

      // Collar highlight line
      ctx.fillStyle = '#78ffaa';
      ctx.fillRect(x + (isLeft ? 4 : 0), y + 3, isLeft ? 7 : 0, 2);

      // Collar bottom drop shadow over pipe stem
      ctx.fillStyle = 'rgba(0, 30, 0, 0.6)';
      ctx.fillRect(x, y + TILE_SIZE - 3, TILE_SIZE, 3);
    }

    // Outer outline
    ctx.strokeStyle = '#003000';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
  }

  /**
   * Draw horizontal wall pipe (e.g. subterranean exit pipe).
   */
  static drawHorizontalPipe(ctx, x, y, width, height) {
    ctx.save();
    // Pipe Stem
    ctx.fillStyle = '#009800';
    ctx.fillRect(x, y, width, height);

    // Top highlight stripe
    ctx.fillStyle = '#58f898';
    ctx.fillRect(x, y + 4, width, 8);

    // Bottom shadow
    ctx.fillStyle = '#004800';
    ctx.fillRect(x, y + height - 10, width, 10);

    // Left collar opening
    ctx.fillStyle = '#003000';
    ctx.fillRect(x, y, 6, height);
    ctx.fillStyle = '#001800';
    ctx.fillRect(x, y + 4, 4, height - 8);

    ctx.strokeStyle = '#003000';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    ctx.restore();
  }

  /**
   * Draw animated Piranha Plant emerging from pipe.
   */
  static drawPiranhaPlant(ctx, p, tick = 0) {
    if (!p.isAlive) return;
    ctx.save();
    const x = p.x;
    const y = p.y; // Current vertical offset
    const chompOpen = Math.floor(tick / 8) % 2 === 0;

    // Green Stalk
    ctx.fillStyle = '#00a800';
    ctx.fillRect(x + 12, y + 16, 8, 20);
    // Green leaves
    ctx.beginPath();
    ctx.ellipse(x + 8, y + 26, 6, 3, -0.4, 0, Math.PI * 2);
    ctx.ellipse(x + 24, y + 26, 6, 3, 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Red Bulb Head with white polka dots
    ctx.fillStyle = '#d81800';
    ctx.beginPath();
    ctx.arc(x + 16, y + 12, 14, 0, Math.PI * 2);
    ctx.fill();

    // White polka dots
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x + 10, y + 6, 2.5, 0, Math.PI * 2);
    ctx.arc(x + 22, y + 6, 2.5, 0, Math.PI * 2);
    ctx.arc(x + 7, y + 14, 2, 0, Math.PI * 2);
    ctx.arc(x + 25, y + 14, 2, 0, Math.PI * 2);
    ctx.fill();

    // Chomping Mouth & Sharp Teeth
    ctx.fillStyle = '#ffffff';
    // Thick white lips
    ctx.fillRect(x + 8, y + (chompOpen ? 9 : 11), 16, chompOpen ? 10 : 5);
    ctx.fillStyle = '#000000';
    ctx.fillRect(x + 10, y + (chompOpen ? 11 : 12), 12, chompOpen ? 6 : 3);

    if (chompOpen) {
      // Sharp triangular teeth
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      // Upper teeth
      ctx.moveTo(x + 11, y + 11); ctx.lineTo(x + 13, y + 14); ctx.lineTo(x + 15, y + 11);
      ctx.moveTo(x + 17, y + 11); ctx.lineTo(x + 19, y + 14); ctx.lineTo(x + 21, y + 11);
      // Lower teeth
      ctx.moveTo(x + 11, y + 17); ctx.lineTo(x + 13, y + 14); ctx.lineTo(x + 15, y + 17);
      ctx.moveTo(x + 17, y + 17); ctx.lineTo(x + 19, y + 14); ctx.lineTo(x + 21, y + 17);
      ctx.fill();
    }
    ctx.restore();
  }

  /**
   * Draw high-resolution Mario with Small / Super / Fire states, running, jumping, and pipe-crouching.
   */
  static drawMario(ctx, mario, tick = 0) {
    if (mario.invulnerable > 0 && Math.floor(tick / 3) % 2 === 0) return;

    ctx.save();
    const x = mario.x;
    const y = mario.y;
    const isSuper = mario.powerState === 'SUPER';
    const isFire = mario.powerState === 'FIRE';
    const facingRight = mario.facingRight;

    // Palette Colors
    const capColor = isFire ? '#ffffff' : '#d82800';
    const shirtColor = isFire ? '#ffffff' : '#d82800';
    const overallColor = isFire ? '#d82800' : '#0048d8';
    const skinColor = '#fc9838';
    const shoeColor = '#884400';

    ctx.translate(x + mario.width / 2, y + mario.height / 2);
    if (!facingRight) ctx.scale(-1, 1);

    const halfW = mario.width / 2;
    const halfH = mario.height / 2;

    if (mario.powerState === 'SMALL') {
      // Small Mario (24 x 32)
      // Cap & Head
      ctx.fillStyle = capColor;
      ctx.fillRect(-8, -halfH, 16, 6);
      ctx.fillRect(-6, -halfH + 6, 18, 4);

      // Face / Skin
      ctx.fillStyle = skinColor;
      ctx.fillRect(-6, -halfH + 8, 14, 8);
      // Eye & Mustache
      ctx.fillStyle = '#000';
      ctx.fillRect(2, -halfH + 9, 3, 4); // Eye
      ctx.fillRect(0, -halfH + 13, 8, 3); // Mustache
      // Hair / Sideburn
      ctx.fillStyle = '#603000';
      ctx.fillRect(-7, -halfH + 9, 3, 5);

      // Shirt / Torso
      ctx.fillStyle = shirtColor;
      ctx.fillRect(-7, -halfH + 16, 14, 7);

      // Overalls & Legs
      ctx.fillStyle = overallColor;
      ctx.fillRect(-6, -halfH + 20, 12, 7);
      // Overall straps
      ctx.fillRect(-5, -halfH + 16, 3, 5);
      ctx.fillRect(1, -halfH + 16, 3, 5);

      // Shoes
      ctx.fillStyle = shoeColor;
      if (!mario.isGrounded) {
        // Jump pose
        ctx.fillRect(-7, halfH - 5, 6, 5);
        ctx.fillRect(2, halfH - 8, 6, 5);
      } else if (Math.abs(mario.vx) > 0.2) {
        // Running leg animation
        const runFrame = Math.floor(tick / 5) % 3;
        if (runFrame === 0) {
          ctx.fillRect(-8, halfH - 5, 7, 5);
          ctx.fillRect(1, halfH - 5, 7, 5);
        } else if (runFrame === 1) {
          ctx.fillRect(-5, halfH - 5, 10, 5);
        } else {
          ctx.fillRect(-7, halfH - 7, 6, 5);
          ctx.fillRect(2, halfH - 4, 7, 4);
        }
      } else {
        // Idle
        ctx.fillRect(-8, halfH - 5, 7, 5);
        ctx.fillRect(1, halfH - 5, 7, 5);
      }
    } else {
      // Super / Fire Mario (28 x 48)
      // Cap
      ctx.fillStyle = capColor;
      ctx.fillRect(-9, -halfH, 18, 8);
      ctx.fillRect(-7, -halfH + 8, 20, 5);

      // Face
      ctx.fillStyle = skinColor;
      ctx.fillRect(-7, -halfH + 11, 16, 10);
      // Eye & Mustache
      ctx.fillStyle = '#000';
      ctx.fillRect(3, -halfH + 12, 3, 5);
      ctx.fillRect(0, -halfH + 17, 10, 4);
      // Hair
      ctx.fillStyle = '#603000';
      ctx.fillRect(-8, -halfH + 12, 4, 7);

      // Shirt & Arms
      ctx.fillStyle = shirtColor;
      ctx.fillRect(-8, -halfH + 21, 16, 12);

      // Overalls
      ctx.fillStyle = overallColor;
      ctx.fillRect(-7, -halfH + 28, 14, 12);
      ctx.fillRect(-6, -halfH + 21, 4, 8);
      ctx.fillRect(2, -halfH + 21, 4, 8);
      // Yellow buttons
      ctx.fillStyle = '#ffd700';
      ctx.fillRect(-5, -halfH + 28, 2, 2);
      ctx.fillRect(3, -halfH + 28, 2, 2);

      // Shoes
      ctx.fillStyle = shoeColor;
      if (!mario.isGrounded) {
        ctx.fillRect(-9, halfH - 8, 8, 8);
        ctx.fillRect(2, halfH - 12, 8, 8);
      } else if (Math.abs(mario.vx) > 0.2) {
        const runFrame = Math.floor(tick / 5) % 3;
        if (runFrame === 0) {
          ctx.fillRect(-9, halfH - 7, 8, 7);
          ctx.fillRect(1, halfH - 7, 8, 7);
        } else if (runFrame === 1) {
          ctx.fillRect(-6, halfH - 7, 12, 7);
        } else {
          ctx.fillRect(-8, halfH - 10, 8, 7);
          ctx.fillRect(2, halfH - 6, 8, 6);
        }
      } else {
        ctx.fillRect(-9, halfH - 7, 8, 7);
        ctx.fillRect(1, halfH - 7, 8, 7);
      }
    }
    ctx.restore();
  }

  /**
   * Draw Goomba enemy.
   */
  static drawGoomba(ctx, g, tick = 0) {
    if (!g.isAlive && !g.isSquished) return;
    ctx.save();
    const x = g.x;
    const y = g.y;

    if (g.isSquished) {
      // Squashed flat pancake
      ctx.fillStyle = '#a84800';
      ctx.fillRect(x + 2, y + 20, 28, 12);
      ctx.fillStyle = '#fcb878';
      ctx.fillRect(x + 6, y + 22, 20, 6);
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 8, y + 24, 4, 2);
      ctx.fillRect(x + 20, y + 24, 4, 2);
      ctx.restore();
      return;
    }

    // Mushroom Body
    ctx.fillStyle = '#a84800';
    ctx.beginPath();
    ctx.arc(x + 16, y + 14, 14, Math.PI, 0);
    ctx.lineTo(x + 28, y + 22);
    ctx.lineTo(x + 4, y + 22);
    ctx.closePath();
    ctx.fill();

    // Stem / Face
    ctx.fillStyle = '#fcb878';
    ctx.fillRect(x + 8, y + 16, 16, 10);

    // Eyes
    ctx.fillStyle = '#fff';
    ctx.fillRect(x + 9, y + 16, 4, 6);
    ctx.fillRect(x + 19, y + 16, 4, 6);
    ctx.fillStyle = '#000';
    ctx.fillRect(x + 11, y + 17, 2, 4);
    ctx.fillRect(x + 19, y + 17, 2, 4);

    // Brows
    ctx.fillRect(x + 8, y + 15, 6, 2);
    ctx.fillRect(x + 18, y + 15, 6, 2);

    // Feet waddle
    ctx.fillStyle = '#000';
    const footFrame = Math.floor(tick / 8) % 2;
    if (footFrame === 0) {
      ctx.fillRect(x + 3, y + 26, 9, 6);
      ctx.fillRect(x + 19, y + 27, 8, 5);
    } else {
      ctx.fillRect(x + 4, y + 27, 8, 5);
      ctx.fillRect(x + 20, y + 26, 9, 6);
    }
    ctx.restore();
  }

  /**
   * Draw Koopa Troopa or Shell.
   */
  static drawKoopa(ctx, k, tick = 0) {
    if (!k.isAlive) return;
    ctx.save();
    const x = k.x;
    const y = k.y;

    if (k.isShell) {
      // Shell form
      ctx.fillStyle = '#00aa00';
      ctx.beginPath();
      ctx.arc(x + 16, y + 20, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fce4a0';
      ctx.fillRect(x + 6, y + 24, 20, 6);
      ctx.strokeStyle = '#004800';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
      return;
    }

    // Walking Koopa
    ctx.translate(x + 16, y + 16);
    if (k.vx > 0) ctx.scale(-1, 1);

    // Shell
    ctx.fillStyle = '#00aa00';
    ctx.beginPath();
    ctx.arc(2, 6, 10, 0, Math.PI * 2);
    ctx.fill();

    // Belly
    ctx.fillStyle = '#fce4a0';
    ctx.fillRect(-6, 8, 12, 6);

    // Head
    ctx.fillStyle = '#fce4a0';
    ctx.beginPath();
    ctx.arc(-8, -4, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillRect(-10, -5, 2, 3); // Eye

    // Shoes
    ctx.fillStyle = '#d84400';
    ctx.fillRect(-8, 18, 6, 5);
    ctx.fillRect(2, 18, 6, 5);

    ctx.restore();
  }

  /**
   * Draw Bowser Boss.
   */
  static drawBowser(ctx, b, tick = 0) {
    if (!b || !b.isAlive) return;
    ctx.save();
    const x = b.x;
    const y = b.y;

    // Green Spiked Shell
    ctx.fillStyle = '#007700';
    ctx.beginPath();
    ctx.arc(x + 40, y + 36, 26, 0, Math.PI * 2);
    ctx.fill();

    // White shell spikes
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 8); ctx.lineTo(x + 36, y + 16); ctx.lineTo(x + 44, y + 16);
    ctx.moveTo(x + 58, y + 20); ctx.lineTo(x + 50, y + 24); ctx.lineTo(x + 54, y + 30);
    ctx.fill();

    // Yellow Scaled Body
    ctx.fillStyle = '#e8a800';
    ctx.fillRect(x + 12, y + 24, 28, 36);

    // Red Horned Head
    ctx.fillStyle = '#008800';
    ctx.fillRect(x + 4, y + 12, 22, 20);
    ctx.fillStyle = '#d82800'; // Red mane
    ctx.fillRect(x + 16, y + 4, 14, 12);
    ctx.fillStyle = '#ffffff'; // Horns
    ctx.fillRect(x + 8, y + 4, 4, 8);

    // Glowing Red Eye
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(x + 8, y + 18, 4, 4);

    // Snout / Jaws
    ctx.fillStyle = '#e8a800';
    ctx.fillRect(x - 2, y + 24, 16, 12);
    ctx.fillStyle = '#fff';
    ctx.fillRect(x, y + 32, 4, 4); // Fangs

    ctx.restore();
  }
}

// --- 3. Super Mario Bros Warp Pipe Engine ---
class MarioPipeEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.audio = new MarioAudio();

    this.score = 0;
    this.coins = 0;
    this.lives = 3;
    this.time = 400;
    this.world = '1-1';
    this.worldType = 'OVERWORLD';
    this.coinStreak = 0;

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
      powerState: 'SMALL', // 'SMALL', 'SUPER', 'FIRE'
      pipeState: 'NORMAL', // 'NORMAL', 'ENTERING_DOWN', 'ENTERING_RIGHT', 'EXITING_UP', 'EXITING_RIGHT'
      pipeTimer: 0,
      pipeTarget: null,
      invulnerable: 0,
      isDead: false,
      isVictory: false
    };

    this.keys = {
      left: false,
      right: false,
      down: false,
      jump: false,
      run: false
    };

    this.cameraX = 0;
    this.tick = 0;
    this.isPlaying = false;
    this.isPaused = false;
    this.isGameOver = false;

    // Entity Arrays
    this.pipes = [];
    this.piranhas = [];
    this.enemies = [];
    this.powerups = [];
    this.fireballs = [];
    this.particles = [];
    this.bowser = null;

    this.levelCols = 130;
    this.levelRows = 15;
    this.tilemap = [];

    this.initCanvasDPI();
    this.loadWorld('1-1');
    this.initControls();
  }

  initCanvasDPI() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = 800 * dpr;
    this.canvas.height = 480 * dpr;
    this.ctx.scale(dpr, dpr);
  }

  loadWorld(worldId) {
    this.world = worldId;
    this.levelCols = (worldId === '1-1-SUB' || worldId === 'PIPE-SANDBOX') ? 50 : 130;
    this.levelRows = 15;
    this.tilemap = Array.from({ length: this.levelRows }, () => Array(this.levelCols).fill(0));

    this.pipes = [];
    this.piranhas = [];
    this.enemies = [];
    this.powerups = [];
    this.fireballs = [];
    this.particles = [];
    this.bowser = null;
    this.time = 400;

    if (worldId === '1-1') {
      this.worldType = 'OVERWORLD';
      this.buildWorld11();
    } else if (worldId === '1-1-SUB') {
      this.worldType = 'UNDERGROUND';
      this.buildWorld11Sub();
    } else if (worldId === '1-2') {
      this.worldType = 'UNDERGROUND';
      this.buildWorld12();
    } else if (worldId === '1-3') {
      this.worldType = 'TREETOP';
      this.buildWorld13();
    } else if (worldId === '1-4') {
      this.worldType = 'CASTLE';
      this.buildWorld14();
    } else if (worldId === 'PIPE-SANDBOX') {
      this.worldType = 'OVERWORLD';
      this.buildSandbox();
    }

    this.updateHUD();
  }

  /**
   * Helper to construct a standard 2-column vertical pipe in the tilemap.
   */
  registerPipe(col, height, options = {}) {
    const topRow = 13 - height;
    this.tilemap[topRow][col] = 5;     // Top-Left Collar
    this.tilemap[topRow][col + 1] = 6; // Top-Right Collar
    for (let r = topRow + 1; r < 13; r++) {
      this.tilemap[r][col] = 7;        // Stem-Left
      this.tilemap[r][col + 1] = 8;    // Stem-Right
    }

    const pipeData = {
      col,
      height,
      x: col * TILE_SIZE,
      y: topRow * TILE_SIZE,
      width: 2 * TILE_SIZE,
      heightPx: height * TILE_SIZE,
      isEnterable: options.isEnterable || false,
      direction: options.direction || 'VERTICAL_DOWN',
      targetWorld: options.targetWorld || null,
      targetCol: options.targetCol || 0,
      targetPipeIndex: options.targetPipeIndex !== undefined ? options.targetPipeIndex : null,
      hasPiranha: options.hasPiranha || false
    };

    this.pipes.push(pipeData);

    if (pipeData.hasPiranha) {
      this.piranhas.push({
        pipeIndex: this.pipes.length - 1,
        pipeX: pipeData.x,
        pipeTopY: pipeData.y,
        x: pipeData.x + 8,
        y: pipeData.y, // Current Y position
        state: 'HIDDEN', // 'HIDDEN', 'RISING', 'BITING', 'RETREATING'
        timer: 60,
        isAlive: true
      });
    }

    return pipeData;
  }

  /**
   * World 1-1 (Overworld): Faithful recreation of classic Super Mario Bros 1-1.
   * Features: 4 pipes:
   *   - Pipe 1 (col 28, height 2): Small pipe with Goombas.
   *   - Pipe 2 (col 38, height 3): WARP PIPE! Press Down to enter 1-1-SUB bonus cavern!
   *   - Pipe 3 (col 48, height 4): Tall pipe with Piranha Plant.
   *   - Pipe 4 (col 62, height 3): RETURN EXIT PIPE from 1-1-SUB!
   */
  buildWorld11() {
    // Ground with gaps
    for (let c = 0; c < this.levelCols; c++) {
      if ((c >= 69 && c <= 71) || (c >= 86 && c <= 88)) continue;
      this.tilemap[13][c] = 1;
      this.tilemap[14][c] = 1;
    }

    // Mystery Question Blocks & Bricks
    this.tilemap[9][16] = 3; // Coin
    this.tilemap[9][20] = 2; // Brick
    this.tilemap[9][21] = 3; // Super Mushroom
    this.tilemap[9][22] = 2;
    this.tilemap[9][23] = 3; // Fire Flower
    this.tilemap[9][24] = 2;

    // The Four Iconic 1-1 Pipes
    // 1. Small pipe (height 2)
    this.registerPipe(28, 2, { hasPiranha: false });
    // 2. Warp Pipe (height 3) -> Enterable into 1-1 Sub Bonus Cavern!
    this.registerPipe(38, 3, { isEnterable: true, direction: 'VERTICAL_DOWN', targetWorld: '1-1-SUB', targetCol: 4, hasPiranha: false });
    // 3. Tall pipe (height 4) with Piranha Plant
    this.registerPipe(48, 4, { hasPiranha: true });
    // 4. Return exit pipe (height 3) where Mario emerges from 1-1 Sub
    this.registerPipe(62, 3, { isEnterable: false, hasPiranha: false });

    // Mid-stage brick formations
    for (let c = 77; c <= 82; c++) this.tilemap[9][c] = 2;
    this.tilemap[5][80] = 3;

    // Staircase leading to Flagpole
    const stairStart = 98;
    for (let step = 0; step < 8; step++) {
      for (let r = 12 - step; r < 13; r++) {
        this.tilemap[r][stairStart + step] = 1;
      }
    }
    // Flagpole at col 108
    for (let r = 2; r < 13; r++) this.tilemap[r][108] = 9;
    this.tilemap[12][108] = 1;

    // End-of-level Castle
    for (let r = 8; r < 13; r++) {
      for (let c = 114; c <= 120; c++) this.tilemap[r][c] = 10;
    }

    // Enemies
    this.enemies.push({ type: 'GOOMBA', x: 22 * TILE_SIZE, y: 12 * TILE_SIZE, vx: -1.2, isSquished: false, isAlive: true, removeTimer: 0 });
    this.enemies.push({ type: 'KOOPA', x: 33 * TILE_SIZE, y: 11.5 * TILE_SIZE, vx: -1.0, isShell: false, isAlive: true });
    this.enemies.push({ type: 'GOOMBA', x: 54 * TILE_SIZE, y: 12 * TILE_SIZE, vx: -1.2, isSquished: false, isAlive: true, removeTimer: 0 });
    this.enemies.push({ type: 'GOOMBA', x: 80 * TILE_SIZE, y: 12 * TILE_SIZE, vx: -1.2, isSquished: false, isAlive: true, removeTimer: 0 });

    this.resetMarioPosition(64, 350);
  }

  /**
   * World 1-1 Sub (Subterranean Bonus Cavern):
   * Features: 19 coins in rows + pyramid, dark blue stone tiles, and horizontal exit pipe!
   */
  buildWorld11Sub() {
    // Ceiling & Floor
    for (let c = 0; c < this.levelCols; c++) {
      this.tilemap[0][c] = 1;
      this.tilemap[1][c] = 1;
      this.tilemap[13][c] = 1;
      this.tilemap[14][c] = 1;
    }

    // Entrance Pipe (top ceiling drop)
    this.tilemap[2][4] = 7;
    this.tilemap[2][5] = 8;
    this.tilemap[3][4] = 7;
    this.tilemap[3][5] = 8;

    // 19 Bonus Coins arranged in authentic formation
    this.bonusCoins = [];
    // Lower coin row (cols 12-22, row 10)
    for (let c = 12; c <= 21; c++) {
      this.bonusCoins.push({ x: c * TILE_SIZE + 8, y: 10 * TILE_SIZE, collected: false });
    }
    // Upper coin row (cols 13-20, row 7)
    for (let c = 13; c <= 20; c++) {
      this.bonusCoins.push({ x: c * TILE_SIZE + 8, y: 7 * TILE_SIZE, collected: false });
    }
    // Peak coin (col 16, row 5) -> Total 19 coins
    this.bonusCoins.push({ x: 16 * TILE_SIZE + 8, y: 5 * TILE_SIZE, collected: false });

    // Underworld Brick Platform
    for (let c = 12; c <= 22; c++) this.tilemap[11][c] = 2;

    // Horizontal Exit Side Pipe at right wall (col 32-34)
    this.registerHorizontalExitPipe(32, 10, {
      targetWorld: '1-1',
      targetCol: 62, // Lands inside Overworld Pipe 4
      direction: 'HORIZONTAL_RIGHT'
    });

    this.resetMarioPosition(4 * TILE_SIZE, 4 * TILE_SIZE);
  }

  registerHorizontalExitPipe(col, row, options = {}) {
    this.tilemap[row][col] = 7;
    this.tilemap[row + 1][col] = 7;
    this.tilemap[row][col + 1] = 8;
    this.tilemap[row + 1][col + 1] = 8;

    this.pipes.push({
      col,
      row,
      x: col * TILE_SIZE,
      y: row * TILE_SIZE,
      width: 2 * TILE_SIZE,
      heightPx: 2 * TILE_SIZE,
      isEnterable: true,
      direction: 'HORIZONTAL_RIGHT',
      targetWorld: options.targetWorld || '1-1',
      targetCol: options.targetCol || 62,
      hasPiranha: false
    });
  }

  /**
   * World 1-2 (Underground Pipe Maze & Secret Warp Zone):
   * Features: High/low pipes, piranha plants, and the famous WARP ZONE (Pipes to World 2, 3, 4).
   */
  buildWorld12() {
    for (let c = 0; c < this.levelCols; c++) {
      this.tilemap[0][c] = 1;
      this.tilemap[1][c] = 1;
      if ((c >= 35 && c <= 38) || (c >= 70 && c <= 73)) continue;
      this.tilemap[13][c] = 1;
      this.tilemap[14][c] = 1;
    }

    // High & Low Underground Pipes
    this.registerPipe(18, 3, { hasPiranha: true });
    this.registerPipe(28, 2, { hasPiranha: false });
    this.registerPipe(48, 4, { hasPiranha: true });
    this.registerPipe(60, 3, { hasPiranha: true });

    // Ceiling shortcut leading to WARP ZONE
    for (let c = 75; c <= 115; c++) this.tilemap[3][c] = 2;

    // WARP ZONE Pipes at cols 98, 104, 110
    this.registerPipe(98, 3, { isEnterable: true, targetWorld: '1-3', label: 'WORLD 2', hasPiranha: false });
    this.registerPipe(104, 3, { isEnterable: true, targetWorld: '1-3', label: 'WORLD 3', hasPiranha: false });
    this.registerPipe(110, 3, { isEnterable: true, targetWorld: '1-4', label: 'WORLD 4', hasPiranha: false });

    this.enemies.push({ type: 'GOOMBA', x: 22 * TILE_SIZE, y: 12 * TILE_SIZE, vx: -1.2, isSquished: false, isAlive: true, removeTimer: 0 });
    this.enemies.push({ type: 'KOOPA', x: 42 * TILE_SIZE, y: 11.5 * TILE_SIZE, vx: -1.0, isShell: false, isAlive: true });
    this.enemies.push({ type: 'GOOMBA', x: 54 * TILE_SIZE, y: 12 * TILE_SIZE, vx: -1.2, isSquished: false, isAlive: true, removeTimer: 0 });

    this.resetMarioPosition(64, 350);
  }

  /**
   * World 1-3 (Athletic Treetop).
   */
  buildWorld13() {
    for (let c = 0; c < 20; c++) { this.tilemap[13][c] = 1; this.tilemap[14][c] = 1; }
    for (let c = 26; c < 36; c++) this.tilemap[10][c] = 2;
    for (let c = 44; c < 56; c++) this.tilemap[8][c] = 2;
    for (let c = 64; c < 78; c++) this.tilemap[6][c] = 2;
    for (let c = 86; c < this.levelCols; c++) { this.tilemap[13][c] = 1; this.tilemap[14][c] = 1; }

    this.registerPipe(30, 2, { hasPiranha: true });
    this.registerPipe(70, 2, { hasPiranha: true });

    for (let r = 2; r < 13; r++) this.tilemap[r][104] = 9;
    this.tilemap[12][104] = 1;

    this.enemies.push({ type: 'KOOPA', x: 32 * TILE_SIZE, y: 8.5 * TILE_SIZE, vx: -1.0, isShell: false, isAlive: true });
    this.enemies.push({ type: 'KOOPA', x: 50 * TILE_SIZE, y: 6.5 * TILE_SIZE, vx: -1.0, isShell: false, isAlive: true });

    this.resetMarioPosition(64, 350);
  }

  /**
   * World 1-4 (Bowser Castle).
   */
  buildWorld14() {
    for (let c = 0; c < this.levelCols; c++) {
      this.tilemap[0][c] = 1;
      if (c < 60 || c > 95) {
        this.tilemap[13][c] = 1;
        this.tilemap[14][c] = 1;
      }
    }

    // Bowser Bridge (cols 68-86)
    for (let c = 68; c <= 86; c++) this.tilemap[11][c] = 11;
    // Axe switch at col 87
    this.tilemap[10][87] = 12;

    this.bowser = {
      x: 76 * TILE_SIZE,
      y: 9.5 * TILE_SIZE,
      hp: 5,
      maxHp: 5,
      vx: -0.8,
      jumpTimer: 0,
      fireTimer: 0,
      isAlive: true
    };

    this.resetMarioPosition(64, 350);
  }

  /**
   * Pipe Showcase Sandbox: Quick sandbox to test all pipe mechanics.
   */
  buildSandbox() {
    for (let c = 0; c < this.levelCols; c++) {
      this.tilemap[13][c] = 1;
      this.tilemap[14][c] = 1;
    }

    // 1. Enterable vertical pipe
    this.registerPipe(8, 3, { isEnterable: true, direction: 'VERTICAL_DOWN', targetWorld: '1-1-SUB' });
    // 2. Piranha plant pipe with proximity check
    this.registerPipe(18, 4, { hasPiranha: true });
    // 3. Horizontal side pipe
    this.registerHorizontalExitPipe(32, 10, { targetWorld: '1-1', targetCol: 62 });

    // Item powerup blocks
    this.tilemap[9][12] = 3; // Mushroom
    this.tilemap[9][14] = 3; // Flower

    this.resetMarioPosition(64, 350);
  }

  resetMarioPosition(x, y) {
    const m = this.mario;
    m.x = x;
    m.y = y;
    m.vx = 0;
    m.vy = 0;
    m.height = m.powerState === 'SMALL' ? 32 : 48;
    m.isGrounded = false;
    m.isJumping = false;
    m.pipeState = 'NORMAL';
    m.pipeTimer = 0;
    m.pipeTarget = null;
    m.invulnerable = 0;
    m.isDead = false;
    m.isVictory = false;
    this.cameraX = 0;
  }

  isSolid(col, row) {
    if (col < 0 || col >= this.levelCols || row < 0 || row >= this.levelRows) return false;
    const t = this.tilemap[row][col];
    return t >= 1 && t !== 9 && t !== 12; // 9: Flagpole, 12: Axe (trigger)
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

    const overlay = document.getElementById('marioOverlay');
    if (overlay) overlay.classList.add('hidden');

    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  initControls() {
    window.addEventListener('keydown', (e) => {
      if (!this.isPlaying) return;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = true;
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = true;
      if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        this.keys.down = true;
        this.checkVerticalPipeEntry();
      }
      if (e.code === 'Space' || e.code === 'KeyW' || e.code === 'KeyK') this.keys.jump = true;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'KeyJ') {
        this.keys.run = true;
        this.shootFireball();
      }
      if (e.code === 'KeyP') this.isPaused = !this.isPaused;
      if (e.code === 'KeyM') {
        this.audio.enabled = !this.audio.enabled;
        const btn = document.getElementById('btnAudio');
        if (btn) btn.innerText = `AUDIO: ${this.audio.enabled ? 'ON' : 'OFF'}`;
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = false;
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = false;
      if (e.code === 'ArrowDown' || e.code === 'KeyS') this.keys.down = false;
      if (e.code === 'Space' || e.code === 'KeyW' || e.code === 'KeyK') this.keys.jump = false;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'KeyJ') this.keys.run = false;
    });

    // Mobile Virtual Gamepad
    this.bindTouch('mBtnLeft', 'left');
    this.bindTouch('mBtnRight', 'right');
    this.bindTouch('mBtnDown', 'down', () => this.checkVerticalPipeEntry());
    this.bindTouch('mBtnJump', 'jump');
    this.bindTouch('mBtnRun', 'run', () => this.shootFireball());

    // UI Stage Select Buttons
    const bindStage = (btnId, stageId) => {
      const b = document.getElementById(btnId);
      if (b) {
        b.addEventListener('click', () => {
          document.querySelectorAll('.ws-btn').forEach(btn => btn.classList.remove('active'));
          b.classList.add('active');
          this.loadWorld(stageId);
        });
      }
    };
    bindStage('btnW11', '1-1');
    bindStage('btnW11Sub', '1-1-SUB');
    bindStage('btnW12', '1-2');
    bindStage('btnW13', '1-3');
    bindStage('btnW14', '1-4');
    bindStage('btnSandbox', 'PIPE-SANDBOX');

    const startBtn = document.getElementById('startBtn');
    if (startBtn) startBtn.addEventListener('click', () => this.start());

    // CRT Scanlines Toggle
    const crtBtn = document.getElementById('btnScanline');
    const crtOverlay = document.getElementById('crtOverlay');
    if (crtBtn && crtOverlay) {
      crtBtn.addEventListener('click', () => {
        crtOverlay.classList.toggle('off');
        const isOn = !crtOverlay.classList.contains('off');
        crtBtn.innerText = `CRT: ${isOn ? 'ON' : 'OFF'}`;
      });
    }

    // Audio Toggle
    const audioBtn = document.getElementById('btnAudio');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        this.audio.enabled = !this.audio.enabled;
        audioBtn.innerText = `AUDIO: ${this.audio.enabled ? 'ON' : 'OFF'}`;
      });
    }
  }

  bindTouch(elemId, keyName, onPress = null) {
    const el = document.getElementById(elemId);
    if (!el) return;
    const start = (e) => {
      e.preventDefault();
      this.keys[keyName] = true;
      if (onPress) onPress();
    };
    const end = (e) => {
      e.preventDefault();
      this.keys[keyName] = false;
    };
    el.addEventListener('touchstart', start, { passive: false });
    el.addEventListener('touchend', end, { passive: false });
    el.addEventListener('mousedown', start);
    el.addEventListener('mouseup', end);
  }

  /**
   * Check if Mario can enter a vertical pipe when pressing Down.
   */
  checkVerticalPipeEntry() {
    const m = this.mario;
    if (m.pipeState !== 'NORMAL' || !m.isGrounded) return;

    for (const pipe of this.pipes) {
      if (!pipe.isEnterable || pipe.direction !== 'VERTICAL_DOWN') continue;

      // Check if Mario is standing on top of this pipe
      const onTopY = Math.abs((m.y + m.height) - pipe.y) < 2;
      const withinX = m.x >= pipe.x - 4 && (m.x + m.width) <= pipe.x + pipe.width + 4;

      if (onTopY && withinX) {
        // Trigger Vertical Down Warp!
        m.pipeState = 'ENTERING_DOWN';
        m.pipeTarget = pipe;
        m.vx = 0;
        m.vy = 0;
        // Snap center
        m.x = pipe.x + (pipe.width - m.width) / 2;
        this.audio.playPipe();
        this.spawnPipeParticles(m.x + m.width / 2, pipe.y);
        break;
      }
    }
  }

  /**
   * Check if Mario can enter a horizontal pipe when pressing Right.
   */
  checkHorizontalPipeEntry() {
    const m = this.mario;
    if (m.pipeState !== 'NORMAL') return;

    for (const pipe of this.pipes) {
      if (!pipe.isEnterable || pipe.direction !== 'HORIZONTAL_RIGHT') continue;

      // Mario touches the left edge of horizontal pipe mouth
      const atMouthX = Math.abs((m.x + m.width) - pipe.x) < 8;
      const withinY = (m.y + m.height) >= pipe.y && m.y <= pipe.y + pipe.heightPx;

      if (atMouthX && withinY && this.keys.right) {
        m.pipeState = 'ENTERING_RIGHT';
        m.pipeTarget = pipe;
        m.vx = 0;
        m.vy = 0;
        this.audio.playPipe();
        this.spawnPipeParticles(pipe.x, m.y + m.height / 2);
        break;
      }
    }
  }

  spawnPipeParticles(x, y) {
    for (let i = 0; i < 6; i++) {
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2.5,
        vy: -Math.random() * 2,
        life: 25,
        maxLife: 25,
        color: '#58f898'
      });
    }
  }

  shootFireball() {
    const m = this.mario;
    if (m.powerState !== 'FIRE' || m.pipeState !== 'NORMAL' || this.fireballs.length >= 3) return;
    this.fireballs.push({
      x: m.facingRight ? m.x + m.width : m.x - 8,
      y: m.y + 16,
      vx: m.facingRight ? 7.0 : -7.0,
      vy: 2.0,
      isAlive: true
    });
    this.audio.playFireball();
  }

  updatePhysics(dt) {
    const m = this.mario;
    this.tick++;

    if (m.invulnerable > 0) m.invulnerable -= dt;

    // --- Pipe State Machine Transitions ---
    if (m.pipeState === 'ENTERING_DOWN') {
      m.y += 1.2; // Smooth descent into pipe
      if (m.y >= m.pipeTarget.y + m.height) {
        // Fully submerged! Warp to destination world
        const targetWorld = m.pipeTarget.targetWorld || '1-1-SUB';
        const targetCol = m.pipeTarget.targetCol || 62;
        this.loadWorld(targetWorld);

        // If target is 1-1, find Pipe 4 and start emergence
        if (targetWorld === '1-1') {
          const returnPipe = this.pipes.find(p => p.col === targetCol) || this.pipes[this.pipes.length - 1];
          if (returnPipe) {
            m.x = returnPipe.x + (returnPipe.width - m.width) / 2;
            m.y = returnPipe.y;
            m.pipeState = 'EXITING_UP';
            m.pipeTarget = returnPipe;
            this.audio.playPipe();
          }
        }
      }
      return;
    }

    if (m.pipeState === 'ENTERING_RIGHT') {
      m.x += 1.2; // Smooth slide into right horizontal pipe
      if (m.x >= m.pipeTarget.x + m.width) {
        // Fully entered! Warp back to 1-1
        const targetWorld = m.pipeTarget.targetWorld || '1-1';
        const targetCol = m.pipeTarget.targetCol || 62;
        this.loadWorld(targetWorld);

        const returnPipe = this.pipes.find(p => p.col === targetCol) || this.pipes[3] || this.pipes[0];
        if (returnPipe) {
          m.x = returnPipe.x + (returnPipe.width - m.width) / 2;
          m.y = returnPipe.y;
          m.pipeState = 'EXITING_UP';
          m.pipeTarget = returnPipe;
          this.cameraX = Math.max(0, m.x - 200);
          this.audio.playPipe();
        }
      }
      return;
    }

    if (m.pipeState === 'EXITING_UP') {
      m.y -= 1.2; // Smooth emergence upwards out of pipe mouth
      if (m.y <= m.pipeTarget.y - m.height) {
        // Cleared the pipe rim! Restore player control
        m.y = m.pipeTarget.y - m.height;
        m.isGrounded = true;
        m.pipeState = 'NORMAL';
        m.pipeTarget = null;
      }
      return;
    }

    if (m.isDead) {
      m.vy += GRAVITY;
      m.y += m.vy;
      if (m.y > 600) {
        this.lives--;
        if (this.lives <= 0) this.gameOver();
        else this.resetMarioPosition(64, 350);
      }
      return;
    }

    if (m.isVictory) {
      m.vx = 2.0;
      m.x += m.vx;
      if (m.x > (this.levelCols - 14) * TILE_SIZE) {
        this.nextWorld();
      }
      return;
    }

    // Check side pipe entrance when moving right
    this.checkHorizontalPipeEntry();

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

    // 1. Move X & Wall Collision
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

    // 2. Jump Impulse & Gravity
    if (this.keys.jump && m.isGrounded) {
      m.vy = -10.5;
      m.isGrounded = false;
      m.isJumping = true;
      this.audio.playJump(m.powerState !== 'SMALL');
    }

    const curGravity = (this.keys.jump && m.vy < 0) ? GRAVITY * 0.55 : GRAVITY;
    m.vy += curGravity;
    m.y += m.vy;
    m.isGrounded = false;

    const nLeftCol = Math.floor(m.x / TILE_SIZE);
    const nRightCol = Math.floor((m.x + m.width) / TILE_SIZE);
    const nTopRow = Math.floor(m.y / TILE_SIZE);
    const nBotRow = Math.floor((m.y + m.height) / TILE_SIZE);

    // Floor & Ceiling Collision
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

    // Fall into Pit
    if (m.y > 520) {
      this.killMario();
      return;
    }

    // Camera Scrolling
    if (m.x - this.cameraX > 380) {
      this.cameraX = Math.min((this.levelCols * TILE_SIZE) - 800, m.x - 380);
    }

    // Check Subterranean Bonus Coins
    if (this.bonusCoins) {
      for (const coin of this.bonusCoins) {
        if (!coin.collected && Math.hypot((m.x + m.width / 2) - coin.x, (m.y + m.height / 2) - coin.y) < 20) {
          coin.collected = true;
          this.coins++;
          this.score += 200;
          this.audio.playCoin(this.coinStreak++);
          this.spawnScoreText(coin.x, coin.y, '+200');
        }
      }
    }

    // Flagpole Victory Check (Tile 9)
    const curCenterCol = Math.floor((m.x + m.width / 2) / TILE_SIZE);
    const curCenterRow = Math.floor((m.y + m.height / 2) / TILE_SIZE);
    if (this.tilemap[curCenterRow] && this.tilemap[curCenterRow][curCenterCol] === 9 && !m.isVictory) {
      m.isVictory = true;
      m.vx = 0;
      m.vy = 3;
      this.score += 2000;
      this.audio.playFlagpole();
      setTimeout(() => this.audio.playStageClear(), 600);
    }

    // Bowser Bridge Axe Switch (Tile 12)
    if (this.tilemap[curCenterRow] && this.tilemap[curCenterRow][curCenterCol] === 12 && this.bowser && this.bowser.isAlive) {
      this.triggerBridgeCollapse();
    }

    // Update Enemies & Piranha Plants
    this.updatePiranhas();
    this.updateEnemies();
    this.updateFireballs();
    this.updateBowser();
  }

  /**
   * Piranha Plant Ecological AI:
   * State transitions: HIDDEN -> RISING -> BITING -> RETREATING.
   * Safety Suppressor: If Mario is on top of pipe or within 1.5 tiles (48px), Piranha stays hidden!
   */
  updatePiranhas() {
    const m = this.mario;

    for (const p of this.piranhas) {
      if (!p.isAlive) continue;

      const distX = Math.abs((m.x + m.width / 2) - (p.pipeX + TILE_SIZE));
      const marioNear = distX < 48; // NES Proximity Safety Rule

      if (p.state === 'HIDDEN') {
        p.timer--;
        if (p.timer <= 0 && !marioNear) {
          p.state = 'RISING';
          p.timer = 30; // 30 frames to rise
        }
      } else if (p.state === 'RISING') {
        p.y -= 1.0;
        if (p.y <= p.pipeTopY - 30) {
          p.y = p.pipeTopY - 30;
          p.state = 'BITING';
          p.timer = 80; // Stay at top chomping
        }
      } else if (p.state === 'BITING') {
        p.timer--;
        if (p.timer <= 0) {
          p.state = 'RETREATING';
        }
      } else if (p.state === 'RETREATING') {
        p.y += 1.0;
        if (p.y >= p.pipeTopY) {
          p.y = p.pipeTopY;
          p.state = 'HIDDEN';
          p.timer = 100;
        }
      }

      // Damage Mario if touched while emerged
      if (p.state !== 'HIDDEN') {
        const hitX = (m.x + m.width > p.x && m.x < p.x + 32);
        const hitY = (m.y + m.height > p.y && m.y < p.y + 32);
        if (hitX && hitY) {
          this.hurtMario();
        }
      }
    }
  }

  updateEnemies() {
    const m = this.mario;

    for (const e of this.enemies) {
      if (!e.isAlive) {
        if (e.isSquished) {
          e.removeTimer = (e.removeTimer || 0) + 1;
        }
        continue;
      }

      e.x += e.vx;

      // Obstacle bounce
      const eCol = Math.floor((e.vx > 0 ? e.x + 32 : e.x) / TILE_SIZE);
      const eRow = Math.floor((e.y + 16) / TILE_SIZE);
      if (this.isSolid(eCol, eRow)) {
        e.vx = -e.vx;
      }

      // Check Mario Stomp vs Side Damage
      const overlapX = (m.x + m.width > e.x + 4 && m.x < e.x + 28);
      const overlapY = (m.y + m.height > e.y && m.y < e.y + 32);

      if (overlapX && overlapY) {
        const stomping = m.vy > 0 && (m.y + m.height - m.vy <= e.y + 12);
        if (stomping) {
          // Stomped!
          m.vy = -7.5;
          this.audio.playStomp();
          if (e.type === 'GOOMBA') {
            e.isSquished = true;
            e.isAlive = false;
            this.score += 100;
            this.spawnScoreText(e.x, e.y, '+100');
          } else if (e.type === 'KOOPA') {
            if (!e.isShell) {
              e.isShell = true;
              e.vx = 0;
              this.score += 100;
            } else {
              // Kick shell
              e.vx = m.facingRight ? 7.5 : -7.5;
              this.audio.playKick();
            }
          }
        } else {
          // Mario touched enemy from side
          if (e.isShell && Math.abs(e.vx) < 0.1) {
            // Kick stationary shell
            e.vx = (m.x < e.x) ? 7.5 : -7.5;
            this.audio.playKick();
          } else {
            this.hurtMario();
          }
        }
      }
    }
  }

  updateFireballs() {
    for (const fb of this.fireballs) {
      if (!fb.isAlive) continue;
      fb.x += fb.vx;
      fb.vy += GRAVITY;
      fb.y += fb.vy;

      // Ground bounce
      const bCol = Math.floor(fb.x / TILE_SIZE);
      const bRow = Math.floor((fb.y + 8) / TILE_SIZE);
      if (this.isSolid(bCol, bRow)) {
        fb.vy = -4.5;
        fb.y = bRow * TILE_SIZE - 8;
      }

      // Piranha Plant Collision
      for (const p of this.piranhas) {
        if (p.isAlive && p.state !== 'HIDDEN') {
          if (Math.hypot(fb.x - (p.x + 16), fb.y - (p.y + 16)) < 24) {
            p.isAlive = false;
            fb.isAlive = false;
            this.score += 400;
            this.audio.playKick();
            this.spawnScoreText(p.x, p.y, '+400');
            this.spawnPipeParticles(p.x + 16, p.y + 16);
            break;
          }
        }
      }

      // Enemy Collision
      for (const e of this.enemies) {
        if (e.isAlive && Math.hypot(fb.x - (e.x + 16), fb.y - (e.y + 16)) < 20) {
          e.isAlive = false;
          fb.isAlive = false;
          this.score += 200;
          this.audio.playKick();
          this.spawnScoreText(e.x, e.y, '+200');
          break;
        }
      }

      if (fb.x < this.cameraX || fb.x > this.cameraX + 850 || fb.y > 500) {
        fb.isAlive = false;
      }
    }
  }

  updateBowser() {
    const b = this.bowser;
    if (!b || !b.isAlive) return;

    b.jumpTimer++;
    if (b.jumpTimer > 120) {
      b.y -= 3.5;
      if (b.jumpTimer > 150) b.jumpTimer = 0;
    } else if (b.y < 9.5 * TILE_SIZE) {
      b.y += 1.5;
    }

    // Fireball collision with Bowser
    for (const fb of this.fireballs) {
      if (fb.isAlive && Math.hypot(fb.x - (b.x + 30), fb.y - (b.y + 30)) < 35) {
        fb.isAlive = false;
        b.hp--;
        this.audio.playStomp();
        if (b.hp <= 0) {
          b.isAlive = false;
          this.score += 5000;
          this.audio.playBowserDefeat();
        }
      }
    }
  }

  triggerBridgeCollapse() {
    // Collapse bridge tiles 68 to 86
    for (let c = 68; c <= 86; c++) {
      this.tilemap[11][c] = 0;
    }
    if (this.bowser) {
      this.bowser.y += 8;
      this.bowser.isAlive = false;
    }
    this.score += 5000;
    this.audio.playBowserDefeat();
    setTimeout(() => {
      this.mario.isVictory = true;
      this.audio.playStageClear();
    }, 1500);
  }

  hitBlock(col, row) {
    const t = this.tilemap[row][col];
    if (t === 3) {
      // Mystery Block hit
      this.tilemap[row][col] = 4; // Turn spent
      this.coins++;
      this.score += 200;
      this.audio.playCoin(this.coinStreak++);
      this.spawnScoreText(col * TILE_SIZE, row * TILE_SIZE, '+200');
    } else if (t === 2) {
      // Brick hit
      if (this.mario.powerState !== 'SMALL') {
        this.tilemap[row][col] = 0; // Shatter brick
        this.score += 50;
        this.audio.playBrickShatter();
      } else {
        this.audio.playStomp();
      }
    }
  }

  hurtMario() {
    const m = this.mario;
    if (m.invulnerable > 0 || m.pipeState !== 'NORMAL') return;

    if (m.powerState === 'FIRE') {
      m.powerState = 'SUPER';
      m.invulnerable = 2.0;
      this.audio.playPipe();
    } else if (m.powerState === 'SUPER') {
      m.powerState = 'SMALL';
      m.height = 32;
      m.invulnerable = 2.0;
      this.audio.playPipe();
    } else {
      this.killMario();
    }
  }

  killMario() {
    const m = this.mario;
    m.isDead = true;
    m.vy = -9.0;
    m.vx = 0;
    this.audio.playDeath();
  }

  gameOver() {
    this.isGameOver = true;
    this.isPlaying = false;
    const overlay = document.getElementById('marioOverlay');
    const title = document.getElementById('overlayTitle');
    const sub = document.getElementById('overlaySub');
    if (overlay && title && sub) {
      title.innerText = 'GAME OVER';
      sub.innerText = `FINAL SCORE: ${this.score} | COINS: ${this.coins}`;
      overlay.classList.remove('hidden');
    }
  }

  nextWorld() {
    const worlds = ['1-1', '1-2', '1-3', '1-4'];
    const idx = worlds.indexOf(this.world);
    if (idx !== -1 && idx < worlds.length - 1) {
      this.loadWorld(worlds[idx + 1]);
    } else {
      // Game Won!
      this.isPlaying = false;
      const overlay = document.getElementById('marioOverlay');
      const title = document.getElementById('overlayTitle');
      const sub = document.getElementById('overlaySub');
      if (overlay && title && sub) {
        title.innerText = 'VICTORY!';
        sub.innerText = `PEACH RESCUED! SCORE: ${this.score}`;
        overlay.classList.remove('hidden');
      }
    }
  }

  spawnScoreText(x, y, text) {
    this.particles.push({
      x,
      y,
      vx: 0,
      vy: -1.2,
      life: 40,
      maxLife: 40,
      text,
      color: '#ffffff'
    });
  }

  updateHUD() {
    const sScore = document.getElementById('hudScore');
    const sCoins = document.getElementById('hudCoins');
    const sWorld = document.getElementById('hudWorld');
    const sPower = document.getElementById('hudPower');
    const sPipe = document.getElementById('hudPipeState');
    const sTime = document.getElementById('hudTime');
    const sLives = document.getElementById('hudLives');

    if (sScore) sScore.innerText = String(this.score).padStart(6, '0');
    if (sCoins) sCoins.innerText = String(this.coins).padStart(2, '0');
    if (sWorld) sWorld.innerText = this.world;
    if (sPower) sPower.innerText = this.mario.powerState;
    if (sPipe) sPipe.innerText = this.mario.pipeState;
    if (sTime) sTime.innerText = String(Math.max(0, this.time));
    if (sLives) sLives.innerHTML = `&times; ${this.lives}`;
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, 800, 480);

    // Sky Background
    if (this.worldType === 'UNDERGROUND') {
      ctx.fillStyle = '#000000';
    } else if (this.worldType === 'CASTLE') {
      ctx.fillStyle = '#000000';
    } else {
      ctx.fillStyle = '#5c94fc'; // Classic 1-1 Sky Blue
    }
    ctx.fillRect(0, 0, 800, 480);

    ctx.save();
    ctx.translate(-this.cameraX, 0);

    // Render Visible Tilemap
    const startCol = Math.max(0, Math.floor(this.cameraX / TILE_SIZE));
    const endCol = Math.min(this.levelCols, Math.ceil((this.cameraX + 800) / TILE_SIZE));

    for (let r = 0; r < this.levelRows; r++) {
      for (let c = startCol; c < endCol; c++) {
        const tileType = this.tilemap[r][c];
        if (tileType > 0) {
          HDPipeRenderer.drawTile(ctx, tileType, c * TILE_SIZE, r * TILE_SIZE, this.worldType, this.tick);
        }
      }
    }

    // Render Bonus Coins in Subterranean Cavern
    if (this.bonusCoins) {
      for (const coin of this.bonusCoins) {
        if (!coin.collected) {
          ctx.fillStyle = '#ffd700';
          ctx.beginPath();
          ctx.arc(coin.x, coin.y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#fff';
          ctx.fillRect(coin.x - 2, coin.y - 4, 2, 4);
        }
      }
    }

    // Render Piranha Plants (Rendered BEFORE Pipe collar front if needed, or clipped)
    for (const p of this.piranhas) {
      HDPipeRenderer.drawPiranhaPlant(ctx, p, this.tick);
    }

    // Render Mario
    HDPipeRenderer.drawMario(ctx, this.mario, this.tick);

    // Re-draw Pipe top collar if Mario is entering downward (gives the visual of Mario sinking INSIDE the pipe!)
    if (this.mario.pipeState === 'ENTERING_DOWN' && this.mario.pipeTarget) {
      const pt = this.mario.pipeTarget;
      HDPipeRenderer.drawTile(ctx, 5, pt.x, pt.y);
      HDPipeRenderer.drawTile(ctx, 6, pt.x + TILE_SIZE, pt.y);
    }

    // Render Enemies
    for (const e of this.enemies) {
      if (e.type === 'GOOMBA') HDPipeRenderer.drawGoomba(ctx, e, this.tick);
      else if (e.type === 'KOOPA') HDPipeRenderer.drawKoopa(ctx, e, this.tick);
    }

    // Render Fireballs
    for (const fb of this.fireballs) {
      if (fb.isAlive) {
        ctx.fillStyle = '#ff6600';
        ctx.beginPath();
        ctx.arc(fb.x, fb.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(fb.x, fb.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Render Bowser
    if (this.bowser) {
      HDPipeRenderer.drawBowser(ctx, this.bowser, this.tick);
    }

    // Render Floating Particles & Text
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.life--;
      if (pt.text) {
        ctx.fillStyle = pt.color;
        ctx.font = 'bold 14px monospace';
        ctx.fillText(pt.text, pt.x, pt.y);
      } else {
        ctx.fillStyle = pt.color;
        ctx.fillRect(pt.x, pt.y, 3, 3);
      }
      if (pt.life <= 0) this.particles.splice(i, 1);
    }

    ctx.restore();
  }

  gameLoop(timestamp) {
    if (!this.isPlaying) return;
    const dt = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;

    if (!this.isPaused) {
      this.updatePhysics(dt);
      this.render();
      this.updateHUD();
    }

    requestAnimationFrame((t) => this.gameLoop(t));
  }
}

// Instantiate engine when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('marioCanvas');
  if (canvas) {
    window.marioGame = new MarioPipeEngine(canvas);
  }
});
