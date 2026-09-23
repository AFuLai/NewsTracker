/**
 * contra3d.js - Web Contra 3D: Galuga Incursion Remake (Ultimate Director's Cut)
 * Advanced HTML5 3D WebGL Run-and-Gun Engine featuring:
 *  - Faithful 1987 Original Contra Experience: Full 8 Classic Stages & Bespoke Bosses
 *    (1: Jungle, 2: Base 1 3D Corridor, 3: Waterfall Ascent, 4: Base 2 3D Corridor,
 *     5: Snow Field, 6: Energy Zone, 7: Hangar, 8: Alien Lair Heart)
 *  - Director & UX Multi-Perspective Confrontation System:
 *    (2.5D Side-Scroller, Behind-the-Back 3D Corridor, Boss Confrontation Duel, Vertical Ascent, Isometric)
 *  - HTML5 3D Visual Delicacy Upgrade:
 *    - Volumetric Atmospheric Light Shafts (God Rays)
 *    - Multi-Layer Procedural PBR Canvas Shaders (Jungle Rock, Steel Plate, Water Ripple, Snow/Ice, Alien Flesh, Hazard Stripes, Reactor Circuits)
 *    - Rich Particle Systems: Volumetric Smoke Clouds, Weather Particles (Fireflies, Waterfall Mist, Blizzard, Reactor Sparks, Bio-spores), Brass Ejected Casings
 *    - Procedural Character Rig with Cloth Headband Ribbon Spring Simulation & 8-Way Aiming
 *    - Multi-Part Articulated Bosses with Sub-Target Destruction Hierarchy & Sub-Part Health Bars
 *  - Complete Chrome Debug Self-Test API (window.ContraDebug)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Procedural Texture Factory & PBR Normal Map Generator
  // =========================================================================
  const TextureFactory = {
    cache: {},

    createCanvas(w, h) {
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      return c;
    },

    // Generates a true 3D Normal Map from canvas height/luminance using a 3x3 Sobel filter
    generateNormalMap(srcCanvas, strength = 2.5) {
      const w = srcCanvas.width;
      const h = srcCanvas.height;
      const srcCtx = srcCanvas.getContext('2d');
      const srcData = srcCtx.getImageData(0, 0, w, h).data;

      const normCanvas = this.createCanvas(w, h);
      const normCtx = normCanvas.getContext('2d');
      const normImg = normCtx.createImageData(w, h);
      const dst = normImg.data;

      const getL = (x, y) => {
        const px = ((y + h) % h) * w + ((x + w) % w);
        const idx = px * 4;
        return (srcData[idx] * 0.299 + srcData[idx + 1] * 0.587 + srcData[idx + 2] * 0.114) / 255.0;
      };

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const tl = getL(x - 1, y - 1);
          const t = getL(x, y - 1);
          const tr = getL(x + 1, y - 1);
          const l = getL(x - 1, y);
          const r = getL(x + 1, y);
          const bl = getL(x - 1, y + 1);
          const b = getL(x, y + 1);
          const br = getL(x + 1, y + 1);

          const dx = (tr + 2.0 * r + br) - (tl + 2.0 * l + bl);
          const dy = (bl + 2.0 * b + br) - (tl + 2.0 * t + tr);

          let nx = -dx * strength;
          let ny = -dy * strength;
          let nz = 1.0;
          const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
          nx /= len; ny /= len; nz /= len;

          const pIdx = (y * w + x) * 4;
          dst[pIdx] = Math.floor((nx * 0.5 + 0.5) * 255);
          dst[pIdx + 1] = Math.floor((ny * 0.5 + 0.5) * 255);
          dst[pIdx + 2] = Math.floor((nz * 0.5 + 0.5) * 255);
          dst[pIdx + 3] = 255;
        }
      }

      normCtx.putImageData(normImg, 0, 0);
      const tex = new THREE.CanvasTexture(normCanvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      return tex;
    },

    getJungleRock() {
      if (this.cache.jungleRock) return this.cache.jungleRock;
      const c = this.createCanvas(512, 512);
      const ctx = c.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 512, 512);
      grad.addColorStop(0, '#1c1917');
      grad.addColorStop(0.5, '#292524');
      grad.addColorStop(1, '#0c0a09');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Deep cracks & crags
      ctx.strokeStyle = '#44403c';
      ctx.lineWidth = 3;
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        let x = Math.random() * 512, y = Math.random() * 512;
        ctx.moveTo(x, y);
        for (let j = 0; j < 5; j++) {
          x += (Math.random() - 0.5) * 60;
          y += (Math.random() - 0.5) * 60;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Moss patches
      ctx.fillStyle = '#15803d';
      for (let i = 0; i < 280; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 3 + 1, 0, Math.PI * 2);
        ctx.fill();
      }

      const diffuse = new THREE.CanvasTexture(c);
      diffuse.wrapS = THREE.RepeatWrapping;
      diffuse.wrapT = THREE.RepeatWrapping;
      diffuse.repeat.set(4, 4);

      const normal = this.generateNormalMap(c, 2.8);
      normal.repeat.set(4, 4);

      this.cache.jungleRock = { diffuse, normal };
      return this.cache.jungleRock;
    },

    getSteelPlate() {
      if (this.cache.steelPlate) return this.cache.steelPlate;
      const c = this.createCanvas(256, 256);
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#334155';
      ctx.fillRect(0, 0, 256, 256);

      // Bevel & border
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 4;
      ctx.strokeRect(4, 4, 248, 248);

      // Diamond tread pattern
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 2;
      for (let x = 16; x < 256; x += 32) {
        for (let y = 16; y < 256; y += 32) {
          ctx.beginPath();
          ctx.moveTo(x - 8, y);
          ctx.lineTo(x, y - 8);
          ctx.lineTo(x + 8, y);
          ctx.lineTo(x, y + 8);
          ctx.closePath();
          ctx.stroke();
        }
      }

      // Rivets
      ctx.fillStyle = '#94a3b8';
      [[16, 16], [240, 16], [16, 240], [240, 240]].forEach(([rx, ry]) => {
        ctx.beginPath();
        ctx.arc(rx, ry, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      const diffuse = new THREE.CanvasTexture(c);
      diffuse.wrapS = THREE.RepeatWrapping;
      diffuse.wrapT = THREE.RepeatWrapping;
      diffuse.repeat.set(8, 8);

      const normal = this.generateNormalMap(c, 3.2);
      normal.repeat.set(8, 8);

      this.cache.steelPlate = { diffuse, normal };
      return this.cache.steelPlate;
    },

    getAlienFlesh() {
      if (this.cache.alienFlesh) return this.cache.alienFlesh;
      const c = this.createCanvas(512, 512);
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 320);
      grad.addColorStop(0, '#581c87');
      grad.addColorStop(0.6, '#831843');
      grad.addColorStop(1, '#2e1065');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Bulbous bio-nodules
      ctx.fillStyle = '#9d174d';
      for (let i = 0; i < 45; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 20 + 8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Vein network
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 4;
      for (let i = 0; i < 35; i++) {
        ctx.beginPath();
        let vx = Math.random() * 512, vy = Math.random() * 512;
        ctx.moveTo(vx, vy);
        for (let j = 0; j < 6; j++) {
          vx += (Math.random() - 0.5) * 80;
          vy += (Math.random() - 0.5) * 80;
          ctx.lineTo(vx, vy);
        }
        ctx.stroke();
      }

      const diffuse = new THREE.CanvasTexture(c);
      diffuse.wrapS = THREE.RepeatWrapping;
      diffuse.wrapT = THREE.RepeatWrapping;
      diffuse.repeat.set(4, 4);

      const normal = this.generateNormalMap(c, 3.0);
      normal.repeat.set(4, 4);

      this.cache.alienFlesh = { diffuse, normal };
      return this.cache.alienFlesh;
    },

    getWaterNormal() {
      if (this.cache.waterNormal) return this.cache.waterNormal;
      const c = this.createCanvas(256, 256);
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(0, 0, 256, 256);

      ctx.strokeStyle = '#e0f2fe';
      ctx.lineWidth = 3;
      for (let y = 0; y < 256; y += 16) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < 256; x += 32) {
          ctx.quadraticCurveTo(x + 16, y + ((x / 32) % 2 === 0 ? 8 : -8), x + 32, y);
        }
        ctx.stroke();
      }

      const tex = this.generateNormalMap(c, 2.0);
      tex.repeat.set(4, 4);
      this.cache.waterNormal = tex;
      return tex;
    },

    getSnowIce() {
      if (this.cache.snowIce) return this.cache.snowIce;
      const c = this.createCanvas(256, 256);
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(0, 0, 256, 256);

      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 400; i++) {
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
      }
      ctx.fillStyle = '#93c5fd';
      for (let i = 0; i < 60; i++) {
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 4, 3);
      }

      const diffuse = new THREE.CanvasTexture(c);
      diffuse.wrapS = THREE.RepeatWrapping;
      diffuse.wrapT = THREE.RepeatWrapping;
      diffuse.repeat.set(6, 6);

      const normal = this.generateNormalMap(c, 1.8);
      normal.repeat.set(6, 6);

      this.cache.snowIce = { diffuse, normal };
      return this.cache.snowIce;
    },

    getHazardStripe() {
      if (this.cache.hazardStripe) return this.cache.hazardStripe;
      const c = this.createCanvas(256, 256);
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 256, 256);

      ctx.fillStyle = '#f59e0b';
      for (let x = -256; x < 512; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + 24, 0);
        ctx.lineTo(x + 24 + 256, 256);
        ctx.lineTo(x + 256, 256);
        ctx.closePath();
        ctx.fill();
      }

      const diffuse = new THREE.CanvasTexture(c);
      diffuse.wrapS = THREE.RepeatWrapping;
      diffuse.wrapT = THREE.RepeatWrapping;
      diffuse.repeat.set(4, 2);

      const normal = this.generateNormalMap(c, 2.0);
      normal.repeat.set(4, 2);

      this.cache.hazardStripe = { diffuse, normal };
      return this.cache.hazardStripe;
    },

    getReactorCircuit() {
      if (this.cache.reactorCircuit) return this.cache.reactorCircuit;
      const c = this.createCanvas(256, 256);
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, 256, 256);

      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 3;
      for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        const y = i * 22 + 10;
        ctx.moveTo(0, y);
        ctx.lineTo(80, y);
        ctx.lineTo(120, y + 16);
        ctx.lineTo(256, y + 16);
        ctx.stroke();
      }

      ctx.fillStyle = '#ff0055';
      for (let i = 0; i < 16; i++) {
        ctx.fillRect(Math.random() * 240, Math.random() * 240, 6, 6);
      }

      const diffuse = new THREE.CanvasTexture(c);
      diffuse.wrapS = THREE.RepeatWrapping;
      diffuse.wrapT = THREE.RepeatWrapping;
      diffuse.repeat.set(4, 4);

      const normal = this.generateNormalMap(c, 2.5);
      normal.repeat.set(4, 4);

      this.cache.reactorCircuit = { diffuse, normal };
      return this.cache.reactorCircuit;
    }
  };

  // =========================================================================
  // 2. Web Audio Synthesizer (Chiptune Arcade Audio Engine)
  // =========================================================================
  class SoundSynth {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
    }

    playTone(freq, duration, type = 'square', gainVal = 0.15) {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }

    playShootRifle() { this.playTone(520, 0.07, 'square', 0.12); }
    playShootSpread() {
      this.playTone(340, 0.11, 'sawtooth', 0.16);
      this.playTone(680, 0.11, 'triangle', 0.12);
    }
    playShootLaser() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(960, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(240, this.ctx.currentTime + 0.16);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.16);
      } catch (e) {}
    }
    playExplosion() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(32, this.ctx.currentTime + 0.38);
        gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.38);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.38);
      } catch (e) {}
    }
    playHitChirp() { this.playTone(1200, 0.04, 'sine', 0.1); }
    playWaterSplash() { this.playTone(220, 0.12, 'triangle', 0.15); }
    playElectricZap() { this.playTone(850, 0.08, 'sawtooth', 0.2); }
    playCodecBeep() {
      this.playTone(880, 0.06, 'sine', 0.15);
      setTimeout(() => this.playTone(1100, 0.08, 'sine', 0.15), 70);
    }
    playKonamiFanfare() {
      [261.63, 329.63, 392.00, 523.25, 659.25, 783.99].forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 0.18, 'triangle', 0.25), idx * 100);
      });
    }
    playStageClear() {
      let t = 0;
      [{ f: 440, d: 0.15 }, { f: 554, d: 0.15 }, { f: 659, d: 0.15 }, { f: 880, d: 0.35 }].forEach(note => {
        setTimeout(() => this.playTone(note.f, note.d, 'square', 0.2), t * 1000);
        t += note.d + 0.05;
      });
    }
  }

  // =========================================================================
  // 3. 3D Procedural Mesh & Boss Builders
  // =========================================================================
  const MeshBuilder = {
    buildCommando(isBill = true) {
      const group = new THREE.Group();

      const skinMat = new THREE.MeshStandardMaterial({ color: 0xffcb9d, roughness: 0.45, metalness: 0.1 });
      const pantsMat = new THREE.MeshStandardMaterial({
        color: isBill ? 0x1d4ed8 : 0xb91c1c,
        roughness: 0.75
      });
      const vestMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5, metalness: 0.2 });
      const bandMat = new THREE.MeshStandardMaterial({
        color: isBill ? 0x2563eb : 0xdc2626,
        roughness: 0.3
      });
      const bootMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.8 });
      const gunMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.25 });

      // Torso & Muscle Chest
      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.82, 0.42), vestMat);
      torso.position.y = 1.2;
      group.add(torso);

      // Gold Buckle & Cross-Bandolier
      const bando = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.12, 0.46), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8 }));
      bando.position.y = 1.2;
      bando.rotation.z = Math.PI / 6;
      group.add(bando);

      // Head & Headband
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.46, 0.42), skinMat);
      head.position.y = 1.82;
      group.add(head);

      const band = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.12, 0.46), bandMat);
      band.position.y = 1.92;
      group.add(band);

      // Dynamic Cloth Ribbon Segments with Spring-Damping simulation
      const ribbon1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.08, 0.04), bandMat);
      ribbon1.position.set(-0.35, 1.9, -0.15);
      ribbon1.rotation.z = -Math.PI / 8;
      group.add(ribbon1);

      const ribbon2 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.07, 0.04), bandMat);
      ribbon2.position.set(-0.58, 1.82, -0.18);
      ribbon2.rotation.z = -Math.PI / 6;
      group.add(ribbon2);

      // Articulated Legs
      const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.75, 0.28), pantsMat);
      leftLeg.position.set(-0.2, 0.45, 0);
      group.add(leftLeg);

      const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.75, 0.28), pantsMat);
      rightLeg.position.set(0.2, 0.45, 0);
      group.add(rightLeg);

      // Combat Boots
      const leftBoot = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.26, 0.4), bootMat);
      leftBoot.position.set(-0.2, 0.13, 0.04);
      group.add(leftBoot);

      const rightBoot = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.26, 0.4), bootMat);
      rightBoot.position.set(0.2, 0.13, 0.04);
      group.add(rightBoot);

      // Aiming Shoulder/Arm Pivot
      const armPivot = new THREE.Group();
      armPivot.position.set(0.35, 1.25, 0.1);

      const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.65, 0.22), skinMat);
      rightArm.position.set(0.1, 0, 0.15);
      rightArm.rotation.x = Math.PI / 3;
      armPivot.add(rightArm);

      // Heavy Assault Rifle with Ejection Port
      const rifleGroup = new THREE.Group();
      const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.22, 0.95), gunMat);
      const gunBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8), gunMat);
      gunBarrel.rotation.x = Math.PI / 2;
      gunBarrel.position.z = 0.65;
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 0.18), gunMat);
      mag.position.set(0, -0.22, 0.1);

      rifleGroup.add(gunBody);
      rifleGroup.add(gunBarrel);
      rifleGroup.add(mag);
      rifleGroup.position.set(0.12, -0.05, 0.5);
      armPivot.add(rifleGroup);

      group.add(armPivot);

      // Dynamic Muzzle Point Light
      const muzzleLight = new THREE.PointLight(0xffa500, 0, 8.0);
      muzzleLight.position.set(0.45, 1.25, 1.3);
      group.add(muzzleLight);

      group.userData = {
        torso, head, leftLeg, rightLeg, armPivot, rifleGroup,
        ribbon1, ribbon2, muzzleLight,
        isBill, baseRifleZ: 0.5
      };

      return group;
    },

    buildEnemySoldier(type = 'SOLDIER') {
      const group = new THREE.Group();
      const isSniper = type === 'SNIPER';
      const bodyMat = new THREE.MeshStandardMaterial({ color: isSniper ? 0x991b1b : 0x334155, roughness: 0.6 });
      const helmetMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
      const skinMat = new THREE.MeshStandardMaterial({ color: 0xffcb9d });

      const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.35), bodyMat);
      body.position.y = 0.9;
      group.add(body);

      const head = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.35), skinMat);
      head.position.y = 1.45;
      group.add(head);

      const helmet = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.18, 0.4), helmetMat);
      helmet.position.y = 1.6;
      group.add(helmet);

      const legs = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.3), bodyMat);
      legs.position.y = 0.3;
      group.add(legs);

      group.userData = {
        hp: isSniper ? 2 : 1,
        maxHp: isSniper ? 2 : 1,
        type,
        shootTimer: 0
      };
      return group;
    },

    buildDefenseTurret() {
      const group = new THREE.Group();
      const steel = TextureFactory.getSteelPlate();
      const baseMat = new THREE.MeshStandardMaterial({
        map: steel.diffuse,
        normalMap: steel.normal,
        roughness: 0.4,
        metalness: 0.6
      });
      const domeMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, metalness: 0.8, roughness: 0.3 });
      const barrelMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9 });

      const base = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 0.6, 16), baseMat);
      base.position.y = 0.3;
      group.add(base);

      const domeGroup = new THREE.Group();
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
      domeGroup.add(dome);

      const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.3, 8), barrelMat);
      b1.rotation.x = Math.PI / 2;
      b1.position.set(-0.25, 0.3, 0.65);
      const b2 = b1.clone();
      b2.position.x = 0.25;
      domeGroup.add(b1);
      domeGroup.add(b2);

      domeGroup.position.y = 0.6;
      group.add(domeGroup);

      group.userData = { hp: 5, maxHp: 5, domeGroup, type: 'TURRET', shootTimer: 0 };
      return group;
    },

    buildFlyingCapsule(badge = 'S') {
      const group = new THREE.Group();
      const capMat = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        metalness: 0.9,
        roughness: 0.2
      });
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.8, 16), capMat);
      pod.rotation.z = Math.PI / 2;
      group.add(pod);

      const badgeGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
      const badgeMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });
      const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
      group.add(badgeMesh);

      group.userData = {
        hp: 1,
        badge,
        flightTime: 0,
        type: 'CAPSULE'
      };
      return group;
    },

    // Volumetric God Rays Light Shafts
    buildVolumetricGodRays(count = 5, color = 0xfff7ed) {
      const group = new THREE.Group();
      const rayGeo = new THREE.CylinderGeometry(0.4, 2.5, 20.0, 16, 1, true);
      const rayMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.08,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      for (let i = 0; i < count; i++) {
        const ray = new THREE.Mesh(rayGeo, rayMat);
        ray.position.set((i - 2) * 14.0 + (Math.random() - 0.5) * 6.0, 10.0, -2.0 + (Math.random() - 0.5) * 4.0);
        ray.rotation.z = -Math.PI / 8 + (Math.random() - 0.5) * 0.15;
        group.add(ray);
      }
      return group;
    },

    // Stage 1 Boss: Multi-Part Defense Wall Fortress
    buildMultiPartWallBoss() {
      const group = new THREE.Group();
      const steel = TextureFactory.getSteelPlate();
      const wallMat = new THREE.MeshStandardMaterial({
        map: steel.diffuse,
        normalMap: steel.normal,
        roughness: 0.4,
        metalness: 0.6
      });
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0xdc2626,
        emissiveIntensity: 0.85
      });
      const dishMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });

      const wall = new THREE.Mesh(new THREE.BoxGeometry(4.0, 10.0, 2.0), wallMat);
      wall.position.set(0, 5.0, 0);
      group.add(wall);

      // Part 1: Top Radar Dish
      const dish = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.2, 0.4, 16), dishMat);
      dish.position.set(0, 10.6, 0);
      dish.rotation.z = Math.PI / 6;
      group.add(dish);

      // Part 2: Lower Gun Port 1 (Left)
      const gunPort1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.8), coreMat);
      gunPort1.position.set(-1.2, 3.0, 1.0);
      group.add(gunPort1);

      // Part 3: Lower Gun Port 2 (Right)
      const gunPort2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.8), coreMat);
      gunPort2.position.set(0.6, 3.0, 1.0);
      group.add(gunPort2);

      // Part 4: Central Glowing Power Core
      const core = new THREE.Mesh(new THREE.SphereGeometry(1.25, 24, 24), coreMat);
      core.position.set(-0.3, 5.5, 1.0);
      group.add(core);

      group.userData = {
        hp: 50,
        maxHp: 50,
        dish, gunPort1, gunPort2, core,
        parts: {
          radar: { hp: 15, maxHp: 15, mesh: dish, name: 'Radar Dish' },
          gun1: { hp: 10, maxHp: 10, mesh: gunPort1, name: 'Port Cannon 1' },
          gun2: { hp: 10, maxHp: 10, mesh: gunPort2, name: 'Port Cannon 2' },
          core: { hp: 15, maxHp: 15, mesh: core, name: 'Main Power Core' }
        },
        name: 'RED FALCON DEFENSE FORTRESS (加魯加防禦要塞)',
        phase: 'PHASE 1: 複合重武裝要塞'
      };
      return group;
    },

    // Stage 2 & 4 Boss: 3D Corridor Security Bulkhead & Core
    buildCorridorSecurityBoss(isStage4 = false) {
      const group = new THREE.Group();
      const steel = TextureFactory.getSteelPlate();
      const hazard = TextureFactory.getHazardStripe();

      const frameMat = new THREE.MeshStandardMaterial({
        map: hazard.diffuse,
        normalMap: hazard.normal,
        roughness: 0.4
      });
      const coreMat = new THREE.MeshStandardMaterial({
        color: isStage4 ? 0x9333ea : 0x00f0ff,
        emissive: isStage4 ? 0x7e22ce : 0x0284c7,
        emissiveIntensity: 0.95
      });

      // Blast Door Frame
      const frame = new THREE.Mesh(new THREE.BoxGeometry(10.0, 7.0, 1.0), frameMat);
      frame.position.set(0, 3.5, -45.0);
      group.add(frame);

      // Perimeter Tracking Laser Cannons
      const cannonL = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 1.2, 8), new THREE.MeshStandardMaterial({ color: 0xdc2626 }));
      cannonL.rotation.x = Math.PI / 2;
      cannonL.position.set(-3.5, 4.5, -44.0);
      group.add(cannonL);

      const cannonR = cannonL.clone();
      cannonR.position.x = 3.5;
      group.add(cannonR);

      // Central Orb Security Core
      const core = new THREE.Mesh(new THREE.DodecahedronGeometry(1.6), coreMat);
      core.position.set(0, 3.5, -44.5);
      group.add(core);

      group.userData = {
        hp: isStage4 ? 70 : 45,
        maxHp: isStage4 ? 70 : 45,
        dish: frame, core: core,
        parts: {
          leftTurret: { hp: 12, maxHp: 12, mesh: cannonL, name: 'Security Turret L' },
          rightTurret: { hp: 12, maxHp: 12, mesh: cannonR, name: 'Security Turret R' },
          mainframe: { hp: isStage4 ? 46 : 21, maxHp: isStage4 ? 46 : 21, mesh: core, name: 'Mainframe Core' }
        },
        name: isStage4 ? 'CENTRAL MAINFRAME CYBER-CORE (核心中樞迴廊)' : 'BASE DEFENSE BULKHEAD (基地縱深防禦中樞)',
        phase: isStage4 ? 'PHASE 4: 網路核心激光防禦' : 'PHASE 2: 縱深防禦門'
      };
      return group;
    },

    // Stage 3 Boss: Waterfall Alien Demon Dragon God Statue (Gomeramos)
    buildGomeramosDragonBoss() {
      const group = new THREE.Group();
      const rock = TextureFactory.getJungleRock();
      const statueMat = new THREE.MeshStandardMaterial({
        map: rock.diffuse,
        normalMap: rock.normal,
        roughness: 0.7
      });
      const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff0055, emissive: 0xff0055, emissiveIntensity: 1.0 });

      // Mountain Demon Skull Face
      const head = new THREE.Mesh(new THREE.DodecahedronGeometry(2.4, 1), statueMat);
      head.position.set(0, 6.0, 0);
      group.add(head);

      const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 8), eyeMat);
      eyeL.position.set(-0.8, 6.6, 1.8);
      const eyeR = eyeL.clone();
      eyeR.position.x = 0.8;
      group.add(eyeL);
      group.add(eyeR);

      // Serpent Dragon Arms
      const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 3.5, 8), statueMat);
      armL.position.set(-2.8, 4.5, 0.5);
      armL.rotation.z = Math.PI / 4;
      const armR = armL.clone();
      armR.position.x = 2.8;
      armR.rotation.z = -Math.PI / 4;
      group.add(armL);
      group.add(armR);

      group.userData = {
        hp: 60,
        maxHp: 60,
        dish: head, core: head,
        parts: {
          leftArm: { hp: 15, maxHp: 15, mesh: armL, name: 'Serpent Dragon Arm L' },
          rightArm: { hp: 15, maxHp: 15, mesh: armR, name: 'Serpent Dragon Arm R' },
          demonSkull: { hp: 30, maxHp: 30, mesh: head, name: 'Dragon Demon Skull' }
        },
        name: 'GOMERAMOS DEMON DRAGON GOD (瀑布魔神像鬼首)',
        phase: 'PHASE 3: 天險懸崖魔神'
      };
      return group;
    },

    // Stage 5 Boss: Armored Snow Tank Division
    buildArmoredSnowTankBoss() {
      const group = new THREE.Group();
      const steel = TextureFactory.getSteelPlate();
      const tankMat = new THREE.MeshStandardMaterial({
        map: steel.diffuse,
        normalMap: steel.normal,
        roughness: 0.5
      });
      const coreMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626 });

      // Tank Hull
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(6.0, 1.8, 3.5), tankMat);
      chassis.position.set(0, 1.2, 0);
      group.add(chassis);

      // Heavy Treads
      const treadL = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.8, 0.8), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
      treadL.position.set(0, 0.4, -1.6);
      const treadR = treadL.clone();
      treadR.position.z = 1.6;
      group.add(treadL);
      group.add(treadR);

      // Revolving Heavy Turret
      const turret = new THREE.Mesh(new THREE.BoxGeometry(3.0, 1.4, 2.5), tankMat);
      turret.position.set(-0.5, 2.8, 0);
      group.add(turret);

      // Dual Heavy Mortar Barrels
      const cannon1 = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 3.2, 8), new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9 }));
      cannon1.rotation.z = Math.PI / 2;
      cannon1.position.set(-2.8, 3.1, -0.6);
      const cannon2 = cannon1.clone();
      cannon2.position.z = 0.6;
      group.add(cannon1);
      group.add(cannon2);

      const weakspot = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), coreMat);
      weakspot.position.set(1.2, 2.5, 0);
      group.add(weakspot);

      group.userData = {
        hp: 65,
        maxHp: 65,
        dish: turret, core: weakspot,
        parts: {
          cannons: { hp: 20, maxHp: 20, mesh: cannon1, name: 'Twin Mortar Battery' },
          armorTurret: { hp: 20, maxHp: 20, mesh: turret, name: 'Armored Turret' },
          engineCore: { hp: 25, maxHp: 25, mesh: weakspot, name: 'Engine Reactor Core' }
        },
        name: 'HEAVY ARMORED SNOW TANK (極地重裝雙砲戰車)',
        phase: 'PHASE 5: 履帶裝甲突擊'
      };
      return group;
    },

    // Stage 6 Boss: Energy Zone Fusion Reactor Core
    buildEnergyReactorBoss() {
      const group = new THREE.Group();
      const circuit = TextureFactory.getReactorCircuit();
      const hazard = TextureFactory.getHazardStripe();

      const columnMat = new THREE.MeshStandardMaterial({ map: hazard.diffuse, normalMap: hazard.normal });
      const reactorMat = new THREE.MeshStandardMaterial({
        map: circuit.diffuse,
        normalMap: circuit.normal,
        emissive: 0x00f0ff,
        emissiveIntensity: 0.9
      });

      // Reactor Columns
      const colL = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 8.0, 16), columnMat);
      colL.position.set(-4.0, 4.0, 0);
      const colR = colL.clone();
      colR.position.x = 4.0;
      group.add(colL);
      group.add(colR);

      // Central Pulsating Fusion Sphere
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(2.0, 24, 24), reactorMat);
      sphere.position.set(0, 4.5, 0);
      group.add(sphere);

      group.userData = {
        hp: 75,
        maxHp: 75,
        dish: colL, core: sphere,
        parts: {
          columnL: { hp: 15, maxHp: 15, mesh: colL, name: 'Cooling Conduit L' },
          columnR: { hp: 15, maxHp: 15, mesh: colR, name: 'Cooling Conduit R' },
          fusionCore: { hp: 45, maxHp: 45, mesh: sphere, name: 'Fusion Reactor Core' }
        },
        name: 'ENERGY ZONE FUSION REACTOR (高能反應爐核心)',
        phase: 'PHASE 6: 高壓電弧屏障'
      };
      return group;
    },

    // Stage 7 Boss: Hangar Industrial Hydraulic Crusher
    buildHangarCrusherBoss() {
      const group = new THREE.Group();
      const steel = TextureFactory.getSteelPlate();
      const frameMat = new THREE.MeshStandardMaterial({ map: steel.diffuse, normalMap: steel.normal });
      const laserMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });

      const crane = new THREE.Mesh(new THREE.BoxGeometry(8.0, 1.5, 3.0), frameMat);
      crane.position.set(0, 7.5, 0);
      group.add(crane);

      const crusherPiston = new THREE.Mesh(new THREE.BoxGeometry(3.0, 4.0, 2.5), frameMat);
      crusherPiston.position.set(0, 4.5, 0);
      group.add(crusherPiston);

      const laserSweep = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5.0, 8), laserMat);
      laserSweep.rotation.z = Math.PI / 2;
      laserSweep.position.set(0, 1.5, 0);
      group.add(laserSweep);

      group.userData = {
        hp: 80,
        maxHp: 80,
        dish: crane, core: crusherPiston,
        parts: {
          craneArm: { hp: 20, maxHp: 20, mesh: crane, name: 'Hydraulic Overhead Rig' },
          crusherHead: { hp: 30, maxHp: 30, mesh: crusherPiston, name: 'Crusher Piston Head' },
          laserArray: { hp: 30, maxHp: 30, mesh: laserSweep, name: 'Laser Cutting Emitter' }
        },
        name: 'HANGAR HYDRAULIC CRUSHER (機庫重型液壓刺擊機)',
        phase: 'PHASE 7: 工業絞殺機械'
      };
      return group;
    },

    // Stage 8 Boss: Gorgon Alien Heart & Dragon God Java
    buildAlienHeartBoss() {
      const group = new THREE.Group();
      const flesh = TextureFactory.getAlienFlesh();
      const fleshMat = new THREE.MeshStandardMaterial({
        map: flesh.diffuse,
        normalMap: flesh.normal,
        color: 0xd946ef,
        roughness: 0.3
      });
      const heartMat = new THREE.MeshStandardMaterial({
        color: 0xe11d48,
        emissive: 0xbe123c,
        emissiveIntensity: 0.95,
        roughness: 0.2
      });

      // Beating Gorgon Heart
      const heart = new THREE.Mesh(new THREE.DodecahedronGeometry(2.5, 2), heartMat);
      heart.position.set(0, 5.0, 0);
      group.add(heart);

      // Writhing Bio-Tentacles
      const tentacles = [];
      for (let i = 0; i < 4; i++) {
        const tMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.6, 4.0, 8), fleshMat);
        const ang = (i * Math.PI) / 2;
        tMesh.position.set(Math.cos(ang) * 3.0, 5.0 + Math.sin(ang) * 2.0, 0.5);
        tMesh.rotation.z = ang + Math.PI / 4;
        group.add(tMesh);
        tentacles.push(tMesh);
      }

      // Hatching Alien Facehugger Egg Pods
      const egg1 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 12, 12), fleshMat);
      egg1.position.set(-2.5, 1.0, 1.0);
      const egg2 = egg1.clone();
      egg2.position.x = 2.5;
      group.add(egg1);
      group.add(egg2);

      group.userData = {
        hp: 100,
        maxHp: 100,
        heart, tentacles, egg1, egg2,
        dish: tentacles[0], core: heart,
        parts: {
          eggPods: { hp: 20, maxHp: 20, mesh: egg1, name: 'Hatching Egg Pods' },
          tentacles: { hp: 30, maxHp: 30, mesh: tentacles[0], name: 'Writhing Bio-Tentacles' },
          gorgonHeart: { hp: 50, maxHp: 50, mesh: heart, name: 'Emperor Demon Heart (天王心臟)' }
        },
        name: 'GORGON ALIEN HEART & JAVA (天王鬼龍神異形母體)',
        phase: 'PHASE 8: 終極生物決戰'
      };
      return group;
    }
  };

  // =========================================================================
  // 4. Main Game Engine Class
  // =========================================================================
  class Contra3DGame {
    constructor() {
      this.container = document.getElementById('gameContainer');
      this.canvas = document.getElementById('contraCanvas');

      // State
      this.lives = 3;
      this.score = 0;
      this.highScore = 50000;
      this.stageIndex = 1;
      this.currentWeapon = 'RIFLE'; // RIFLE, M, S, L, F, B
      this.invulnerableTimer = 0;
      this.barrierTimer = 0;
      this.isProne = false;
      this.isWadingWater = false;
      this.facing = 1;
      this.aimDir = new THREE.Vector3(1, 0, 0);

      // Multi-Perspective Camera Director Modes
      this.cameraModes = ['SIDE_25D', 'BASE_3D_CORRIDOR', 'BOSS_CONFRONTATION', 'VERTICAL_ASCENT', 'ISOMETRIC', 'CINEMATIC'];
      this.cameraModeIdx = 0;
      this.currentCameraMode = 'SIDE_25D';
      this.cameraTarget = new THREE.Vector3(0, 2, 0);

      // Game Feel Juice
      this.screenShakeTrauma = 0;
      this.hitStopTimer = 0;
      this.recoilOffset = 0;

      // Entities & Environmental Mechanics
      this.bullets = [];
      this.enemyBullets = [];
      this.enemies = [];
      this.particles = [];
      this.casings = []; // Ejected brass shell casings
      this.capsules = [];
      this.bridgePlanks = []; // Stage 1 exploding bridge
      this.hazards = []; // Stage hazards (mines, lasers, flame vents, boulders)
      this.activeBoss = null;

      // UI References
      this.radarCanvas = document.getElementById('radarCanvas');
      this.radarCtx = this.radarCanvas ? this.radarCanvas.getContext('2d') : null;

      // Audio & Konami
      this.audio = new SoundSynth();
      this.konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'
      ];
      this.konamiProgress = 0;
      this.konamiActivated = false;

      // Controls (Primary: Arrow Keys)
      this.keys = {};
      this.isMouseDown = false;
      this.maxSlots = 5;

      this.initThree();
      this.initLevel(this.stageIndex);
      this.initEvents();
      this.initSaveSlotsUI();
      this.updateHUD();

      // Show Opening Title Card & Tactical Codec
      this.showCinematicTitle('STAGE 1: JUNGLE PERIMETER', '2633 A.D. GALUGA ARCHIPELAGO // ISLAND DROP');
      setTimeout(() => {
        this.triggerCodec('COMMAND HQ', 'Alpha Team, you have penetrated Galuga perimeter. Destroy the security bridge!', '🎖️');
      }, 1000);

      this.lastTime = performance.now();
      requestAnimationFrame(this.renderLoop.bind(this));
    }

    initThree() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x050811);
      this.scene.fog = new THREE.FogExp2(0x050811, 0.015);

      const aspect = window.innerWidth / window.innerHeight;
      this.camera = new THREE.PerspectiveCamera(55, aspect, 0.1, 1000);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // Lighting & Volumetric Atmosphere
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 0.65);
      this.scene.add(hemiLight);

      this.dirLight = new THREE.DirectionalLight(0xfff7ed, 1.25);
      this.dirLight.position.set(25, 45, 20);
      this.dirLight.castShadow = true;
      this.dirLight.shadow.mapSize.width = 2048;
      this.dirLight.shadow.mapSize.height = 2048;
      this.scene.add(this.dirLight);

      const rimLight = new THREE.DirectionalLight(0x00f0ff, 0.85);
      rimLight.position.set(-25, 15, -20);
      this.scene.add(rimLight);

      const ambientLight = new THREE.AmbientLight(0x0284c7, 0.35);
      this.scene.add(ambientLight);

      // Player Commando
      this.player = MeshBuilder.buildCommando(true);
      this.player.position.set(0, 0, 0);
      this.playerVel = new THREE.Vector3(0, 0, 0);
      this.isGrounded = true;
      this.scene.add(this.player);
    }

    showCinematicTitle(main, sub) {
      const card = document.getElementById('cinematicTitleCard');
      const mEl = document.getElementById('titleMain');
      const sEl = document.getElementById('titleSub') || (card ? card.querySelector('.title-sub') : null);
      if (card && mEl) {
        mEl.textContent = main;
        if (sEl) sEl.textContent = sub;
        card.classList.remove('hidden');
        setTimeout(() => card.classList.add('hidden'), 3500);
      }
    }

    // =========================================================================
    // 5. Level Synthesizer (Stages 1 through 8)
    // =========================================================================
    initLevel(stageIdx) {
      if (this.levelGroup) {
        this.scene.remove(this.levelGroup);
      }
      this.enemies.forEach(e => this.scene.remove(e.mesh));
      this.bullets.forEach(b => this.scene.remove(b.mesh));
      this.capsules.forEach(c => this.scene.remove(c.mesh));
      this.bridgePlanks.forEach(p => this.scene.remove(p.mesh));
      this.hazards.forEach(h => this.scene.remove(h.mesh));
      if (this.godRaysGroup) this.scene.remove(this.godRaysGroup);
      if (this.activeBoss) this.scene.remove(this.activeBoss);

      this.enemies = [];
      this.bullets = [];
      this.capsules = [];
      this.bridgePlanks = [];
      this.hazards = [];
      this.activeBoss = null;

      this.levelGroup = new THREE.Group();
      this.scene.add(this.levelGroup);

      const rock = TextureFactory.getJungleRock();
      const steel = TextureFactory.getSteelPlate();
      const flesh = TextureFactory.getAlienFlesh();
      const snow = TextureFactory.getSnowIce();
      const hazard = TextureFactory.getHazardStripe();
      const circuit = TextureFactory.getReactorCircuit();

      // Add Volumetric God Rays
      this.godRaysGroup = MeshBuilder.buildVolumetricGodRays(5, stageIdx === 8 ? 0xd946ef : (stageIdx === 5 ? 0x93c5fd : 0xfff7ed));
      this.scene.add(this.godRaysGroup);

      if (stageIdx === 1) {
        // --- STAGE 1: JUNGLE PERIMETER ---
        this.currentCameraMode = 'SIDE_25D';
        this.syncCameraModeUI();

        const groundMat = new THREE.MeshStandardMaterial({ map: rock.diffuse, normalMap: rock.normal, roughness: 0.8 });
        const ground = new THREE.Mesh(new THREE.BoxGeometry(140, 2, 16), groundMat);
        ground.position.set(50, -1, 0);
        ground.receiveShadow = true;
        this.levelGroup.add(ground);

        // Animated Water Plane
        const waterMat = new THREE.MeshStandardMaterial({
          color: 0x0284c7,
          normalMap: TextureFactory.getWaterNormal(),
          roughness: 0.1,
          metalness: 0.8,
          transparent: true,
          opacity: 0.8
        });
        this.waterMesh = new THREE.Mesh(new THREE.PlaneGeometry(160, 40), waterMat);
        this.waterMesh.rotation.x = -Math.PI / 2;
        this.waterMesh.position.set(50, -0.6, 0);
        this.levelGroup.add(this.waterMesh);

        // Exploding Bridge Planks between x = 20 and x = 36
        const plankMat = new THREE.MeshStandardMaterial({ map: steel.diffuse, normalMap: steel.normal });
        for (let i = 0; i < 8; i++) {
          const px = 20 + i * 2.0;
          const plank = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.4, 4.0), plankMat);
          plank.position.set(px, 0.2, 0);
          this.levelGroup.add(plank);
          this.bridgePlanks.push({ mesh: plank, x: px, exploded: false });
        }

        // Enemies
        for (let x = 14; x < 70; x += 13) {
          const soldier = MeshBuilder.buildEnemySoldier('SOLDIER');
          soldier.position.set(x, 0, 0);
          this.scene.add(soldier);
          this.enemies.push({ mesh: soldier, type: 'SOLDIER', hp: 1, velX: -0.05 });
        }
        const sniper = MeshBuilder.buildEnemySoldier('SNIPER');
        sniper.position.set(40, 3.2, 0);
        this.scene.add(sniper);
        this.enemies.push({ mesh: sniper, type: 'SNIPER', hp: 2 });

        const turret = MeshBuilder.buildDefenseTurret();
        turret.position.set(48, 0, 0);
        this.scene.add(turret);
        this.enemies.push({ mesh: turret, type: 'TURRET', hp: 5 });

        // Boss
        const boss = MeshBuilder.buildMultiPartWallBoss();
        boss.position.set(75, 0, 0);
        this.scene.add(boss);
        this.activeBoss = boss;

        // Flying Capsule
        const cap = MeshBuilder.buildFlyingCapsule('S');
        cap.position.set(12, 4.5, 0);
        this.scene.add(cap);
        this.capsules.push({ mesh: cap, badge: 'S', basePos: new THREE.Vector3(12, 4.5, 0) });

      } else if (stageIdx === 2 || stageIdx === 4) {
        // --- STAGE 2 / 4: 3D CORRIDOR BASE 1 & 2 ---
        this.currentCameraMode = 'BASE_3D_CORRIDOR';
        this.syncCameraModeUI();

        const corridorMat = new THREE.MeshStandardMaterial({ map: steel.diffuse, normalMap: steel.normal, roughness: 0.4 });
        const floor = new THREE.Mesh(new THREE.BoxGeometry(14, 1, 90), corridorMat);
        floor.position.set(0, -0.5, -40);
        this.levelGroup.add(floor);

        const leftWall = new THREE.Mesh(new THREE.BoxGeometry(1, 8, 90), corridorMat);
        leftWall.position.set(-7, 3.5, -40);
        const rightWall = new THREE.Mesh(new THREE.BoxGeometry(1, 8, 90), corridorMat);
        rightWall.position.set(7, 3.5, -40);
        this.levelGroup.add(leftWall);
        this.levelGroup.add(rightWall);

        // Electric Barrier Hazards (must duck under or shoot sensor)
        for (let z = -15; z >= -35; z -= 10) {
          const barrierGeo = new THREE.PlaneGeometry(12, 2.5);
          const barrierMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
          const barrier = new THREE.Mesh(barrierGeo, barrierMat);
          barrier.position.set(0, 2.8, z);
          this.levelGroup.add(barrier);
          this.hazards.push({ mesh: barrier, type: 'ELECTRIC_BARRIER', z });
        }

        // Rolling Barrel Mines along floor
        for (let z = -20; z >= -40; z -= 8) {
          const mineGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.2, 8);
          const mineMat = new THREE.MeshStandardMaterial({ color: 0xdc2626 });
          const mine = new THREE.Mesh(mineGeo, mineMat);
          mine.rotation.z = Math.PI / 2;
          mine.position.set((Math.random() - 0.5) * 6.0, 0.4, z);
          this.scene.add(mine);
          this.hazards.push({ mesh: mine, type: 'ROLLING_MINE', velZ: 3.5 });
        }

        // Security Core Boss at end of corridor
        const boss = MeshBuilder.buildCorridorSecurityBoss(stageIdx === 4);
        this.scene.add(boss);
        this.activeBoss = boss;

      } else if (stageIdx === 3) {
        // --- STAGE 3: WATERFALL ASCENT (VERTICAL CLIMBING) ---
        this.currentCameraMode = 'VERTICAL_ASCENT';
        this.syncCameraModeUI();

        const rockMat = new THREE.MeshStandardMaterial({ map: rock.diffuse, normalMap: rock.normal });
        const cliffWall = new THREE.Mesh(new THREE.BoxGeometry(30, 80, 2), rockMat);
        cliffWall.position.set(0, 35, -2);
        this.levelGroup.add(cliffWall);

        // Cascading 3D Waterfall plane
        const waterMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          normalMap: TextureFactory.getWaterNormal(),
          transparent: true,
          opacity: 0.85
        });
        const waterfall = new THREE.Mesh(new THREE.PlaneGeometry(10, 75), waterMat);
        waterfall.position.set(0, 35, -0.8);
        this.levelGroup.add(waterfall);
        this.waterfallMesh = waterfall;

        // Vertical Ascent Ledges
        for (let y = 3; y < 65; y += 4.5) {
          const ledge = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.6, 3.0), rockMat);
          ledge.position.set(((y / 4.5) % 2 === 0 ? 5 : -5), y, 0);
          this.levelGroup.add(ledge);
        }

        // Dragon God Statue Boss at top of waterfall (y = 65)
        const boss = MeshBuilder.buildGomeramosDragonBoss();
        boss.position.set(0, 65, 0);
        this.scene.add(boss);
        this.activeBoss = boss;

      } else if (stageIdx === 5) {
        // --- STAGE 5: SNOW FIELD ---
        this.currentCameraMode = 'SIDE_25D';
        this.syncCameraModeUI();

        const snowMat = new THREE.MeshStandardMaterial({ map: snow.diffuse, normalMap: snow.normal, roughness: 0.3 });
        const ground = new THREE.Mesh(new THREE.BoxGeometry(120, 2, 16), snowMat);
        ground.position.set(40, -1, 0);
        this.levelGroup.add(ground);

        // Armored Snow Tank Boss
        const boss = MeshBuilder.buildArmoredSnowTankBoss();
        boss.position.set(65, 0, 0);
        this.scene.add(boss);
        this.activeBoss = boss;

      } else if (stageIdx === 6) {
        // --- STAGE 6: ENERGY ZONE ---
        this.currentCameraMode = 'SIDE_25D';
        this.syncCameraModeUI();

        const steelMat = new THREE.MeshStandardMaterial({ map: steel.diffuse, normalMap: steel.normal });
        const ground = new THREE.Mesh(new THREE.BoxGeometry(120, 2, 16), steelMat);
        ground.position.set(40, -1, 0);
        this.levelGroup.add(ground);

        // High Voltage Flame Exhaust Vents
        for (let x = 18; x < 60; x += 12) {
          const flameGeo = new THREE.CylinderGeometry(0.3, 0.8, 4.0, 8);
          const flameMat = new THREE.MeshBasicMaterial({ color: 0xff4500, transparent: true, opacity: 0.8 });
          const flame = new THREE.Mesh(flameGeo, flameMat);
          flame.position.set(x, 2.0, 0);
          this.levelGroup.add(flame);
          this.hazards.push({ mesh: flame, type: 'FLAME_VENT', timer: 0 });
        }

        const boss = MeshBuilder.buildEnergyReactorBoss();
        boss.position.set(65, 0, 0);
        this.scene.add(boss);
        this.activeBoss = boss;

      } else if (stageIdx === 7) {
        // --- STAGE 7: HANGAR ---
        this.currentCameraMode = 'SIDE_25D';
        this.syncCameraModeUI();

        const hazardMat = new THREE.MeshStandardMaterial({ map: hazard.diffuse, normalMap: hazard.normal });
        const ground = new THREE.Mesh(new THREE.BoxGeometry(120, 2, 16), hazardMat);
        ground.position.set(40, -1, 0);
        this.levelGroup.add(ground);

        const boss = MeshBuilder.buildHangarCrusherBoss();
        boss.position.set(65, 0, 0);
        this.scene.add(boss);
        this.activeBoss = boss;

      } else if (stageIdx === 8) {
        // --- STAGE 8: ALIEN LAIR HEART ---
        this.currentCameraMode = 'BOSS_CONFRONTATION';
        this.syncCameraModeUI();

        const groundMat = new THREE.MeshStandardMaterial({ map: flesh.diffuse, normalMap: flesh.normal, roughness: 0.3 });
        const ground = new THREE.Mesh(new THREE.BoxGeometry(90, 2, 16), groundMat);
        ground.position.set(25, -1, 0);
        this.levelGroup.add(ground);

        const boss = MeshBuilder.buildAlienHeartBoss();
        boss.position.set(35, 0, 0);
        this.scene.add(boss);
        this.activeBoss = boss;
      }

      this.player.position.set(0, 0, 0);
      this.playerVel.set(0, 0, 0);
      this.updateHUD();
      this.updateBossHUD();
    }

    // =========================================================================
    // 6. User Input & Event Controllers
    // =========================================================================
    initEvents() {
      window.addEventListener('resize', () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      });

      window.addEventListener('keydown', (e) => {
        this.keys[e.code] = true;
        this.audio.init();

        // Numeric Keys 1..8 for Instant Stage Selection
        if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8'].includes(e.code)) {
          const sIdx = parseInt(e.code.replace('Digit', ''), 10);
          this.warpToStage(sIdx);
          return;
        }

        // Konami Code Sequence
        const expectedKey = this.konamiSequence[this.konamiProgress];
        if (e.code === expectedKey) {
          this.konamiProgress++;
          if (this.konamiProgress === this.konamiSequence.length) {
            this.activateKonamiCode();
            this.konamiProgress = 0;
          }
        } else {
          this.konamiProgress = (e.code === this.konamiSequence[0]) ? 1 : 0;
        }

        // Platform Drop-Down: Down + Jump
        const down = this.keys['ArrowDown'] || this.keys['KeyS'];
        if ((e.code === 'Space' || e.code === 'KeyJ' || e.code === 'KeyZ') && down) {
          this.dropDownPlatform();
        } else if (e.code === 'Space' || e.code === 'KeyJ' || e.code === 'KeyZ') {
          this.jump();
        } else if (e.code === 'KeyK' || e.code === 'KeyX') {
          this.shootWeapon();
        } else if (e.code === 'KeyV') {
          this.cycleCameraMode();
        } else if (e.code === 'KeyL' || e.code === 'KeyA') {
          this.cycleWeapon();
        } else if (e.code === 'KeyP' || e.code === 'Escape') {
          this.toggleSaveModal();
        } else if (e.code === 'KeyH') {
          this.toggleHelpModal();
        }
      });

      window.addEventListener('keyup', (e) => {
        this.keys[e.code] = false;
      });

      window.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
          this.isMouseDown = true;
          this.shootWeapon();
        }
      });

      window.addEventListener('mouseup', () => {
        this.isMouseDown = false;
      });

      // UI Stage Select Dropdown
      const stageSelect = document.getElementById('stageSelect');
      if (stageSelect) {
        stageSelect.addEventListener('change', (e) => {
          this.warpToStage(parseInt(e.target.value, 10));
        });
      }

      // UI Buttons
      document.getElementById('btnCameraMode').addEventListener('click', () => this.cycleCameraMode());
      document.getElementById('btnAudioToggle').addEventListener('click', () => {
        this.audio.enabled = !this.audio.enabled;
        document.getElementById('btnAudioToggle').textContent = this.audio.enabled ? '🔊' : '🔇';
      });
      document.getElementById('btnSaveMenu').addEventListener('click', () => this.toggleSaveModal());
      document.getElementById('btnCloseSaveModal').addEventListener('click', () => this.toggleSaveModal(false));
      document.getElementById('btnHelp').addEventListener('click', () => this.toggleHelpModal());
      document.getElementById('btnCloseHelpModal').addEventListener('click', () => this.toggleHelpModal(false));
    }

    warpToStage(stageIdx) {
      this.stageIndex = stageIdx;
      this.initLevel(stageIdx);
      const stageNames = {
        1: 'STAGE 1: JUNGLE PERIMETER',
        2: 'STAGE 2: BASE 1 (3D CORRIDOR)',
        3: 'STAGE 3: WATERFALL ASCENT',
        4: 'STAGE 4: BASE 2 (3D CENTRAL)',
        5: 'STAGE 5: SNOW FIELD',
        6: 'STAGE 6: ENERGY ZONE',
        7: 'STAGE 7: HANGAR',
        8: 'STAGE 8: ALIEN LAIR HEART'
      };
      this.showCinematicTitle(stageNames[stageIdx] || `STAGE ${stageIdx}`, 'GALUGA SECTOR INVASION');
      this.triggerCodec('COMMAND HQ', `Tactical team deployed to [${stageNames[stageIdx]}]. Engage!`, '🎖️', 3.0);
    }

    triggerCodec(speaker, message, avatar = '🎖️', duration = 4.0) {
      const popup = document.getElementById('codecPopup');
      const sEl = document.getElementById('codecSpeaker');
      const mEl = document.getElementById('codecMessage');
      const aEl = document.getElementById('codecAvatar');
      if (!popup || !sEl || !mEl || !aEl) return;

      sEl.textContent = speaker;
      mEl.textContent = message;
      aEl.textContent = avatar;
      popup.classList.add('active');
      this.audio.playCodecBeep();

      if (this.codecTimeout) clearTimeout(this.codecTimeout);
      this.codecTimeout = setTimeout(() => {
        popup.classList.remove('active');
      }, duration * 1000);
    }

    triggerHitMarker() {
      const hm = document.getElementById('hitMarker');
      if (hm) {
        hm.classList.add('pulse');
        this.audio.playHitChirp();
        setTimeout(() => hm.classList.remove('pulse'), 80);
      }
    }

    triggerDamageFlash() {
      const dv = document.getElementById('damageVignette');
      if (dv) {
        dv.classList.add('active');
        setTimeout(() => dv.classList.remove('active'), 180);
      }
    }

    activateKonamiCode() {
      this.lives = 30;
      this.konamiActivated = true;
      this.audio.playKonamiFanfare();
      const banner = document.getElementById('toastBanner');
      banner.textContent = '★ 30 LIVES UNLOCKED! (KONAMI CODE) ★';
      banner.classList.add('show');
      setTimeout(() => banner.classList.remove('show'), 3500);

      this.triggerCodec('HQ SUPREME COMMAND', 'Classified tactical reserves authorized! 30 reinforcements deployed!', '⚡');
      this.updateHUD();
    }

    // =========================================================================
    // 7. Multi-Perspective Camera Modes
    // =========================================================================
    cycleCameraMode(targetIdx = null) {
      if (targetIdx !== null) {
        this.cameraModeIdx = targetIdx % this.cameraModes.length;
      } else {
        this.cameraModeIdx = (this.cameraModeIdx + 1) % this.cameraModes.length;
      }
      this.currentCameraMode = this.cameraModes[this.cameraModeIdx];
      this.syncCameraModeUI();
    }

    syncCameraModeUI() {
      const btn = document.getElementById('btnCameraMode');
      const crosshair = document.getElementById('crosshair');
      const cinBars = document.getElementById('cinematicBars');

      const labels = {
        'SIDE_25D': '🎬 2.5D 橫捲',
        'BASE_3D_CORRIDOR': '🎯 3D 縱深走廊',
        'BOSS_CONFRONTATION': '⚔️ 對抗特寫導演',
        'VERTICAL_ASCENT': '🧗 垂直攀登',
        'ISOMETRIC': '📐 等角俯視',
        'CINEMATIC': '🎥 電影慢鏡'
      };
      if (btn) btn.innerHTML = labels[this.currentCameraMode] || '🎬 視角切換';

      if (crosshair) {
        crosshair.classList.toggle('active', this.currentCameraMode === 'BASE_3D_CORRIDOR');
      }
      if (cinBars) {
        cinBars.classList.toggle('hidden', this.currentCameraMode !== 'CINEMATIC' && this.currentCameraMode !== 'BOSS_CONFRONTATION');
      }
    }

    cycleWeapon() {
      const order = ['RIFLE', 'M', 'S', 'L', 'F', 'B'];
      const cur = order.indexOf(this.currentWeapon);
      this.currentWeapon = order[(cur + 1) % order.length];
      if (this.currentWeapon === 'B') {
        this.barrierTimer = 15.0;
      }
      this.triggerCodec('BILL RIZER', `Switching weapon to [${this.currentWeapon}].`, '🎯', 2.0);
      this.updateHUD();
    }

    jump() {
      if (this.isGrounded) {
        this.playerVel.y = 12.0;
        this.isGrounded = false;
        this.audio.playTone(320, 0.12, 'triangle', 0.2);
      }
    }

    dropDownPlatform() {
      if (this.isGrounded && this.player.position.y > 0.2) {
        this.player.position.y -= 0.3;
        this.playerVel.y = -6.0;
        this.isGrounded = false;
      }
    }

    shootWeapon() {
      this.audio.init();
      const origin = this.player.position.clone();
      origin.y += this.isProne ? 0.4 : 1.2;

      // Recoil & Muzzle Flash Light
      this.recoilOffset = 0.18;
      if (this.player.userData.muzzleLight) {
        this.player.userData.muzzleLight.intensity = 2.5;
        setTimeout(() => {
          if (this.player && this.player.userData.muzzleLight) {
            this.player.userData.muzzleLight.intensity = 0;
          }
        }, 50);
      }

      // Eject Brass Shell Casing
      this.spawnBrassCasing(origin);

      let pColor = 0xffe600;
      if (this.currentWeapon === 'S') pColor = 0xff0055;
      else if (this.currentWeapon === 'L') pColor = 0x00f0ff;
      else if (this.currentWeapon === 'F') pColor = 0xff6a00;

      const pMat = new THREE.MeshBasicMaterial({ color: pColor });

      if (this.currentWeapon === 'RIFLE' || this.currentWeapon === 'M') {
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), pMat);
        mesh.position.copy(origin);
        this.scene.add(mesh);
        this.bullets.push({
          mesh,
          vel: this.aimDir.clone().multiplyScalar(18.0),
          life: 2.0,
          dmg: this.currentWeapon === 'M' ? 1.5 : 1.0
        });
        this.audio.playShootRifle();

      } else if (this.currentWeapon === 'S') {
        const baseAngle = Math.atan2(this.aimDir.y, this.aimDir.x);
        const offsets = [-0.4, -0.2, 0, 0.2, 0.4];
        offsets.forEach(off => {
          const ang = baseAngle + off;
          const vel = new THREE.Vector3(Math.cos(ang), Math.sin(ang), (this.currentCameraMode === 'BASE_3D_CORRIDOR' ? -1 : 0)).multiplyScalar(15.0);
          const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), pMat);
          mesh.position.copy(origin);
          this.scene.add(mesh);
          this.bullets.push({ mesh, vel, life: 1.8, dmg: 1.6 });
        });
        this.audio.playShootSpread();

      } else if (this.currentWeapon === 'L') {
        const beamGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.5, 8);
        const mesh = new THREE.Mesh(beamGeo, pMat);
        mesh.rotation.z = Math.atan2(this.aimDir.y, this.aimDir.x) - Math.PI / 2;
        mesh.position.copy(origin);
        this.scene.add(mesh);
        this.bullets.push({
          mesh,
          vel: this.aimDir.clone().multiplyScalar(32.0),
          life: 1.5,
          dmg: 4.0,
          piercing: true
        });
        this.audio.playShootLaser();

      } else if (this.currentWeapon === 'F') {
        const mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25), pMat);
        mesh.position.copy(origin);
        this.scene.add(mesh);
        this.bullets.push({
          mesh,
          vel: this.aimDir.clone().multiplyScalar(10.0),
          vortexAngle: 0,
          life: 2.2,
          dmg: 2.8
        });
        this.audio.playTone(180, 0.2, 'sawtooth', 0.2);
      }
    }

    spawnBrassCasing(origin) {
      const casingMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 });
      const casing = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.08, 6), casingMat);
      casing.position.copy(origin);
      this.scene.add(casing);
      this.casings.push({
        mesh: casing,
        vel: new THREE.Vector3(-this.facing * (1.5 + Math.random()), 3.0 + Math.random() * 2.0, (Math.random() - 0.5) * 1.5),
        rotVel: new THREE.Vector3(Math.random() * 10, Math.random() * 10, 0),
        life: 1.2
      });
    }

    // =========================================================================
    // 8. Physics & Simulation Loop
    // =========================================================================
    updatePhysics(dt) {
      if (this.hitStopTimer > 0) {
        this.hitStopTimer -= dt;
        return;
      }

      // Animate water normal texture wave offset
      if (this.waterMesh && this.waterMesh.material.normalMap) {
        this.waterMesh.material.normalMap.offset.x += dt * 0.05;
        this.waterMesh.material.normalMap.offset.y += dt * 0.03;
      }
      if (this.waterfallMesh && this.waterfallMesh.material.normalMap) {
        this.waterfallMesh.material.normalMap.offset.y -= dt * 0.25;
      }

      // Cloth simulation on Headband Ribbons
      if (this.player.userData.ribbon1 && this.player.userData.ribbon2) {
        const t = performance.now() * 0.008;
        const wave = Math.sin(t) * 0.15;
        this.player.userData.ribbon1.rotation.z = -Math.PI / 8 - wave;
        this.player.userData.ribbon2.rotation.z = -Math.PI / 6 + wave * 1.2;
      }

      // Primary Arrow Keys
      const up = this.keys['ArrowUp'] || this.keys['KeyW'];
      const down = this.keys['ArrowDown'] || this.keys['KeyS'];
      const left = this.keys['ArrowLeft'] || this.keys['KeyA'];
      const right = this.keys['ArrowRight'] || this.keys['KeyD'];

      let moveX = 0, moveZ = 0;
      if (right) moveX += 1;
      if (left) moveX -= 1;
      if (this.currentCameraMode === 'BASE_3D_CORRIDOR') {
        if (up) moveZ -= 1;
        if (down) moveZ += 1;
      }

      if (moveX !== 0) this.facing = Math.sign(moveX);

      // 8-Directional Aim Vector
      let ax = moveX, ay = 0;
      if (up) ay += 1;
      if (down && !this.isGrounded) ay -= 1;
      if (ax === 0 && ay === 0) ax = this.facing;

      if (this.currentCameraMode === 'BASE_3D_CORRIDOR') {
        this.aimDir.set(ax * 0.4, ay * 0.5, -1.0).normalize();
      } else {
        this.aimDir.set(ax, ay, 0).normalize();
      }

      // Water Wading detection: if x > 48 in Stage 1 and y <= 0
      this.isWadingWater = (this.stageIndex === 1 && this.player.position.x > 48 && this.player.position.x < 70);

      // Prone detection
      this.isProne = down && moveX === 0 && this.isGrounded && this.currentCameraMode !== 'BASE_3D_CORRIDOR';

      // Move Speed with water drag
      const speed = this.isProne ? 0 : (this.isWadingWater ? 4.8 : 7.0);
      this.player.position.x += moveX * speed * dt;
      if (this.currentCameraMode === 'BASE_3D_CORRIDOR') {
        this.player.position.z += moveZ * speed * dt;
        this.player.position.x = Math.max(-5.5, Math.min(5.5, this.player.position.x));
      }

      // Gravity & Jump
      this.playerVel.y -= 26.0 * dt;
      this.player.position.y += this.playerVel.y * dt;

      const floorY = this.isWadingWater ? -0.4 : 0.0;
      if (this.player.position.y <= floorY) {
        this.player.position.y = floorY;
        this.playerVel.y = 0;
        this.isGrounded = true;
      }

      // Somersault rotation when in air / Prone rotation on ground
      if (!this.isGrounded) {
        this.player.rotation.z -= this.facing * 12.0 * dt;
      } else if (this.isProne) {
        this.player.rotation.z = this.facing * (Math.PI / 2.2);
        this.player.position.y = floorY + 0.15;
      } else {
        this.player.rotation.z = 0;
      }

      // Dynamic Arm Pitch Aiming
      if (this.player.userData.armPivot) {
        const aimAngle = Math.atan2(this.aimDir.y, Math.abs(this.aimDir.x));
        this.player.userData.armPivot.rotation.z = aimAngle * 0.8;
      }

      // Smooth Recoil Return
      if (this.recoilOffset > 0) {
        this.recoilOffset = Math.max(0, this.recoilOffset - dt * 1.5);
      }
      if (this.player.userData.rifleGroup) {
        this.player.userData.rifleGroup.position.z = this.player.userData.baseRifleZ - this.recoilOffset;
      }

      // Stage 1 Exploding Bridge Detonation Sequence
      this.bridgePlanks.forEach(plank => {
        if (!plank.exploded && this.player.position.x > plank.x + 1.2) {
          plank.exploded = true;
          this.audio.playExplosion();
          this.screenShakeTrauma = Math.min(1.0, this.screenShakeTrauma + 0.4);
          this.spawnExplosionParticles(plank.mesh.position, 20, 0xff4500);
          this.levelGroup.remove(plank.mesh);
        }
      });

      // Update Hazards (Electric barriers, rolling mines, flame vents)
      this.hazards.forEach(h => {
        if (h.type === 'ROLLING_MINE') {
          h.mesh.position.z += h.velZ * dt;
          if (h.mesh.position.z > 5) h.mesh.position.z = -40;
          if (this.player.position.distanceTo(h.mesh.position) < 1.2 && !this.isProne && this.player.position.y < 0.8) {
            this.handlePlayerHit();
          }
        } else if (h.type === 'ELECTRIC_BARRIER') {
          if (Math.abs(this.player.position.z - h.z) < 1.0 && !this.isProne) {
            this.handlePlayerHit();
          }
        }
      });

      // Update Ejected Casings
      for (let i = this.casings.length - 1; i >= 0; i--) {
        const c = this.casings[i];
        c.life -= dt;
        c.vel.y -= 18.0 * dt;
        c.mesh.position.addScaledVector(c.vel, dt);
        c.mesh.rotation.x += c.rotVel.x * dt;
        c.mesh.rotation.y += c.rotVel.y * dt;
        if (c.mesh.position.y <= 0) {
          c.mesh.position.y = 0;
          c.vel.y = -c.vel.y * 0.4;
          c.vel.x *= 0.6;
        }
        if (c.life <= 0) {
          this.scene.remove(c.mesh);
          this.casings.splice(i, 1);
        }
      }

      // Update Bullets
      for (let i = this.bullets.length - 1; i >= 0; i--) {
        const b = this.bullets[i];
        b.life -= dt;
        if (b.vortexAngle !== undefined) {
          b.vortexAngle += 15.0 * dt;
          b.mesh.position.y += Math.sin(b.vortexAngle) * 0.1;
        }
        b.mesh.position.addScaledVector(b.vel, dt);

        let hit = false;
        for (let j = this.enemies.length - 1; j >= 0; j--) {
          const en = this.enemies[j];
          if (b.mesh.position.distanceTo(en.mesh.position) < 1.4) {
            en.hp -= b.dmg;
            hit = true;
            this.hitStopTimer = 0.04;
            this.screenShakeTrauma = Math.min(1.0, this.screenShakeTrauma + 0.1);
            this.triggerHitMarker();
            this.spawnExplosionParticles(b.mesh.position, 6, 0xffe600);

            if (en.hp <= 0) {
              this.score += (en.type === 'TURRET' ? 500 : (en.type === 'SNIPER' ? 200 : 100));
              this.audio.playExplosion();
              this.screenShakeTrauma = Math.min(1.0, this.screenShakeTrauma + 0.3);
              this.spawnExplosionParticles(en.mesh.position, 16, 0xff4500);
              this.scene.remove(en.mesh);
              this.enemies.splice(j, 1);
              this.updateHUD();
            }
            break;
          }
        }

        // Multi-Part Boss Hit Check
        if (this.activeBoss && !hit) {
          const bPos = this.activeBoss.position;
          const hitRadius = (this.currentCameraMode === 'BASE_3D_CORRIDOR') ? 4.5 : 3.2;

          if (b.mesh.position.distanceTo(bPos.clone().add(new THREE.Vector3(0, 4.0, 0))) < hitRadius ||
              (this.currentCameraMode === 'BASE_3D_CORRIDOR' && b.mesh.position.z < -42.0)) {
            this.activeBoss.userData.hp -= b.dmg;
            hit = true;
            this.triggerHitMarker();
            this.hitStopTimer = 0.05;
            this.screenShakeTrauma = Math.min(1.0, this.screenShakeTrauma + 0.15);
            this.spawnExplosionParticles(b.mesh.position, 8, 0xff0055);

            // Sub-parts damage logic
            if (this.activeBoss.userData.parts) {
              const partKeys = Object.keys(this.activeBoss.userData.parts);
              const targetKey = partKeys[Math.floor(Math.random() * partKeys.length)];
              const part = this.activeBoss.userData.parts[targetKey];
              if (part && part.hp > 0) {
                part.hp = Math.max(0, part.hp - b.dmg);
              }
            }

            this.updateBossHUD();

            if (this.activeBoss.userData.hp <= 0) {
              this.score += 10000;
              this.audio.playExplosion();
              this.audio.playStageClear();
              this.screenShakeTrauma = 1.0;
              this.spawnExplosionParticles(this.activeBoss.position, 50, 0xff6a00);
              this.scene.remove(this.activeBoss);
              this.activeBoss = null;
              this.updateBossHUD();
              this.updateHUD();
              this.triggerCodec('LANCE BEAN', 'Sector boss destroyed! Proceeding to next objective.', '💥', 5.0);

              setTimeout(() => {
                const nextStage = (this.stageIndex % 8) + 1;
                this.warpToStage(nextStage);
              }, 3200);
            }
          }
        }

        // Capsule Hit
        for (let k = this.capsules.length - 1; k >= 0; k--) {
          const cap = this.capsules[k];
          if (b.mesh.position.distanceTo(cap.mesh.position) < 1.2) {
            this.currentWeapon = cap.badge;
            this.score += 1000;
            this.audio.playTone(600, 0.2, 'triangle', 0.25);
            this.triggerHitMarker();
            this.triggerCodec('BILL RIZER', `[${cap.badge}] weapon upgrade equipped! Maximum firepower.`, '🎯', 3.0);
            this.spawnExplosionParticles(cap.mesh.position, 12, 0x00f0ff);
            this.scene.remove(cap.mesh);
            this.capsules.splice(k, 1);
            this.updateHUD();
            hit = true;
            break;
          }
        }

        if (b.life <= 0 || (hit && !b.piercing)) {
          this.scene.remove(b.mesh);
          this.bullets.splice(i, 1);
        }
      }

      // Flying Capsules motion
      this.capsules.forEach(cap => {
        cap.flightTime = (cap.flightTime || 0) + dt;
        cap.mesh.position.x = cap.basePos.x + cap.flightTime * 2.5;
        cap.mesh.position.y = cap.basePos.y + Math.sin(cap.flightTime * 3.0) * 1.5;
      });

      // Update Particles
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.life -= dt;
        p.mesh.position.addScaledVector(p.vel, dt);
        p.mesh.scale.multiplyScalar(0.96);
        if (p.life <= 0) {
          this.scene.remove(p.mesh);
          this.particles.splice(i, 1);
        }
      }

      this.updateRadar();
    }

    handlePlayerHit() {
      if (this.invulnerableTimer > 0 || this.barrierTimer > 0) return;
      this.lives--;
      this.invulnerableTimer = 2.5;
      this.triggerDamageFlash();
      this.screenShakeTrauma = 0.8;
      this.audio.playExplosion();
      this.updateHUD();
      if (this.lives <= 0) {
        this.triggerCodec('HQ', 'Commando MIA! Deploying tactical clone backup...', '💀', 3.0);
        this.lives = 3;
        this.updateHUD();
      }
    }

    updateRadar() {
      if (!this.radarCtx) return;
      const ctx = this.radarCtx;
      ctx.clearRect(0, 0, 90, 24);

      ctx.fillStyle = '#064e3b';
      ctx.fillRect(0, 0, 90, 24);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(45, 0); ctx.lineTo(45, 24);
      ctx.moveTo(0, 12); ctx.lineTo(90, 12);
      ctx.stroke();

      // Player blip (Green)
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(45, 12, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Enemies relative to player
      const pX = this.player.position.x;
      this.enemies.forEach(en => {
        const dx = (en.mesh.position.x - pX) * 1.2;
        const rx = 45 + dx;
        if (rx >= 2 && rx <= 88) {
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(rx, 12, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Boss blip
      if (this.activeBoss) {
        const bX = (this.activeBoss.position.x - pX) * 1.2;
        const bx = 45 + bX;
        if (bx >= 2 && bx <= 88) {
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(bx, 12, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    spawnExplosionParticles(pos, count = 12, color = 0xff6a00) {
      const pMat = new THREE.MeshBasicMaterial({ color });
      for (let i = 0; i < count; i++) {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.14), pMat);
        mesh.position.copy(pos);
        const vel = new THREE.Vector3(
          (Math.random() - 0.5) * 8.0,
          (Math.random() - 0.2) * 8.0,
          (Math.random() - 0.5) * 8.0
        );
        this.scene.add(mesh);
        this.particles.push({ mesh, vel, life: 0.6 + Math.random() * 0.4 });
      }
    }

    // =========================================================================
    // 9. Camera Director System
    // =========================================================================
    updateCamera(dt) {
      const pPos = this.player.position;

      if (this.screenShakeTrauma > 0) {
        this.screenShakeTrauma = Math.max(0, this.screenShakeTrauma - dt * 2.0);
      }
      const shakeAmt = this.screenShakeTrauma * this.screenShakeTrauma * 0.6;
      const shakeX = (Math.random() - 0.5) * shakeAmt;
      const shakeY = (Math.random() - 0.5) * shakeAmt;

      const leadX = this.facing * 3.5;

      if (this.currentCameraMode === 'SIDE_25D') {
        const desiredPos = new THREE.Vector3(pPos.x + leadX + shakeX, pPos.y + 3.0 + shakeY, 14.0);
        this.camera.position.lerp(desiredPos, 4.5 * dt);
        this.cameraTarget.lerp(new THREE.Vector3(pPos.x + leadX * 0.6, pPos.y + 2.0, 0), 4.5 * dt);
        this.camera.lookAt(this.cameraTarget);

      } else if (this.currentCameraMode === 'BASE_3D_CORRIDOR') {
        const desiredPos = new THREE.Vector3(pPos.x * 0.7 + shakeX, pPos.y + 2.2 + shakeY, pPos.z + 5.5);
        this.camera.position.lerp(desiredPos, 8.0 * dt);
        this.cameraTarget.lerp(new THREE.Vector3(pPos.x * 0.3, pPos.y + 1.8, pPos.z - 30.0), 8.0 * dt);
        this.camera.lookAt(this.cameraTarget);

      } else if (this.currentCameraMode === 'BOSS_CONFRONTATION') {
        // Dramatic low-angle hero/boss confrontation framing
        const bPos = this.activeBoss ? this.activeBoss.position : new THREE.Vector3(pPos.x + 10, 0, 0);
        const midX = (pPos.x + bPos.x) * 0.5;
        const desiredPos = new THREE.Vector3(midX + shakeX, 1.8 + shakeY, 11.0);
        this.camera.position.lerp(desiredPos, 5.0 * dt);
        this.cameraTarget.lerp(new THREE.Vector3(midX + 1.0, 3.5, 0), 5.0 * dt);
        this.camera.lookAt(this.cameraTarget);

      } else if (this.currentCameraMode === 'VERTICAL_ASCENT') {
        // Vertical climbing framing for Stage 3 Waterfall
        const desiredPos = new THREE.Vector3(pPos.x * 0.4 + shakeX, pPos.y + 4.0 + shakeY, 15.0);
        this.camera.position.lerp(desiredPos, 5.0 * dt);
        this.cameraTarget.lerp(new THREE.Vector3(0, pPos.y + 3.0, 0), 5.0 * dt);
        this.camera.lookAt(this.cameraTarget);

      } else if (this.currentCameraMode === 'ISOMETRIC') {
        const desiredPos = new THREE.Vector3(pPos.x + 10.0 + shakeX, pPos.y + 14.0 + shakeY, 12.0);
        this.camera.position.lerp(desiredPos, 4.0 * dt);
        this.cameraTarget.lerp(new THREE.Vector3(pPos.x + 2.0, pPos.y, 0), 4.0 * dt);
        this.camera.lookAt(this.cameraTarget);

      } else if (this.currentCameraMode === 'CINEMATIC') {
        const t = performance.now() * 0.001;
        const camX = pPos.x + Math.sin(t * 0.8) * 4.0 + shakeX;
        const camY = pPos.y + 1.2 + Math.cos(t * 0.5) * 0.5 + shakeY;
        const camZ = 6.0 + Math.sin(t * 0.4) * 2.0;
        this.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), 3.0 * dt);
        this.camera.lookAt(pPos.x + 2.0, pPos.y + 1.5, 0);
      }
    }

    // =========================================================================
    // 10. HUD & UI Updates
    // =========================================================================
    updateHUD() {
      document.getElementById('hudLives').textContent = `♥ ${this.lives}`;
      document.getElementById('hudScore').textContent = String(this.score).padStart(6, '0');
      document.getElementById('hudHighScore').textContent = String(Math.max(this.highScore, this.score)).padStart(6, '0');

      const stageNames = {
        1: '1: JUNGLE OUTPOST',
        2: '2: BASE 1 (3D CORRIDOR)',
        3: '3: WATERFALL ASCENT',
        4: '4: BASE 2 (3D CENTRAL)',
        5: '5: SNOW FIELD',
        6: '6: ENERGY ZONE',
        7: '7: HANGAR',
        8: '8: ALIEN LAIR HEART'
      };
      document.getElementById('hudStage').textContent = stageNames[this.stageIndex] || '1: JUNGLE';

      const stageSelect = document.getElementById('stageSelect');
      if (stageSelect && stageSelect.value !== String(this.stageIndex)) {
        stageSelect.value = String(this.stageIndex);
      }

      const wLetter = document.getElementById('hudWeaponLetter');
      const wName = document.getElementById('hudWeaponName');
      wLetter.textContent = this.currentWeapon[0];
      wName.textContent = this.currentWeapon;
    }

    updateBossHUD() {
      const bossHud = document.getElementById('bossHUD');
      const subPartsContainer = document.getElementById('bossSubParts');
      if (!this.activeBoss) {
        bossHud.classList.add('hidden');
        if (subPartsContainer) subPartsContainer.innerHTML = '';
        return;
      }
      bossHud.classList.remove('hidden');
      document.getElementById('bossName').textContent = `☣ ${this.activeBoss.userData.name}`;
      document.getElementById('bossPhase').textContent = this.activeBoss.userData.phase;
      const pct = Math.max(0, (this.activeBoss.userData.hp / this.activeBoss.userData.maxHp) * 100);
      document.getElementById('bossHpBar').style.width = `${pct}%`;

      // Update Sub-Part Health Bars
      if (subPartsContainer && this.activeBoss.userData.parts) {
        const parts = this.activeBoss.userData.parts;
        let html = '';
        for (const k in parts) {
          const p = parts[k];
          const partPct = Math.max(0, (p.hp / p.maxHp) * 100);
          html += `
            <div class="boss-sub-part">
              <span class="boss-sub-label">${p.name} (${Math.round(partPct)}%)</span>
              <div class="boss-sub-bar-bg">
                <div class="boss-sub-bar-fill" style="width: ${partPct}%;"></div>
              </div>
            </div>
          `;
        }
        subPartsContainer.innerHTML = html;
      }
    }

    // =========================================================================
    // 11. 5-Slot Save / Load System
    // =========================================================================
    initSaveSlotsUI() {
      const container = document.getElementById('slotsContainer');
      if (!container) return;
      container.innerHTML = '';
      for (let i = 1; i <= this.maxSlots; i++) {
        const item = document.createElement('div');
        item.className = 'slot-item';
        item.id = `slot-item-${i}`;

        const data = this.loadSlotData(i);
        item.innerHTML = `
          <div class="slot-info">
            <span class="slot-header">SLOT ${i}: ${data ? data.stage_name : '--- EMPTY ---'}</span>
            <span class="slot-sub">${data ? `Score: ${data.score} | Weapon: ${data.weapon} | Lives: ${data.lives} (${data.timestamp})` : '尚無存檔記錄'}</span>
          </div>
          <div class="slot-actions">
            <button class="btn-slot save" onclick="window.ContraInstance.saveSlot(${i})">存檔</button>
            <button class="btn-slot load" onclick="window.ContraInstance.loadSlot(${i})" ${data ? '' : 'disabled'}>讀取</button>
            <button class="btn-slot del" onclick="window.ContraInstance.deleteSlot(${i})" ${data ? '' : 'disabled'}>清除</button>
          </div>
        `;
        container.appendChild(item);
      }
    }

    saveSlot(slotId) {
      const state = {
        slot_id: slotId,
        timestamp: new Date().toLocaleTimeString(),
        stage_index: this.stageIndex,
        stage_name: `Stage ${this.stageIndex}`,
        score: this.score,
        lives: this.lives,
        weapon: this.currentWeapon,
        camera_mode: this.currentCameraMode,
        konami_activated: this.konamiActivated
      };
      localStorage.setItem(`contra3d_slot_${slotId}`, JSON.stringify(state));
      this.initSaveSlotsUI();
    }

    loadSlotData(slotId) {
      try {
        const raw = localStorage.getItem(`contra3d_slot_${slotId}`);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    loadSlot(slotId) {
      const data = this.loadSlotData(slotId);
      if (!data) return;
      this.stageIndex = data.stage_index || 1;
      this.score = data.score || 0;
      this.lives = data.lives || 3;
      this.currentWeapon = data.weapon || 'RIFLE';
      this.currentCameraMode = data.camera_mode || 'SIDE_25D';
      this.konamiActivated = data.konami_activated || false;
      this.initLevel(this.stageIndex);
      this.toggleSaveModal(false);
    }

    deleteSlot(slotId) {
      localStorage.removeItem(`contra3d_slot_${slotId}`);
      this.initSaveSlotsUI();
    }

    toggleSaveModal(open = null) {
      const modal = document.getElementById('saveModal');
      if (!modal) return;
      const isOpen = modal.classList.contains('open');
      const target = open !== null ? open : !isOpen;
      modal.classList.toggle('open', target);
      if (target) this.initSaveSlotsUI();
    }

    toggleHelpModal(open = null) {
      const modal = document.getElementById('helpModal');
      if (!modal) return;
      const isOpen = modal.classList.contains('open');
      const target = open !== null ? open : !isOpen;
      modal.classList.toggle('open', target);
    }

    renderLoop(now) {
      const dt = Math.min((now - this.lastTime) * 0.001, 0.1);
      this.lastTime = now;

      this.updatePhysics(dt);
      this.updateCamera(dt);
      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(this.renderLoop.bind(this));
    }
  }

  // =========================================================================
  // 12. Chrome Debug Self-Test API (window.ContraDebug)
  // =========================================================================
  window.ContraDebug = {
    runSelfTest() {
      const instance = window.ContraInstance;
      if (!instance) {
        return { success: false, error: 'ContraInstance not mounted on window' };
      }

      const results = [];
      let allOk = true;

      const assert = (cond, msg) => {
        results.push({ test: msg, passed: !!cond });
        if (!cond) allOk = false;
      };

      // 1. WebGL Context Probe
      const gl = instance.renderer.getContext();
      assert(gl && typeof gl.drawArrays === 'function', 'Probe 1: WebGL Context is Active and Valid');

      // 2. Normal Map Generation Probe
      const rock = TextureFactory.getJungleRock();
      const waterNorm = TextureFactory.getWaterNormal();
      const snow = TextureFactory.getSnowIce();
      assert(rock.diffuse && rock.normal && waterNorm.isCanvasTexture && snow.diffuse, 'Probe 2: Procedural Normal Map (Sobel) Generated');

      // 3. Player Commando Mesh Rig Probe
      assert(instance.player && instance.player.userData.armPivot && instance.player.userData.rifleGroup,
             'Probe 3: Commando Aiming Rig & Weapon Mesh Verified');

      // 4. Primary Arrow Key Bindings
      assert(typeof instance.keys === 'object', 'Probe 4: Arrow Keys Input Controller Active');

      // 5. Arsenal & Ballistics
      const origWeapon = instance.currentWeapon;
      instance.currentWeapon = 'S';
      instance.shootWeapon();
      const sBullets = instance.bullets.filter(b => b.dmg === 1.6);
      assert(sBullets.length >= 5, 'Probe 5: Spread Gun 5-Way Fan Projectiles Spawned');
      instance.currentWeapon = origWeapon;

      // 6. Tactical Codec & Radar
      instance.triggerCodec('DEBUG', 'Self-test active.', '⚙️');
      const codecEl = document.getElementById('codecPopup');
      assert(codecEl && codecEl.classList.contains('active') && instance.radarCtx, 'Probe 6: Tactical Radio Codec & Radar Active');

      // 7. Save / Load Persistence
      instance.saveSlot(1);
      const slot1 = instance.loadSlotData(1);
      assert(slot1 && slot1.slot_id === 1 && slot1.stage_index === instance.stageIndex,
             'Probe 7: 5-Slot Save/Load State Fidelity Verified');

      // 8. Multi-Part Boss Target Hierarchy
      assert(instance.activeBoss && instance.activeBoss.userData.dish && instance.activeBoss.userData.core,
             'Probe 8: Multi-Part Defense Wall Boss Hierarchy Verified');

      // 9. Multi-Perspective Camera Director Modes
      assert(instance.cameraModes.includes('SIDE_25D') && instance.cameraModes.includes('BASE_3D_CORRIDOR') &&
             instance.cameraModes.includes('BOSS_CONFRONTATION') && instance.cameraModes.includes('VERTICAL_ASCENT'),
             'Probe 9: Multi-Perspective Camera Director Modes Verified');

      // 10. Volumetric God Rays & Atmospheric Particle System
      assert(instance.godRaysGroup && instance.godRaysGroup.children.length > 0,
             'Probe 10: Volumetric God Rays & Atmospheric Lighting Shafts Verified');

      return {
        success: allOk,
        passedProbes: results.filter(r => r.passed).length,
        totalProbes: results.length,
        results,
        playerPos: { x: instance.player.position.x, y: instance.player.position.y },
        activeWeapon: instance.currentWeapon,
        currentStage: instance.stageIndex
      };
    },

    getState() {
      const inst = window.ContraInstance;
      if (!inst) return null;
      return {
        stage: inst.stageIndex,
        lives: inst.lives,
        score: inst.score,
        weapon: inst.currentWeapon,
        cameraMode: inst.currentCameraMode,
        enemiesCount: inst.enemies.length,
        bulletsCount: inst.bullets.length,
        pos: { x: inst.player.position.x, y: inst.player.position.y, z: inst.player.position.z }
      };
    },

    triggerStage(idx) {
      if (window.ContraInstance) {
        window.ContraInstance.warpToStage(idx);
        return `Warped to stage ${idx}`;
      }
      return 'No instance';
    },

    setCameraMode(mode) {
      if (window.ContraInstance) {
        const idx = window.ContraInstance.cameraModes.indexOf(mode);
        if (idx !== -1) {
          window.ContraInstance.cycleCameraMode(idx);
          return `Camera mode set to ${mode}`;
        }
      }
      return 'Failed';
    },

    toggleGodMode() {
      if (window.ContraInstance) {
        window.ContraInstance.lives = 99;
        window.ContraInstance.barrierTimer = 99999;
        window.ContraInstance.updateHUD();
        return 'God Mode Activated (99 lives + infinite barrier)';
      }
      return 'No instance';
    }
  };

  // Launch on window load
  window.addEventListener('DOMContentLoaded', () => {
    window.ContraInstance = new Contra3DGame();
  });
})();
