/**
 * CYBER TETRIS 2026 - Pure JavaScript Game Engine
 * Complies with Tetris Guideline: 7-Bag, SRS Wall Kicks, Ghost Piece, Hold, Lock Delay.
 */

// --- Constants & Tetromino Definitions ---
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30; // 300x600 canvas

const SHAPES = {
  I: {
    color: '#00f0ff', // Cyan
    glow: 'rgba(0, 240, 255, 0.8)',
    matrices: [
      [[0,0,0,0], [1,1,1,1], [0,0,0,0], [0,0,0,0]],
      [[0,0,1,0], [0,0,1,0], [0,0,1,0], [0,0,1,0]],
      [[0,0,0,0], [0,0,0,0], [1,1,1,1], [0,0,0,0]],
      [[0,1,0,0], [0,1,0,0], [0,1,0,0], [0,1,0,0]]
    ]
  },
  J: {
    color: '#0055ff', // Blue
    glow: 'rgba(0, 85, 255, 0.8)',
    matrices: [
      [[1,0,0], [1,1,1], [0,0,0]],
      [[0,1,1], [0,1,0], [0,1,0]],
      [[0,0,0], [1,1,1], [0,0,1]],
      [[0,1,0], [0,1,0], [1,1,0]]
    ]
  },
  L: {
    color: '#ff9900', // Orange
    glow: 'rgba(255, 153, 0, 0.8)',
    matrices: [
      [[0,0,1], [1,1,1], [0,0,0]],
      [[0,1,0], [0,1,0], [0,1,1]],
      [[0,0,0], [1,1,1], [1,0,0]],
      [[1,1,0], [0,1,0], [0,1,0]]
    ]
  },
  O: {
    color: '#ffe600', // Yellow
    glow: 'rgba(255, 230, 0, 0.8)',
    matrices: [
      [[1,1], [1,1]],
      [[1,1], [1,1]],
      [[1,1], [1,1]],
      [[1,1], [1,1]]
    ]
  },
  S: {
    color: '#00ff66', // Green
    glow: 'rgba(0, 255, 102, 0.8)',
    matrices: [
      [[0,1,1], [1,1,0], [0,0,0]],
      [[0,1,0], [0,1,1], [0,0,1]],
      [[0,0,0], [0,1,1], [1,1,0]],
      [[1,0,0], [1,1,0], [0,1,0]]
    ]
  },
  T: {
    color: '#aa00ff', // Purple
    glow: 'rgba(170, 0, 255, 0.8)',
    matrices: [
      [[0,1,0], [1,1,1], [0,0,0]],
      [[0,1,0], [0,1,1], [0,1,0]],
      [[0,0,0], [1,1,1], [0,1,0]],
      [[0,1,0], [1,1,0], [0,1,0]]
    ]
  },
  Z: {
    color: '#ff0055', // Red
    glow: 'rgba(255, 0, 85, 0.8)',
    matrices: [
      [[1,1,0], [0,1,1], [0,0,0]],
      [[0,0,1], [0,1,1], [0,1,0]],
      [[0,0,0], [1,1,0], [0,1,1]],
      [[0,1,0], [1,1,0], [1,0,0]]
    ]
  }
};

// SRS Wall Kick Offsets for J, L, S, T, Z
const JLSTZ_KICKS = {
  '0->1': [[0,0], [-1,0], [-1,1], [0,-2], [-1,-2]],
  '1->0': [[0,0], [1,0], [1,-1], [0,2], [1,2]],
  '1->2': [[0,0], [1,0], [1,-1], [0,2], [1,2]],
  '2->1': [[0,0], [-1,0], [-1,1], [0,-2], [-1,-2]],
  '2->3': [[0,0], [1,0], [1,1], [0,-2], [1,-2]],
  '3->2': [[0,0], [-1,0], [-1,-1], [0,2], [-1,2]],
  '3->0': [[0,0], [-1,0], [-1,-1], [0,2], [-1,2]],
  '0->3': [[0,0], [1,0], [1,1], [0,-2], [1,-2]],
};

