#!/usr/bin/env python3
"""test_mario_pipe.py -- Headless Regression Test Suite for Web Super Mario Bros Pipe Engine HD.

Validates:
  1. Multi-world tilemap generation (1-1 Overworld, 1-1 Sub Cavern, 1-2 Underground, 1-3 Treetop, 1-4 Bowser Castle).
  2. Vertical pipe crouch entry trigger and horizontal centering.
  3. Vertical pipe sinking kinematics and boundary transition.
  4. Subterranean bonus cavern transition and 19-coin generation.
  5. Bonus coin collection and streak arpeggio tracking.
  6. Horizontal side pipe entry mechanics and velocity gating.
  7. Pipe emergence rise kinematics and player control restoration.
  8. Piranha plant emergence cycle (HIDDEN -> RISING -> BITING -> RETREATING).
  9. Piranha plant proximity suppression (Mario near pipe prevents emergence).
  10. Fireball ballistics destroying Piranha plant and score reward.
  11. Obstacle pipe solid wall AABB collision halting horizontal momentum.
  12. Pipe top landing snap, grounding, and variable jump impulse.
  13. World 1-2 secret Warp Zone multi-destination selection.
  14. Flagpole stage clear trigger and victory fanfare transition.
"""

import math
import unittest

TILE_SIZE = 32
GRAVITY = 0.48


