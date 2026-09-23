/**
 * DRAGON QUEST JS: REALM OF THE BRAVE - 勇者鬥惡龍
 * Pure Vanilla JavaScript & Canvas 2D Retro JRPG Engine.
 * Complete with Tilemap, Dialogue, Turn-Based Battle, Spells, Monster AI, and Web Audio Synth.
 */

const TILE_SIZE = 32;
const MAP_COLS = 24;
const MAP_ROWS = 16;

// --- Web Audio JRPG Synthesizer ---
class DQSound {
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

  playTone(freq, type, duration, gainVal = 0.1, decay = true) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      if (decay) {
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      }
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playStep() {
    this.playTone(80, 'triangle', 0.04, 0.03);
  }

  playAttack() {
    this.playTone(280, 'sawtooth', 0.1, 0.12, true);
  }

  playHit() {
    this.playTone(100, 'square', 0.15, 0.15, true);
  }

  playMagic() {
    const notes = [440, 554, 659, 880];
    notes.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'sine', 0.12, 0.08), idx * 50);
    });
  }

  playHeal() {
    const notes = [523, 659, 784, 1046];
    notes.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.15, 0.08), idx * 60);
    });
  }

  playVictory() {
    const melody = [523, 523, 523, 659, 784, 1046];
    melody.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'square', 0.2, 0.12), idx * 110);
    });
  }

  playLevelUp() {
    const notes = [440, 554, 659, 880, 1108, 1318];
    notes.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'square', 0.2, 0.14), idx * 90);
    });
  }

  playEncounter() {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => this.playTone(200 + i * 80, 'sawtooth', 0.08, 0.1), i * 40);
    }
  }
}