// SRS Wall Kick Offsets for I piece
const I_KICKS = {
  '0->1': [[0,0], [-2,0], [1,0], [-2,-1], [1,2]],
  '1->0': [[0,0], [2,0], [-1,0], [2,1], [-1,-2]],
  '1->2': [[0,0], [-1,0], [2,0], [-1,2], [2,-1]],
  '2->1': [[0,0], [1,0], [-2,0], [1,-2], [-2,1]],
  '2->3': [[0,0], [2,0], [-1,0], [2,1], [-1,-2]],
  '3->2': [[0,0], [-2,0], [1,0], [-2,-1], [1,2]],
  '3->0': [[0,0], [1,0], [-2,0], [1,-2], [-2,1]],
  '0->3': [[0,0], [-1,0], [2,0], [-1,2], [2,-1]],
};

// --- Web Audio Synthesizer (Zero External Dependencies) ---
class SoundController {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  initContext() {
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
      this.initContext();
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
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playMove() {
    this.playTone(220, 'triangle', 0.05, 0.05);
  }

  playRotate() {
    this.playTone(440, 'sine', 0.08, 0.08);
  }

  playDrop() {
    this.playTone(180, 'sawtooth', 0.07, 0.08);
  }

  playHardDrop() {
    this.playTone(120, 'square', 0.12, 0.15);
  }

  playHold() {
    this.playTone(330, 'sine', 0.1, 0.08);
  }

  playClear(lines) {
    if (!this.enabled) return;
    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    for (let i = 0; i < lines; i++) {
      setTimeout(() => {
        this.playTone(freqs[i] || 1200, 'square', 0.18, 0.12);
      }, i * 60);
    }
  }

  playTetris() {
    if (!this.enabled) return;
    const melody = [523, 659, 784, 1046, 1318];
    melody.forEach((f, idx) => {
      setTimeout(() => {
        this.playTone(f, 'sawtooth', 0.25, 0.15);
      }, idx * 70);
    });
  }

  playGameOver() {
    if (!this.enabled) return;
    const notes = [440, 392, 349, 311, 261];
    notes.forEach((f, idx) => {
      setTimeout(() => {
        this.playTone(f, 'sawtooth', 0.3, 0.12);
      }, idx * 120);
    });
  }
}

// --- Particle System for Visual Effects ---
class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  createClearEffect(row, color) {
    const count = 30;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * (COLS * BLOCK_SIZE),
        y: row * BLOCK_SIZE + Math.random() * BLOCK_SIZE,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.8) * 6,
        size: Math.random() * 4 + 2,
        color: color,
        alpha: 1.0,
        decay: Math.random() * 0.03 + 0.02
      });
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15; // Gravity
      p.alpha -= p.decay;
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw(ctx) {
    ctx.save();
    for (const p of this.particles) {
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    ctx.restore();
  }
}

// --- Main Tetris Game Engine ---
class TetrisGame {
  constructor() {
    this.canvas = document.getElementById('tetrisCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.holdCanvas = document.getElementById('holdCanvas');
    this.holdCtx = this.holdCanvas.getContext('2d');
    this.nextCanvas = document.getElementById('nextCanvas');
    this.nextCtx = this.nextCanvas.getContext('2d');

    this.sound = new SoundController();
    this.particles = new ParticleSystem();

    // Game state
    this.board = this.createBoard();
    this.bag = [];
    this.nextPieces = [];
    this.currentPiece = null;
    this.holdPiece = null;
    this.canHold = true;

    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.combo = -1;
    this.lastClearWasTetris = false;
    this.highScore = parseInt(localStorage.getItem('cyber_tetris_highscore') || '0', 10);

    this.isGameOver = false;
    this.isPaused = false;
    this.isPlaying = false;

    this.dropCounter = 0;
    this.dropInterval = 1000;
    this.lastTime = 0;

    this.lockDelay = 500;
    this.lockTimer = 0;
    this.isLocking = false;

    this.initUI();
    this.initEvents();
  }

  createBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  // 7-Bag Randomizer
  refillBag() {
    const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }
    this.bag.push(...pieces);
  }

  getNextType() {
    if (this.bag.length < 7) {
      this.refillBag();
    }
    return this.bag.shift();
  }