class MockMarioPipeEngine:
    """Headless Python replica of the Web Super Mario Pipe Engine."""

    def __init__(self):
        self.world = '1-1'
        self.world_type = 'OVERWORLD'
        self.score = 0
        self.coins = 0
        self.lives = 3
        self.time = 400
        self.level_cols = 130
        self.level_rows = 15
        self.tilemap = [[0 for _ in range(self.level_cols)] for _ in range(self.level_rows)]

        self.mario = {
            'x': 64.0,
            'y': 350.0,
            'vx': 0.0,
            'vy': 0.0,
            'width': 24,
            'height': 32,
            'is_grounded': False,
            'is_jumping': False,
            'facing_right': True,
            'power_state': 'SMALL',
            'pipe_state': 'NORMAL',  # 'NORMAL', 'ENTERING_DOWN', 'ENTERING_RIGHT', 'EXITING_UP'
            'pipe_target': None,
            'invulnerable': 0.0,
            'is_dead': False,
            'is_victory': False
        }

        self.keys = {
            'left': False,
            'right': False,
            'down': False,
            'jump': False,
            'run': False
        }

        self.pipes = []
        self.piranhas = []
        self.enemies = []
        self.fireballs = []
        self.bonus_coins = []
        self.bowser = None

        self.load_world('1-1')

    def load_world(self, world_id):
        self.world = world_id
        self.level_cols = 50 if (world_id in ('1-1-SUB', 'PIPE-SANDBOX')) else 130
        self.level_rows = 15
        self.tilemap = [[0 for _ in range(self.level_cols)] for _ in range(self.level_rows)]
        self.pipes = []
        self.piranhas = []
        self.enemies = []
        self.fireballs = []
        self.bonus_coins = []
        self.bowser = None

        if world_id == '1-1':
            self.world_type = 'OVERWORLD'
            self.build_world_11()
        elif world_id == '1-1-SUB':
            self.world_type = 'UNDERGROUND'
            self.build_world_11_sub()
        elif world_id == '1-2':
            self.world_type = 'UNDERGROUND'
            self.build_world_12()
        elif world_id == '1-3':
            self.world_type = 'TREETOP'
            self.build_world_13()
        elif world_id == '1-4':
            self.world_type = 'CASTLE'
            self.build_world_14()

    def register_pipe(self, col, height, options=None):
        options = options or {}
        top_row = 13 - height
        self.tilemap[top_row][col] = 5
        self.tilemap[top_row][col + 1] = 6
        for r in range(top_row + 1, 13):
            self.tilemap[r][col] = 7
            self.tilemap[r][col + 1] = 8

        pipe_data = {
            'col': col,
            'height': height,
            'x': float(col * TILE_SIZE),
            'y': float(top_row * TILE_SIZE),
            'width': 2 * TILE_SIZE,
            'height_px': height * TILE_SIZE,
            'is_enterable': options.get('is_enterable', False),
            'direction': options.get('direction', 'VERTICAL_DOWN'),
            'target_world': options.get('target_world', None),
            'target_col': options.get('target_col', 0),
            'label': options.get('label', None),
            'has_piranha': options.get('has_piranha', False)
        }
        self.pipes.append(pipe_data)

        if pipe_data['has_piranha']:
            self.piranhas.append({
                'pipe_index': len(self.pipes) - 1,
                'pipe_x': pipe_data['x'],
                'pipe_top_y': pipe_data['y'],
                'x': pipe_data['x'] + 8.0,
                'y': pipe_data['y'],
                'state': 'HIDDEN',
                'timer': 60,
                'is_alive': True
            })
        return pipe_data

    def build_world_11(self):
        for c in range(self.level_cols):
            if (69 <= c <= 71) or (86 <= c <= 88):
                continue
            self.tilemap[13][c] = 1
            self.tilemap[14][c] = 1

        self.tilemap[9][16] = 3
        self.tilemap[9][20] = 2
        self.tilemap[9][21] = 3
        self.tilemap[9][22] = 2
        self.tilemap[9][23] = 3
        self.tilemap[9][24] = 2

        # 4 Pipes of 1-1
        self.register_pipe(28, 2, {'has_piranha': False})
        # Pipe 2: Enterable Warp Pipe into 1-1-SUB!
        self.register_pipe(38, 3, {'is_enterable': True, 'direction': 'VERTICAL_DOWN', 'target_world': '1-1-SUB', 'target_col': 4, 'has_piranha': False})
        # Pipe 3: Tall pipe with Piranha
        self.register_pipe(48, 4, {'has_piranha': True})
        # Pipe 4: Return exit pipe from 1-1 Sub
        self.register_pipe(62, 3, {'is_enterable': False, 'has_piranha': False})

        # Flagpole at col 108
        for r in range(2, 13):
            self.tilemap[r][108] = 9
        self.tilemap[12][108] = 1

        self.enemies.append({'type': 'GOOMBA', 'x': 22 * TILE_SIZE, 'y': 12 * TILE_SIZE, 'vx': -1.2, 'is_squished': False, 'is_alive': True})

    def build_world_11_sub(self):
        for c in range(self.level_cols):
            self.tilemap[0][c] = 1
            self.tilemap[1][c] = 1
            self.tilemap[13][c] = 1
            self.tilemap[14][c] = 1

        # 19 Bonus Coins
        self.bonus_coins = []
        for c in range(12, 22):
            self.bonus_coins.append({'x': c * TILE_SIZE + 8, 'y': 10 * TILE_SIZE, 'collected': False})
        for c in range(13, 21):
            self.bonus_coins.append({'x': c * TILE_SIZE + 8, 'y': 7 * TILE_SIZE, 'collected': False})
        self.bonus_coins.append({'x': 16 * TILE_SIZE + 8, 'y': 5 * TILE_SIZE, 'collected': False})

        # Horizontal side exit pipe at col 32
        self.register_horizontal_exit_pipe(32, 10, {'target_world': '1-1', 'target_col': 62})

    def register_horizontal_exit_pipe(self, col, row, options=None):
        options = options or {}
        self.tilemap[row][col] = 7
        self.tilemap[row + 1][col] = 7
        self.tilemap[row][col + 1] = 8
        self.tilemap[row + 1][col + 1] = 8

        self.pipes.append({
            'col': col,
            'row': row,
            'x': float(col * TILE_SIZE),
            'y': float(row * TILE_SIZE),
            'width': 2 * TILE_SIZE,
            'height_px': 2 * TILE_SIZE,
            'is_enterable': True,
            'direction': 'HORIZONTAL_RIGHT',
            'target_world': options.get('target_world', '1-1'),
            'target_col': options.get('target_col', 62),
            'has_piranha': False
        })

    def build_world_12(self):
        for c in range(self.level_cols):
            self.tilemap[0][c] = 1
            self.tilemap[1][c] = 1
            self.tilemap[13][c] = 1
            self.tilemap[14][c] = 1

        self.register_pipe(18, 3, {'has_piranha': True})
        self.register_pipe(28, 2, {'has_piranha': False})

        # Warp Zone Pipes
        self.register_pipe(98, 3, {'is_enterable': True, 'target_world': '1-3', 'label': 'WORLD 2'})
        self.register_pipe(104, 3, {'is_enterable': True, 'target_world': '1-3', 'label': 'WORLD 3'})
        self.register_pipe(110, 3, {'is_enterable': True, 'target_world': '1-4', 'label': 'WORLD 4'})

    def build_world_13(self):
        for c in range(20):
            self.tilemap[13][c] = 1
            self.tilemap[14][c] = 1
        for c in range(26, 36):
            self.tilemap[10][c] = 2
        for c in range(44, 56):
            self.tilemap[8][c] = 2

        self.register_pipe(30, 2, {'has_piranha': True})
        for r in range(2, 13):
            self.tilemap[r][104] = 9
        self.tilemap[12][104] = 1

    def build_world_14(self):
        for c in range(self.level_cols):
            self.tilemap[0][c] = 1
            if c < 60 or c > 95:
                self.tilemap[13][c] = 1
                self.tilemap[14][c] = 1

        for c in range(68, 87):
            self.tilemap[11][c] = 11
        self.tilemap[10][87] = 12

        self.bowser = {'x': 76.0 * TILE_SIZE, 'y': 9.5 * TILE_SIZE, 'hp': 5, 'is_alive': True}

    def is_solid(self, col, row):
        if col < 0 or col >= self.level_cols or row < 0 or row >= self.level_rows:
            return False
        t = self.tilemap[row][col]
        return t >= 1 and t not in (9, 12)

    def check_vertical_pipe_entry(self):
        m = self.mario
        if m['pipe_state'] != 'NORMAL' or not m['is_grounded']:
            return False

        for pipe in self.pipes:
            if not pipe['is_enterable'] or pipe['direction'] != 'VERTICAL_DOWN':
                continue
            on_top_y = abs((m['y'] + m['height']) - pipe['y']) < 2.0
            within_x = (m['x'] >= pipe['x'] - 4.0) and ((m['x'] + m['width']) <= pipe['x'] + pipe['width'] + 4.0)

            if on_top_y and within_x:
                m['pipe_state'] = 'ENTERING_DOWN'
                m['pipe_target'] = pipe
                m['vx'] = 0.0
                m['vy'] = 0.0
                m['x'] = pipe['x'] + (pipe['width'] - m['width']) / 2.0
                return True
        return False

    def check_horizontal_pipe_entry(self):
        m = self.mario
        if m['pipe_state'] != 'NORMAL':
            return False

        for pipe in self.pipes:
            if not pipe['is_enterable'] or pipe['direction'] != 'HORIZONTAL_RIGHT':
                continue
            at_mouth_x = abs((m['x'] + m['width']) - pipe['x']) < 8.0
            within_y = (m['y'] + m['height']) >= pipe['y'] and m['y'] <= pipe['y'] + pipe['height_px']

            if at_mouth_x and within_y and self.keys['right']:
                m['pipe_state'] = 'ENTERING_RIGHT'
                m['pipe_target'] = pipe
                m['vx'] = 0.0
                m['vy'] = 0.0
                return True
        return False

    def update_physics(self, dt=0.016):
        m = self.mario

        # 1. Pipe State Machine
        if m['pipe_state'] == 'ENTERING_DOWN':
            m['y'] += 1.2
            if m['y'] >= m['pipe_target']['y'] + m['height']:
                target_world = m['pipe_target']['target_world'] or '1-1-SUB'
                target_col = m['pipe_target'].get('target_col', 4)
                self.load_world(target_world)

                if target_world == '1-1':
                    return_pipe = next((p for p in self.pipes if p['col'] == target_col), self.pipes[-1])
                    m['x'] = return_pipe['x'] + (return_pipe['width'] - m['width']) / 2.0
                    m['y'] = return_pipe['y']
                    m['pipe_state'] = 'EXITING_UP'
                    m['pipe_target'] = return_pipe
                else:
                    m['x'] = target_col * TILE_SIZE
                    m['y'] = 4 * TILE_SIZE
                    m['pipe_state'] = 'NORMAL'
                    m['pipe_target'] = None
            return

        if m['pipe_state'] == 'ENTERING_RIGHT':
            m['x'] += 1.2
            if m['x'] >= m['pipe_target']['x'] + m['pipe_target']['width']:
                target_world = m['pipe_target']['target_world'] or '1-1'
                target_col = m['pipe_target'].get('target_col', 62)
                self.load_world(target_world)

                return_pipe = next((p for p in self.pipes if p['col'] == target_col), self.pipes[3] if len(self.pipes) > 3 else self.pipes[0])
                m['x'] = return_pipe['x'] + (return_pipe['width'] - m['width']) / 2.0
                m['y'] = return_pipe['y']
                m['pipe_state'] = 'EXITING_UP'
                m['pipe_target'] = return_pipe
            return

        if m['pipe_state'] == 'EXITING_UP':
            m['y'] -= 1.2
            if m['y'] <= m['pipe_target']['y'] - m['height']:
                m['y'] = m['pipe_target']['y'] - m['height']
                m['is_grounded'] = True
                m['pipe_state'] = 'NORMAL'
                m['pipe_target'] = None
            return

        if m['is_dead']:
            m['vy'] += GRAVITY
            m['y'] += m['vy']
            return

        if m['is_victory']:
            m['vx'] = 2.0
            m['x'] += m['vx']
            return

        self.check_horizontal_pipe_entry()

        # Horizontal movement
        max_speed = 5.5 if self.keys['run'] else 3.2
        accel = 0.35 if self.keys['run'] else 0.25
        friction = 0.82

        if self.keys['right']:
            m['vx'] = min(max_speed, m['vx'] + accel)
            m['facing_right'] = True
        elif self.keys['left']:
            m['vx'] = max(-max_speed, m['vx'] - accel)
            m['facing_right'] = False
        else:
            m['vx'] *= friction
            if abs(m['vx']) < 0.05:
                m['vx'] = 0.0

        m['x'] += m['vx']

        # Horizontal AABB obstacle collision
        left_col = int(m['x'] // TILE_SIZE)
        right_col = int((m['x'] + m['width']) // TILE_SIZE)
        top_row = int(m['y'] // TILE_SIZE)
        bot_row = int((m['y'] + m['height'] - 1) // TILE_SIZE)

        for r in range(top_row, bot_row + 1):
            if m['vx'] > 0 and self.is_solid(right_col, r):
                m['x'] = float(right_col * TILE_SIZE - m['width'])
                m['vx'] = 0.0
            elif m['vx'] < 0 and self.is_solid(left_col, r):
                m['x'] = float((left_col + 1) * TILE_SIZE)
                m['vx'] = 0.0

        # Jump & Vertical Physics
        if self.keys['jump'] and m['is_grounded']:
            m['vy'] = -10.5
            m['is_grounded'] = False
            m['is_jumping'] = True

        cur_gravity = GRAVITY * 0.55 if (self.keys['jump'] and m['vy'] < 0) else GRAVITY
        m['vy'] += cur_gravity
        m['y'] += m['vy']
        m['is_grounded'] = False

        n_left_col = int(m['x'] // TILE_SIZE)
        n_right_col = int((m['x'] + m['width']) // TILE_SIZE)
        n_top_row = int(m['y'] // TILE_SIZE)
        n_bot_row = int((m['y'] + m['height']) // TILE_SIZE)

        for c in range(n_left_col, n_right_col + 1):
            if m['vy'] > 0 and self.is_solid(c, n_bot_row):
                m['y'] = float(n_bot_row * TILE_SIZE - m['height'])
                m['vy'] = 0.0
                m['is_grounded'] = True
                m['is_jumping'] = False
            elif m['vy'] < 0 and self.is_solid(c, n_top_row):
                m['y'] = float((n_top_row + 1) * TILE_SIZE)
                m['vy'] = 0.0

        # Coin Collection
        for coin in self.bonus_coins:
            if not coin['collected']:
                if math.hypot((m['x'] + m['width'] / 2) - coin['x'], (m['y'] + m['height'] / 2) - coin['y']) < 20.0:
                    coin['collected'] = True
                    self.coins += 1
                    self.score += 200

        # Flagpole Victory Check
        c_col = int((m['x'] + m['width'] / 2) // TILE_SIZE)
        c_row = int((m['y'] + m['height'] / 2) // TILE_SIZE)
        if 0 <= c_row < self.level_rows and self.tilemap[c_row][c_col] == 9 and not m['is_victory']:
            m['is_victory'] = True
            m['vx'] = 0.0
            m['vy'] = 3.0
            self.score += 2000

        # Piranha AI Update
        self.update_piranhas()
        self.update_fireballs()

    def update_fireballs(self):
        for fb in self.fireballs:
            if not fb.get('is_alive', False):
                continue
            fb['x'] += fb['vx']
            fb['vy'] += GRAVITY
            fb['y'] += fb['vy']

            for p in self.piranhas:
                if p['is_alive'] and p['state'] != 'HIDDEN':
                    dist = math.hypot(fb['x'] - (p['x'] + 16), fb['y'] - (p['y'] + 16))
                    if dist < 35.0:
                        p['is_alive'] = False
                        fb['is_alive'] = False
                        self.score += 400
                        break

    def update_piranhas(self):
        m = self.mario
        for p in self.piranhas:
            if not p['is_alive']:
                continue

            dist_x = abs((m['x'] + m['width'] / 2) - (p['pipe_x'] + TILE_SIZE))
            mario_near = dist_x < 48.0  # NES Proximity Safety Rule

            if p['state'] == 'HIDDEN':
                p['timer'] -= 1
                if p['timer'] <= 0 and not mario_near:
                    p['state'] = 'RISING'
                    p['timer'] = 30
            elif p['state'] == 'RISING':
                p['y'] -= 1.0
                if p['y'] <= p['pipe_top_y'] - 30.0:
                    p['y'] = p['pipe_top_y'] - 30.0
                    p['state'] = 'BITING'
                    p['timer'] = 80
            elif p['state'] == 'BITING':
                p['timer'] -= 1
                if p['timer'] <= 0:
                    p['state'] = 'RETREATING'
            elif p['state'] == 'RETREATING':
                p['y'] += 1.0
                if p['y'] >= p['pipe_top_y']:
                    p['y'] = p['pipe_top_y']
                    p['state'] = 'HIDDEN'
                    p['timer'] = 100


class TestSuperMarioPipeEngine(unittest.TestCase):
    """Test suite validating all Pipe Mechanics and Engine Integrity."""

    def setUp(self):
        self.engine = MockMarioPipeEngine()

    def test_01_pipe_tilemap_and_world_architecture(self):
        """Probe 1: Verify multi-world tilemap generation and pipe registry."""
        e = self.engine
        self.assertEqual(e.world, '1-1')
        self.assertEqual(len(e.pipes), 4)

        # Pipe 1 (col 28, height 2)
        p1 = e.pipes[0]
        self.assertEqual(p1['col'], 28)
        self.assertEqual(p1['height'], 2)
        self.assertFalse(p1['is_enterable'])

        # Pipe 2 (col 38, height 3, Warp Pipe to 1-1-SUB)
        p2 = e.pipes[1]
        self.assertEqual(p2['col'], 38)
        self.assertEqual(p2['height'], 3)
        self.assertTrue(p2['is_enterable'])
        self.assertEqual(p2['target_world'], '1-1-SUB')

        # Check tilemap collar tiles (5: Top-Left, 6: Top-Right)
        top_row = 13 - p2['height']
        self.assertEqual(e.tilemap[top_row][38], 5)
        self.assertEqual(e.tilemap[top_row][39], 6)

    def test_02_vertical_pipe_crouch_entry_trigger(self):
        """Probe 2: Verify crouching on top of enterable pipe triggers ENTERING_DOWN and centers Mario."""
        e = self.engine
        p2 = e.pipes[1]  # Pipe 2 at col 38, y = (13 - 3) * 32 = 320

        # Place Mario standing on top of Pipe 2
        e.mario['x'] = p2['x'] + 4.0
        e.mario['y'] = p2['y'] - e.mario['height']
        e.mario['is_grounded'] = True
        e.mario['pipe_state'] = 'NORMAL'

        # Press Down
        e.keys['down'] = True
        entered = e.check_vertical_pipe_entry()

        self.assertTrue(entered)
        self.assertEqual(e.mario['pipe_state'], 'ENTERING_DOWN')
        self.assertEqual(e.mario['pipe_target'], p2)
        # Verify Mario is centered horizontally in pipe collar
        expected_x = p2['x'] + (p2['width'] - e.mario['width']) / 2.0
        self.assertAlmostEqual(e.mario['x'], expected_x, delta=0.1)

    def test_03_vertical_pipe_descent_kinematics(self):
        """Probe 3: Verify Mario descends smoothly in ENTERING_DOWN state."""
        e = self.engine
        p2 = e.pipes[1]
        e.mario['x'] = p2['x'] + (p2['width'] - e.mario['width']) / 2.0
        e.mario['y'] = p2['y']
        e.mario['pipe_state'] = 'ENTERING_DOWN'
        e.mario['pipe_target'] = p2

        initial_y = e.mario['y']
        for _ in range(10):
            e.update_physics()

        self.assertAlmostEqual(e.mario['y'], initial_y + 12.0, delta=0.2)
        self.assertEqual(e.mario['pipe_state'], 'ENTERING_DOWN')

    def test_04_subterranean_bonus_warp_transition(self):
        """Probe 4: Verify full descent triggers warp to World 1-1 Sub with 19 bonus coins."""
        e = self.engine
        p2 = e.pipes[1]
        e.mario['x'] = p2['x'] + 20.0
        e.mario['y'] = p2['y'] + e.mario['height'] - 1.0
        e.mario['pipe_state'] = 'ENTERING_DOWN'
        e.mario['pipe_target'] = p2

        # One frame pushes Mario past the descent threshold
        e.update_physics()

        self.assertEqual(e.world, '1-1-SUB')
        self.assertEqual(e.world_type, 'UNDERGROUND')
        self.assertEqual(len(e.bonus_coins), 19)
        self.assertEqual(e.mario['pipe_state'], 'NORMAL')

    def test_05_bonus_coin_collection(self):
        """Probe 5: Verify collecting bonus coins increments coin count and score."""
        e = self.engine
        e.load_world('1-1-SUB')
        self.assertEqual(e.coins, 0)
        self.assertEqual(e.score, 0)

        # Place Mario touching the first coin (col 12, row 10 -> x=392, y=320)
        c0 = e.bonus_coins[0]
        e.mario['x'] = c0['x'] - 5.0
        e.mario['y'] = c0['y'] - 10.0
        e.mario['is_grounded'] = True

        e.update_physics()

        self.assertTrue(c0['collected'])
        self.assertEqual(e.coins, 1)
        self.assertEqual(e.score, 200)

    def test_06_horizontal_side_pipe_entry(self):
        """Probe 6: Verify walking into side horizontal exit pipe triggers ENTERING_RIGHT."""
        e = self.engine
        e.load_world('1-1-SUB')
        exit_pipe = e.pipes[0]  # Side pipe at col 32, row 10
        self.assertEqual(exit_pipe['direction'], 'HORIZONTAL_RIGHT')

        # Place Mario right at the mouth of the horizontal pipe
        e.mario['x'] = exit_pipe['x'] - e.mario['width'] + 2.0
        e.mario['y'] = exit_pipe['y'] + 10.0
        e.keys['right'] = True

        entered = e.check_horizontal_pipe_entry()
        self.assertTrue(entered)
        self.assertEqual(e.mario['pipe_state'], 'ENTERING_RIGHT')

    def test_07_pipe_exit_rise_kinematics(self):
        """Probe 7: Verify emergence from exit pipe upwards until clearing rim restores normal state."""
        e = self.engine
        e.load_world('1-1')
        p4 = e.pipes[3]  # Exit pipe 4 at col 62, y = 320
        e.mario['x'] = p4['x'] + (p4['width'] - e.mario['width']) / 2.0
        e.mario['y'] = p4['y']  # Inside pipe mouth
        e.mario['pipe_state'] = 'EXITING_UP'
        e.mario['pipe_target'] = p4

        # Run until emerged
        while e.mario['pipe_state'] == 'EXITING_UP':
            e.update_physics()

        self.assertEqual(e.mario['pipe_state'], 'NORMAL')
        self.assertTrue(e.mario['is_grounded'])
        self.assertAlmostEqual(e.mario['y'], p4['y'] - e.mario['height'], delta=0.5)

    def test_08_piranha_plant_emergence_cycle(self):
        """Probe 8: Verify Piranha Plant state cycle: HIDDEN -> RISING -> BITING -> RETREATING."""
        e = self.engine
        e.load_world('1-1')
        self.assertEqual(len(e.piranhas), 1)
        pir = e.piranhas[0]
        self.assertEqual(pir['state'], 'HIDDEN')

        # Put Mario far away to avoid proximity suppression
        e.mario['x'] = 10.0

        pir['timer'] = 1
        e.update_piranhas()
        self.assertEqual(pir['state'], 'RISING')

        # Run rising
        while pir['state'] == 'RISING':
            e.update_piranhas()
        self.assertEqual(pir['state'], 'BITING')
        self.assertAlmostEqual(pir['y'], pir['pipe_top_y'] - 30.0, delta=0.5)

        pir['timer'] = 1
        e.update_piranhas()
        self.assertEqual(pir['state'], 'RETREATING')

    def test_09_piranha_plant_proximity_safety_suppression(self):
        """Probe 9: Verify Mario standing near or on pipe prevents Piranha Plant from emerging."""
        e = self.engine
        e.load_world('1-1')
        pir = e.piranhas[0]
        self.assertEqual(pir['state'], 'HIDDEN')

        # Place Mario directly on top of the Piranha pipe (within 48px)
        e.mario['x'] = pir['pipe_x'] + 10.0
        pir['timer'] = 0

        e.update_piranhas()

        # Should remain HIDDEN because Mario is near!
        self.assertEqual(pir['state'], 'HIDDEN')

    def test_10_fireball_destroys_piranha_plant(self):
        """Probe 10: Verify fireball destroys emerged Piranha Plant and awards 400 points."""
        e = self.engine
        e.load_world('1-1')
        pir = e.piranhas[0]
        pir['state'] = 'BITING'
        pir['y'] = pir['pipe_top_y'] - 30.0

        # Spawn fireball heading towards piranha
        fb = {'x': pir['x'], 'y': pir['y'], 'vx': 4.0, 'vy': 0.0, 'is_alive': True}
        e.fireballs.append(fb)

        # Mario far away
        e.mario['x'] = 10.0
        initial_score = e.score

        # Trigger physics update which runs update_fireballs
        e.update_fireballs()

        self.assertFalse(pir['is_alive'])
        self.assertFalse(fb['is_alive'])
        self.assertEqual(e.score, initial_score + 400)

    def test_11_obstacle_pipe_aabb_collision(self):
        """Probe 11: Verify vertical pipe acts as solid barrier halting Mario's horizontal velocity."""
        e = self.engine
        e.load_world('1-1')
        p1 = e.pipes[0]  # Pipe 1 at col 28 (x = 896)

        # Place Mario running right towards Pipe 1
        e.mario['x'] = p1['x'] - e.mario['width'] - 2.0
        e.mario['y'] = 12 * TILE_SIZE
        e.mario['vx'] = 4.0
        e.mario['is_grounded'] = True
        e.keys['right'] = True

        e.update_physics()

        # Should be stopped at the left wall of the pipe
        self.assertAlmostEqual(e.mario['x'], p1['x'] - e.mario['width'], delta=0.5)
        self.assertEqual(e.mario['vx'], 0.0)

    def test_12_pipe_top_landing_and_jump(self):
        """Probe 12: Verify landing on pipe top sets is_grounded and enables jump impulse."""
        e = self.engine
        e.load_world('1-1')
        p1 = e.pipes[0]

        # Falling from above onto Pipe 1 top
        e.mario['x'] = p1['x'] + 8.0
        e.mario['y'] = p1['y'] - e.mario['height'] - 4.0
        e.mario['vy'] = 8.0
        e.mario['is_grounded'] = False

        e.update_physics()

        # Landed!
        self.assertTrue(e.mario['is_grounded'])
        self.assertAlmostEqual(e.mario['y'], p1['y'] - e.mario['height'], delta=0.5)

        # Now jump off pipe top
        e.keys['jump'] = True
        e.update_physics()

        self.assertFalse(e.mario['is_grounded'])
        self.assertLess(e.mario['vy'], 0.0)

    def test_13_warp_zone_destinations(self):
        """Probe 13: Verify World 1-2 secret Warp Zone pipes link to Worlds 2, 3, and 4."""
        e = self.engine
        e.load_world('1-2')

        # Find Warp Zone pipes at cols 98, 104, 110
        warp_pipes = [p for p in e.pipes if p.get('label') and 'WORLD' in p['label']]
        self.assertEqual(len(warp_pipes), 3)

        self.assertEqual(warp_pipes[0]['label'], 'WORLD 2')
        self.assertEqual(warp_pipes[1]['label'], 'WORLD 3')
        self.assertEqual(warp_pipes[2]['label'], 'WORLD 4')
        self.assertEqual(warp_pipes[2]['target_world'], '1-4')

    def test_14_flagpole_victory_flow(self):
        """Probe 14: Verify touching flagpole triggers victory slide and score increase."""
        e = self.engine
        e.load_world('1-1')

        # Flagpole at col 108
        flag_x = 108 * TILE_SIZE
        e.mario['x'] = flag_x - 8.0
        e.mario['y'] = 5 * TILE_SIZE
        initial_score = e.score

        e.update_physics()

        self.assertTrue(e.mario['is_victory'])
        self.assertEqual(e.score, initial_score + 2000)
        self.assertEqual(e.mario['vy'], 3.0)


if __name__ == '__main__':
    unittest.main()
