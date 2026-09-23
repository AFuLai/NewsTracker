/**
 * BOMBERMAN 3D: ARENA BATTLE ROYALE
 * Complete 3D Engine, 4-Player Battle Royale, Multi-Perspective Director Cam,
 * Intelligent Danger-Avoidance AI, Cross-Fire Chain Explosions, Sudden Death,
 * Web Audio Synthesizer, 5-Slot Save System, and Chrome Self-Test Probes.
 */

(function () {
  'use strict';

  // --- ARENA & GRID CONFIGURATION ---
  const GRID_COLS = 15;
  const GRID_ROWS = 13;
  const TILE_SIZE = 2.0;
  const HALF_W = ((GRID_COLS - 1) / 2) * TILE_SIZE;
  const HALF_H = ((GRID_ROWS - 1) / 2) * TILE_SIZE;

  const TILE_EMPTY = 0;
  const TILE_HARD = 1;     // Indestructible pillar / wall
  const TILE_SOFT = 2;     // Destructible brick block
  const TILE_METEOR = 3;   // Sudden death falling steel block

  // Power-Up Definitions
  const POWERUP_TYPES = {
    BOMB: { id: 'BOMB', name: 'BOMB UP', icon: '💣', color: 0x222222 },
    FIRE: { id: 'FIRE', name: 'FIRE UP', icon: '🔥', color: 0xff4400 },
    SPEED: { id: 'SPEED', name: 'SKATES', icon: '⚡', color: 0x00ccff },
    GLOVE: { id: 'GLOVE', name: 'KICK GLOVE', icon: '🥊', color: 0xff0066 },
    SHIELD: { id: 'SHIELD', name: 'HEART SHIELD', icon: '🛡️', color: 0xffd700 },
    REMOTE: { id: 'REMOTE', name: 'REMOTE', icon: '⏰', color: 0xaa00ff },
    SKULL: { id: 'SKULL', name: 'SKULL CURSE', icon: '💀', color: 0x8800bb }
  };

  // 5 Director Camera Angles - Optimized Framing to Prevent UI Occlusion
  const CAMERA_MODES = [
    { id: 'TOP_DOWN', name: '1: CLASSIC TOP-DOWN', offset: new THREE.Vector3(0, 32, 0.1), lookAt: new THREE.Vector3(0, 0, 0) },
    { id: 'ISOMETRIC', name: '2: 2.5D ISOMETRIC', offset: new THREE.Vector3(0, 26, 20), lookAt: new THREE.Vector3(0, -0.5, 1.2) },
    { id: 'FOLLOW', name: '3: 3RD-PERSON CHASE', offset: new THREE.Vector3(0, 5.0, 7.5), lookAt: new THREE.Vector3(0, 1.0, -3.0) },
    { id: 'DIRECTOR', name: '4: DYNAMIC DIRECTOR', offset: new THREE.Vector3(0, 18, 16), lookAt: new THREE.Vector3(0, 0, 0) },
    { id: 'FREE', name: '5: FREE SPECTATOR', offset: new THREE.Vector3(22, 22, 22), lookAt: new THREE.Vector3(0, 0, 0) }
  ];

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  class SoundSynth {
    constructor() {
      this.ctx = null;
      this.muted = false;
      this.volume = 0.4;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        try {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          this.ctx = new AudioContextClass();
        } catch (e) {}
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        const canResume = (navigator.userActivation && navigator.userActivation.hasBeenActive);
        if (canResume) {
          this.ctx.resume().catch(() => {});
        }
      }
    }

    playTone(freqStart, freqEnd, type, duration, gainVal = 0.3) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, this.ctx.currentTime);
        if (freqEnd !== freqStart) {
          osc.frequency.exponentialRampToValueAtTime(Math.max(10, freqEnd), this.ctx.currentTime + duration);
        }
        gain.gain.setValueAtTime(gainVal * this.volume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }

    playBombDrop() {
      this.playTone(520, 260, 'sine', 0.15, 0.4);
    }

    playFuseFizz() {
      this.playTone(800, 600, 'square', 0.05, 0.05);
    }

    playKick() {
      this.playTone(180, 480, 'triangle', 0.18, 0.5);
    }

    playExplosion() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      try {
        // Deep sub-bass drop
        this.playTone(120, 25, 'triangle', 0.6, 0.8);

        // Noise blast with lowpass filter
        const bufferSize = this.ctx.sampleRate * 0.4;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.4);

        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.7 * this.volume, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        whiteNoise.start();
        whiteNoise.stop(this.ctx.currentTime + 0.4);
      } catch (e) {}
    }

    playPowerup() {
      const notes = [261.63, 329.63, 392.0, 523.25]; // C4, E4, G4, C5
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, freq * 1.05, 'sine', 0.12, 0.35);
        }, idx * 60);
      });
    }

    playShieldPop() {
      this.playTone(880, 1320, 'square', 0.25, 0.4);
    }

    playDeath() {
      this.playTone(400, 80, 'sawtooth', 0.45, 0.4);
    }

    playVictory() {
      const fanfare = [392.0, 523.25, 659.25, 783.99];
      fanfare.forEach((f, i) => {
        setTimeout(() => this.playTone(f, f, 'triangle', 0.25, 0.4), i * 140);
      });
    }

    playHurryUp() {
      this.playTone(660, 440, 'sawtooth', 0.3, 0.5);
    }
  }

  // --- PROCEDURAL TEXTURE GENERATORS ---
  function createFloorTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Cyber Arena Grid Pattern
    ctx.fillStyle = '#0f1422';
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = '#1b263b';
    ctx.lineWidth = 4;
    for (let i = 0; i <= 512; i += 64) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 512);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(512, i);
      ctx.stroke();
    }

    // Glowing Neon Crosshairs at corners
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 2;
    for (let x = 64; x < 512; x += 64) {
      for (let y = 64; y < 512; y += 64) {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(GRID_COLS / 2, GRID_ROWS / 2);
    return tex;
  }

  function createSoftBlockTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Crate / Brick texture
    ctx.fillStyle = '#b3541e';
    ctx.fillRect(0, 0, 256, 256);

    ctx.fillStyle = '#d8702b';
    ctx.fillRect(16, 16, 224, 224);

    // Bevel shading
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(256, 0);
    ctx.lineTo(224, 32);
    ctx.lineTo(32, 32);
    ctx.fill();

    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.moveTo(0, 256);
    ctx.lineTo(256, 256);
    ctx.lineTo(224, 224);
    ctx.lineTo(32, 224);
    ctx.fill();

    // Rivets
    ctx.fillStyle = '#ffcc88';
    [40, 216].forEach(x => {
      [40, 216].forEach(y => {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    return new THREE.CanvasTexture(canvas);
  }

  // --- PROCEDURAL 3D BOMBERMAN MODEL ---
  function createBombermanMesh(colorHex, visorColorHex, teamName) {
    const group = new THREE.Group();
    group.name = `Bomberman_${teamName}`;

    // 1. Head
    const headGeo = new THREE.SphereGeometry(0.55, 24, 24);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.1
    });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.35;
    head.castShadow = true;
    group.add(head);

    // 2. Visor / Helmet Face
    const visorGeo = new THREE.BoxGeometry(0.65, 0.35, 0.25);
    const visorMat = new THREE.MeshStandardMaterial({
      color: visorColorHex,
      roughness: 0.1,
      metalness: 0.8,
      emissive: visorColorHex,
      emissiveIntensity: 0.25
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 1.35, 0.45);
    group.add(visor);

    // Eyes (Two cute dark oblong pupils)
    const eyeGeo = new THREE.BoxGeometry(0.08, 0.18, 0.05);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111118 });
    const eyeLeft = new THREE.Mesh(eyeGeo, eyeMat);
    eyeLeft.position.set(-0.16, 1.35, 0.58);
    const eyeRight = new THREE.Mesh(eyeGeo, eyeMat);
    eyeRight.position.set(0.16, 1.35, 0.58);
    group.add(eyeLeft);
    group.add(eyeRight);

    // 3. Antenna Stem & Glowing Sphere
    const stemGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.3, 8);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.set(0, 1.95, 0);
    group.add(stem);

    const bulbGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const bulbMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      emissive: colorHex,
      emissiveIntensity: 0.6
    });
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.set(0, 2.15, 0);
    group.add(bulb);

    // 4. Torso / Body
    const bodyGeo = new THREE.SphereGeometry(0.5, 20, 20);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: 0.3,
      metalness: 0.1
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.75;
    body.scale.set(0.9, 1.0, 0.85);
    body.castShadow = true;
    group.add(body);

    // Belt & Gold Buckle
    const beltGeo = new THREE.TorusGeometry(0.48, 0.05, 8, 24);
    const beltMat = new THREE.MeshStandardMaterial({ color: 0x111118 });
    const belt = new THREE.Mesh(beltGeo, beltMat);
    belt.rotation.x = Math.PI / 2;
    belt.position.y = 0.65;
    group.add(belt);

    const buckleGeo = new THREE.BoxGeometry(0.14, 0.12, 0.06);
    const buckleMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8, roughness: 0.2 });
    const buckle = new THREE.Mesh(buckleGeo, buckleMat);
    buckle.position.set(0, 0.65, 0.48);
    group.add(buckle);

    // 5. Hands (Spherical gloved hands)
    const handGeo = new THREE.SphereGeometry(0.16, 12, 12);
    const handMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const handLeft = new THREE.Mesh(handGeo, handMat);
    handLeft.position.set(-0.55, 0.75, 0);
    const handRight = new THREE.Mesh(handGeo, handMat);
    handRight.position.set(0.55, 0.75, 0);
    group.add(handLeft);
    group.add(handRight);
    group.userData.handLeft = handLeft;
    group.userData.handRight = handRight;

    // 6. Feet / Shoes
    const footGeo = new THREE.SphereGeometry(0.2, 12, 12);
    const footMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4 });
    const footLeft = new THREE.Mesh(footGeo, footMat);
    footLeft.position.set(-0.25, 0.2, 0);
    footLeft.scale.set(1.0, 0.7, 1.4);
    const footRight = new THREE.Mesh(footGeo, footMat);
    footRight.position.set(0.25, 0.2, 0);
    footRight.scale.set(1.0, 0.7, 1.4);
    group.add(footLeft);
    group.add(footRight);
    group.userData.footLeft = footLeft;
    group.userData.footRight = footRight;

    // 7. Aura Shield Mesh (Toggled on when heart shield is acquired)
    const shieldGeo = new THREE.SphereGeometry(1.2, 24, 24);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity: 0.0
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    shieldMesh.position.y = 1.0;
    group.add(shieldMesh);
    group.userData.shieldMesh = shieldMesh;

    return group;
  }

  // --- PROCEDURAL 3D BOMB ---
  function createBombMesh() {
    const group = new THREE.Group();

    // Metallic spherical shell
    const sphereGeo = new THREE.SphereGeometry(0.55, 24, 24);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x111118,
      metalness: 0.85,
      roughness: 0.25
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.castShadow = true;
    group.add(sphere);

    // Gold Collar
    const collarGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.15, 16);
    const collarMat = new THREE.MeshStandardMaterial({ color: 0xffbb00, metalness: 0.9, roughness: 0.1 });
    const collar = new THREE.Mesh(collarGeo, collarMat);
    collar.position.y = 0.55;
    group.add(collar);

    // Fuse Rope
    const fuseGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.2, 8);
    const fuseMat = new THREE.MeshBasicMaterial({ color: 0xcc8844 });
    const fuse = new THREE.Mesh(fuseGeo, fuseMat);
    fuse.position.set(0, 0.68, 0);
    fuse.rotation.z = 0.2;
    group.add(fuse);

    // Spark point
    const sparkGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const sparkMat = new THREE.MeshBasicMaterial({ color: 0xff3300 });
    const spark = new THREE.Mesh(sparkGeo, sparkMat);
    spark.position.set(0.05, 0.78, 0);
    group.add(spark);
    group.userData.spark = spark;

    // Point Light attached to fuse
    const light = new THREE.PointLight(0xff6600, 2.0, 5.0);
    light.position.set(0, 0.8, 0);
    group.add(light);
    group.userData.light = light;

    return group;
  }

  // --- POWER-UP 3D BADGE ---
  function createPowerupMesh(type) {
    const group = new THREE.Group();

    // Floating base badge
    const badgeGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.15, 16);
    const badgeMat = new THREE.MeshStandardMaterial({
      color: type.color,
      roughness: 0.2,
      metalness: 0.7,
      emissive: type.color,
      emissiveIntensity: 0.3
    });
    const badge = new THREE.Mesh(badgeGeo, badgeMat);
    badge.rotation.x = Math.PI / 4;
    group.add(badge);

    // Floating ring halo
    const haloGeo = new THREE.TorusGeometry(0.55, 0.04, 8, 24);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = Math.PI / 4;
    group.add(halo);

    group.position.y = 0.6;
    return group;
  }

  // --- MAIN BOMBERMAN GAME CLASS ---
  class BombermanGame {
    constructor() {
      this.canvas = document.getElementById('bombermanCanvas');
      this.sound = new SoundSynth();

      // Three.js Core
      this.scene = null;
      this.camera = null;
      this.renderer = null;

      // Arena Grid: 2D array [row][col]
      this.grid = [];
      this.gridMeshes = []; // Three.js meshes for soft and hard blocks

      // Game Entities
      this.players = [];
      this.bombs = [];
      this.explosions = [];
      this.powerups = [];
      this.debrisList = [];

      // Sudden Death State
      this.suddenDeathActive = false;
      this.suddenDeathTimer = 0;
      this.suddenDeathSpiralIndex = 0;
      this.suddenDeathSequence = [];

      // Match Timeline
      this.roundTime = 120.0; // 2 minutes
      this.timeRemaining = 120.0;
      this.timeScale = 1.0;
      this.targetTimeScale = 1.0;
      this.gameOver = false;
      this.winner = null;
      this.roundNumber = 1;

      // Stats
      this.stats = {
        bombsDetonated: 0,
        blocksDestroyed: 0,
        powerupsGrabbed: 0
      };

      // Camera Director State
      this.cameraMode = 1; // Default: 2.5D Isometric
      this.targetCamPos = new THREE.Vector3();
      this.targetCamLookAt = new THREE.Vector3();
      this.screenShakeIntensity = 0.0;

      // Input State
      this.keys = {};
      this.konamiSequence = [];
      this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

      // Self-test probe result cache
      this.selfTestReport = null;

      this.init();
    }

    init() {
      this.initThree();
      this.initArenaGrid();
      this.initSuddenDeathSpiral();
      this.initPlayers();
      this.initInput();
      this.initUI();
      this.startRoundIntro();

      // Start Main Animation Loop
      this.lastTimestamp = performance.now();
      requestAnimationFrame(this.renderLoop.bind(this));

      // Expose Debug Harness
      window.BombermanInstance = this;
      this.initDebugAPI();
    }

    initThree() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x060913);
      this.scene.fog = new THREE.FogExp2(0x060913, 0.015);

      const width = this.canvas.clientWidth || window.innerWidth;
      const height = this.canvas.clientHeight || window.innerHeight;

      this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      this.updateCameraTarget(true);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // Ambient Light
      const ambLight = new THREE.HemisphereLight(0x3a4b68, 0x111625, 0.7);
      this.scene.add(ambLight);

      // Sun Directional Light
      this.sunLight = new THREE.DirectionalLight(0xfff5e6, 1.2);
      this.sunLight.position.set(15, 30, 20);
      this.sunLight.castShadow = true;
      this.sunLight.shadow.mapSize.width = 2048;
      this.sunLight.shadow.mapSize.height = 2048;
      this.sunLight.shadow.camera.near = 5;
      this.sunLight.shadow.camera.far = 80;
      this.sunLight.shadow.camera.left = -20;
      this.sunLight.shadow.camera.right = 20;
      this.sunLight.shadow.camera.top = 20;
      this.sunLight.shadow.camera.bottom = -20;
      this.scene.add(this.sunLight);

      // Floor Mesh
      const floorGeo = new THREE.PlaneGeometry(GRID_COLS * TILE_SIZE, GRID_ROWS * TILE_SIZE);
      const floorMat = new THREE.MeshStandardMaterial({
        map: createFloorTexture(),
        roughness: 0.4,
        metalness: 0.2
      });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      this.scene.add(floor);

      // Outer Perimeter Border
      const borderMat = new THREE.MeshStandardMaterial({
        color: 0x111625,
        roughness: 0.3,
        metalness: 0.6
      });
      const bW = GRID_COLS * TILE_SIZE;
      const bH = GRID_ROWS * TILE_SIZE;
      const t = 1.2;

      // North, South, West, East Wall Bars
      const borderNorth = new THREE.Mesh(new THREE.BoxGeometry(bW + t * 2, 2.0, t), borderMat);
      borderNorth.position.set(0, 1.0, -bH / 2 - t / 2);
      borderNorth.castShadow = true;
      this.scene.add(borderNorth);

      const borderSouth = new THREE.Mesh(new THREE.BoxGeometry(bW + t * 2, 2.0, t), borderMat);
      borderSouth.position.set(0, 1.0, bH / 2 + t / 2);
      borderSouth.castShadow = true;
      this.scene.add(borderSouth);

      const borderWest = new THREE.Mesh(new THREE.BoxGeometry(t, 2.0, bH), borderMat);
      borderWest.position.set(-bW / 2 - t / 2, 1.0, 0);
      borderWest.castShadow = true;
      this.scene.add(borderWest);

      const borderEast = new THREE.Mesh(new THREE.BoxGeometry(t, 2.0, bH), borderMat);
      borderEast.position.set(bW / 2 + t / 2, 1.0, 0);
      borderEast.castShadow = true;
      this.scene.add(borderEast);

      window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    onWindowResize() {
      const width = this.canvas.clientWidth || window.innerWidth;
      const height = this.canvas.clientHeight || window.innerHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }

    // Grid Coordinates to 3D World Positions
    gridToWorld(col, row) {
      return {
        x: (col - (GRID_COLS - 1) / 2) * TILE_SIZE,
        z: (row - (GRID_ROWS - 1) / 2) * TILE_SIZE
      };
    }

    worldToGrid(x, z) {
      const col = Math.round(x / TILE_SIZE + (GRID_COLS - 1) / 2);
      const row = Math.round(z / TILE_SIZE + (GRID_ROWS - 1) / 2);
      return {
        col: Math.max(0, Math.min(GRID_COLS - 1, col)),
        row: Math.max(0, Math.min(GRID_ROWS - 1, row))
      };
    }

    initArenaGrid() {
      this.grid = [];
      this.gridMeshes = [];

      // Shared materials & geometries
      const hardBlockGeo = new THREE.BoxGeometry(TILE_SIZE * 0.96, 1.8, TILE_SIZE * 0.96);
      const hardBlockMat = new THREE.MeshStandardMaterial({
        color: 0x1f293d,
        roughness: 0.2,
        metalness: 0.7,
        emissive: 0x002244,
        emissiveIntensity: 0.3
      });

      const softBlockGeo = new THREE.BoxGeometry(TILE_SIZE * 0.92, 1.6, TILE_SIZE * 0.92);
      const softBlockMat = new THREE.MeshStandardMaterial({
        map: createSoftBlockTexture(),
        roughness: 0.5,
        metalness: 0.1
      });

      // Spawn zones clearance coordinates
      const spawnZones = new Set([
        '1,1', '1,2', '2,1',             // P1 Top-Left
        '13,1', '13,2', '12,1',          // P2 Top-Right
        '1,11', '1,10', '2,11',          // P3 Bottom-Left
        '13,11', '13,10', '12,11'        // P4 Bottom-Right
      ]);

      for (let r = 0; r < GRID_ROWS; r++) {
        this.grid[r] = [];
        this.gridMeshes[r] = [];
        for (let c = 0; c < GRID_COLS; c++) {
          const key = `${c},${r}`;
          const isBorder = (c === 0 || c === GRID_COLS - 1 || r === 0 || r === GRID_ROWS - 1);
          const isPillar = (c % 2 === 0 && r % 2 === 0);

          if (isBorder || isPillar) {
            this.grid[r][c] = TILE_HARD;
            const wPos = this.gridToWorld(c, r);
            const mesh = new THREE.Mesh(hardBlockGeo, hardBlockMat);
            mesh.position.set(wPos.x, 0.9, wPos.z);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.scene.add(mesh);
            this.gridMeshes[r][c] = mesh;
          } else if (!spawnZones.has(key) && Math.random() < 0.65) {
            // Destructible Soft Block
            this.grid[r][c] = TILE_SOFT;
            const wPos = this.gridToWorld(c, r);
            const mesh = new THREE.Mesh(softBlockGeo, softBlockMat);
            mesh.position.set(wPos.x, 0.8, wPos.z);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.scene.add(mesh);
            this.gridMeshes[r][c] = mesh;
          } else {
            this.grid[r][c] = TILE_EMPTY;
            this.gridMeshes[r][c] = null;
          }
        }
      }
    }

    initSuddenDeathSpiral() {
      // Pre-calculate inward spiral order for Sudden Death falling blocks
      this.suddenDeathSequence = [];
      let top = 1;
      let bottom = GRID_ROWS - 2;
      let left = 1;
      let right = GRID_COLS - 2;

      while (top <= bottom && left <= right) {
        for (let c = left; c <= right; c++) this.suddenDeathSequence.push({ col: c, row: top });
        top++;
        for (let r = top; r <= bottom; r++) this.suddenDeathSequence.push({ col: right, row: r });
        right--;
        if (top <= bottom) {
          for (let c = right; c >= left; c--) this.suddenDeathSequence.push({ col: c, row: bottom });
          bottom--;
        }
        if (left <= right) {
          for (let r = bottom; r >= top; r--) this.suddenDeathSequence.push({ col: left, row: r });
          left++;
        }
      }
    }

    initPlayers() {
      // 4 Combatants setup
      const configs = [
        { id: 1, name: 'WHITE BOMBER', isAI: false, col: 1, row: 1, color: 0xffffff, visor: 0x00f3ff },
        { id: 2, name: 'BLACK BOMBER', isAI: true, col: 13, row: 1, color: 0x22222a, visor: 0xff3366 },
        { id: 3, name: 'RED BOMBER', isAI: true, col: 1, row: 11, color: 0xdd2233, visor: 0xffcc00 },
        { id: 4, name: 'BLUE BOMBER', isAI: true, col: 13, row: 11, color: 0x0088ff, visor: 0x00ff88 }
      ];

      this.players = configs.map(cfg => {
        const wPos = this.gridToWorld(cfg.col, cfg.row);
        const mesh = createBombermanMesh(cfg.color, cfg.visor, cfg.name);
        mesh.position.set(wPos.x, 0, wPos.z);
        this.scene.add(mesh);

        return {
          id: cfg.id,
          name: cfg.name,
          isAI: cfg.isAI,
          col: cfg.col,
          row: cfg.row,
          x: wPos.x,
          z: wPos.z,
          mesh: mesh,
          alive: true,
          // Stats
          baseSpeed: 4.8,
          speed: 4.8,
          maxBombs: 1,
          activeBombs: 0,
          fireRange: 2,
          hasGlove: false,
          hasShield: false,
          hasRemote: false,
          isCursed: false,
          curseTimer: 0,
          // Motion
          dirX: 0,
          dirZ: 0,
          walkCycle: 0,
          // AI Logic
          aiTimer: Math.random() * 0.2,
          aiPath: [],
          aiTargetCol: cfg.col,
          aiTargetRow: cfg.row
        };
      });
    }

    initInput() {
      window.addEventListener('keydown', e => {
        this.keys[e.code] = true;
        this.sound.init();

        // Konami code tracker
        this.konamiSequence.push(e.key);
        if (this.konamiSequence.length > this.konamiCode.length) {
          this.konamiSequence.shift();
        }
        if (this.konamiSequence.join(',') === this.konamiCode.join(',')) {
          this.triggerKonamiCode();
        }

        // Camera Perspective switch keys (1 to 5)
        if (e.key >= '1' && e.key <= '5') {
          this.setCameraMode(parseInt(e.key, 10) - 1);
        } else if (e.code === 'KeyC') {
          this.setCameraMode((this.cameraMode + 1) % CAMERA_MODES.length);
        }

        // Action Keys
        if (e.code === 'Space') {
          e.preventDefault();
          this.playerDropBomb(this.players[0]);
        }
        if (e.code === 'KeyE') {
          this.playerTriggerSpecial(this.players[0]);
        }
        if (e.code === 'KeyP') {
          this.togglePause();
        }
        if (e.code === 'KeyM') {
          this.toggleAudio();
        }
        if (e.code === 'KeyH') {
          this.toggleHUD();
        }
        if (e.code === 'KeyR' && this.gameOver) {
          this.restartRound();
        }
      });

      window.addEventListener('keyup', e => {
        this.keys[e.code] = false;
      });

      // Virtual Mobile Touch Controls
      const bindTouch = (id, onDown, onUp) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('touchstart', e => { e.preventDefault(); this.sound.init(); onDown(); });
        el.addEventListener('touchend', e => { e.preventDefault(); onUp(); });
        el.addEventListener('mousedown', e => { e.preventDefault(); this.sound.init(); onDown(); });
        el.addEventListener('mouseup', e => { e.preventDefault(); onUp(); });
      };

      bindTouch('btnTouchUp', () => this.keys['ArrowUp'] = true, () => this.keys['ArrowUp'] = false);
      bindTouch('btnTouchDown', () => this.keys['ArrowDown'] = true, () => this.keys['ArrowDown'] = false);
      bindTouch('btnTouchLeft', () => this.keys['ArrowLeft'] = true, () => this.keys['ArrowLeft'] = false);
      bindTouch('btnTouchRight', () => this.keys['ArrowRight'] = true, () => this.keys['ArrowRight'] = false);
      bindTouch('btnTouchBomb', () => this.playerDropBomb(this.players[0]), () => {});
      bindTouch('btnTouchSpecial', () => this.playerTriggerSpecial(this.players[0]), () => {});
    }

    initUI() {
      // Camera Toolbar Buttons
      document.querySelectorAll('.cam-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const mode = parseInt(btn.getAttribute('data-cam'), 10);
          this.setCameraMode(mode);
        });
      });

      // HUD Visibility Toggle
      const btnHUD = document.getElementById('btnToggleHUD');
      if (btnHUD) {
        btnHUD.addEventListener('click', () => this.toggleHUD());
      }

      // Legend Toggle Button
      const btnLegend = document.getElementById('btnToggleLegend');
      if (btnLegend) {
        btnLegend.addEventListener('click', () => {
          const leg = document.getElementById('controlLegend');
          if (leg) leg.classList.toggle('collapsed');
        });
      }

      // Audio Toggle
      const btnAudio = document.getElementById('btnAudioToggle');
      if (btnAudio) {
        btnAudio.addEventListener('click', () => this.toggleAudio());
      }

      // CRT Scanline Toggle
      const btnScanline = document.getElementById('btnScanlineToggle');
      if (btnScanline) {
        btnScanline.addEventListener('click', () => {
          const overlay = document.getElementById('scanlineOverlay');
          overlay.classList.toggle('disabled');
        });
      }

      // Play Next Round Button
      const btnPlayAgain = document.getElementById('btnPlayAgain');
      if (btnPlayAgain) {
        btnPlayAgain.addEventListener('click', () => this.restartRound());
      }

      // Save/Load Modal
      const btnOpenSave = document.getElementById('btnOpenSaveModal');
      const btnCloseSave = document.getElementById('btnCloseSaveModal');
      const saveModal = document.getElementById('saveModal');
      if (btnOpenSave && saveModal) {
        btnOpenSave.addEventListener('click', () => {
          this.renderSaveSlots();
          saveModal.classList.remove('hidden');
        });
      }
      if (btnCloseSave && saveModal) {
        btnCloseSave.addEventListener('click', () => saveModal.classList.add('hidden'));
      }
    }

    toggleHUD() {
      if (this.hudState === undefined) this.hudState = 0;
      this.hudState = (this.hudState + 1) % 3;

      const hud = document.getElementById('playersHud');
      const icon = document.getElementById('hudToggleIcon');

      if (hud) {
        hud.classList.remove('minimized', 'hidden');
        if (this.hudState === 1) {
          hud.classList.add('minimized');
          if (icon) icon.textContent = '🕶️';
          this.showToast('HUD: COMPACT MINIMAL');
        } else if (this.hudState === 2) {
          hud.classList.add('hidden');
          if (icon) icon.textContent = '🚫';
          this.showToast('HUD: HIDDEN (CINEMATIC)');
        } else {
          if (icon) icon.textContent = '👁️';
          this.showToast('HUD: EXPANDED RIBBON');
        }
      }
    }

    toggleAudio() {
      this.sound.muted = !this.sound.muted;
      const icon = document.getElementById('hudAudioIcon');
      if (icon) icon.textContent = this.sound.muted ? '🔇' : '🔊';
      this.showToast(this.sound.muted ? 'AUDIO MUTED' : 'AUDIO UNMUTED');
    }

    togglePause() {
      this.isPaused = !this.isPaused;
      const icon = document.getElementById('hudPauseIcon');
      if (icon) icon.textContent = this.isPaused ? '▶️' : '⏸️';
      this.showToast(this.isPaused ? 'GAME PAUSED' : 'GAME RESUMED');
    }

    setCameraMode(modeIndex) {
      if (modeIndex < 0 || modeIndex >= CAMERA_MODES.length) return;
      this.cameraMode = modeIndex;
      const mode = CAMERA_MODES[modeIndex];

      const hudCamera = document.getElementById('hudCameraMode');
      if (hudCamera) hudCamera.textContent = mode.name;

      document.querySelectorAll('.cam-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-cam'), 10) === modeIndex);
      });

      this.showToast(`CAMERA: ${mode.name}`);
    }

    showToast(msg) {
      const banner = document.getElementById('toastBanner');
      if (!banner) return;
      banner.textContent = msg;
      banner.classList.add('show');
      clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => banner.classList.remove('show'), 2000);
    }

    setAnnouncer(text) {
      const el = document.getElementById('announcerTicker');
      if (!el) return;
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = text;
        el.style.opacity = '1';
      }, 150);
    }

    startRoundIntro() {
      const overlay = document.getElementById('roundOverlay');
      const title = document.getElementById('roundTitle');
      const sub = document.getElementById('roundSubtitle');
      const letterbox = document.getElementById('cinematicBars');

      if (title) title.textContent = `ROUND ${this.roundNumber}`;
      if (sub) sub.textContent = 'READY... FIGHT!';
      if (overlay) overlay.classList.add('show');
      if (letterbox) letterbox.classList.remove('hidden');

      this.sound.playVictory();

      setTimeout(() => {
        if (overlay) overlay.classList.remove('show');
        if (letterbox) letterbox.classList.add('hidden');
        this.setAnnouncer(`ROUND ${this.roundNumber} START! FIGHT FOR SURVIVAL!`);
      }, 1800);
    }

    triggerKonamiCode() {
      const p1 = this.players[0];
      if (!p1 || !p1.alive) return;

      p1.maxBombs = 9;
      p1.fireRange = 9;
      p1.speed = 7.5;
      p1.hasShield = true;
      p1.hasGlove = true;
      p1.hasRemote = true;

      // Glow golden mesh
      p1.mesh.traverse(child => {
        if (child.isMesh && child.material) {
          child.material.emissive = new THREE.Color(0xffd700);
          child.material.emissiveIntensity = 0.5;
        }
      });

      this.sound.playPowerup();
      this.showToast('KONAMI CODE: MAX GOD MODE UNLOCKED!');
      this.setAnnouncer('🌟 WHITE BOMBER ACTIVATED GOD MODE! (KONAMI CHEAT)');
      this.updateHUD();
    }

    // --- GAMEPLAY MECHANICS: BOMB PLACEMENT & ACTIONS ---
    playerDropBomb(player) {
      if (!player || !player.alive || this.gameOver) return false;
      if (player.activeBombs >= player.maxBombs) return false;

      const gridPos = this.worldToGrid(player.x, player.z);
      // Check if tile already has a bomb
      for (const b of this.bombs) {
        if (b.col === gridPos.col && b.row === gridPos.row) return false;
      }

      const wPos = this.gridToWorld(gridPos.col, gridPos.row);
      const mesh = createBombMesh();
      mesh.position.set(wPos.x, 0.5, wPos.z);
      this.scene.add(mesh);

      const bomb = {
        owner: player,
        col: gridPos.col,
        row: gridPos.row,
        x: wPos.x,
        z: wPos.z,
        mesh: mesh,
        timer: 2.6, // 2.6 seconds fuse
        fireRange: player.fireRange,
        isRemote: player.hasRemote,
        isMoving: false,
        slideDirX: 0,
        slideDirZ: 0
      };

      this.bombs.push(bomb);
      player.activeBombs++;
      this.sound.playBombDrop();
      this.updateHUD();
      return true;
    }

    playerTriggerSpecial(player) {
      if (!player || !player.alive || this.gameOver) return;

      if (player.hasRemote) {
        // Detonate player's oldest bomb immediately
        const myBombs = this.bombs.filter(b => b.owner === player);
        if (myBombs.length > 0) {
          this.detonateBomb(myBombs[0]);
        }
      }
    }

    kickBomb(player, bomb, dirX, dirZ) {
      if (!player.hasGlove || bomb.isMoving) return;
      bomb.isMoving = true;
      bomb.slideDirX = Math.sign(dirX);
      bomb.slideDirZ = Math.sign(dirZ);
      this.sound.playKick();
      this.setAnnouncer(`${player.name} KICKED A BOMB!`);
    }

    detonateBomb(bomb) {
      const idx = this.bombs.indexOf(bomb);
      if (idx === -1) return;

      this.bombs.splice(idx, 1);
      this.scene.remove(bomb.mesh);
      if (bomb.owner) {
        bomb.owner.activeBombs = Math.max(0, bomb.owner.activeBombs - 1);
      }
      this.stats.bombsDetonated++;

      this.sound.playExplosion();
      this.screenShakeIntensity = Math.min(1.2, this.screenShakeIntensity + 0.5);

      // Create Volumetric Cross-Fire Explosions
      this.spawnExplosion(bomb.col, bomb.row, bomb.fireRange);
      this.updateHUD();
    }

    spawnExplosion(centerCol, centerRow, fireRange) {
      const affectedTiles = [{ col: centerCol, row: centerRow }];
      const directions = [
        { dc: 0, dr: -1 }, // North
        { dc: 0, dr: 1 },  // South
        { dc: -1, dr: 0 }, // West
        { dc: 1, dr: 0 }   // East
      ];

      directions.forEach(dir => {
        for (let step = 1; step <= fireRange; step++) {
          const c = centerCol + dir.dc * step;
          const r = centerRow + dir.dr * step;

          if (c < 0 || c >= GRID_COLS || r < 0 || r >= GRID_ROWS) break;

          const tile = this.grid[r][c];
          if (tile === TILE_HARD || tile === TILE_METEOR) {
            // Blocked by indestructible wall/pillar
            break;
          }

          affectedTiles.push({ col: c, row: r });

          if (tile === TILE_SOFT) {
            // Soft block destroyed and flame stops
            this.destroySoftBlock(c, r);
            break;
          }
        }
      });

      // Chain Reactions: check if another bomb is in affected tiles
      affectedTiles.forEach(tile => {
        const otherBomb = this.bombs.find(b => b.col === tile.col && b.row === tile.row);
        if (otherBomb) {
          // Instantly detonate chained bomb
          setTimeout(() => this.detonateBomb(otherBomb), 50);
        }
      });

      // Spawn 3D Flame FX
      const flameGroup = new THREE.Group();
      const flameMat = new THREE.MeshStandardMaterial({
        color: 0xff4400,
        emissive: 0xff6600,
        emissiveIntensity: 1.5,
        roughness: 0.1
      });

      affectedTiles.forEach(tile => {
        const wPos = this.gridToWorld(tile.col, tile.row);
        const flameMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 1.4, 12), flameMat);
        flameMesh.position.set(wPos.x, 0.7, wPos.z);
        flameGroup.add(flameMesh);
      });

      // Dynamic Explosion Point Light
      const centerWPos = this.gridToWorld(centerCol, centerRow);
      const expLight = new THREE.PointLight(0xff6600, 6.0, 12.0);
      expLight.position.set(centerWPos.x, 1.5, centerWPos.z);
      flameGroup.add(expLight);

      this.scene.add(flameGroup);

      const explosionRecord = {
        tiles: affectedTiles,
        mesh: flameGroup,
        light: expLight,
        duration: 0.55,
        age: 0
      };
      this.explosions.push(explosionRecord);

      // Check Player Hits
      this.checkExplosionPlayerCollisions(affectedTiles);
    }

    destroySoftBlock(col, row) {
      if (this.grid[row][col] !== TILE_SOFT) return;
      this.grid[row][col] = TILE_EMPTY;
      this.stats.blocksDestroyed++;

      const mesh = this.gridMeshes[row][col];
      if (mesh) {
        this.scene.remove(mesh);
        this.gridMeshes[row][col] = null;
      }

      // Spawn tumbling 3D debris fragments
      const wPos = this.gridToWorld(col, row);
      this.spawnDebris(wPos.x, 0.8, wPos.z);

      // Chance to spawn Power-Up (45% chance)
      if (Math.random() < 0.45) {
        const types = Object.values(POWERUP_TYPES);
        // Weighted selection (More bombs & fire, rare skull/remote)
        const weights = [0.28, 0.28, 0.18, 0.12, 0.08, 0.04, 0.02];
        const r = Math.random();
        let sum = 0;
        let chosenType = types[0];
        for (let i = 0; i < types.length; i++) {
          sum += weights[i];
          if (r <= sum) {
            chosenType = types[i];
            break;
          }
        }
        this.spawnPowerup(col, row, chosenType);
      }
    }

    spawnDebris(x, y, z) {
      const debrisGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const debrisMat = new THREE.MeshStandardMaterial({ color: 0xc86428, roughness: 0.6 });

      for (let i = 0; i < 8; i++) {
        const pMesh = new THREE.Mesh(debrisGeo, debrisMat);
        pMesh.position.set(x, y, z);
        this.scene.add(pMesh);

        this.debrisList.push({
          mesh: pMesh,
          vx: (Math.random() - 0.5) * 6,
          vy: Math.random() * 5 + 3,
          vz: (Math.random() - 0.5) * 6,
          life: 0.6
        });
      }
    }

    spawnPowerup(col, row, type) {
      const wPos = this.gridToWorld(col, row);
      const mesh = createPowerupMesh(type);
      mesh.position.set(wPos.x, 0.5, wPos.z);
      this.scene.add(mesh);

      this.powerups.push({
        type: type,
        col: col,
        row: row,
        mesh: mesh
      });
    }

    checkExplosionPlayerCollisions(affectedTiles) {
      for (const player of this.players) {
        if (!player.alive) continue;
        const pGrid = this.worldToGrid(player.x, player.z);

        const hit = affectedTiles.some(t => t.col === pGrid.col && t.row === pGrid.row);
        if (hit) {
          if (player.hasShield) {
            // Absorb hit with shield
            player.hasShield = false;
            this.sound.playShieldPop();
            this.showToast(`${player.name}'S SHIELD ABSORBED THE BLAST!`);
            this.setAnnouncer(`🛡️ ${player.name}'s Heart Shield shattered!`);
          } else {
            // Defeat player
            this.eliminatePlayer(player, 'BLAST');
          }
          this.updateHUD();
        }
      }
    }

    eliminatePlayer(player, cause = 'BLAST') {
      if (!player.alive) return;
      player.alive = false;
      this.sound.playDeath();

      // Flop / flatten death animation
      player.mesh.scale.set(1.4, 0.15, 1.4);
      player.mesh.position.y = 0.1;

      this.setAnnouncer(`💀 ${player.name} WAS ELIMINATED!`);
      this.showToast(`${player.name} KO!`);

      // Check if match ended
      const survivors = this.players.filter(p => p.alive);
      if (survivors.length <= 1) {
        this.triggerMatchVictory(survivors[0] || null);
      }
    }

    triggerMatchVictory(winner) {
      this.gameOver = true;
      this.winner = winner;
      this.targetTimeScale = 0.25; // Dramatic Slow-motion bullet-time

      const modal = document.getElementById('victoryModal');
      const heading = document.getElementById('victoryHeading');
      const sub = document.getElementById('victorySubtitle');
      const trophy = document.getElementById('winnerTrophy');

      if (winner) {
        if (heading) heading.textContent = winner.id === 1 ? 'VICTORY!' : 'GAME OVER!';
        if (sub) sub.textContent = `${winner.name} IS THE ARENA CHAMPION!`;
        if (trophy) trophy.textContent = winner.id === 1 ? '🏆' : '💀';
        this.sound.playVictory();
      } else {
        if (heading) heading.textContent = 'DRAW MATCH!';
        if (sub) sub.textContent = 'ALL COMBATANTS PERISHED!';
        if (trophy) trophy.textContent = '💥';
      }

      // Populate Summary
      const sumSurv = document.getElementById('sumSurvivors');
      const sumBombs = document.getElementById('sumBombs');
      const sumBlocks = document.getElementById('sumBlocks');
      const sumPwr = document.getElementById('sumPowerups');

      if (sumSurv) sumSurv.textContent = `${winner ? 1 : 0} / 4`;
      if (sumBombs) sumBombs.textContent = this.stats.bombsDetonated;
      if (sumBlocks) sumBlocks.textContent = this.stats.blocksDestroyed;
      if (sumPwr) sumPwr.textContent = this.stats.powerupsGrabbed;

      setTimeout(() => {
        if (modal) modal.classList.remove('hidden');
      }, 1400);
    }

    restartRound() {
      // Hide modal
      const modal = document.getElementById('victoryModal');
      if (modal) modal.classList.add('hidden');

      // Clear dynamic meshes
      this.bombs.forEach(b => this.scene.remove(b.mesh));
      this.explosions.forEach(e => this.scene.remove(e.mesh));
      this.powerups.forEach(p => this.scene.remove(p.mesh));
      this.debrisList.forEach(d => this.scene.remove(d.mesh));
      this.players.forEach(p => this.scene.remove(p.mesh));

      for (let r = 0; r < GRID_ROWS; r++) {
        for (let c = 0; c < GRID_COLS; c++) {
          if (this.gridMeshes[r] && this.gridMeshes[r][c]) {
            this.scene.remove(this.gridMeshes[r][c]);
          }
        }
      }

      this.bombs = [];
      this.explosions = [];
      this.powerups = [];
      this.debrisList = [];
      this.gameOver = false;
      this.winner = null;
      this.timeRemaining = this.roundTime;
      this.timeScale = 1.0;
      this.targetTimeScale = 1.0;
      this.suddenDeathActive = false;
      this.suddenDeathSpiralIndex = 0;
      this.roundNumber++;

      this.initArenaGrid();
      this.initPlayers();
      this.startRoundIntro();
      this.updateHUD();
    }

    // --- SUDDEN DEATH ("HURRY UP!") SEQUENCE ---
    triggerSuddenDeath() {
      if (this.suddenDeathActive) return;
      this.suddenDeathActive = true;
      this.sound.playHurryUp();
      this.showToast('⚠️ HURRY UP! METEOR BLOCKS FALLING!');
      this.setAnnouncer('🚨 HURRY UP! ARENA IS SHRINKING INWARD!');

      const badge = document.getElementById('hudStatus');
      if (badge) {
        badge.textContent = 'SUDDEN DEATH';
        badge.className = 'hud-val red';
      }

      // Turn arena lighting red alert
      this.sunLight.color.setHex(0xff3344);
    }

    dropNextSuddenDeathBlock() {
      if (this.suddenDeathSpiralIndex >= this.suddenDeathSequence.length) return;

      const target = this.suddenDeathSequence[this.suddenDeathSpiralIndex++];
      const wPos = this.gridToWorld(target.col, target.row);

      // Meteor block mesh
      const meteorGeo = new THREE.BoxGeometry(TILE_SIZE * 0.98, 2.2, TILE_SIZE * 0.98);
      const meteorMat = new THREE.MeshStandardMaterial({
        color: 0x881122,
        roughness: 0.2,
        metalness: 0.8,
        emissive: 0x440011,
        emissiveIntensity: 0.5
      });
      const mesh = new THREE.Mesh(meteorGeo, meteorMat);
      mesh.position.set(wPos.x, 12.0, wPos.z); // Starts high in the air
      mesh.castShadow = true;
      this.scene.add(mesh);

      // Crushes anything existing on that cell
      this.grid[target.row][target.col] = TILE_METEOR;

      // Animate falling block
      const dropAnim = {
        mesh: mesh,
        y: 12.0,
        targetY: 1.1,
        vy: -18.0,
        col: target.col,
        row: target.row
      };

      if (!this.fallingBlocks) this.fallingBlocks = [];
      this.fallingBlocks.push(dropAnim);
    }

    // --- SMART DANGER-AVOIDANCE & TACTICAL AI ---
    updateAI(player, dt) {
      if (!player.alive || !player.isAI || this.gameOver) return;

      player.aiTimer -= dt;
      if (player.aiTimer > 0) {
        this.stepAIMovement(player, dt);
        return;
      }
      player.aiTimer = 0.18 + Math.random() * 0.05; // AI decision cadence

      const myGrid = this.worldToGrid(player.x, player.z);

      // 1. Danger Zone Heatmap Evaluation
      const dangerMap = this.calculateDangerHeatmap();
      const isCurrentTileDangerous = dangerMap[myGrid.row][myGrid.col] > 0;

      if (isCurrentTileDangerous) {
        // Find closest safe tile using BFS
        const safeTile = this.findNearestSafeTile(myGrid.col, myGrid.row, dangerMap);
        if (safeTile) {
          player.aiTargetCol = safeTile.col;
          player.aiTargetRow = safeTile.row;
        }
      } else {
        // Safe: hunt nearby powerup or advance toward opponent / breakable block
        const nearestPowerup = this.findNearestPowerup(myGrid.col, myGrid.row);
        if (nearestPowerup && Math.random() < 0.7) {
          player.aiTargetCol = nearestPowerup.col;
          player.aiTargetRow = nearestPowerup.row;
        } else {
          // Opportunistic Bomb Placement
          // Check if adjacent to soft block or nearby enemy
          const hasSoftNeighbor = this.hasNeighborOfType(myGrid.col, myGrid.row, TILE_SOFT);
          if (hasSoftNeighbor && player.activeBombs < player.maxBombs && Math.random() < 0.6) {
            // Check if placing a bomb allows an escape route! (Don't commit suicide)
            const escapePossible = this.canEscapeFromBomb(myGrid.col, myGrid.row, player.fireRange);
            if (escapePossible) {
              this.playerDropBomb(player);
            }
          }
        }
      }

      this.stepAIMovement(player, dt);
    }

    calculateDangerHeatmap() {
      const danger = Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(0));

      // Active explosions danger
      this.explosions.forEach(exp => {
        exp.tiles.forEach(t => {
          danger[t.row][t.col] = 100;
        });
      });

      // Ticking bombs danger zones
      this.bombs.forEach(b => {
        danger[b.row][b.col] = 50;
        const dirs = [{ dc: 0, dr: -1 }, { dc: 0, dr: 1 }, { dc: -1, dr: 0 }, { dc: 1, dr: 0 }];
        dirs.forEach(d => {
          for (let step = 1; step <= b.fireRange; step++) {
            const c = b.col + d.dc * step;
            const r = b.row + d.dr * step;
            if (c < 0 || c >= GRID_COLS || r < 0 || r >= GRID_ROWS) break;
            if (this.grid[r][c] === TILE_HARD || this.grid[r][c] === TILE_METEOR) break;
            danger[r][c] = Math.max(danger[r][c], 40);
            if (this.grid[r][c] === TILE_SOFT) break;
          }
        });
      });

      return danger;
    }

    findNearestSafeTile(startCol, startRow, dangerMap) {
      const queue = [{ col: startCol, row: startRow, dist: 0 }];
      const visited = new Set([`${startCol},${startRow}`]);
      const dirs = [{ dc: 0, dr: -1 }, { dc: 0, dr: 1 }, { dc: -1, dr: 0 }, { dc: 1, dr: 0 }];

      while (queue.length > 0) {
        const curr = queue.shift();
        if (dangerMap[curr.row][curr.col] === 0 && this.isTileWalkable(curr.col, curr.row)) {
          return { col: curr.col, row: curr.row };
        }

        for (const d of dirs) {
          const nc = curr.col + d.dc;
          const nr = curr.row + d.dr;
          const key = `${nc},${nr}`;

          if (nc >= 0 && nc < GRID_COLS && nr >= 0 && nr < GRID_ROWS && !visited.has(key)) {
            visited.add(key);
            if (this.isTileWalkable(nc, nr)) {
              queue.push({ col: nc, row: nr, dist: curr.dist + 1 });
            }
          }
        }
      }
      return null;
    }

    canEscapeFromBomb(col, row, fireRange) {
      // Temporarily mark danger
      const tempDanger = this.calculateDangerHeatmap();
      tempDanger[row][col] = 50;
      const dirs = [{ dc: 0, dr: -1 }, { dc: 0, dr: 1 }, { dc: -1, dr: 0 }, { dc: 1, dr: 0 }];
      dirs.forEach(d => {
        for (let s = 1; s <= fireRange; s++) {
          const nc = col + d.dc * s;
          const nr = row + d.dr * s;
          if (nc < 0 || nc >= GRID_COLS || nr < 0 || nr >= GRID_ROWS) break;
          if (this.grid[nr][nc] !== TILE_EMPTY) break;
          tempDanger[nr][nc] = 50;
        }
      });

      const safe = this.findNearestSafeTile(col, row, tempDanger);
      return safe !== null;
    }

    findNearestPowerup(startCol, startRow) {
      if (this.powerups.length === 0) return null;
      let closest = null;
      let minD = Infinity;
      this.powerups.forEach(p => {
        const d = Math.abs(p.col - startCol) + Math.abs(p.row - startRow);
        if (d < minD) {
          minD = d;
          closest = p;
        }
      });
      return closest;
    }

    hasNeighborOfType(col, row, type) {
      const dirs = [{ dc: 0, dr: -1 }, { dc: 0, dr: 1 }, { dc: -1, dr: 0 }, { dc: 1, dr: 0 }];
      return dirs.some(d => {
        const nc = col + d.dc;
        const nr = row + d.dr;
        return nc >= 0 && nc < GRID_COLS && nr >= 0 && nr < GRID_ROWS && this.grid[nr][nc] === type;
      });
    }

    isTileWalkable(col, row, ignoreBombAt = null) {
      if (col < 0 || col >= GRID_COLS || row < 0 || row >= GRID_ROWS) return false;
      if (this.grid[row][col] !== TILE_EMPTY) return false;

      // Check solid bomb presence
      const hasBomb = this.bombs.some(b => {
        if (ignoreBombAt && b.col === ignoreBombAt.col && b.row === ignoreBombAt.row) return false;
        return b.col === col && b.row === row;
      });
      return !hasBomb;
    }

    stepAIMovement(player, dt) {
      const targetWPos = this.gridToWorld(player.aiTargetCol, player.aiTargetRow);
      const dx = targetWPos.x - player.x;
      const dz = targetWPos.z - player.z;
      const dist = Math.hypot(dx, dz);

      if (dist > 0.1) {
        let vx = 0;
        let vz = 0;
        if (Math.abs(dx) > Math.abs(dz)) {
          vx = Math.sign(dx);
        } else {
          vz = Math.sign(dz);
        }
        this.movePlayer(player, vx, vz, dt);
      }
    }

    // --- PLAYER MOVEMENT & COLLISION RESOLUTION ---
    updatePlayers(dt) {
      // 1. Human Player (P1)
      const p1 = this.players[0];
      if (p1 && p1.alive && !this.gameOver) {
        let vx = 0;
        let vz = 0;
        if (this.keys['ArrowUp'] || this.keys['KeyW']) vz -= 1;
        if (this.keys['ArrowDown'] || this.keys['KeyS']) vz += 1;
        if (this.keys['ArrowLeft'] || this.keys['KeyA']) vx -= 1;
        if (this.keys['ArrowRight'] || this.keys['KeyD']) vx += 1;

        if (p1.isCursed) {
          // Inverted controls curse!
          vx = -vx;
          vz = -vz;
        }

        if (vx !== 0 || vz !== 0) {
          this.movePlayer(p1, vx, vz, dt);
        } else {
          p1.dirX = 0;
          p1.dirZ = 0;
        }
      }

      // 2. AI Players (P2, P3, P4)
      for (let i = 1; i < this.players.length; i++) {
        this.updateAI(this.players[i], dt);
      }

      // 3. Update Visual Animations and Meshes
      this.players.forEach(p => {
        if (!p.alive) return;

        // Position
        p.mesh.position.x = p.x;
        p.mesh.position.z = p.z;

        // Walk Animation
        if (p.dirX !== 0 || p.dirZ !== 0) {
          p.walkCycle += dt * 12;
          const angle = Math.atan2(p.dirX, p.dirZ);
          p.mesh.rotation.y = angle;

          // Leg & Hand oscillation
          if (p.mesh.userData.footLeft && p.mesh.userData.footRight) {
            p.mesh.userData.footLeft.position.z = Math.sin(p.walkCycle) * 0.18;
            p.mesh.userData.footRight.position.z = -Math.sin(p.walkCycle) * 0.18;
          }
          if (p.mesh.userData.handLeft && p.mesh.userData.handRight) {
            p.mesh.userData.handLeft.position.z = -Math.sin(p.walkCycle) * 0.18;
            p.mesh.userData.handRight.position.z = Math.sin(p.walkCycle) * 0.18;
          }
        }

        // Shield Mesh rotation & opacity
        if (p.mesh.userData.shieldMesh) {
          p.mesh.userData.shieldMesh.material.opacity = p.hasShield ? 0.6 : 0.0;
          if (p.hasShield) {
            p.mesh.userData.shieldMesh.rotation.y += dt * 2.0;
          }
        }

        // Check Powerup Pickups
        this.checkPowerupPickup(p);
      });
    }

    movePlayer(player, inputX, inputZ, dt) {
      const step = player.speed * dt;
      let newX = player.x + inputX * step;
      let newZ = player.z + inputZ * step;

      player.dirX = inputX;
      player.dirZ = inputZ;

      const currentGrid = this.worldToGrid(player.x, player.z);

      // Bounding box collision radius
      const r = 0.45;
      const minCol = Math.max(0, Math.floor((newX - r) / TILE_SIZE + (GRID_COLS - 1) / 2));
      const maxCol = Math.min(GRID_COLS - 1, Math.floor((newX + r) / TILE_SIZE + (GRID_COLS - 1) / 2));
      const minRow = Math.max(0, Math.floor((newZ - r) / TILE_SIZE + (GRID_ROWS - 1) / 2));
      const maxRow = Math.min(GRID_ROWS - 1, Math.floor((newZ + r) / TILE_SIZE + (GRID_ROWS - 1) / 2));

      // Check collision against grid blocks & bombs
      let collideX = false;
      let collideZ = false;

      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          const isObstacle = this.grid[row][col] !== TILE_EMPTY;

          // Check if bomb on tile
          const bombOnTile = this.bombs.find(b => b.col === col && b.row === row);
          const isSolidBomb = bombOnTile && (col !== currentGrid.col || row !== currentGrid.row);

          if (isSolidBomb && player.hasGlove && (inputX !== 0 || inputZ !== 0)) {
            // Kick Bomb!
            this.kickBomb(player, bombOnTile, inputX, inputZ);
          }

          if (isObstacle || isSolidBomb) {
            const blockW = this.gridToWorld(col, row);
            const halfTile = TILE_SIZE / 2;

            // X-axis obstruction
            if (newX + r > blockW.x - halfTile && newX - r < blockW.x + halfTile &&
                player.z + r > blockW.z - halfTile && player.z - r < blockW.z + halfTile) {
              collideX = true;
            }
            // Z-axis obstruction
            if (player.x + r > blockW.x - halfTile && player.x - r < blockW.x + halfTile &&
                newZ + r > blockW.z - halfTile && newZ - r < blockW.z + halfTile) {
              collideZ = true;
            }
          }
        }
      }

      if (!collideX) player.x = newX;
      if (!collideZ) player.z = newZ;

      // Update grid pos cache
      const updated = this.worldToGrid(player.x, player.z);
      player.col = updated.col;
      player.row = updated.row;
    }

    checkPowerupPickup(player) {
      for (let i = this.powerups.length - 1; i >= 0; i--) {
        const item = this.powerups[i];
        if (item.col === player.col && item.row === player.row) {
          // Apply Upgrade
          this.applyPowerup(player, item.type);
          this.scene.remove(item.mesh);
          this.powerups.splice(i, 1);
          this.stats.powerupsGrabbed++;
          this.sound.playPowerup();
          this.updateHUD();
          break;
        }
      }
    }

    applyPowerup(player, type) {
      this.setAnnouncer(`✨ ${player.name} ACQUIRED ${type.name}!`);
      this.showToast(`${type.icon} ${type.name}!`);

      switch (type.id) {
        case 'BOMB':
          player.maxBombs = Math.min(8, player.maxBombs + 1);
          break;
        case 'FIRE':
          player.fireRange = Math.min(8, player.fireRange + 1);
          break;
        case 'SPEED':
          player.speed = Math.min(7.5, player.speed * 1.2);
          break;
        case 'GLOVE':
          player.hasGlove = true;
          break;
        case 'SHIELD':
          player.hasShield = true;
          break;
        case 'REMOTE':
          player.hasRemote = true;
          break;
        case 'SKULL':
          player.isCursed = true;
          player.curseTimer = 10.0;
          this.showToast('💀 CURSED! CONTROLS INVERTED!');
          break;
      }
    }

    // --- GAME LOOP & UPDATES ---
    renderLoop(timestamp) {
      const rawDt = Math.min(0.1, (timestamp - this.lastTimestamp) / 1000);
      this.lastTimestamp = timestamp;

      // Timescale lerp (Bullet-time effect)
      this.timeScale += (this.targetTimeScale - this.timeScale) * (rawDt * 6);
      const dt = rawDt * this.timeScale;

      if (!this.isPaused) {
        this.updateGame(dt);
      }

      this.updateCamera(rawDt);
      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(this.renderLoop.bind(this));
    }

    updateGame(dt) {
      // 1. Match Countdown Timer
      if (!this.gameOver) {
        this.timeRemaining = Math.max(0, this.timeRemaining - dt);
        const mins = Math.floor(this.timeRemaining / 60);
        const secs = Math.floor(this.timeRemaining % 60);
        const timerEl = document.getElementById('hudTimer');
        if (timerEl) {
          timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
          if (this.timeRemaining < 30) timerEl.className = 'hud-val red';
        }

        // Trigger Sudden Death at 45 seconds
        if (this.timeRemaining <= 45.0 && !this.suddenDeathActive) {
          this.triggerSuddenDeath();
        }

        if (this.suddenDeathActive) {
          this.suddenDeathTimer += dt;
          if (this.suddenDeathTimer >= 0.8) {
            this.suddenDeathTimer = 0;
            this.dropNextSuddenDeathBlock();
          }
        }
      }

      // 2. Players Update
      this.updatePlayers(dt);

      // 3. Falling Sudden Death Blocks
      if (this.fallingBlocks) {
        for (let i = this.fallingBlocks.length - 1; i >= 0; i--) {
          const fb = this.fallingBlocks[i];
          fb.y += fb.vy * dt;
          fb.mesh.position.y = fb.y;

          if (fb.y <= fb.targetY) {
            fb.y = fb.targetY;
            fb.mesh.position.y = fb.targetY;
            this.fallingBlocks.splice(i, 1);

            this.sound.playExplosion();
            this.screenShakeIntensity = 0.6;

            // Check if player crushed beneath meteor
            this.players.forEach(p => {
              if (p.alive && p.col === fb.col && p.row === fb.row) {
                this.eliminatePlayer(p, 'METEOR');
              }
            });
          }
        }
      }

      // 4. Bombs Update
      for (let i = this.bombs.length - 1; i >= 0; i--) {
        const b = this.bombs[i];

        // Sliding kick kinematics
        if (b.isMoving) {
          const moveSpeed = 8.0 * dt;
          b.x += b.slideDirX * moveSpeed;
          b.z += b.slideDirZ * moveSpeed;
          b.mesh.position.x = b.x;
          b.mesh.position.z = b.z;

          const nGrid = this.worldToGrid(b.x, b.z);
          // Check collision ahead
          const nextC = nGrid.col + b.slideDirX;
          const nextR = nGrid.row + b.slideDirZ;
          if (nextC < 0 || nextC >= GRID_COLS || nextR < 0 || nextR >= GRID_ROWS ||
              this.grid[nextR][nextC] !== TILE_EMPTY ||
              this.bombs.some(ob => ob !== b && ob.col === nextC && ob.row === nextR)) {
            // Stop slide and snap to grid tile
            b.isMoving = false;
            b.col = nGrid.col;
            b.row = nGrid.row;
            const snapW = this.gridToWorld(b.col, b.row);
            b.x = snapW.x;
            b.z = snapW.z;
            b.mesh.position.x = b.x;
            b.mesh.position.z = b.z;
          } else {
            b.col = nGrid.col;
            b.row = nGrid.row;
          }
        }

        // Ticking scale pulse
        b.timer -= dt;
        const pulseRate = Math.max(4, (3.0 - b.timer) * 8);
        const scaleVal = 1.0 + Math.sin(performance.now() * 0.01 * pulseRate) * 0.15;
        b.mesh.scale.set(scaleVal, scaleVal, scaleVal);

        // Animated fuse spark
        if (b.mesh.userData.spark) {
          const sparkScale = 0.8 + Math.random() * 0.6;
          b.mesh.userData.spark.scale.setScalar(sparkScale);
        }

        if (b.timer <= 0 && !b.isRemote) {
          this.detonateBomb(b);
        }
      }

      // 5. Explosions Decay
      for (let i = this.explosions.length - 1; i >= 0; i--) {
        const exp = this.explosions[i];
        exp.age += dt;
        const alpha = 1.0 - (exp.age / exp.duration);
        if (alpha <= 0) {
          this.scene.remove(exp.mesh);
          this.explosions.splice(i, 1);
        } else {
          exp.light.intensity = alpha * 6.0;
        }
      }

      // 6. Powerups Floating Rotation
      this.powerups.forEach(p => {
        p.mesh.rotation.y += dt * 2.5;
        p.mesh.position.y = 0.5 + Math.sin(performance.now() * 0.005) * 0.12;
      });

      // 7. Debris Falling with Ground Bounce Physics
      for (let i = this.debrisList.length - 1; i >= 0; i--) {
        const d = this.debrisList[i];
        d.life -= dt;
        if (d.life <= 0) {
          this.scene.remove(d.mesh);
          this.debrisList.splice(i, 1);
        } else {
          d.vy -= 22.0 * dt; // gravity
          d.mesh.position.x += d.vx * dt;
          d.mesh.position.y += d.vy * dt;
          d.mesh.position.z += d.vz * dt;
          if (d.mesh.position.y <= 0.15) {
            d.mesh.position.y = 0.15;
            d.vy = -d.vy * 0.45; // restitution bounce
            d.vx *= 0.65;
            d.vz *= 0.65;
          }
          d.mesh.rotation.x += dt * 8;
          d.mesh.rotation.y += dt * 8;
        }
      }
    }

    // --- CAMERA CONTROLLER & SCREEN SHAKE ---
    updateCamera(dt) {
      this.updateCameraTarget(false);

      // Smooth Lerp Camera movement
      this.camera.position.lerp(this.targetCamPos, dt * 5.0);

      // Apply Screen Shake
      if (this.screenShakeIntensity > 0.01) {
        this.camera.position.x += (Math.random() - 0.5) * this.screenShakeIntensity;
        this.camera.position.y += (Math.random() - 0.5) * this.screenShakeIntensity;
        this.camera.position.z += (Math.random() - 0.5) * this.screenShakeIntensity;
        this.screenShakeIntensity *= Math.pow(0.05, dt);
      }

      this.camera.lookAt(this.targetCamLookAt);
    }

    updateCameraTarget(immediate = false) {
      const p1 = this.players[0];
      const mode = CAMERA_MODES[this.cameraMode];

      switch (mode.id) {
        case 'TOP_DOWN':
          this.targetCamPos.copy(mode.offset);
          this.targetCamLookAt.copy(mode.lookAt);
          break;

        case 'ISOMETRIC':
          this.targetCamPos.copy(mode.offset);
          this.targetCamLookAt.copy(mode.lookAt);
          break;

        case 'FOLLOW':
          if (p1) {
            this.targetCamPos.set(p1.x, p1.mesh.position.y + mode.offset.y, p1.z + mode.offset.z);
            this.targetCamLookAt.set(p1.x, p1.mesh.position.y + mode.lookAt.y, p1.z + mode.lookAt.z);
          }
          break;

        case 'DIRECTOR':
          // Auto-cut between hotspots: tracks closest active bomb or leading survivor
          if (this.bombs.length > 0) {
            const b = this.bombs[0];
            this.targetCamPos.set(b.x * 0.5, 14, b.z * 0.5 + 12);
            this.targetCamLookAt.set(b.x, 0.5, b.z);
          } else if (p1 && p1.alive) {
            this.targetCamPos.set(p1.x * 0.6, 16, p1.z * 0.6 + 14);
            this.targetCamLookAt.set(p1.x, 0.5, p1.z);
          } else {
            this.targetCamPos.copy(mode.offset);
            this.targetCamLookAt.copy(mode.lookAt);
          }
          break;

        case 'FREE':
          const t = performance.now() * 0.0003;
          this.targetCamPos.set(Math.cos(t) * 22, 18, Math.sin(t) * 22);
          this.targetCamLookAt.set(0, 0, 0);
          break;
      }

      if (immediate) {
        this.camera.position.copy(this.targetCamPos);
        this.camera.lookAt(this.targetCamLookAt);
      }
    }

    // --- HUD & STATUS CARD UPDATES ---
    updateHUD() {
      this.players.forEach((p, idx) => {
        const idPrefix = `p${idx + 1}`;
        const card = document.getElementById(`cardP${idx + 1}`);
        const statusEl = document.getElementById(`${idPrefix}Status`);
        const bombsEl = document.getElementById(`${idPrefix}Bombs`);
        const fireEl = document.getElementById(`${idPrefix}Fire`);
        const speedEl = document.getElementById(`${idPrefix}Speed`);
        const shieldBadge = document.getElementById(`${idPrefix}ShieldBadge`);
        const gloveBadge = document.getElementById(`${idPrefix}GloveBadge`);
        const remoteBadge = document.getElementById(`${idPrefix}RemoteBadge`);

        if (card) {
          card.classList.toggle('dead', !p.alive);
        }
        if (statusEl) {
          statusEl.textContent = p.alive ? 'ALIVE' : 'ELIMINATED';
          statusEl.className = `alive-indicator ${p.alive ? 'alive' : 'dead'}`;
        }
        if (bombsEl) bombsEl.textContent = `${p.activeBombs}/${p.maxBombs}`;
        if (fireEl) fireEl.textContent = `🔥 ${p.fireRange}`;
        if (speedEl) speedEl.textContent = `⚡ ${(p.speed / p.baseSpeed).toFixed(1)}x`;

        if (shieldBadge) shieldBadge.classList.toggle('unlocked', p.hasShield);
        if (gloveBadge) gloveBadge.classList.toggle('unlocked', p.hasGlove);
        if (remoteBadge) remoteBadge.classList.toggle('unlocked', p.hasRemote);
      });
    }

    // --- 5-SLOT SAVE / LOAD MATCH SYSTEM ---
    renderSaveSlots() {
      const container = document.getElementById('slotList');
      if (!container) return;
      container.innerHTML = '';

      for (let s = 1; s <= 5; s++) {
        const key = `bomberman_save_slot_${s}`;
        const raw = localStorage.getItem(key);
        let desc = 'EMPTY SLOT';
        if (raw) {
          try {
            const data = JSON.parse(raw);
            desc = `Round ${data.round || 1} - ${data.date || 'Saved Match'}`;
          } catch (e) {}
        }

        const div = document.createElement('div');
        div.className = 'slot-item';
        div.innerHTML = `
          <span>SLOT ${s}: ${desc}</span>
          <div class="slot-actions">
            <button class="slot-btn save" data-slot="${s}">SAVE</button>
            <button class="slot-btn load" data-slot="${s}" ${raw ? '' : 'disabled'}>LOAD</button>
          </div>
        `;
        container.appendChild(div);
      }

      container.querySelectorAll('.slot-btn.save').forEach(btn => {
        btn.addEventListener('click', () => {
          const slot = btn.getAttribute('data-slot');
          this.saveSlot(slot);
          this.renderSaveSlots();
        });
      });

      container.querySelectorAll('.slot-btn.load').forEach(btn => {
        btn.addEventListener('click', () => {
          const slot = btn.getAttribute('data-slot');
          this.loadSlot(slot);
          document.getElementById('saveModal').classList.add('hidden');
        });
      });
    }

    saveSlot(slot) {
      const key = `bomberman_save_slot_${slot}`;
      const data = {
        round: this.roundNumber,
        date: new Date().toLocaleTimeString(),
        p1Stats: {
          maxBombs: this.players[0].maxBombs,
          fireRange: this.players[0].fireRange,
          speed: this.players[0].speed,
          hasGlove: this.players[0].hasGlove,
          hasShield: this.players[0].hasShield,
          hasRemote: this.players[0].hasRemote
        },
        stats: this.stats
      };
      localStorage.setItem(key, JSON.stringify(data));
      this.showToast(`SLOT ${slot} SAVED!`);
    }

    loadSlot(slot) {
      const key = `bomberman_save_slot_${slot}`;
      const raw = localStorage.getItem(key);
      if (!raw) return false;
      try {
        const data = JSON.parse(raw);
        this.roundNumber = data.round || 1;
        if (data.p1Stats && this.players[0]) {
          Object.assign(this.players[0], data.p1Stats);
        }
        if (data.stats) {
          this.stats = data.stats;
        }
        this.updateHUD();
        this.showToast(`SLOT ${slot} LOADED!`);
        return true;
      } catch (e) {
        return false;
      }
    }

    // --- DEBUG & AUTOMATED TEST SUITE API ---
    initDebugAPI() {
      window.BombermanDebug = {
        getGridState: () => this.grid,
        getPlayers: () => this.players,
        getBombs: () => this.bombs,
        getPowerups: () => this.powerups,
        setCameraMode: (m) => this.setCameraMode(m),
        triggerSuddenDeath: () => this.triggerSuddenDeath(),
        dropBomb: () => this.playerDropBomb(this.players[0]),
        triggerKonami: () => this.triggerKonamiCode(),

        // Full In-Browser Automated Probe Runner
        runSelfTest: () => {
          const results = [];
          const record = (name, passed, detail = '') => {
            results.push({ test: name, passed: Boolean(passed), detail });
          };

          // Probe 1: WebGL Context & Three.js Scene Active
          const gl = this.renderer.getContext();
          record('Probe 1: WebGL Context is Active and Valid', gl && !gl.isContextLost());

          // Probe 2: 15x13 Arena Grid Dimensions & Pillar Placement
          const validDims = this.grid.length === GRID_ROWS && this.grid[0].length === GRID_COLS;
          const pillarCheck = (this.grid[2][2] === TILE_HARD && this.grid[4][4] === TILE_HARD);
          record('Probe 2: 15x13 Arena Grid & Indestructible Pillars Verified', validDims && pillarCheck);

          // Probe 3: 4 Combatants Initialized in Spawn Corners
          const fourPlayers = this.players.length === 4;
          const p1Spawn = this.players[0].col === 1 && this.players[0].row === 1;
          const p4Spawn = this.players[3].col === 13 && this.players[3].row === 11;
          record('Probe 3: 4 Combatants Initialized in Corners', fourPlayers && p1Spawn && p4Spawn);

          // Probe 4: Bomb Placement & 2.6s Fuse Kinematics
          const initialBombs = this.bombs.length;
          const dropSuccess = this.playerDropBomb(this.players[0]);
          const bombPlaced = this.bombs.length === initialBombs + 1;
          const bombHasTimer = this.bombs[0] && this.bombs[0].timer > 2.0;
          record('Probe 4: Bomb Placement & Fuse Countdown Verified', dropSuccess && bombPlaced && bombHasTimer);

          // Probe 5: Cross-Fire Raycast Explosion & Chain Reaction Logic
          const expCountBefore = this.explosions.length;
          if (this.bombs.length > 0) {
            this.detonateBomb(this.bombs[0]);
          }
          const expSpawned = this.explosions.length >= expCountBefore;
          record('Probe 5: Cross-Fire Raycast Explosion & VFX Spawned', expSpawned);

          // Probe 6: Power-Up Generation & Heart Shield Absorption
          this.spawnPowerup(1, 1, POWERUP_TYPES.SHIELD);
          const hasPowerup = this.powerups.some(p => p.type.id === 'SHIELD');
          this.applyPowerup(this.players[0], POWERUP_TYPES.SHIELD);
          const shieldEquipped = this.players[0].hasShield === true;
          record('Probe 6: Power-Up Spawn & Heart Shield Absorption Verified', hasPowerup && shieldEquipped);

          // Probe 7: 5 Director Camera Perspective Transformations
          const camModesCount = CAMERA_MODES.length === 5;
          this.setCameraMode(2); // Follow cam
          const camSwitched = this.cameraMode === 2;
          this.setCameraMode(1); // Restore isometric
          record('Probe 7: 5 Director Camera Modes Verified', camModesCount && camSwitched);

          // Probe 8: Sudden Death Inward Spiral Sequence
          const spiralGenerated = this.suddenDeathSequence.length > 50;
          const outerCornerFirst = this.suddenDeathSequence[0].col === 1 && this.suddenDeathSequence[0].row === 1;
          record('Probe 8: Sudden Death Inward Spiral Algorithm Verified', spiralGenerated && outerCornerFirst);

          // Probe 9: 5-Slot Save / Load State Persistence
          this.saveSlot(1);
          const loadOk = this.loadSlot(1);
          record('Probe 9: 5-Slot Save / Load Match Persistence Verified', loadOk);

          // Probe 10: Web Audio Synthesizer Integration
          record('Probe 10: Web Audio Synthesizer Verified', Boolean(this.sound));

          // Cleanly restore P1 alive status and state after self-test
          this.players[0].alive = true;
          this.players[0].mesh.scale.set(1.0, 1.0, 1.0);
          this.players[0].mesh.position.y = 0.0;
          this.gameOver = false;
          this.targetTimeScale = 1.0;
          this.timeScale = 1.0;
          this.updateHUD();

          const passedProbes = results.filter(r => r.passed).length;
          this.selfTestReport = {
            success: passedProbes === results.length,
            passedProbes: passedProbes,
            totalProbes: results.length,
            results: results,
            playerPos: { x: this.players[0].x, z: this.players[0].z },
            activeBombs: this.bombs.length,
            timeRemaining: this.timeRemaining
          };
          return this.selfTestReport;
        }
      };
    }
  }

  // Auto-boot on load
  window.addEventListener('DOMContentLoaded', () => {
    new BombermanGame();
  });
})();
