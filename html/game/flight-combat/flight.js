/**
 * ACE COMBAT VECTOR 2026 - 3D Flight & Dogfight Simulation Engine
 * Pure Vanilla JavaScript & Canvas 3D Software Rasterizer / Aerodynamic Physics Engine.
 * Zero external libraries or CDN dependencies.
 */

// --- 3D Vector Math Library ---
class Vec3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x, y, z) {
    this.x = x; this.y = y; this.z = z;
    return this;
  }

  add(v) {
    return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  sub(v) {
    return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  scale(s) {
    return new Vec3(this.x * s, this.y * s, this.z * s);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v) {
    return new Vec3(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  length() {
    return Math.sqrt(this.lengthSq());
  }

  normalize() {
    const len = this.length();
    if (len > 0.00001) {
      return new Vec3(this.x / len, this.y / len, this.z / len);
    }
    return new Vec3(0, 0, 0);
  }

  dist(v) {
    return this.sub(v).length();
  }

  clone() {
    return new Vec3(this.x, this.y, this.z);
  }
}

// --- Audio Synthesizer (Web Audio API) ---
class AvionicsSoundSystem {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.engineOsc = null;
    this.engineGain = null;
    this.isLocked = false;
  }

  init() {
    if (!this.ctx && typeof AudioContext !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.initEngineAudio();
  }

  initEngineAudio() {
    if (!this.ctx || this.engineOsc) return;
    try {
      this.engineOsc = this.ctx.createOscillator();
      this.engineGain = this.ctx.createGain();
      this.engineOsc.type = 'sawtooth';
      this.engineOsc.frequency.setValueAtTime(65, this.ctx.currentTime);
      this.engineGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(250, this.ctx.currentTime);

      this.engineOsc.connect(filter);
      filter.connect(this.engineGain);
      this.engineGain.connect(this.ctx.destination);
      this.engineOsc.start();
    } catch (e) {}
  }

  updateEngine(throttle, afterburner) {
    if (!this.ctx || !this.engineOsc || !this.enabled) return;
    const baseFreq = 50 + throttle * 70 + (afterburner ? 40 : 0);
    const gainVal = 0.02 + throttle * 0.05 + (afterburner ? 0.04 : 0);
    this.engineOsc.frequency.setTargetAtTime(baseFreq, this.ctx.currentTime, 0.1);
    this.engineGain.gain.setTargetAtTime(gainVal, this.ctx.currentTime, 0.1);
  }

  playGunShot() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(140 + Math.random() * 30, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playMissileLaunch() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
    } catch (e) {}
  }

  playExplosion() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.6);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.7);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.7);
    } catch (e) {}
  }

  playLockTone(locked = false) {
    if (!this.enabled || !this.ctx) return;
    if (locked && !this.isLocked) {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
      } catch (e) {}
    }
    this.isLocked = locked;
  }
}

// --- Particle Simulation Engine ---
class ParticleEngine {
  constructor() {
    this.particles = [];
  }

  addSmoke(pos, vel, color = 'rgba(180, 180, 180, 0.6)', size = 3, life = 1.0) {
    this.particles.push({
      pos: pos.clone(),
      vel: vel.clone(),
      color: color,
      size: size,
      maxLife: life,
      life: life
    });
  }

  addExplosion(pos, count = 40) {
    for (let i = 0; i < count; i++) {
      const vel = new Vec3(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
      this.particles.push({
        pos: pos.clone(),
        vel: vel,
        color: Math.random() > 0.4 ? '#ffaa00' : '#ff3311',
        size: Math.random() * 8 + 4,
        maxLife: Math.random() * 0.8 + 0.4,
        life: Math.random() * 0.8 + 0.4
      });
    }
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.pos = p.pos.add(p.vel.scale(dt));
      p.life -= dt;
      p.size += dt * 4;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }
}

// --- Aircraft Aerodynamic Physics Entity ---
class Aircraft {
  constructor(isPlayer = true) {
    this.isPlayer = isPlayer;
    this.pos = new Vec3(0, 1200, 0); // World coords (X: Right, Y: Up, Z: Forward)
    this.vel = new Vec3(0, 0, 180); // Airspeed ~180 m/s (350 knots)

    this.pitch = 0; // Elevator
    this.roll = 0;  // Aileron
    this.yaw = 0;   // Rudder

    this.pitchRate = 0;
    this.rollRate = 0;
    this.yawRate = 0;

    this.throttle = 0.6; // 0.0 to 1.0
    this.afterburner = false;
    this.maxThrust = 120000; // N
    this.mass = 11000; // kg (~F-16)
    this.wingArea = 28; // m^2
    this.airDensity = 1.225;

    this.health = 100;
    this.maxHealth = 100;
    this.isAlive = true;

    this.ammo = 1000;
    this.missiles = 4;
    this.flares = 6;

    this.gForce = 1.0;
    this.aoa = 4.0; // Angle of Attack in degrees
    this.isStalled = false;

    // AI state if not player
    this.aiState = 'PATROL';
    this.aiTimer = 0;
    this.target = null;
  }

