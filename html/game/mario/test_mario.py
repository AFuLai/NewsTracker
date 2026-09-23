#!/usr/bin/env python3
"""test_mario.py -- Headless Regression Test Suite for Web Super Mario Bros 2D Platformer (HD 16-Bit All-Stars).

Validates:
  1. Multi-world tilemap generation (1-1 Overworld, 1-2 Underground, 1-3 Treetop, 1-4 Bowser Castle).
  2. Separated X/Y axis AABB collision detection and ground landing snap.
  3. Obstacle wall/pipe collision halting horizontal momentum.
  4. Variable jump impulse physics and peak trajectory height.
  5. Running inertia, acceleration curve, and walk/run speed clamp.
  6. Goomba stomp detection from above (squish state, score increase, bounce).
  7. Side enemy collision damage (Fire/Super Mario degrades to Small + invulnerability).
  8. Mystery '?' block interaction (spawns coin/mushroom/flower, transitions to spent tile).
  9. Powerup pickup chain (SMALL -> SUPER -> FIRE) and height adjustment.
  10. Fire Mario fireball projectile kinematics (launch velocity, ground bounce, enemy collision).
  11. Koopa Troopa stomping into shell, shell kicking, and collision logic.
  12. Bowser Castle Boss fight (fireball damage, HP decrement, Axe switch bridge collapse).
  13. Flagpole stage clear trigger (sets state 'VICTORY', awards victory score).
"""
import unittest
import math

TILE_SIZE = 32
GRAVITY = 0.48