// --- Procedural JRPG Pixel Art Renderer ---
class DQSprites {
  static drawTile(ctx, type, x, y, tick = 0) {
    ctx.save();
    switch (type) {
      case 0: // Grass
        ctx.fillStyle = '#449922';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#66bb33';
        ctx.fillRect(x + 4, y + 8, 4, 6);
        ctx.fillRect(x + 18, y + 18, 4, 6);
        break;
      case 1: // Water (Animated Shimmer)
        ctx.fillStyle = '#0055aa';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#3388dd';
        const waveOff = Math.sin(tick * 0.05 + x) * 4;
        ctx.fillRect(x + 2, y + 8 + waveOff, 12, 3);
        ctx.fillRect(x + 16, y + 20 - waveOff, 12, 3);
        break;
      case 2: // Trees / Forest
        ctx.fillStyle = '#449922';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        // Tree Canopy
        ctx.fillStyle = '#115511';
        ctx.beginPath();
        ctx.arc(x + 16, y + 14, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#663311'; // Trunk
        ctx.fillRect(x + 14, y + 22, 4, 8);
        break;
      case 3: // Mountains
        ctx.fillStyle = '#886644';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#eeddcc'; // Snow peak
        ctx.beginPath();
        ctx.moveTo(x + 16, y + 4);
        ctx.lineTo(x + 6, y + 28);
        ctx.lineTo(x + 26, y + 28);
        ctx.closePath();
        ctx.fillStyle = '#664422';
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.fillRect(x + 14, y + 4, 4, 6);
        break;
      case 4: // Cobblestone Road
        ctx.fillStyle = '#bb9977';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#997755';
        ctx.fillRect(x + 2, y + 2, 12, 12);
        ctx.fillRect(x + 16, y + 16, 12, 12);
        break;
      case 5: // Castle Wall / Fortress
        ctx.fillStyle = '#999999';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#555555';
        ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillRect(x + 4, y + 4, 10, 8);
        ctx.fillRect(x + 18, y + 16, 10, 8);
        break;
      case 6: // Castle Throne Carpet
        ctx.fillStyle = '#cc1122'; // Royal Red
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#ffd700'; // Gold border
        ctx.fillRect(x, y, 4, TILE_SIZE);
        ctx.fillRect(x + 28, y, 4, TILE_SIZE);
        break;
      case 7: // Dungeon Entrance
        ctx.fillStyle = '#332211';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#000'; // Cave hole
        ctx.beginPath();
        ctx.arc(x + 16, y + 20, 10, Math.PI, 0);
        ctx.lineTo(x + 26, y + 32);
        ctx.lineTo(x + 6, y + 32);
        ctx.closePath();
        ctx.fill();
        break;
      case 8: // Treasure Chest
        ctx.fillStyle = '#449922'; // Grass base
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.fillStyle = '#cc8800'; // Chest box
        ctx.fillRect(x + 6, y + 10, 20, 16);
        ctx.fillStyle = '#ffd700'; // Gold lock
        ctx.fillRect(x + 14, y + 16, 4, 6);
        break;
    }
    ctx.restore();
  }

  static drawHero(ctx, x, y, dir = 'DOWN', isWalking = false) {
    ctx.save();
    // Helmet / Armor Palette
    const armor = '#3366cc'; // Royal Blue
    const skin = '#ffcc99';
    const gold = '#ffd700';
    const cape = '#cc2233';

    // Body
    ctx.fillStyle = armor;
    ctx.fillRect(x + 8, y + 14, 16, 12);

    // Cape
    ctx.fillStyle = cape;
    ctx.fillRect(x + 6, y + 16, 4, 10);
    ctx.fillRect(x + 22, y + 16, 4, 10);

    // Head / Helmet
    ctx.fillStyle = armor;
    ctx.fillRect(x + 8, y + 4, 16, 10);
    ctx.fillStyle = gold; // Crest
    ctx.fillRect(x + 14, y + 1, 4, 5);

    // Face
    if (dir === 'DOWN') {
      ctx.fillStyle = skin;
      ctx.fillRect(x + 10, y + 8, 12, 6);
      ctx.fillStyle = '#000'; // Eyes
      ctx.fillRect(x + 12, y + 10, 2, 2);
      ctx.fillRect(x + 18, y + 10, 2, 2);
    }

    // Shield & Sword
    ctx.fillStyle = gold; // Shield
    ctx.fillRect(x + 4, y + 14, 4, 10);
    ctx.fillStyle = '#ffffff'; // Sword blade
    ctx.fillRect(x + 24, y + 10, 3, 14);

    // Feet (Walk animation bounce)
    ctx.fillStyle = '#553311';
    const footOff = isWalking ? 2 : 0;
    ctx.fillRect(x + 8, y + 26 - footOff, 6, 6);
    ctx.fillRect(x + 18, y + 26 + footOff, 6, 6);

    ctx.restore();
  }

  static drawKing(ctx, x, y) {
    ctx.save();
    ctx.fillStyle = '#660099'; // Purple Robe
    ctx.fillRect(x + 6, y + 12, 20, 18);
    ctx.fillStyle = '#ffcc99'; // Face
    ctx.fillRect(x + 10, y + 6, 12, 8);
    ctx.fillStyle = '#ffd700'; // Crown
    ctx.fillRect(x + 8, y + 2, 16, 6);
    ctx.fillStyle = '#fff'; // Beard
    ctx.fillRect(x + 10, y + 14, 12, 8);
    ctx.restore();
  }

  static drawMonster(ctx, name, x, y, scale = 1.0, tick = 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    if (name === 'SLIME') {
      // Classic Blue Slime
      const wobble = Math.sin(tick * 0.1) * 3;
      ctx.fillStyle = '#0088ff';
      ctx.beginPath();
      ctx.moveTo(0, -25 + wobble);
      ctx.bezierCurveTo(-30, 15, -25, 25, 0, 25);
      ctx.bezierCurveTo(25, 25, 30, 15, 0, -25 + wobble);
      ctx.fill();
      ctx.strokeStyle = '#0044aa';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Big Eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(-8, 2, 6, 0, Math.PI * 2);
      ctx.arc(8, 2, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(-7, 2, 2.5, 0, Math.PI * 2);
      ctx.arc(7, 2, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Mouth
      ctx.strokeStyle = '#d82800';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 10, 6, 0, Math.PI);
      ctx.stroke();
    } else if (name === 'SKELETON') {
      // Skeleton Knight
      ctx.fillStyle = '#dddddd';
      ctx.fillRect(-10, -28, 20, 18); // Skull
      ctx.fillStyle = '#000';
      ctx.fillRect(-6, -20, 4, 5);
      ctx.fillRect(2, -20, 4, 5);
      // Ribs
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.strokeRect(-12, -8, 24, 18);
      // Sword & Shield
      ctx.fillStyle = '#aa0000';
      ctx.fillRect(-22, -10, 8, 22);
      ctx.fillStyle = '#aaa';
      ctx.fillRect(16, -20, 4, 30);
    } else if (name === 'DRAGON') {
      // Green Boss Dragon
      const breathe = Math.sin(tick * 0.08) * 4;
      ctx.fillStyle = '#009944'; // Dragon Green
      // Wings
      ctx.beginPath();
      ctx.moveTo(-45, -20);
      ctx.lineTo(-15, 10);
      ctx.lineTo(-40, 25);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(45, -20);
      ctx.lineTo(15, 10);
      ctx.lineTo(40, 25);
      ctx.fill();
      // Body & Head
      ctx.beginPath();
      ctx.arc(0, 5 + breathe, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#007733';
      ctx.fillRect(-16, -25 + breathe, 32, 24);
      // Horns
      ctx.fillStyle = '#ffd700';
      ctx.fillRect(-18, -35 + breathe, 6, 12);
      ctx.fillRect(12, -35 + breathe, 6, 12);
      // Yellow Glowing Eyes
      ctx.fillStyle = '#ffff00';
      ctx.fillRect(-10, -18 + breathe, 6, 6);
      ctx.fillRect(4, -18 + breathe, 6, 6);
      // Fangs
      ctx.fillStyle = '#fff';
      ctx.fillRect(-8, -4 + breathe, 4, 6);
      ctx.fillRect(4, -4 + breathe, 4, 6);
    }

    ctx.restore();
  }
}

// --- Main Dragon Quest RPG Game Engine ---
class DragonQuestGame {
  constructor() {
    this.canvas = document.getElementById('dqCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.sound = new DQSound();

    this.state = 'EXPLORE'; // 'EXPLORE', 'BATTLE', 'DIALOGUE', 'VICTORY', 'GAMEOVER'
    this.tick = 0;

    // Hero Stats
    this.hero = {
      name: '勇者 (HERO)',
      level: 1,
      hp: 35,
      maxHp: 35,
      mp: 15,
      maxMp: 15,
      attack: 16,
      defense: 12,
      gold: 50,
      exp: 0,
      nextExp: 20,
      x: 12 * TILE_SIZE,
      y: 8 * TILE_SIZE,
      targetX: 12 * TILE_SIZE,
      targetY: 8 * TILE_SIZE,
      dir: 'DOWN',
      isWalking: false,
      herbs: 2
    };

    // Battle State
    this.battle = {
      enemy: null,
      isPlayerTurn: true,
      turnInProgress: false
    };

    this.stepsToEncounter = 8 + Math.floor(Math.random() * 8);
    this.chestOpened = false;

    this.initMap();
    this.initUI();
    this.initEvents();
  }

  initMap() {
    // 24x16 Tilemap
    this.map = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,2,2,0,0,0,1,1,1,1,5,5,5,5,5,0,0,0,0,0,1],
      [1,0,2,2,2,0,0,4,4,4,4,4,4,5,6,6,6,5,0,2,2,0,0,1],
      [1,0,2,0,0,0,0,4,0,0,0,0,4,5,6,6,6,5,0,2,2,2,0,1],
      [1,0,0,0,0,0,0,4,0,8,0,0,4,5,5,4,5,5,0,0,2,2,0,1],
      [1,0,0,3,3,0,0,4,4,4,4,4,4,0,0,4,0,0,0,0,0,0,0,1],
      [1,0,3,3,3,3,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,1],
      [1,0,3,3,3,3,0,0,0,4,4,4,4,4,4,4,0,0,3,3,0,0,0,1],
      [1,0,0,3,3,0,0,0,0,0,0,0,4,0,0,0,0,3,3,3,3,0,0,1],
      [1,0,0,0,0,0,2,2,0,0,0,0,4,0,0,0,0,3,3,7,3,0,0,1],
      [1,0,0,0,0,2,2,2,2,0,0,0,4,4,4,0,0,0,3,3,0,0,0,1],
      [1,1,0,0,0,2,2,2,2,0,0,0,0,0,4,4,0,0,0,0,0,0,1,1],
      [1,1,1,0,0,0,2,2,0,0,0,0,0,0,0,4,4,0,0,0,0,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,3,3,0,0,0,0,4,4,4,0,1,1,1,1],
      [1,1,1,1,1,0,0,0,0,3,3,3,3,0,0,0,0,0,4,4,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
  }

  isSolid(col, row) {
    if (col < 0 || col >= MAP_COLS || row < 0 || row >= MAP_ROWS) return true;
    const tile = this.map[row][col];
    // 1: Water, 3: Mountains, 5: Castle Wall
    return tile === 1 || tile === 3 || tile === 5;
  }

  start() {
    this.sound.init();
    this.hero.hp = this.hero.maxHp;
    this.hero.mp = this.hero.maxMp;
    this.state = 'EXPLORE';
    this.updateHUD();
    document.getElementById('gameModal').classList.add('hidden');
    this.lastTime = performance.now();
  }

  moveHero(dx, dy, dirName) {
    if (this.state !== 'EXPLORE' || this.hero.isWalking) return;

    this.hero.dir = dirName;
    const nextCol = Math.floor(this.hero.x / TILE_SIZE) + dx;
    const nextRow = Math.floor(this.hero.y / TILE_SIZE) + dy;

    // Check Solid Obstacles
    if (this.isSolid(nextCol, nextRow)) return;

    // Target position
    this.hero.targetX = nextCol * TILE_SIZE;
    this.hero.targetY = nextRow * TILE_SIZE;
    this.hero.isWalking = true;
    this.sound.playStep();

    // Check Tile Interactivity
    const tile = this.map[nextRow][nextCol];

    // Treasure Chest (Tile 8)
    if (tile === 8 && !this.chestOpened) {
      this.chestOpened = true;
      this.map[nextRow][nextCol] = 4; // Road
      this.hero.gold += 100;
      this.hero.herbs += 2;
      this.showDialogue('寶箱 (CHEST)', '打開了寶箱！獲得了 100 塊金幣與 2 株藥草！');
      this.sound.playHeal();
      return;
    }

    // Dungeon Cave Entrance (Tile 7) -> Final Boss Encounter!
    if (tile === 7) {
      this.startBattle('DRAGON');
      return;
    }

    // Random Wilderness Encounter Check (Grass / Forest / Road)
    this.stepsToEncounter--;
    if (this.stepsToEncounter <= 0) {
      this.stepsToEncounter = 12 + Math.floor(Math.random() * 10);
      const enemyType = Math.random() > 0.4 ? 'SLIME' : 'SKELETON';
      this.startBattle(enemyType);
    }
  }

  showDialogue(speaker, text) {
    this.state = 'DIALOGUE';
    document.getElementById('dialogueSpeaker').innerText = speaker;
    document.getElementById('dialogueText').innerText = text;
    document.getElementById('dialogueBox').classList.remove('hidden');
  }

  closeDialogue() {
    this.state = 'EXPLORE';
    document.getElementById('dialogueBox').classList.add('hidden');
  }

  startBattle(enemyType) {
    this.state = 'BATTLE';
    this.sound.playEncounter();

    const enemies = {
      SLIME: { name: '史萊姆 (SLIME)', hp: 20, maxHp: 20, attack: 10, defense: 6, exp: 12, gold: 15, scale: 1.2 },
      SKELETON: { name: '骷髏戰士 (SKELETON)', hp: 45, maxHp: 45, attack: 22, defense: 14, exp: 35, gold: 40, scale: 1.4 },
      DRAGON: { name: '惡龍 (DARK DRAGON)', hp: 160, maxHp: 160, attack: 38, defense: 22, exp: 200, gold: 500, scale: 1.8 }
    };

    this.battle.enemy = JSON.parse(JSON.stringify(enemies[enemyType]));
    this.battle.isPlayerTurn = true;
    this.battle.turnInProgress = false;

    document.getElementById('enemyName').innerText = this.battle.enemy.name;
    document.getElementById('enemyHpFill').style.width = '100%';
    document.getElementById('battleLogText').innerText = `${this.battle.enemy.name} 出現了！勇者該如何行動？`;
    document.getElementById('battleOverlay').classList.remove('hidden');
    document.getElementById('magicMenu').classList.add('hidden');
  }

  playerAttack() {
    if (!this.battle.isPlayerTurn || this.battle.turnInProgress) return;
    this.battle.turnInProgress = true;

    this.sound.playAttack();
    // Damage calculation: (Hero Attack - Enemy Def/2)/2 +- variance
    const baseDmg = Math.max(1, Math.floor((this.hero.attack - this.battle.enemy.defense / 2) / 2));
    const isCrit = Math.random() < 0.15; // 15% Critical Hit
    const dmg = isCrit ? baseDmg * 2 + 6 : baseDmg + Math.floor(Math.random() * 4);

    this.battle.enemy.hp = Math.max(0, this.battle.enemy.hp - dmg);
    this.updateBattleUI();

    const log = document.getElementById('battleLogText');
    log.innerText = isCrit
      ? `★ 會心一擊！勇者對 ${this.battle.enemy.name} 造成了 ${dmg} 點重創！`
      : `勇者發動攻擊！對 ${this.battle.enemy.name} 造成了 ${dmg} 點傷害！`;

    this.checkBattleEnd();
  }

  castSpell(spellName) {
    if (!this.battle.isPlayerTurn || this.battle.turnInProgress) return;

    if (spellName === 'HEAL') {
      if (this.hero.mp < 3) {
        document.getElementById('battleLogText').innerText = 'MP 不足，無法施展霍伊米！';
        return;
      }
      this.hero.mp -= 3;
      const heal = 35;
      this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + heal);
      this.sound.playHeal();
      this.updateHUD();
      document.getElementById('battleLogText').innerText = `勇者施展了【霍伊米】！恢復了 ${heal} 點生命值！`;
    } else if (spellName === 'FIRE') {
      if (this.hero.mp < 4) {
        document.getElementById('battleLogText').innerText = 'MP 不足，無法施展美拉！';
        return;
      }
      this.hero.mp -= 4;
      const dmg = 32 + Math.floor(Math.random() * 8);
      this.battle.enemy.hp = Math.max(0, this.battle.enemy.hp - dmg);
      this.sound.playMagic();
      this.updateHUD();
      this.updateBattleUI();
      document.getElementById('battleLogText').innerText = `勇者施展了【美拉火球】！烈焰對敵方造成了 ${dmg} 點魔法傷害！`;
    } else if (spellName === 'THUNDER') {
      if (this.hero.mp < 8) {
        document.getElementById('battleLogText').innerText = 'MP 不足，無法施展萊丁！';
        return;
      }
      this.hero.mp -= 8;
      const dmg = 85 + Math.floor(Math.random() * 15);
      this.battle.enemy.hp = Math.max(0, this.battle.enemy.hp - dmg);
      this.sound.playMagic();
      this.updateHUD();
      this.updateBattleUI();
      document.getElementById('battleLogText').innerText = `勇者召喚了【萊丁神雷】！萬雷劈落造成 ${dmg} 點毀滅傷害！`;
    }

    document.getElementById('magicMenu').classList.add('hidden');
    this.battle.turnInProgress = true;
    this.checkBattleEnd();
  }

  useHerb() {
    if (!this.battle.isPlayerTurn || this.battle.turnInProgress) return;
    if (this.hero.herbs <= 0) {
      document.getElementById('battleLogText').innerText = '背包中已無藥草！';
      return;
    }
    this.hero.herbs--;
    const heal = 30;
    this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + heal);
    this.sound.playHeal();
    this.updateHUD();
    document.getElementById('battleLogText').innerText = `勇者使用了【藥草】！恢復了 ${heal} 點 HP！(剩餘: ${this.hero.herbs})`;
    this.battle.turnInProgress = true;
    this.checkBattleEnd();
  }

  runAway() {
    if (!this.battle.isPlayerTurn || this.battle.turnInProgress) return;
    if (this.battle.enemy.name.includes('DRAGON')) {
      document.getElementById('battleLogText').innerText = '巨龍的威壓封鎖了退路！無法逃跑！';
      return;
    }
    document.getElementById('battleLogText').innerText = '勇者成功逃跑了！';
    setTimeout(() => {
      document.getElementById('battleOverlay').classList.add('hidden');
      this.state = 'EXPLORE';
    }, 800);
  }

  checkBattleEnd() {
    if (this.battle.enemy.hp <= 0) {
      // Victory!
      this.sound.playVictory();
      this.hero.exp += this.battle.enemy.exp;
      this.hero.gold += this.battle.enemy.gold;
      document.getElementById('battleLogText').innerText = `擊敗了 ${this.battle.enemy.name}！獲得了 ${this.battle.enemy.exp} EXP 與 ${this.battle.enemy.gold} G！`;

      setTimeout(() => {
        // Level up check
        if (this.hero.exp >= this.hero.nextExp) {
          this.levelUp();
        } else if (this.battle.enemy.name.includes('DRAGON')) {
          this.questVictory();
        } else {
          document.getElementById('battleOverlay').classList.add('hidden');
          this.state = 'EXPLORE';
          this.updateHUD();
        }
      }, 1400);
    } else {
      // Enemy Turn
      setTimeout(() => this.enemyTurn(), 1000);
    }
  }

  enemyTurn() {
    const e = this.battle.enemy;
    this.sound.playHit();

    // Enemy Damage calculation
    const baseDmg = Math.max(1, Math.floor((e.attack - this.hero.defense / 2) / 2));
    const dmg = baseDmg + Math.floor(Math.random() * 4);
    this.hero.hp = Math.max(0, this.hero.hp - dmg);
    this.updateHUD();

    document.getElementById('battleLogText').innerText = `${e.name} 發動了猛烈攻擊！勇者受到了 ${dmg} 點傷害！`;

    if (this.hero.hp <= 0) {
      setTimeout(() => this.gameOver(), 1000);
    } else {
      this.battle.isPlayerTurn = true;
      this.battle.turnInProgress = false;
    }
  }

  levelUp() {
    this.sound.playLevelUp();
    this.hero.level++;
    this.hero.maxHp += 12;
    this.hero.maxMp += 8;
    this.hero.attack += 7;
    this.hero.defense += 5;
    this.hero.hp = this.hero.maxHp;
    this.hero.mp = this.hero.maxMp;
    this.hero.nextExp = Math.floor(this.hero.nextExp * 2.2);

    document.getElementById('battleLogText').innerText = `★ 等級提升！勇者升到了 LV ${this.hero.level}！HP與MP已完全恢復！`;
    this.updateHUD();

    setTimeout(() => {
      document.getElementById('battleOverlay').classList.add('hidden');
      this.state = 'EXPLORE';
    }, 1500);
  }

  questVictory() {
    this.state = 'VICTORY';
    document.getElementById('battleOverlay').classList.add('hidden');
    const modal = document.getElementById('gameModal');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');
    const btn = document.getElementById('startBtn');

    title.innerText = '★ 王國和平降臨 ★';
    title.style.color = '#ffd700';
    desc.innerText = `勇者成功討伐了黑暗巨龍！拯救了王國與公主！你是真正的傳奇羅德勇者！(最終等級: LV ${this.hero.level}, 金幣: ${this.hero.gold} G)`;
    btn.innerText = '再次冒險 (REPLAY)';
    modal.classList.remove('hidden');
  }

  gameOver() {
    this.state = 'GAMEOVER';
    document.getElementById('battleOverlay').classList.add('hidden');
    const modal = document.getElementById('gameModal');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');
    const btn = document.getElementById('startBtn');

    title.innerText = '勇者陣亡...';
    title.style.color = '#ff3344';
    desc.innerText = '眼前的世界陷入一片黑暗... 勇者的冒險在此畫下句點。';
    btn.innerText = '重新復活 (REVIVE)';
    modal.classList.remove('hidden');
  }

  updateBattleUI() {
    if (!this.battle.enemy) return;
    const hpPct = Math.max(0, (this.battle.enemy.hp / this.battle.enemy.maxHp) * 100);
    document.getElementById('enemyHpFill').style.width = `${hpPct}%`;
  }

  updateHUD() {
    document.getElementById('hudLvl').innerText = this.hero.level;
    document.getElementById('hudHP').innerText = `${this.hero.hp} / ${this.hero.maxHp}`;
    document.getElementById('hudMP').innerText = `${this.hero.mp} / ${this.hero.maxMp}`;
    document.getElementById('hudGold').innerText = `${this.hero.gold} G`;
    document.getElementById('hudExp').innerText = `${this.hero.exp} / ${this.hero.nextExp}`;

    const hpPct = Math.max(0, (this.hero.hp / this.hero.maxHp) * 100);
    const mpPct = Math.max(0, (this.hero.mp / this.hero.maxMp) * 100);
    document.getElementById('hpFill').style.width = `${hpPct}%`;
    document.getElementById('mpFill').style.width = `${mpPct}%`;
  }

  update(dt) {
    this.tick++;

    // Smooth movement interpolation
    if (this.hero.isWalking) {
      const speed = 4;
      if (this.hero.x < this.hero.targetX) this.hero.x = Math.min(this.hero.targetX, this.hero.x + speed);
      else if (this.hero.x > this.hero.targetX) this.hero.x = Math.max(this.hero.targetX, this.hero.x - speed);

      if (this.hero.y < this.hero.targetY) this.hero.y = Math.min(this.hero.targetY, this.hero.y + speed);
      else if (this.hero.y > this.hero.targetY) this.hero.y = Math.max(this.hero.targetY, this.hero.y - speed);

      if (this.hero.x === this.hero.targetX && this.hero.y === this.hero.targetY) {
        this.hero.isWalking = false;
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.state === 'BATTLE') {
      // Draw Battle Background
      this.ctx.fillStyle = '#0a0a14';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      // Floor arena grid
      this.ctx.strokeStyle = '#222244';
      this.ctx.lineWidth = 1;
      for (let y = 300; y < 512; y += 20) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(768, y);
        this.ctx.stroke();
      }

      // Draw Monster Sprite in Arena Center
      if (this.battle.enemy) {
        const cx = this.canvas.width / 2;
        const cy = 230;
        const monsterKey = this.battle.enemy.name.includes('SLIME') ? 'SLIME'
          : this.battle.enemy.name.includes('SKELETON') ? 'SKELETON' : 'DRAGON';
        DQSprites.drawMonster(this.ctx, monsterKey, cx, cy, this.battle.enemy.scale, this.tick);
      }
      return;
    }

    // Draw Overworld Tilemap
    for (let r = 0; r < MAP_ROWS; r++) {
      for (let c = 0; c < MAP_COLS; c++) {
        DQSprites.drawTile(this.ctx, this.map[r][c], c * TILE_SIZE, r * TILE_SIZE, this.tick);
      }
    }

    // Draw King NPC (Row 3, Col 15)
    DQSprites.drawKing(this.ctx, 15 * TILE_SIZE, 3 * TILE_SIZE);

    // Draw Hero Character
    DQSprites.drawHero(this.ctx, this.hero.x, this.hero.y, this.hero.dir, this.hero.isWalking);
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

    // Battle Buttons
    document.getElementById('btnAttack').addEventListener('click', () => this.playerAttack());
    document.getElementById('btnMagic').addEventListener('click', () => {
      document.getElementById('magicMenu').classList.toggle('hidden');
    });
    document.getElementById('btnItem').addEventListener('click', () => this.useHerb());
    document.getElementById('btnRun').addEventListener('click', () => this.runAway());

    // Spells
    document.getElementById('btnSpellHeal').addEventListener('click', () => this.castSpell('HEAL'));
    document.getElementById('btnSpellFire').addEventListener('click', () => this.castSpell('FIRE'));
    document.getElementById('btnSpellThunder').addEventListener('click', () => this.castSpell('THUNDER'));
    document.getElementById('btnSpellBack').addEventListener('click', () => {
      document.getElementById('magicMenu').classList.add('hidden');
    });
  }

  initEvents() {
    window.addEventListener('keydown', e => {
      if (this.state === 'DIALOGUE') {
        if (e.code === 'Space' || e.code === 'Enter') {
          this.closeDialogue();
        }
        return;
      }

      if (this.state === 'EXPLORE') {
        switch (e.code) {
          case 'ArrowUp':
          case 'KeyW':
            this.moveHero(0, -1, 'UP');
            break;
          case 'ArrowDown':
          case 'KeyS':
            this.moveHero(0, 1, 'DOWN');
            break;
          case 'ArrowLeft':
          case 'KeyA':
            this.moveHero(-1, 0, 'LEFT');
            break;
          case 'ArrowRight':
          case 'KeyD':
            this.moveHero(1, 0, 'RIGHT');
            break;
          case 'KeyE':
          case 'Space':
            // Interact with King
            const col = Math.floor(this.hero.x / TILE_SIZE);
            const row = Math.floor(this.hero.y / TILE_SIZE);
            if (col >= 14 && col <= 16 && row >= 2 && row <= 4) {
              this.showDialogue('國王 (KING)', '勇者啊！討伐南方洞窟中的巨龍，將和平帶回羅德大地吧！');
            }
            break;
        }
      }
    });

    // Mobile Gamepad
    const bindPad = (id, dx, dy, dir) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          this.moveHero(dx, dy, dir);
        });
      }
    };
    bindPad('mBtnUp', 0, -1, 'UP');
    bindPad('mBtnDown', 0, 1, 'DOWN');
    bindPad('mBtnLeft', -1, 0, 'LEFT');
    bindPad('mBtnRight', 1, 0, 'RIGHT');

    document.getElementById('mBtnAction').addEventListener('click', () => {
      if (this.state === 'DIALOGUE') this.closeDialogue();
      else if (this.state === 'BATTLE') this.playerAttack();
    });
    document.getElementById('mBtnCancel').addEventListener('click', () => {
      if (this.state === 'BATTLE') this.runAway();
    });
  }
}

// Instantiate and start rendering loop
window.addEventListener('DOMContentLoaded', () => {
  const game = new DragonQuestGame();
  game.loop();
});