  // Get Forward, Up, Right directional unit vectors
  getVectors() {
    const cp = Math.cos(this.pitch);
    const sp = Math.sin(this.pitch);
    const cr = Math.cos(this.roll);
    const sr = Math.sin(this.roll);
    const cy = Math.cos(this.yaw);
    const sy = Math.sin(this.yaw);

    // Forward Vector (pointing where nose points, +Z at yaw=0)
    const forward = new Vec3(
      sy * cp,
      sp,
      cy * cp
    ).normalize();

    // Right Vector (+X at roll=0, yaw=0)
    const right = new Vec3(
      cy * cr + sy * sp * sr,
      -cp * sr,
      -sy * cr + cy * sp * sr
    ).normalize();

    // Up Vector (+Y at pitch=0, roll=0)
    const up = forward.cross(right).normalize();

    return { forward, up, right };
  }

  updatePhysics(dt, controls) {
    if (!this.isAlive) return;

    const { forward, up, right } = this.getVectors();

    // Control inputs
    if (controls) {
      if (controls.pitchUp) this.pitchRate = Math.min(this.pitchRate + 2.5 * dt, 1.8);
      else if (controls.pitchDown) this.pitchRate = Math.max(this.pitchRate - 2.5 * dt, -1.8);
      else this.pitchRate *= Math.exp(-4 * dt);

      if (controls.rollLeft) this.rollRate = Math.max(this.rollRate - 5.0 * dt, -3.2);
      else if (controls.rollRight) this.rollRate = Math.min(this.rollRate + 5.0 * dt, 3.2);
      else this.rollRate *= Math.exp(-5 * dt);

      if (controls.yawLeft) this.yawRate = Math.max(this.yawRate - 1.5 * dt, -0.8);
      else if (controls.yawRight) this.yawRate = Math.min(this.yawRate + 1.5 * dt, 0.8);
      else this.yawRate *= Math.exp(-4 * dt);

      if (controls.throttleUp) this.throttle = Math.min(1.0, this.throttle + 0.3 * dt);
      if (controls.throttleDown) this.throttle = Math.max(0.1, this.throttle - 0.3 * dt);
    }

    // Integrate rotations
    this.pitch += this.pitchRate * dt;
    this.roll += this.rollRate * dt;
    this.yaw += this.yawRate * dt;

    // Normalize pitch and roll
    if (this.pitch > Math.PI * 0.48) this.pitch = Math.PI * 0.48;
    if (this.pitch < -Math.PI * 0.48) this.pitch = -Math.PI * 0.48;

    const speed = this.vel.length();
    const dynamicPressure = 0.5 * this.airDensity * speed * speed;

    // Angle of Attack (AoA)
    const velNorm = speed > 1 ? this.vel.normalize() : forward;
    const fwdDotVel = Math.max(-1, Math.min(1, forward.dot(velNorm)));
    this.aoa = Math.acos(fwdDotVel) * (180 / Math.PI);

    // Stall check
    this.isStalled = (this.aoa > 22.0 || speed < 60);

    // Forces
    const thrustMag = this.throttle * this.maxThrust * (this.afterburner ? 1.8 : 1.0);
    const thrust = forward.scale(thrustMag);

    // Drag: C_d0 + induced drag
    const cd = this.isStalled ? 0.35 : (0.02 + 0.05 * (this.aoa / 15) ** 2);
    const dragMag = dynamicPressure * this.wingArea * cd;
    const drag = velNorm.scale(-dragMag);

    // Lift: Perpendicular to velocity in aircraft up plane
    const cl = this.isStalled ? 0.15 : Math.min(1.4, 0.04 * this.aoa + 0.05);
    const liftMag = dynamicPressure * this.wingArea * cl;
    const lift = up.scale(liftMag);

    // Gravity: -9.81 m/s^2 on Y
    const gravity = new Vec3(0, -9.81 * this.mass, 0);

    // Total Force & Acceleration
    const totalForce = thrust.add(drag).add(lift).add(gravity);
    const accel = totalForce.scale(1 / this.mass);

    this.vel = this.vel.add(accel.scale(dt));
    this.pos = this.pos.add(this.vel.scale(dt));

    // Calculate G-force
    this.gForce = liftMag / (this.mass * 9.81);

    // Terrain ground crash check
    if (this.pos.y < 10) {
      this.pos.y = 10;
      this.health = 0;
      this.isAlive = false;
    }
  }
}

// --- Guided Missile Entity (Proportional Navigation) ---
class Missile {
  constructor(shooter, target, pos, forward) {
    this.shooter = shooter;
    this.target = target;
    this.pos = pos.clone();
    this.vel = forward.scale(260); // Launch speed 260 m/s
    this.maxSpeed = 700; // Mach 2.3 (~700 m/s)
    this.accelRate = 350;
    this.navGain = 3.5; // Proportional navigation constant N
    this.life = 6.0; // 6 seconds flight time
    this.isAlive = true;
    this.lastTargetPos = target ? target.pos.clone() : null;
  }