  spawnPiece(type = null) {
    const pieceType = type || this.nextPieces.shift();
    while (this.nextPieces.length < 3) {
      this.nextPieces.push(this.getNextType());
    }

    const shapeData = SHAPES[pieceType];
    const initialMatrix = shapeData.matrices[0];
    const startX = Math.floor((COLS - initialMatrix[0].length) / 2);
    const startY = 0;

    this.currentPiece = {
      type: pieceType,
      matrix: initialMatrix,
      rotation: 0,
      x: startX,
      y: startY,
      color: shapeData.color,
      glow: shapeData.glow
    };

    this.canHold = true;
    this.isLocking = false;
    this.lockTimer = 0;

    // Check immediate game over (spawn collision)
    if (this.checkCollision(this.currentPiece.x, this.currentPiece.y, this.currentPiece.matrix)) {
      this.gameOver();
    }

    this.drawNextQueue();
    this.drawHold();
  }

  checkCollision(px, py, matrix) {
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] !== 0) {
          const nx = px + c;
          const ny = py + r;
          if (nx < 0 || nx >= COLS || ny >= ROWS) {
            return true;
          }
          if (ny >= 0 && this.board[ny][nx] !== 0) {
            return true;
          }
        }
      }
    }
    return false;
  }

  moveLeft() {
    if (!this.currentPiece || this.isGameOver || this.isPaused) return;
    if (!this.checkCollision(this.currentPiece.x - 1, this.currentPiece.y, this.currentPiece.matrix)) {
      this.currentPiece.x--;
      this.sound.playMove();
      if (this.isLocking) this.lockTimer = 0;
    }
  }

  moveRight() {
    if (!this.currentPiece || this.isGameOver || this.isPaused) return;
    if (!this.checkCollision(this.currentPiece.x + 1, this.currentPiece.y, this.currentPiece.matrix)) {
      this.currentPiece.x++;
      this.sound.playMove();
      if (this.isLocking) this.lockTimer = 0;
    }
  }

  softDrop() {
    if (!this.currentPiece || this.isGameOver || this.isPaused) return;
    if (!this.checkCollision(this.currentPiece.x, this.currentPiece.y + 1, this.currentPiece.matrix)) {
      this.currentPiece.y++;
      this.score += 1;
      this.dropCounter = 0;
      this.sound.playDrop();
      this.updateHUD();
    } else {
      this.isLocking = true;
    }
  }

  hardDrop() {
    if (!this.currentPiece || this.isGameOver || this.isPaused) return;
    let dropDist = 0;
    while (!this.checkCollision(this.currentPiece.x, this.currentPiece.y + 1, this.currentPiece.matrix)) {
      this.currentPiece.y++;
      dropDist++;
    }
    this.score += dropDist * 2;
    this.sound.playHardDrop();
    this.lockPiece();
    this.updateHUD();
  }

  rotate(dir = 1) { // 1 = CW, -1 = CCW
    if (!this.currentPiece || this.isGameOver || this.isPaused) return;
    if (this.currentPiece.type === 'O') return; // O piece does not rotate

    const currentRot = this.currentPiece.rotation;
    const nextRot = (currentRot + dir + 4) % 4;
    const nextMatrix = SHAPES[this.currentPiece.type].matrices[nextRot];

    // SRS Wall kick resolution
    const kickKey = `${currentRot}->${nextRot}`;
    const kicks = (this.currentPiece.type === 'I') ? I_KICKS[kickKey] : JLSTZ_KICKS[kickKey];

    if (kicks) {
      for (const [ox, oy] of kicks) {
        // SRS Y offset: positive is UP in guideline, so subtract for canvas Y
        const testX = this.currentPiece.x + ox;
        const testY = this.currentPiece.y - oy;
        if (!this.checkCollision(testX, testY, nextMatrix)) {
          this.currentPiece.x = testX;
          this.currentPiece.y = testY;
          this.currentPiece.rotation = nextRot;
          this.currentPiece.matrix = nextMatrix;
          this.sound.playRotate();
          if (this.isLocking) this.lockTimer = 0;
          return;
        }
      }
    }
  }

  hold() {
    if (!this.currentPiece || !this.canHold || this.isGameOver || this.isPaused) return;
    const currentType = this.currentPiece.type;
    this.sound.playHold();

    if (this.holdPiece === null) {
      this.holdPiece = currentType;
      this.spawnPiece();
    } else {
      const prevHold = this.holdPiece;
      this.holdPiece = currentType;
      this.spawnPiece(prevHold);
    }
    this.canHold = false;
    this.drawHold();
  }

  getGhostY() {
    if (!this.currentPiece) return 0;
    let ghostY = this.currentPiece.y;
    while (!this.checkCollision(this.currentPiece.x, ghostY + 1, this.currentPiece.matrix)) {
      ghostY++;
    }
    return ghostY;
  }

  lockPiece() {
    const p = this.currentPiece;
    for (let r = 0; r < p.matrix.length; r++) {
      for (let c = 0; c < p.matrix[r].length; c++) {
        if (p.matrix[r][c] !== 0) {
          const by = p.y + r;
          const bx = p.x + c;
          if (by >= 0 && by < ROWS && bx >= 0 && bx < COLS) {
            this.board[by][bx] = p.color;
          }
        }
      }
    }

    this.clearLines();
    this.spawnPiece();
  }

  clearLines() {
    let clearedCount = 0;
    for (let r = ROWS - 1; r >= 0; r--) {
      if (this.board[r].every(cell => cell !== 0)) {
        clearedCount++;
        this.particles.createClearEffect(r, '#00f0ff');
        this.board.splice(r, 1);
        this.board.unshift(Array(COLS).fill(0));
        r++; // Recheck same row index
      }
    }

    if (clearedCount > 0) {
      this.combo++;
      this.lines += clearedCount;

      // Base scoring
      const baseScores = [0, 100, 300, 500, 800];
      let lineScore = (baseScores[clearedCount] || 800) * this.level;

      // Back-to-Back Tetris
      if (clearedCount === 4) {
        if (this.lastClearWasTetris) {
          lineScore = Math.floor(lineScore * 1.5);
        }
        this.lastClearWasTetris = true;
        this.sound.playTetris();
      } else {
        this.lastClearWasTetris = false;
        this.sound.playClear(clearedCount);
      }

      // Combo bonus
      if (this.combo > 0) {
        lineScore += 50 * this.combo * this.level;
      }

      this.score += lineScore;

      // Level progression (every 10 lines)
      this.level = Math.floor(this.lines / 10) + 1;
      // Faster drop interval per level
      this.dropInterval = Math.max(100, 1000 - (this.level - 1) * 85);

      if (this.score > this.highScore) {
        this.highScore = this.score;
        localStorage.setItem('cyber_tetris_highscore', this.highScore.toString());
      }
    } else {
      this.combo = -1;
    }

    this.updateHUD();
  }

  gameOver() {
    this.isGameOver = true;
    this.isPlaying = false;
    this.sound.playGameOver();
    const overlay = document.getElementById('overlayScreen');
    const title = document.getElementById('overlayTitle');
    const msg = document.getElementById('overlayMessage');
    title.innerText = 'MISSION FAILED';
    title.style.color = '#ff0055';
    msg.innerText = `FINAL SCORE: ${this.score} | LINES: ${this.lines}`;
    document.getElementById('startBtn').innerText = 'RETRY MISSION';
    overlay.classList.remove('hidden');
  }

  start() {
    this.board = this.createBoard();
    this.bag = [];
    this.nextPieces = [];
    this.refillBag();
    for (let i = 0; i < 3; i++) {
      this.nextPieces.push(this.getNextType());
    }

    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.combo = -1;
    this.lastClearWasTetris = false;
    this.dropInterval = 1000;
    this.isGameOver = false;
    this.isPaused = false;
    this.isPlaying = true;
    this.holdPiece = null;
    this.canHold = true;

    this.spawnPiece();
    this.updateHUD();

    document.getElementById('overlayScreen').classList.add('hidden');
    this.lastTime = performance.now();
  }

  togglePause() {
    if (!this.isPlaying || this.isGameOver) return;
    this.isPaused = !this.isPaused;
    const overlay = document.getElementById('overlayScreen');
    const title = document.getElementById('overlayTitle');
    const msg = document.getElementById('overlayMessage');
    const btn = document.getElementById('pauseBtn');

    if (this.isPaused) {
      title.innerText = 'MISSION PAUSED';
      title.style.color = '#00f0ff';
      msg.innerText = 'PRESS [P] OR RESUME TO CONTINUE';
      document.getElementById('startBtn').innerText = 'RESUME';
      btn.innerText = 'RESUME [P]';
      overlay.classList.remove('hidden');
    } else {
      btn.innerText = 'PAUSE [P]';
      overlay.classList.remove('hidden');
      overlay.classList.add('hidden');
      this.lastTime = performance.now();
    }
  }

  updateHUD() {
    document.getElementById('scoreDisplay').innerText = String(this.score).padStart(7, '0');
    document.getElementById('highScoreDisplay').innerText = String(this.highScore).padStart(7, '0');
    document.getElementById('levelDisplay').innerText = this.level;
    document.getElementById('linesDisplay').innerText = this.lines;
    document.getElementById('comboDisplay').innerText = Math.max(0, this.combo);
  }

  drawBlock(ctx, x, y, color, isGhost = false) {
    const px = x * BLOCK_SIZE;
    const py = y * BLOCK_SIZE;

    ctx.save();
    if (isGhost) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(px + 1, py + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
    } else {
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      ctx.fillRect(px + 1, py + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);

      // Inner highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(px + 2, py + 2, BLOCK_SIZE - 4, 3);
      ctx.fillRect(px + 2, py + 2, 3, BLOCK_SIZE - 4);
    }
    ctx.restore();
  }

  drawMiniMatrix(ctx, matrix, color, canvasWidth, canvasHeight) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    if (!matrix) return;
    const mRows = matrix.length;
    const mCols = matrix[0].length;
    const miniSize = 20;
    const offX = Math.floor((canvasWidth - mCols * miniSize) / 2);
    const offY = Math.floor((canvasHeight - mRows * miniSize) / 2);

    for (let r = 0; r < mRows; r++) {
      for (let c = 0; c < mCols; c++) {
        if (matrix[r][c] !== 0) {
          ctx.save();
          ctx.fillStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 4;
          ctx.fillRect(offX + c * miniSize + 1, offY + r * miniSize + 1, miniSize - 2, miniSize - 2);
          ctx.restore();
        }
      }
    }
  }

  drawHold() {
    if (!this.holdPiece) {
      this.holdCtx.clearRect(0, 0, this.holdCanvas.width, this.holdCanvas.height);
      return;
    }
    const shape = SHAPES[this.holdPiece];
    this.drawMiniMatrix(this.holdCtx, shape.matrices[0], shape.color, this.holdCanvas.width, this.holdCanvas.height);
  }

  drawNextQueue() {
    this.nextCtx.clearRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
    const slotHeight = 80;
    this.nextPieces.forEach((type, idx) => {
      const shape = SHAPES[type];
      const matrix = shape.matrices[0];
      const mRows = matrix.length;
      const mCols = matrix[0].length;
      const miniSize = 18;
      const offX = Math.floor((this.nextCanvas.width - mCols * miniSize) / 2);
      const offY = idx * slotHeight + Math.floor((slotHeight - mRows * miniSize) / 2);

      for (let r = 0; r < mRows; r++) {
        for (let c = 0; c < mCols; c++) {
          if (matrix[r][c] !== 0) {
            this.nextCtx.save();
            this.nextCtx.fillStyle = shape.color;
            this.nextCtx.shadowColor = shape.color;
            this.nextCtx.shadowBlur = 4;
            this.nextCtx.fillRect(offX + c * miniSize + 1, offY + r * miniSize + 1, miniSize - 2, miniSize - 2);
            this.nextCtx.restore();
          }
        }
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Grid lines
    this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)';
    this.ctx.lineWidth = 1;
    for (let c = 0; c <= COLS; c++) {
      this.ctx.beginPath();
      this.ctx.moveTo(c * BLOCK_SIZE, 0);
      this.ctx.lineTo(c * BLOCK_SIZE, ROWS * BLOCK_SIZE);
      this.ctx.stroke();
    }
    for (let r = 0; r <= ROWS; r++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, r * BLOCK_SIZE);
      this.ctx.lineTo(COLS * BLOCK_SIZE, r * BLOCK_SIZE);
      this.ctx.stroke();
    }

    // Fixed locked blocks on board
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (this.board[r][c] !== 0) {
          this.drawBlock(this.ctx, c, r, this.board[r][c]);
        }
      }
    }

    // Active piece & Ghost piece
    if (this.currentPiece && !this.isGameOver) {
      const ghostY = this.getGhostY();
      const p = this.currentPiece;

      // Draw Ghost
      for (let r = 0; r < p.matrix.length; r++) {
        for (let c = 0; c < p.matrix[r].length; c++) {
          if (p.matrix[r][c] !== 0) {
            this.drawBlock(this.ctx, p.x + c, ghostY + r, p.color, true);
          }
        }
      }

      // Draw Active Piece
      for (let r = 0; r < p.matrix.length; r++) {
        for (let c = 0; c < p.matrix[r].length; c++) {
          if (p.matrix[r][c] !== 0) {
            this.drawBlock(this.ctx, p.x + c, p.y + r, p.color, false);
          }
        }
      }
    }

    // Particles
    this.particles.draw(this.ctx);
  }

  update(deltaTime) {
    if (!this.isPlaying || this.isPaused || this.isGameOver) return;

    this.particles.update();
    this.dropCounter += deltaTime;

    if (this.dropCounter > this.dropInterval) {
      if (!this.checkCollision(this.currentPiece.x, this.currentPiece.y + 1, this.currentPiece.matrix)) {
        this.currentPiece.y++;
        this.dropCounter = 0;
        this.isLocking = false;
        this.lockTimer = 0;
      } else {
        this.isLocking = true;
      }
    }

    // Handle Lock Delay
    if (this.isLocking) {
      this.lockTimer += deltaTime;
      if (this.lockTimer >= this.lockDelay) {
        if (this.checkCollision(this.currentPiece.x, this.currentPiece.y + 1, this.currentPiece.matrix)) {
          this.lockPiece();
        } else {
          this.isLocking = false;
          this.lockTimer = 0;
        }
      }
    }
  }

  loop(timestamp = 0) {
    const deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;

    this.update(deltaTime);
    this.draw();

    requestAnimationFrame(t => this.loop(t));
  }

  initUI() {
    this.updateHUD();
    document.getElementById('startBtn').addEventListener('click', () => {
      this.sound.initContext();
      if (this.isPaused) {
        this.togglePause();
      } else {
        this.start();
      }
    });

    document.getElementById('pauseBtn').addEventListener('click', () => this.togglePause());
    document.getElementById('restartBtn').addEventListener('click', () => {
      this.sound.initContext();
      this.start();
    });

    const audioBtn = document.getElementById('audioToggleBtn');
    audioBtn.addEventListener('click', () => {
      this.sound.enabled = !this.sound.enabled;
      audioBtn.innerText = `AUDIO: ${this.sound.enabled ? 'ON' : 'OFF'}`;
      audioBtn.style.color = this.sound.enabled ? '#00f0ff' : '#6e84a3';
    });
  }

  initEvents() {
    window.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      this.sound.initContext();

      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          e.preventDefault();
          this.moveLeft();
          break;
        case 'ArrowRight':
        case 'KeyD':
          e.preventDefault();
          this.moveRight();
          break;
        case 'ArrowDown':
        case 'KeyS':
          e.preventDefault();
          this.softDrop();
          break;
        case 'ArrowUp':
        case 'KeyX':
          e.preventDefault();
          this.rotate(1); // CW
          break;
        case 'KeyZ':
        case 'ControlLeft':
        case 'ControlRight':
          e.preventDefault();
          this.rotate(-1); // CCW
          break;
        case 'Space':
          e.preventDefault();
          if (!this.isPlaying || this.isGameOver) {
            this.start();
          } else {
            this.hardDrop();
          }
          break;
        case 'KeyC':
        case 'ShiftLeft':
        case 'ShiftRight':
          e.preventDefault();
          this.hold();
          break;
        case 'KeyP':
        case 'Escape':
          e.preventDefault();
          this.togglePause();
          break;
        case 'KeyR':
          e.preventDefault();
          this.start();
          break;
        case 'KeyM':
          e.preventDefault();
          document.getElementById('audioToggleBtn').click();
          break;
      }
    });

    // Mobile buttons
    const bindTouch = (id, action) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.sound.initContext();
          action();
        });
        el.addEventListener('click', (e) => {
          e.preventDefault();
          this.sound.initContext();
          action();
        });
      }
    };

    bindTouch('mBtnLeft', () => this.moveLeft());
    bindTouch('mBtnRight', () => this.moveRight());
    bindTouch('mBtnDown', () => this.softDrop());
    bindTouch('mBtnRotCW', () => this.rotate(1));
    bindTouch('mBtnRotCCW', () => this.rotate(-1));
    bindTouch('mBtnHardDrop', () => this.hardDrop());
    bindTouch('mBtnHold', () => this.hold());
  }
}

// Instantiate and start loop when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const game = new TetrisGame();
  game.loop();
});