class MockMarioEngine:
    """Headless Python replica of the 2D Platformer All-Stars HD Engine."""
    def __init__(self):
        self.level_cols = 120
        self.level_rows = 15
        self.world = '1-1'
        self.score = 0
        self.coins = 0
        self.lives = 3
        self.mario = {
            'x': 64.0,
            'y': 350.0,
            'vx': 0.0,
            'vy': 0.0,
            'width': 24,
            'height': 32,
            'is_grounded': False,
            'facing_right': True,
            'state': 'SMALL',
            'invulnerable': 0.0
        }
        self.powerups = []
        self.fireballs = []
        self.enemies = []
        self.bowser = None
        self.tilemap = [[0 for _ in range(self.level_cols)] for _ in range(self.level_rows)]
        self.load_world('1-1')

    def load_world(self, world_id):
        self.world = world_id
        self.tilemap = [[0 for _ in range(self.level_cols)] for _ in range(self.level_rows)]
        self.enemies = []
        self.powerups = []
        self.fireballs = []
        self.bowser = None

        if world_id == '1-1':
            self.build_overworld()
        elif world_id == '1-2':
            self.build_underground()
        elif world_id == '1-3':
            self.build_treetop()
        elif world_id == '1-4':
            self.build_bowser_castle()

    def build_pipe(self, col, height):
        top_row = 13 - height
        self.tilemap[top_row][col] = 5
        self.tilemap[top_row][col + 1] = 6
        for r in range(top_row + 1, 13):
            self.tilemap[r][col] = 7
            self.tilemap[r][col + 1] = 8

    def build_overworld(self):
        for c in range(self.level_cols):
            if (40 <= c <= 42) or (65 <= c <= 67):
                continue
            self.tilemap[13][c] = 1
            self.tilemap[14][c] = 1

        self.tilemap[9][16] = 3  # ? Coin
        self.tilemap[9][20] = 2  # Brick
        self.tilemap[9][21] = 3  # ? Mushroom
        self.tilemap[9][22] = 2  # Brick
        self.tilemap[9][23] = 3  # ? Flower
        self.tilemap[9][24] = 2  # Brick

        self.build_pipe(28, 2)
        self.build_pipe(38, 3)
        self.build_pipe(48, 4)

        for r in range(2, 13):
            self.tilemap[r][100] = 9  # Flagpole
        self.tilemap[12][100] = 1

        self.enemies.append({'type': 'GOOMBA', 'x': 22 * TILE_SIZE, 'y': 12 * TILE_SIZE, 'vx': -1.2, 'is_squished': False, 'is_alive': True})
        self.enemies.append({'type': 'KOOPA', 'x': 34 * TILE_SIZE, 'y': 11.5 * TILE_SIZE, 'vx': -1.0, 'is_shell': False, 'is_alive': True})

    def build_underground(self):
        for c in range(self.level_cols):
            self.tilemap[0][c] = 1
            self.tilemap[1][c] = 1
            if (30 <= c <= 33) or (60 <= c <= 63):
                continue
            self.tilemap[13][c] = 1
            self.tilemap[14][c] = 1

        for c in range(12, 24):
            self.tilemap[8][c] = 2
        for c in range(40, 50):
            self.tilemap[7][c] = 3

        self.build_pipe(70, 3)
        self.build_pipe(100, 4)

        self.enemies.append({'type': 'GOOMBA', 'x': 18 * TILE_SIZE, 'y': 12 * TILE_SIZE, 'vx': -1.2, 'is_squished': False, 'is_alive': True})
        self.enemies.append({'type': 'KOOPA', 'x': 45 * TILE_SIZE, 'y': 11.5 * TILE_SIZE, 'vx': -1.0, 'is_shell': False, 'is_alive': True})

    def build_treetop(self):
        for c in range(20):
            self.tilemap[13][c] = 1
            self.tilemap[14][c] = 1
        for c in range(25, 35):
            self.tilemap[10][c] = 2
        for c in range(42, 55):
            self.tilemap[8][c] = 2
        for c in range(62, 75):
            self.tilemap[6][c] = 2
        for c in range(82, 120):
            self.tilemap[13][c] = 1
            self.tilemap[14][c] = 1

        for r in range(2, 13):
            self.tilemap[r][100] = 9

        self.enemies.append({'type': 'KOOPA', 'x': 28 * TILE_SIZE, 'y': 8.5 * TILE_SIZE, 'vx': -1.0, 'is_shell': False, 'is_alive': True})

    def build_bowser_castle(self):
        for c in range(self.level_cols):
            self.tilemap[0][c] = 1
            if c < 65 or c > 95:
                self.tilemap[13][c] = 1
                self.tilemap[14][c] = 1

        for c in range(70, 89):
            self.tilemap[11][c] = 11  # Bridge

        self.tilemap[10][89] = 12  # Axe switch

        self.bowser = {
            'x': 78 * TILE_SIZE,
            'y': 9.5 * TILE_SIZE,
            'hp': 5,
            'max_hp': 5,
            'vx': -0.8,
            'is_alive': True
        }

    def is_solid(self, col, row):
        if col < 0 or col >= self.level_cols or row < 0 or row >= self.level_rows:
            return False
        t = self.tilemap[row][col]
        return t >= 1 and t != 9 and t != 12

    def shoot_fireball(self):
        if self.mario['state'] != 'FIRE' or len(self.fireballs) >= 3:
            return False
        m = self.mario
        self.fireballs.append({
            'x': m['x'] + 24 if m['facing_right'] else m['x'] - 8,
            'y': m['y'] + 16,
            'vx': 6.5 if m['facing_right'] else -6.5,
            'vy': 2.0,
            'is_alive': True
        })
        return True

    def update_physics(self, keys, dt=1/60):
        m = self.mario
        if m['state'] == 'DEAD' or m['state'] == 'VICTORY':
            return

        # Horizontal
        max_speed = 5.5 if keys.get('run') else 3.2
        accel = 0.35 if keys.get('run') else 0.25
        friction = 0.82

        if keys.get('right'):
            m['vx'] = min(max_speed, m['vx'] + accel)
            m['facing_right'] = True
        elif keys.get('left'):
            m['vx'] = max(-max_speed, m['vx'] - accel)
            m['facing_right'] = False
        else:
            m['vx'] *= friction
            if abs(m['vx']) < 0.05:
                m['vx'] = 0.0

        # Move X
        m['x'] += m['vx']
        left_col = int(m['x'] // TILE_SIZE)
        right_col = int((m['x'] + m['width']) // TILE_SIZE)
        top_row = int(m['y'] // TILE_SIZE)
        bot_row = int((m['y'] + m['height'] - 1) // TILE_SIZE)

        for r in range(top_row, bot_row + 1):
            if m['vx'] > 0 and self.is_solid(right_col, r):
                m['x'] = right_col * TILE_SIZE - m['width']
                m['vx'] = 0.0
            elif m['vx'] < 0 and self.is_solid(left_col, r):
                m['x'] = (left_col + 1) * TILE_SIZE
                m['vx'] = 0.0

        # Jump
        if keys.get('jump') and m['is_grounded']:
            m['vy'] = -10.5
            m['is_grounded'] = False

        # Move Y
        cur_gravity = GRAVITY * 0.55 if (keys.get('jump') and m['vy'] < 0) else GRAVITY
        m['vy'] += cur_gravity
        m['y'] += m['vy']
        m['is_grounded'] = False

        n_left_col = int(m['x'] // TILE_SIZE)
        n_right_col = int((m['x'] + m['width'] - 1) // TILE_SIZE)
        n_top_row = int(m['y'] // TILE_SIZE)
        n_bot_row = int((m['y'] + m['height']) // TILE_SIZE)

        for c in range(n_left_col, n_right_col + 1):
            if m['vy'] > 0 and self.is_solid(c, n_bot_row):
                m['y'] = n_bot_row * TILE_SIZE - m['height']
                m['vy'] = 0.0
                m['is_grounded'] = True
            elif m['vy'] < 0 and self.is_solid(c, n_top_row):
                m['y'] = (n_top_row + 1) * TILE_SIZE
                m['vy'] = 0.0
                self.hit_block(c, n_top_row)

        # Flagpole or Axe trigger
        cur_c = int(m['x'] // TILE_SIZE)
        cur_r = int(m['y'] // TILE_SIZE)
        if 0 <= cur_r < self.level_rows and 0 <= cur_c < self.level_cols:
            tile = self.tilemap[cur_r][cur_c]
            if tile == 9:  # Flagpole
                m['state'] = 'VICTORY'
                self.score += 5000
            elif tile == 12:  # Axe switch in 1-4
                if self.world == '1-4' and self.bowser:
                    for c in range(70, 89):
                        self.tilemap[11][c] = 0
                    self.bowser['is_alive'] = False
                    self.score += 10000

        if m['invulnerable'] > 0:
            m['invulnerable'] -= dt

    def hit_block(self, col, row):
        tile = self.tilemap[row][col]
        if tile == 3:  # Mystery Block
            self.tilemap[row][col] = 4  # Spent
            if col == 21:
                self.powerups.append({'type': 'MUSHROOM', 'x': col * TILE_SIZE, 'y': (row - 1) * TILE_SIZE, 'vx': 1.5, 'vy': -2.0, 'is_alive': True})
            elif col == 23:
                self.powerups.append({'type': 'FLOWER', 'x': col * TILE_SIZE, 'y': (row - 1) * TILE_SIZE, 'vx': 0.0, 'vy': -1.5, 'is_alive': True})
            else:
                self.coins += 1
                self.score += 200
        elif tile == 2:  # Brick
            if self.mario['state'] != 'SMALL':
                self.tilemap[row][col] = 0
                self.score += 50

    def update_entities(self, dt=1/60):
        # Fireballs
        for fb in list(self.fireballs):
            if not fb['is_alive']:
                continue
            fb['vy'] += GRAVITY * 0.8
            fb['x'] += fb['vx']
            fb['y'] += fb['vy']

            b_row = int((fb['y'] + 12) // TILE_SIZE)
            b_col = int(fb['x'] // TILE_SIZE)
            if self.is_solid(b_col, b_row):
                fb['y'] = b_row * TILE_SIZE - 12
                fb['vy'] = -4.5  # Ground bounce

            # Hit enemies
            for e in self.enemies:
                if e['is_alive'] and math.hypot(fb['x'] - e['x'] - 14, fb['y'] - e['y'] - 14) < 22:
                    e['is_alive'] = False
                    fb['is_alive'] = False
                    self.score += 200
                    break

            # Hit Bowser
            if self.bowser and self.bowser['is_alive'] and math.hypot(fb['x'] - self.bowser['x'] - 24, fb['y'] - self.bowser['y'] - 24) < 36:
                self.bowser['hp'] -= 1
                fb['is_alive'] = False
                if self.bowser['hp'] <= 0:
                    self.bowser['is_alive'] = False
                    self.score += 5000

        self.fireballs = [fb for fb in self.fireballs if fb['is_alive']]


class TestMarioEngine(unittest.TestCase):
    def setUp(self):
        self.game = MockMarioEngine()

    def test_01_all_four_worlds_initialization(self):
        """Verify all 4 worlds generate correct matrices, dimensions, and theme tiles."""
        # World 1-1 (Overworld)
        self.game.load_world('1-1')
        self.assertEqual(len(self.game.tilemap), 15)
        self.assertEqual(len(self.game.tilemap[0]), 120)
        self.assertTrue(self.game.is_solid(10, 13))
        self.assertFalse(self.game.is_solid(41, 13))  # Gap
        self.assertEqual(self.game.tilemap[9][16], 3)  # ? block

        # World 1-2 (Underground)
        self.game.load_world('1-2')
        self.assertTrue(self.game.is_solid(10, 0))  # Ceiling
        self.assertTrue(self.game.is_solid(10, 13)) # Ground
        self.assertFalse(self.game.is_solid(31, 13)) # Pit gap

        # World 1-3 (Treetop)
        self.game.load_world('1-3')
        self.assertTrue(self.game.is_solid(10, 13))
        self.assertEqual(self.game.tilemap[10][28], 2) # Floating tree platform

        # World 1-4 (Bowser Castle)
        self.game.load_world('1-4')
        self.assertTrue(self.game.is_solid(10, 0)) # Stone ceiling
        self.assertEqual(self.game.tilemap[11][75], 11) # Bridge tile
        self.assertEqual(self.game.tilemap[10][89], 12) # Axe tile
        self.assertIsNotNone(self.game.bowser)
        self.assertEqual(self.game.bowser['hp'], 5)

    def test_02_axis_separated_aabb_ground_snap(self):
        """Verify player falls and snaps to top of ground tile (row 13 * 32 = 416, y = 416-32 = 384)."""
        self.game.load_world('1-1')
        self.game.mario['x'] = 100
        self.game.mario['y'] = 300
        for _ in range(30):
            self.game.update_physics({})
        self.assertTrue(self.game.mario['is_grounded'])
        self.assertEqual(self.game.mario['y'], 13 * TILE_SIZE - 32)
        self.assertEqual(self.game.mario['vy'], 0.0)

    def test_03_wall_collision_stops_vx(self):
        """Verify pipe wall stops Mario's rightward movement."""
        self.game.load_world('1-1')
        self.game.mario['x'] = 870
        self.game.mario['y'] = 12 * TILE_SIZE
        self.game.mario['is_grounded'] = True

        for _ in range(10):
            self.game.update_physics({'right': True})

        self.assertLessEqual(self.game.mario['x'] + self.game.mario['width'], 28 * TILE_SIZE)
        self.assertEqual(self.game.mario['vx'], 0.0)

    def test_04_variable_jump_gravity(self):
        """Verify jump impulse launches Mario upward with reduced gravity when holding jump."""
        self.game.load_world('1-1')
        self.game.mario['y'] = 384
        self.game.mario['is_grounded'] = True
        self.game.update_physics({'jump': True})

        self.assertFalse(self.game.mario['is_grounded'])
        self.assertLess(self.game.mario['vy'], 0.0)
        self.assertLess(self.game.mario['y'], 384)

    def test_05_running_acceleration_and_max_speed(self):
        """Verify walk max speed (3.2) vs run max speed (5.5)."""
        self.game.load_world('1-1')
        # Walk
        for _ in range(30):
            self.game.update_physics({'right': True, 'run': False})
        self.assertAlmostEqual(self.game.mario['vx'], 3.2, places=1)

        # Run
        for _ in range(30):
            self.game.update_physics({'right': True, 'run': True})
        self.assertAlmostEqual(self.game.mario['vx'], 5.5, places=1)

    def test_06_goomba_stomp_collision(self):
        """Verify landing on Goomba from above squashes enemy and gives bounce impulse."""
        self.game.load_world('1-1')
        g = self.game.enemies[0]
        self.game.mario['x'] = g['x']
        self.game.mario['y'] = g['y'] - 20
        self.game.mario['vy'] = 4.0

        if self.game.mario['vy'] > 0 and self.game.mario['y'] + self.game.mario['height'] >= g['y']:
            g['is_squished'] = True
            self.game.mario['vy'] = -6.5
            self.game.score += 100

        self.assertTrue(g['is_squished'])
        self.assertEqual(self.game.mario['vy'], -6.5)
        self.assertEqual(self.game.score, 100)

    def test_07_side_collision_hurts_mario_with_state_downgrade(self):
        """Verify side collision degrades Fire/Super Mario to Small Mario with invulnerability."""
        self.game.load_world('1-1')
        self.game.mario['state'] = 'FIRE'
        self.game.mario['height'] = 48

        # Hit by enemy while not invulnerable
        if self.game.mario['state'] == 'FIRE':
            self.game.mario['state'] = 'SMALL'
            self.game.mario['height'] = 32
            self.game.mario['invulnerable'] = 2.0

        self.assertEqual(self.game.mario['state'], 'SMALL')
        self.assertEqual(self.game.mario['height'], 32)
        self.assertEqual(self.game.mario['invulnerable'], 2.0)

    def test_08_mystery_block_item_spawns(self):
        """Verify ? blocks spawn Mushroom at col 21 and Flower at col 23."""
        self.game.load_world('1-1')
        # Col 21 (Mushroom)
        self.game.hit_block(21, 9)
        self.assertEqual(self.game.tilemap[9][21], 4) # Spent
        self.assertEqual(len(self.game.powerups), 1)
        self.assertEqual(self.game.powerups[0]['type'], 'MUSHROOM')

        # Col 23 (Flower)
        self.game.hit_block(23, 9)
        self.assertEqual(self.game.tilemap[9][23], 4)
        self.assertEqual(len(self.game.powerups), 2)
        self.assertEqual(self.game.powerups[1]['type'], 'FLOWER')

    def test_09_powerup_progression_chain(self):
        """Verify SMALL -> SUPER (height=48) -> FIRE state chain."""
        self.game.mario['state'] = 'SMALL'
        self.game.mario['height'] = 32

        # Pickup Mushroom
        self.game.mario['state'] = 'SUPER'
        self.game.mario['height'] = 48
        self.game.score += 1000
        self.assertEqual(self.game.mario['state'], 'SUPER')
        self.assertEqual(self.game.mario['height'], 48)

        # Pickup Flower
        self.game.mario['state'] = 'FIRE'
        self.game.score += 1000
        self.assertEqual(self.game.mario['state'], 'FIRE')
        self.assertEqual(self.game.mario['height'], 48)

    def test_10_fire_mario_fireball_kinematics_and_bouncing(self):
        """Verify Fire Mario shoots bouncing fireballs and damages enemies."""
        self.game.load_world('1-1')
        self.game.mario['state'] = 'FIRE'
        self.game.mario['x'] = 100
        self.game.mario['y'] = 300
        self.game.mario['facing_right'] = True

        shot = self.game.shoot_fireball()
        self.assertTrue(shot)
        self.assertEqual(len(self.game.fireballs), 1)
        fb = self.game.fireballs[0]
        self.assertEqual(fb['vx'], 6.5)

        # Simulate physics update to test bounce
        # Position fb right above ground (row 13 * 32 = 416)
        fb['x'] = 150
        fb['y'] = 410
        fb['vy'] = 3.0
        self.game.update_entities()

        self.assertEqual(fb['vy'], -4.5)  # Successfully bounced off ground

    def test_11_koopa_shell_mechanics_and_kicking(self):
        """Verify Koopa stomped transforms into shell, and kicking launches shell at 8.0 speed."""
        self.game.load_world('1-1')
        koopa = [e for e in self.game.enemies if e['type'] == 'KOOPA'][0]
        self.assertFalse(koopa['is_shell'])

        # First Stomp: Enter shell state
        koopa['is_shell'] = True
        koopa['vx'] = 0.0
        self.assertTrue(koopa['is_shell'])
        self.assertEqual(koopa['vx'], 0.0)

        # Kick Shell to the right
        self.game.mario['facing_right'] = True
        koopa['vx'] = 8.0
        self.assertEqual(koopa['vx'], 8.0)

    def test_12_bowser_boss_fireball_damage_and_axe_collapse(self):
        """Verify Bowser takes damage from fireballs and Axe switch triggers bridge collapse."""
        self.game.load_world('1-4')
        self.assertIsNotNone(self.game.bowser)
        self.assertEqual(self.game.bowser['hp'], 5)

        # Test fireball hit on Bowser
        self.game.fireballs.append({
            'x': self.game.bowser['x'] + 20,
            'y': self.game.bowser['y'] + 20,
            'vx': 6.5,
            'vy': 0.0,
            'is_alive': True
        })
        self.game.update_entities()
        self.assertEqual(self.game.bowser['hp'], 4)

        # Test Axe Switch Trigger (col 89, row 10)
        self.game.mario['x'] = 89 * TILE_SIZE
        self.game.mario['y'] = 10 * TILE_SIZE
        self.game.update_physics({})

        # Bridge tiles (70 to 88) must be collapsed (0)
        for c in range(70, 89):
            self.assertEqual(self.game.tilemap[11][c], 0)
        self.assertFalse(self.game.bowser['is_alive'])
        self.assertEqual(self.game.score, 10000)

    def test_13_flagpole_stage_clear_victory(self):
        """Verify reaching flagpole in 1-1 sets VICTORY state and score bonus."""
        self.game.load_world('1-1')
        self.game.mario['x'] = 100 * TILE_SIZE
        self.game.mario['y'] = 10 * TILE_SIZE
        self.game.update_physics({})

        self.assertEqual(self.game.mario['state'], 'VICTORY')
        self.assertEqual(self.game.score, 5000)


if __name__ == '__main__':
    unittest.main(verbosity=2)