  update(dt, particles) {
    if (!this.isAlive) return;

    this.life -= dt;
    if (this.life <= 0) {
      this.isAlive = false;
      return;
    }

    // Accelerate rocket motor
    const currentSpeed = this.vel.length();
    if (currentSpeed < this.maxSpeed) {
      const fwd = this.vel.normalize();
      this.vel = this.vel.add(fwd.scale(this.accelRate * dt));
    }

    // Proportional Navigation Guidance
    if (this.target && this.target.isAlive) {
      const rVec = this.target.pos.sub(this.pos);
      const dist = rVec.length();

      // Proximity detonation check
      if (dist < 20) {
        this.target.health -= 85;
        if (this.target.health <= 0) this.target.isAlive = false;
        particles.addExplosion(this.pos, 35);
        this.isAlive = false;
        return;
      }

      const losRate = rVec.normalize();
      const steeringForce = losRate.sub(this.vel.normalize()).scale(this.navGain * 120);
      this.vel = this.vel.add(steeringForce.scale(dt));
    }

    this.pos = this.pos.add(this.vel.scale(dt));
    particles.addSmoke(this.pos, this.vel.scale(-0.2), 'rgba(230, 230, 230, 0.7)', 2, 0.6);
  }
}

// --- Bullet Projectile Entity ---
class Bullet {
  constructor(pos, vel) {
    this.prevPos = pos.clone();
    this.pos = pos.clone();
    this.vel = vel.clone();
    this.life = 2.0;
    this.isAlive = true;
  }

  update(dt) {
    this.prevPos = this.pos.clone();
    this.pos = this.pos.add(this.vel.scale(dt));
    this.life -= dt;
    if (this.life <= 0) this.isAlive = false;
  }
}

// --- Countermeasure Flare ---
class Flare {
  constructor(pos, vel) {
    this.pos = pos.clone();
    this.vel = vel.clone().add(new Vec3((Math.random()-0.5)*20, -15, (Math.random()-0.5)*20));
    this.life = 3.0;
    this.isAlive = true;
  }

  update(dt, particles) {
    this.pos = this.pos.add(this.vel.scale(dt));
    this.life -= dt;
    if (this.life <= 0) this.isAlive = false;
    particles.addSmoke(this.pos, new Vec3(0, 5, 0), '#ffea88', 3, 0.4);
  }
}

// --- Main Flight Simulator & Combat Engine ---
class FlightSimGame {
  constructor() {
    this.canvas = document.getElementById('flightCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.radarCanvas = document.getElementById('radarCanvas');
    this.radarCtx = this.radarCanvas.getContext('2d');

    this.sound = new AvionicsSoundSystem();
    this.particles = new ParticleEngine();

    this.player = new Aircraft(true);
    this.enemies = [];
    this.bullets = [];
    this.missiles = [];
    this.flares = [];

    this.cameraMode = 'CHASE'; // 'CHASE' or 'COCKPIT'
    this.camPos = new Vec3();
    this.camTarget = new Vec3();

    this.score = 0;
    this.kills = 0;
    this.wave = 1;
    this.isPlaying = false;
    this.isPaused = false;

    this.controls = {
      pitchUp: false,
      pitchDown: false,
      rollLeft: false,
      rollRight: false,
      yawLeft: false,
      yawRight: false,
      throttleUp: false,
      throttleDown: false,
      firingGuns: false
    };

    this.gunTimer = 0;
    this.lastTime = 0;
    this.targetEnemy = null;

    this.initUI();
    this.initEvents();
  }

  spawnWave(waveNum) {
    this.enemies = [];
    const count = 3 + waveNum;
    for (let i = 0; i < count; i++) {
      const enemy = new Aircraft(false);
      const angle = (i / count) * Math.PI * 2;
      const dist = 3000 + Math.random() * 1500;
      enemy.pos = new Vec3(
        this.player.pos.x + Math.sin(angle) * dist,
        1400 + Math.random() * 600,
        this.player.pos.z + Math.cos(angle) * dist
      );
      enemy.yaw = angle + Math.PI;
      enemy.vel = enemy.getVectors().forward.scale(160);
      enemy.health = 80;
      this.enemies.push(enemy);
    }
  }

  start() {
    this.sound.init();
    this.player = new Aircraft(true);
    this.player.pos = new Vec3(0, 1000, 0);
    this.player.vel = new Vec3(0, 0, 190);
    this.score = 0;
    this.kills = 0;
    this.wave = 1;
    this.bullets = [];
    this.missiles = [];
    this.flares = [];
    this.spawnWave(this.wave);

    this.isPlaying = true;
    this.isPaused = false;
    document.getElementById('simModal').classList.add('hidden');
    this.lastTime = performance.now();
  }

  fireGuns() {
    if (!this.isPlaying || this.player.ammo <= 0 || !this.player.isAlive) return;
    const { forward, right, up } = this.player.getVectors();
    const muzzlePos1 = this.player.pos.add(forward.scale(6)).add(right.scale(1.2));
    const muzzlePos2 = this.player.pos.add(forward.scale(6)).sub(right.scale(1.2));
    const bulletVel = this.player.vel.add(forward.scale(1100));

    this.bullets.push(new Bullet(muzzlePos1, bulletVel));
    this.bullets.push(new Bullet(muzzlePos2, bulletVel));
    this.player.ammo -= 2;
    this.sound.playGunShot();
  }

  launchMissile() {
    if (!this.isPlaying || this.player.missiles <= 0 || !this.player.isAlive) return;
    const { forward } = this.player.getVectors();
    const launchPos = this.player.pos.add(forward.scale(5)).sub(new Vec3(0, 1, 0));

    const missile = new Missile(this.player, this.targetEnemy, launchPos, forward);
    this.missiles.push(missile);
    this.player.missiles--;
    this.sound.playMissileLaunch();
    this.updateHUD();
  }

  deployFlares() {
    if (!this.isPlaying || this.player.flares <= 0 || !this.player.isAlive) return;
    const { forward } = this.player.getVectors();
    for (let i = 0; i < 2; i++) {
      this.flares.push(new Flare(this.player.pos.sub(forward.scale(4)), this.player.vel.scale(0.3)));
    }
    this.player.flares--;
    this.updateHUD();
  }

  updateAI(enemy, dt) {
    if (!enemy.isAlive) return;

    enemy.aiTimer += dt;
    const toPlayer = this.player.pos.sub(enemy.pos);
    const dist = toPlayer.length();
    const { forward, up, right } = enemy.getVectors();

    // Aim heading towards player
    const desiredDir = toPlayer.normalize();
    const dotFwd = forward.dot(desiredDir);
    const dotRight = right.dot(desiredDir);
    const dotUp = up.dot(desiredDir);

    const aiControls = {
      pitchUp: dotUp > 0.05,
      pitchDown: dotUp < -0.05,
      rollLeft: dotRight < -0.15,
      rollRight: dotRight > 0.15,
      yawLeft: dotRight < -0.05,
      yawRight: dotRight > 0.05,
      throttleUp: dist > 1200,
      throttleDown: dist < 400
    };

    enemy.updatePhysics(dt, aiControls);

    // Enemy attack if player within firing cone
    if (dist < 1500 && dotFwd > 0.92 && Math.random() < 0.08) {
      const bPos = enemy.pos.add(forward.scale(5));
      const bVel = enemy.vel.add(forward.scale(1000));
      this.bullets.push(new Bullet(bPos, bVel));
    }
  }

  update(dt) {
    if (!this.isPlaying || this.isPaused) return;

    // Update Player Physics
    this.player.updatePhysics(dt, this.controls);

    // Continuous Gun Fire
    if (this.controls.firingGuns) {
      this.gunTimer += dt;
      if (this.gunTimer >= 0.08) {
        this.fireGuns();
        this.gunTimer = 0;
      }
    }

    // Update Enemies
    let aliveCount = 0;
    let closestTarget = null;
    let closestDist = 999999;
    const { forward: pFwd } = this.player.getVectors();

    for (const enemy of this.enemies) {
      if (enemy.isAlive) {
        aliveCount++;
        this.updateAI(enemy, dt);

        // Lock-on Target Acquisition (within 35 deg cone and 5000m)
        const toEnemy = enemy.pos.sub(this.player.pos);
        const dist = toEnemy.length();
        const angleCos = pFwd.dot(toEnemy.normalize());

        if (dist < 5000 && angleCos > 0.82 && dist < closestDist) {
          closestDist = dist;
          closestTarget = enemy;
        }
      }
    }

    this.targetEnemy = closestTarget;
    this.sound.playLockTone(this.targetEnemy !== null);

    // Check wave completion
    if (aliveCount === 0 && this.enemies.length > 0) {
      this.wave++;
      this.score += 2000;
      this.player.missiles = Math.min(6, this.player.missiles + 2);
      this.player.flares = Math.min(8, this.player.flares + 3);
      this.player.ammo = Math.min(1000, this.player.ammo + 400);
      this.spawnWave(this.wave);
    }

    // Update Missiles
    for (let i = this.missiles.length - 1; i >= 0; i--) {
      const m = this.missiles[i];
      m.update(dt, this.particles);
      if (!m.isAlive) {
        this.missiles.splice(i, 1);
      }
    }

    // Update Bullets & Hit Detection
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const b = this.bullets[i];
      b.update(dt);

      // Hit check against enemies
      for (const enemy of this.enemies) {
        if (enemy.isAlive && b.pos.dist(enemy.pos) < 18) {
          enemy.health -= 25;
          b.isAlive = false;
          this.particles.addExplosion(b.pos, 10);
          if (enemy.health <= 0) {
            enemy.isAlive = false;
            this.particles.addExplosion(enemy.pos, 50);
            this.sound.playExplosion();
            this.kills++;
            this.score += 500;
          }
          break;
        }
      }

      // Hit check against player
      if (b.pos.dist(this.player.pos) < 14) {
        this.player.health -= 15;
        b.isAlive = false;
        this.particles.addExplosion(b.pos, 8);
        if (this.player.health <= 0) {
          this.player.isAlive = false;
          this.particles.addExplosion(this.player.pos, 60);
          this.sound.playExplosion();
          this.gameOver();
        }
      }

      if (!b.isAlive) {
        this.bullets.splice(i, 1);
      }
    }

    // Update Flares & Particles
    for (let i = this.flares.length - 1; i >= 0; i--) {
      this.flares[i].update(dt, this.particles);
      if (!this.flares[i].isAlive) this.flares.splice(i, 1);
    }
    this.particles.update(dt);

    // Audio Update
    this.sound.updateEngine(this.player.throttle, this.player.afterburner);

    // Update UI HUD
    this.updateHUD();
  }

  // --- 3D Camera & Perspective Projection Engine ---
  project3D(worldPos) {
    const { forward, up, right } = this.player.getVectors();

    // Camera origin
    if (this.cameraMode === 'CHASE') {
      this.camPos = this.player.pos.sub(forward.scale(24)).add(up.scale(6));
      this.camTarget = this.player.pos.add(forward.scale(50));
    } else {
      this.camPos = this.player.pos.add(up.scale(1.2)).add(forward.scale(1.5));
      this.camTarget = this.player.pos.add(forward.scale(100));
    }

    // Transform world point into camera space
    const rel = worldPos.sub(this.camPos);
    const cz = rel.dot(forward); // Depth along view axis
    const cx = rel.dot(right);   // Horizontal
    const cy = rel.dot(up);      // Vertical

    if (cz <= 1.0) return null; // Behind or clipping near plane

    const fov = 600; // Focal length
    const screenX = this.canvas.width / 2 + (cx / cz) * fov;
    const screenY = this.canvas.height / 2 - (cy / cz) * fov;

    return { x: screenX, y: screenY, z: cz };
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Sky & Horizon gradient
    const pVectors = this.player.getVectors();
    const horizonY = this.canvas.height / 2 + Math.tan(this.player.pitch) * 600;

    const skyGrad = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    skyGrad.addColorStop(0, '#020d18');
    skyGrad.addColorStop(Math.max(0, Math.min(1, horizonY / this.canvas.height)), '#0a2e4a');
    skyGrad.addColorStop(1, '#021810');
    this.ctx.fillStyle = skyGrad;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // 3D Infinite Terrain Grid & Ocean
    this.ctx.strokeStyle = 'rgba(0, 255, 102, 0.15)';
    this.ctx.lineWidth = 1;
    const gridSize = 400;
    const startX = Math.floor(this.player.pos.x / gridSize) * gridSize - 3000;
    const startZ = Math.floor(this.player.pos.z / gridSize) * gridSize - 3000;

    for (let gx = startX; gx <= startX + 6000; gx += gridSize) {
      const p1 = this.project3D(new Vec3(gx, 0, startZ));
      const p2 = this.project3D(new Vec3(gx, 0, startZ + 6000));
      if (p1 && p2) {
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
      }
    }
    for (let gz = startZ; gz <= startZ + 6000; gz += gridSize) {
      const p1 = this.project3D(new Vec3(startX, 0, gz));
      const p2 = this.project3D(new Vec3(startX + 6000, 0, gz));
      if (p1 && p2) {
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
      }
    }

    // Draw Particles
    for (const p of this.particles.particles) {
      const sp = this.project3D(p.pos);
      if (sp) {
        this.ctx.fillStyle = p.color;
        const radius = Math.max(1, (p.size / sp.z) * 500);
        this.ctx.beginPath();
        this.ctx.arc(sp.x, sp.y, radius, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    // Draw Bullets (Tracers)
    this.ctx.strokeStyle = '#ffff55';
    this.ctx.lineWidth = 2;
    for (const b of this.bullets) {
      const p1 = this.project3D(b.prevPos);
      const p2 = this.project3D(b.pos);
      if (p1 && p2) {
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
      }
    }

    // Draw Player Jet (in Chase View)
    if (this.cameraMode === 'CHASE' && this.player.isAlive) {
      this.drawJetModel(this.player, '#00ff66');
    }

    // Draw Enemy Aircraft
    for (const enemy of this.enemies) {
      if (enemy.isAlive) {
        this.drawJetModel(enemy, '#ff3344');
      }
    }

    // Draw Missiles
    for (const m of this.missiles) {
      if (m.isAlive) {
        const p1 = this.project3D(m.pos);
        const p2 = this.project3D(m.pos.add(m.vel.normalize().scale(3)));
        if (p1 && p2) {
          this.ctx.strokeStyle = '#ffaa00';
          this.ctx.lineWidth = 3;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    // Draw Tactical HUD Overlays
    this.drawHUD();
    this.drawRadar();
  }

  drawJetModel(aircraft, color) {
    const { forward, up, right } = aircraft.getVectors();
    const nose = aircraft.pos.add(forward.scale(8));
    const tail = aircraft.pos.sub(forward.scale(6));
    const wingL = aircraft.pos.sub(forward.scale(2)).sub(right.scale(7));
    const wingR = aircraft.pos.sub(forward.scale(2)).add(right.scale(7));
    const fin = aircraft.pos.sub(forward.scale(5)).add(up.scale(3.5));

    const pNose = this.project3D(nose);
    const pTail = this.project3D(tail);
    const pWL = this.project3D(wingL);
    const pWR = this.project3D(wingR);
    const pFin = this.project3D(fin);

    if (pNose && pTail && pWL && pWR && pFin) {
      this.ctx.save();
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color === '#00ff66' ? 'rgba(0, 255, 102, 0.2)' : 'rgba(255, 51, 68, 0.25)';
      this.ctx.lineWidth = 1.5;

      // Fuselage & Wings triangle
      this.ctx.beginPath();
      this.ctx.moveTo(pNose.x, pNose.y);
      this.ctx.lineTo(pWL.x, pWL.y);
      this.ctx.lineTo(pTail.x, pTail.y);
      this.ctx.lineTo(pWR.x, pWR.y);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();

      // Vertical Stabilizer
      this.ctx.beginPath();
      this.ctx.moveTo(pTail.x, pTail.y);
      this.ctx.lineTo(pFin.x, pFin.y);
      this.ctx.stroke();

      this.ctx.restore();
    }
  }

  drawHUD() {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;

    this.ctx.save();
    this.ctx.strokeStyle = '#00ff66';
    this.ctx.fillStyle = '#00ff66';
    this.ctx.lineWidth = 1.5;
    this.ctx.font = '12px Consolas, monospace';

    // Center Gunsight / Bore Cross
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    this.ctx.moveTo(cx - 16, cy); this.ctx.lineTo(cx - 8, cy);
    this.ctx.moveTo(cx + 8, cy); this.ctx.lineTo(cx + 16, cy);
    this.ctx.moveTo(cx, cy - 16); this.ctx.lineTo(cx, cy - 8);
    this.ctx.moveTo(cx, cy + 8); this.ctx.lineTo(cx, cy + 16);
    this.ctx.stroke();

    // Flight Path Marker (Velocity Vector)
    const { forward } = this.player.getVectors();
    const velFwd = this.player.pos.add(this.player.vel.normalize().scale(50));
    const fpm = this.project3D(velFwd);
    if (fpm) {
      this.ctx.beginPath();
      this.ctx.arc(fpm.x, fpm.y, 6, 0, Math.PI * 2);
      this.ctx.moveTo(fpm.x - 12, fpm.y); this.ctx.lineTo(fpm.x - 6, fpm.y);
      this.ctx.moveTo(fpm.x + 6, fpm.y); this.ctx.lineTo(fpm.x + 12, fpm.y);
      this.ctx.moveTo(fpm.x, fpm.y - 10); this.ctx.lineTo(fpm.x, fpm.y - 6);
      this.ctx.stroke();
    }

    // Pitch Ladder
    const pitchDeg = this.player.pitch * (180 / Math.PI);
    for (let deg = -60; deg <= 60; deg += 10) {
      if (deg === 0) continue;
      const dy = (pitchDeg - deg) * 8;
      if (Math.abs(dy) < 220) {
        this.ctx.beginPath();
        this.ctx.moveTo(cx - 50, cy + dy);
        this.ctx.lineTo(cx - 15, cy + dy);
        this.ctx.moveTo(cx + 15, cy + dy);
        this.ctx.lineTo(cx + 50, cy + dy);
        this.ctx.stroke();
        this.ctx.fillText(`${deg}°`, cx + 55, cy + dy + 4);
      }
    }

    // Airspeed Tape (Knots) on Left
    const knots = Math.round(this.player.vel.length() * 1.94384);
    this.ctx.strokeRect(cx - 240, cy - 90, 60, 180);
    this.ctx.fillText(`IAS ${knots} KT`, cx - 235, cy - 100);
    this.ctx.fillText(`${knots}`, cx - 215, cy + 5);

    // Altimeter Tape (Feet) on Right
    const altFeet = Math.round(this.player.pos.y * 3.28084);
    this.ctx.strokeRect(cx + 180, cy - 90, 60, 180);
    this.ctx.fillText(`ALT ${altFeet} FT`, cx + 185, cy - 100);
    this.ctx.fillText(`${altFeet}`, cx + 195, cy + 5);

    // Target Box & Missile Lock Reticle
    if (this.targetEnemy && this.targetEnemy.isAlive) {
      const tPos = this.project3D(this.targetEnemy.pos);
      if (tPos) {
        const dist = Math.round(this.player.pos.dist(this.targetEnemy.pos));
        this.ctx.save();
        this.ctx.strokeStyle = '#ff3344';
        this.ctx.fillStyle = '#ff3344';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(tPos.x - 22, tPos.y - 22, 44, 44);
        this.ctx.fillText(`LOCK ${dist}M`, tPos.x - 26, tPos.y + 36);
        this.ctx.restore();
      }
    }

    this.ctx.restore();
  }

  drawRadar() {
    const rcx = this.radarCanvas.width / 2;
    const rcy = this.radarCanvas.height / 2;
    const range = 5000; // 5km

    this.radarCtx.clearRect(0, 0, this.radarCanvas.width, this.radarCanvas.height);

    // Range rings
    this.radarCtx.strokeStyle = 'rgba(0, 255, 102, 0.3)';
    this.radarCtx.lineWidth = 1;
    this.radarCtx.beginPath();
    this.radarCtx.arc(rcx, rcy, 35, 0, Math.PI * 2);
    this.radarCtx.arc(rcx, rcy, 70, 0, Math.PI * 2);
    this.radarCtx.stroke();

    // Player blip (center triangle)
    this.radarCtx.fillStyle = '#00ff66';
    this.radarCtx.beginPath();
    this.radarCtx.moveTo(rcx, rcy - 6);
    this.radarCtx.lineTo(rcx - 4, rcy + 4);
    this.radarCtx.lineTo(rcx + 4, rcy + 4);
    this.radarCtx.closePath();
    this.radarCtx.fill();

    // Rotate blips based on player yaw
    const cosY = Math.cos(-this.player.yaw);
    const sinY = Math.sin(-this.player.yaw);

    // Hostile blips
    for (const enemy of this.enemies) {
      if (enemy.isAlive) {
        const dx = enemy.pos.x - this.player.pos.x;
        const dz = enemy.pos.z - this.player.pos.z;
        const rx = dx * cosY - dz * sinY;
        const rz = dx * sinY + dz * cosY;

        const blipX = rcx + (rx / range) * 70;
        const blipY = rcy - (rz / range) * 70;

        if (Math.hypot(blipX - rcx, blipY - rcy) <= 72) {
          this.radarCtx.fillStyle = '#ff3344';
          this.radarCtx.beginPath();
          this.radarCtx.arc(blipX, blipY, 3.5, 0, Math.PI * 2);
          this.radarCtx.fill();
        }
      }
    }
  }

  updateHUD() {
    document.getElementById('hudScore').innerText = String(this.score).padStart(6, '0');
    document.getElementById('hudKills').innerText = this.kills;
    document.getElementById('hudWave').innerText = `WAVE ${this.wave}`;

    const throttlePct = Math.round(this.player.throttle * 100);
    document.getElementById('throttleText').innerText = `${throttlePct}%`;
    document.getElementById('throttleFill').style.width = `${throttlePct}%`;

    const abBadge = document.getElementById('abStatus');
    abBadge.innerText = this.player.afterburner ? 'ACTIVE' : 'OFF';
    abBadge.className = `av-badge ${this.player.afterburner ? 'on' : 'off'}`;

    document.getElementById('gForceText').innerText = `${this.player.gForce.toFixed(1)} G`;
    document.getElementById('aoaText').innerText = `${this.player.aoa.toFixed(1)}°`;

    const healthPct = Math.max(0, Math.round((this.player.health / this.player.maxHealth) * 100));
    document.getElementById('hullText').innerText = `${healthPct}%`;
    document.getElementById('hullFill').style.width = `${healthPct}%`;

    document.getElementById('missileCountText').innerText = `${this.player.missiles} / 6`;
    document.getElementById('flareCountText').innerText = `${this.player.flares} / 8`;

    const warnBox = document.getElementById('hudWarningBox');
    if (this.player.isStalled) {
      warnBox.classList.remove('hidden');
      document.getElementById('hudWarningText').innerText = 'STALL WARNING - PULL DOWN NOSE';
    } else {
      warnBox.classList.add('hidden');
    }
  }

  gameOver() {
    this.isPlaying = false;
    const modal = document.getElementById('simModal');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');
    const btn = document.getElementById('startSimBtn');

    title.innerText = 'MISSION FAILED';
    title.style.color = '#ff3344';
    desc.innerText = `AIRCRAFT DESTROYED. FINAL SCORE: ${this.score} | TOTAL KILLS: ${this.kills} | WAVE: ${this.wave}`;
    btn.innerText = 'REDEPLOY SQUADRON [ENTER]';
    modal.classList.remove('hidden');
  }

  loop(timestamp = 0) {
    const dt = Math.min(0.05, (timestamp - this.lastTime) / 1000);
    this.lastTime = timestamp;

    this.update(dt);
    this.draw();

    requestAnimationFrame(t => this.loop(t));
  }

  initUI() {
    document.getElementById('startSimBtn').addEventListener('click', () => {
      this.start();
    });
  }

  initEvents() {
    window.addEventListener('keydown', e => {
      if (!this.isPlaying) {
        if (e.code === 'Enter') this.start();
        return;
      }

      this.sound.init();

      switch (e.code) {
        case 'KeyW': this.controls.pitchDown = true; break;
        case 'KeyS': this.controls.pitchUp = true; break;
        case 'KeyA': this.controls.rollLeft = true; break;
        case 'KeyD': this.controls.rollRight = true; break;
        case 'KeyQ': this.controls.yawLeft = true; break;
        case 'KeyE': this.controls.yawRight = true; break;
        case 'ShiftLeft':
        case 'ShiftRight': this.controls.throttleUp = true; break;
        case 'ControlLeft':
        case 'ControlRight': this.controls.throttleDown = true; break;
        case 'Tab':
          e.preventDefault();
          this.player.afterburner = !this.player.afterburner;
          break;
        case 'Space':
          e.preventDefault();
          this.controls.firingGuns = true;
          break;
        case 'KeyF':
          e.preventDefault();
          this.launchMissile();
          break;
        case 'KeyX':
          e.preventDefault();
          this.deployFlares();
          break;
        case 'KeyC':
          this.cameraMode = (this.cameraMode === 'CHASE') ? 'COCKPIT' : 'CHASE';
          break;
        case 'KeyP':
          this.isPaused = !this.isPaused;
          break;
        case 'KeyM':
          this.sound.enabled = !this.sound.enabled;
          break;
      }
    });

    window.addEventListener('keyup', e => {
      switch (e.code) {
        case 'KeyW': this.controls.pitchDown = false; break;
        case 'KeyS': this.controls.pitchUp = false; break;
        case 'KeyA': this.controls.rollLeft = false; break;
        case 'KeyD': this.controls.rollRight = false; break;
        case 'KeyQ': this.controls.yawLeft = false; break;
        case 'KeyE': this.controls.yawRight = false; break;
        case 'ShiftLeft':
        case 'ShiftRight': this.controls.throttleUp = false; break;
        case 'ControlLeft':
        case 'ControlRight': this.controls.throttleDown = false; break;
        case 'Space': this.controls.firingGuns = false; break;
      }
    });
  }
}

// Instantiate and start rendering loop
window.addEventListener('DOMContentLoaded', () => {
  const game = new FlightSimGame();
  game.loop();
});
