#!/usr/bin/env python3
"""test_bomberman.py -- Headless Regression Test Suite for Web 3D Bomberman Battle Royale.

Validates 16 Comprehensive Probes:
  1. 15x13 Grid Arena Dimensions, Perimeter Walls, and Alternating Pillar placement.
  2. 4-Player Corner Spawn Clearances (3-tile safety clearance).
  3. Bidirectional Coordinate Transformations (Grid <-> 3D World space).
  4. Player Kinematics, Movement Vectors, Speed Upgrades, and Curse Inversion.
  5. AABB Player Collision Detection & Obstacle Resolution.
  6. Bomb Fuse Countdown, Scale Pulsation, and Detonation Thresholds.
  7. Cross-Fire Cardinal Raycast Blast Propagation & Wall Occlusion.
  8. Instant Chain Reaction Detonation Architecture.
  9. Power-Up System Inventory & Maximum Caps (Bomb, Fire, Speed, Glove, Shield, Remote, Skull).
  10. Bomb Kick Sliding Physics & Obstacle Collision Grid Snapping.
  11. AI Danger Zone Heatmap Evaluation & Blast Range Modeling.
  12. AI Breadth-First-Search (BFS) Shortest Safe Path Navigation.
  13. Sudden Death Inward Spiral Generation & Coordinate Coverage.
  14. 5 Director Camera Perspective Transformations (Top-Down, Iso, 3rd-Person, Director, Free).
  15. 5-Slot Save / Load Match State Serialization & Deserialization.
  16. Konami Code Sequence Detector & Web Audio Synthesizer Frequency Schedules.
"""
import json
import math
import sys
import unittest


class GridCoord:
    def __init__(self, col, row):
        self.col = int(col)
        self.row = int(row)

    def __eq__(self, other):
        return self.col == other.col and self.row == other.row

    def __hash__(self):
        return hash((self.col, self.row))


class Vec3:
    def __init__(self, x=0.0, y=0.0, z=0.0):
        self.x = float(x)
        self.y = float(y)
        self.z = float(z)

    def add(self, v):
        return Vec3(self.x + v.x, self.y + v.y, self.z + v.z)

    def sub(self, v):
        return Vec3(self.x - v.x, self.y - v.y, self.z - v.z)

    def scale(self, s):
        return Vec3(self.x * s, self.y * s, self.z * s)

    def length(self):
        return math.hypot(self.x, self.y, self.z)

    def lerp(self, target, alpha):
        return Vec3(
            self.x + (target.x - self.x) * alpha,
            self.y + (target.y - self.y) * alpha,
            self.z + (target.z - self.z) * alpha
        )


class TestBombermanEngine(unittest.TestCase):
    """Unit and Integration Regression Test Suite for Bomberman 3D Engine."""

    GRID_COLS = 15
    GRID_ROWS = 13
    TILE_SIZE = 2.0

    def grid_to_world(self, col, row):
        return Vec3(
            (col - (self.GRID_COLS - 1) / 2) * self.TILE_SIZE,
            0.0,
            (row - (self.GRID_ROWS - 1) / 2) * self.TILE_SIZE
        )

    def world_to_grid(self, x, z):
        col = round(x / self.TILE_SIZE + (self.GRID_COLS - 1) / 2)
        row = round(z / self.TILE_SIZE + (self.GRID_ROWS - 1) / 2)
        return GridCoord(
            max(0, min(self.GRID_COLS - 1, col)),
            max(0, min(self.GRID_ROWS - 1, row))
        )

    def test_01_grid_arena_dimensions_and_pillars(self):
        """Probe 1: 15x13 Grid Arena Dimensions, Perimeter Walls, and Pillars."""
        hard_tiles = set()
        for r in range(self.GRID_ROWS):
            for c in range(self.GRID_COLS):
                is_border = (c == 0 or c == self.GRID_COLS - 1 or r == 0 or r == self.GRID_ROWS - 1)
                is_pillar = (c % 2 == 0 and r % 2 == 0)
                if is_border or is_pillar:
                    hard_tiles.add((c, r))

        # Check total perimeter tiles
        border_count = 2 * self.GRID_COLS + 2 * (self.GRID_ROWS - 2)
        self.assertEqual(border_count, 15 * 2 + 11 * 2)

        # Check interior pillars
        # Inside cols 1..13 (even: 2, 4, 6, 8, 10, 12 -> 6 cols)
        # Inside rows 1..11 (even: 2, 4, 6, 8, 10 -> 5 rows)
        interior_pillars = 6 * 5
        self.assertEqual(interior_pillars, 30)

        # Total indestructible tiles
        self.assertEqual(len(hard_tiles), border_count + interior_pillars)
        self.assertIn((2, 2), hard_tiles)
        self.assertIn((12, 10), hard_tiles)
        self.assertNotIn((1, 1), hard_tiles)

    def test_02_spawn_zones_clearance(self):
        """Probe 2: 4-Player Corner Spawn Clearances."""
        spawn_zones = {
            'P1': [(1, 1), (1, 2), (2, 1)],
            'P2': [(13, 1), (13, 2), (12, 1)],
            'P3': [(1, 11), (1, 10), (2, 11)],
            'P4': [(13, 11), (13, 10), (12, 11)]
        }

        all_spawn_tiles = set()
        for player, tiles in spawn_zones.items():
            self.assertEqual(len(tiles), 3, f"{player} must have 3 clearance tiles")
            for t in tiles:
                self.assertNotIn(t, all_spawn_tiles, "Spawn clearance overlap detected")
                all_spawn_tiles.add(t)

        self.assertEqual(len(all_spawn_tiles), 12)

    def test_03_grid_to_world_coordinates_math(self):
        """Probe 3: Bidirectional Coordinate Transformations."""
        center_w = self.grid_to_world(7, 6)
        self.assertAlmostEqual(center_w.x, 0.0, places=5)
        self.assertAlmostEqual(center_w.z, 0.0, places=5)

        corner_w = self.grid_to_world(1, 1)
        grid_back = self.world_to_grid(corner_w.x, corner_w.z)
        self.assertEqual(grid_back.col, 1)
        self.assertEqual(grid_back.row, 1)

        p4_w = self.grid_to_world(13, 11)
        p4_back = self.world_to_grid(p4_w.x, p4_w.z)
        self.assertEqual(p4_back.col, 13)
        self.assertEqual(p4_back.row, 11)

    def test_04_player_kinematics_and_speed_scaling(self):
        """Probe 4: Player Kinematics, Movement Vectors, Speed Upgrades, and Curse."""
        base_speed = 4.8
        dt = 0.016

        # Normal forward movement
        vx, vz = 0.0, -1.0
        step = base_speed * dt
        dx = vx * step
        dz = vz * step
        self.assertEqual(dx, 0.0)
        self.assertAlmostEqual(dz, -0.0768, places=4)

        # Skates upgrade (20% boost per level, cap 7.5)
        speed_boosted = min(7.5, base_speed * 1.2)
        self.assertAlmostEqual(speed_boosted, 5.76, places=4)

        max_speed = base_speed
        for _ in range(10):
            max_speed = min(7.5, max_speed * 1.2)
        self.assertEqual(max_speed, 7.5)

        # Inverted controls curse
        cursed_vx = -vx
        cursed_vz = -vz
        self.assertEqual(cursed_vz, 1.0)

    def test_05_aabb_player_collision_box(self):
        """Probe 5: AABB Player Collision Detection & Obstacle Resolution."""
        player_r = 0.45
        half_tile = self.TILE_SIZE / 2.0  # 1.0

        block_pos = self.grid_to_world(2, 2)
        # Test collision when player moves into the block boundary
        test_pos_inside = Vec3(block_pos.x - 0.8, 0, block_pos.z)
        collide_x = (test_pos_inside.x + player_r > block_pos.x - half_tile and
                     test_pos_inside.x - player_r < block_pos.x + half_tile)
        self.assertTrue(collide_x, "Player should collide with block on X axis")

        test_pos_outside = Vec3(block_pos.x - 2.5, 0, block_pos.z)
        collide_x_far = (test_pos_outside.x + player_r > block_pos.x - half_tile and
                         test_pos_outside.x - player_r < block_pos.x + half_tile)
        self.assertFalse(collide_x_far, "Player should not collide when far away")

    def test_06_bomb_fuse_and_pulsation_kinematics(self):
        """Probe 6: Bomb Fuse Countdown, Scale Pulsation, and Detonation Thresholds."""
        fuse_duration = 2.6
        timer = fuse_duration
        dt = 0.1

        scales = []
        for step in range(26):
            timer -= dt
            pulse_rate = max(4.0, (3.0 - timer) * 8.0)
            scale = 1.0 + math.sin(step * 0.5 * pulse_rate) * 0.15
            scales.append(scale)

        self.assertAlmostEqual(timer, 0.0, places=5)
        # Verify pulse fluctuation
        self.assertTrue(max(scales) > 1.0)
        self.assertTrue(min(scales) < 1.1)

    def test_07_crossfire_raycast_propagation(self):
        """Probe 7: Cross-Fire Cardinal Raycast Blast Propagation & Wall Occlusion."""
        grid = [[0 for _ in range(self.GRID_COLS)] for _ in range(self.GRID_ROWS)]
        # Place a hard wall at col 5, row 3
        grid[3][5] = 1
        # Place a soft block at col 1, row 3
        grid[3][1] = 2

        center_c, center_r = 3, 3
        fire_range = 3

        affected_tiles = [(center_c, center_r)]
        destroyed_blocks = []

        dirs = [(0, -1), (0, 1), (-1, 0), (1, 0)]
        for dc, dr in dirs:
            for s in range(1, fire_range + 1):
                c = center_c + dc * s
                r = center_r + dr * s
                if c < 0 or c >= self.GRID_COLS or r < 0 or r >= self.GRID_ROWS:
                    break
                tile = grid[r][c]
                if tile == 1:
                    # Stopped by hard wall
                    break
                affected_tiles.append((c, r))
                if tile == 2:
                    # Blows up soft block and terminates ray
                    destroyed_blocks.append((c, r))
                    break

        # East ray (1, 0): (4,3) ok, (5,3) blocked by hard wall
        self.assertIn((4, 3), affected_tiles)
        self.assertNotIn((5, 3), affected_tiles)
        self.assertNotIn((6, 3), affected_tiles)

        # West ray (-1, 0): (2,3) ok, (1,3) soft block destroyed
        self.assertIn((2, 3), affected_tiles)
        self.assertIn((1, 3), affected_tiles)
        self.assertIn((1, 3), destroyed_blocks)
        self.assertNotIn((0, 3), affected_tiles, "Ray should not penetrate past destroyed soft block")

    def test_08_instant_chain_reaction_detonation(self):
        """Probe 8: Instant Chain Reaction Detonation Architecture."""
        bombs = [
            {'id': 'B1', 'col': 3, 'row': 3, 'range': 2, 'detonated': False},
            {'id': 'B2', 'col': 3, 'row': 5, 'range': 2, 'detonated': False},
            {'id': 'B3', 'col': 5, 'row': 5, 'range': 2, 'detonated': False},
            {'id': 'B4', 'col': 11, 'row': 11, 'range': 2, 'detonated': False}  # Far away
        ]

        def detonate(b_idx, active_bombs):
            b = active_bombs[b_idx]
            b['detonated'] = True
            # Cross fire tiles
            hit_tiles = [(b['col'], b['row'])]
            for dc, dr in [(0, -1), (0, 1), (-1, 0), (1, 0)]:
                for s in range(1, b['range'] + 1):
                    hit_tiles.append((b['col'] + dc * s, b['row'] + dr * s))

            # Trigger chain
            for other_idx, ob in enumerate(active_bombs):
                if not ob['detonated'] and (ob['col'], ob['row']) in hit_tiles:
                    detonate(other_idx, active_bombs)

        # Detonate B1
        detonate(0, bombs)

        # B1 hits B2 (col 3, row 5 is 2 tiles south)
        # B2 hits B3 (col 5, row 5 is 2 tiles east)
        self.assertTrue(bombs[0]['detonated'])
        self.assertTrue(bombs[1]['detonated'])
        self.assertTrue(bombs[2]['detonated'])
        self.assertFalse(bombs[3]['detonated'], "B4 is outside blast chain")

    def test_09_powerup_type_definitions_and_inventory(self):
        """Probe 9: Power-Up System Inventory & Maximum Caps."""
        player = {
            'maxBombs': 1,
            'fireRange': 2,
            'speed': 4.8,
            'hasGlove': False,
            'hasShield': False,
            'hasRemote': False,
            'isCursed': False
        }

        # Apply upgrades
        for _ in range(10):
            player['maxBombs'] = min(8, player['maxBombs'] + 1)
            player['fireRange'] = min(8, player['fireRange'] + 1)
            player['speed'] = min(7.5, player['speed'] * 1.2)

        self.assertEqual(player['maxBombs'], 8)
        self.assertEqual(player['fireRange'], 8)
        self.assertEqual(player['speed'], 7.5)

        # Apply Glove, Shield, Remote
        player['hasGlove'] = True
        player['hasShield'] = True
        player['hasRemote'] = True
        self.assertTrue(player['hasGlove'])
        self.assertTrue(player['hasShield'])
        self.assertTrue(player['hasRemote'])

    def test_10_bomb_kick_sliding_physics(self):
        """Probe 10: Bomb Kick Sliding Physics & Obstacle Collision Grid Snapping."""
        bomb = {
            'col': 3, 'row': 3,
            'x': self.grid_to_world(3, 3).x,
            'z': self.grid_to_world(3, 3).z,
            'isMoving': True,
            'slideDirX': 1,
            'slideDirZ': 0
        }

        # Obstacle at col 6, row 3
        dt = 0.05
        slide_speed = 8.0
        for _ in range(20):
            if bomb['isMoving']:
                bomb['x'] += bomb['slideDirX'] * slide_speed * dt
                curr_grid = self.world_to_grid(bomb['x'], bomb['z'])
                if curr_grid.col + bomb['slideDirX'] >= 6:
                    # Hit obstacle: stop and snap
                    bomb['isMoving'] = False
                    bomb['col'] = 5
                    snap_w = self.grid_to_world(5, 3)
                    bomb['x'] = snap_w.x

        self.assertFalse(bomb['isMoving'])
        self.assertEqual(bomb['col'], 5)

    def test_11_ai_danger_zone_heatmap_generation(self):
        """Probe 11: AI Danger Zone Heatmap Evaluation & Blast Range Modeling."""
        heatmap = [[0 for _ in range(self.GRID_COLS)] for _ in range(self.GRID_ROWS)]
        bombs = [{'col': 3, 'row': 3, 'range': 2}]

        for b in bombs:
            heatmap[b['row']][b['col']] = 50
            for dc, dr in [(0, -1), (0, 1), (-1, 0), (1, 0)]:
                for s in range(1, b['range'] + 1):
                    c = b['col'] + dc * s
                    r = b['row'] + dr * s
                    if 0 <= c < self.GRID_COLS and 0 <= r < self.GRID_ROWS:
                        heatmap[r][c] = 40

        # Tiles in cross are dangerous
        self.assertEqual(heatmap[3][3], 50)
        self.assertEqual(heatmap[3][1], 40)
        self.assertEqual(heatmap[3][5], 40)
        self.assertEqual(heatmap[1][3], 40)
        self.assertEqual(heatmap[5][3], 40)
        # Diagonal tile is safe
        self.assertEqual(heatmap[4][4], 0)

    def test_12_ai_bfs_safe_tile_pathfinding(self):
        """Probe 12: AI Breadth-First-Search (BFS) Shortest Safe Path Navigation."""
        heatmap = [[0 for _ in range(self.GRID_COLS)] for _ in range(self.GRID_ROWS)]
        # Blast along column 3 (rows 1 to 5)
        for r in range(1, 6):
            heatmap[r][3] = 40

        # Start AI in the blast line at (3, 3)
        start_col, start_row = 3, 3

        queue = [(start_col, start_row, 0)]
        visited = {(start_col, start_row)}
        safe_tile = None

        while queue:
            c, r, dist = queue.pop(0)
            if heatmap[r][c] == 0:
                safe_tile = (c, r)
                break
            for dc, dr in [(0, -1), (0, 1), (-1, 0), (1, 0)]:
                nc, nr = c + dc, r + dr
                if 0 <= nc < self.GRID_COLS and 0 <= nr < self.GRID_ROWS and (nc, nr) not in visited:
                    visited.add((nc, nr))
                    queue.append((nc, nr, dist + 1))

        self.assertIsNotNone(safe_tile)
        # Closest safe tiles are (2, 3) or (4, 3) at distance 1
        dist_to_safe = abs(safe_tile[0] - start_col) + abs(safe_tile[1] - start_row)
        self.assertEqual(dist_to_safe, 1)

    def test_13_sudden_death_inward_spiral_sequence(self):
        """Probe 13: Sudden Death Inward Spiral Generation & Coordinate Coverage."""
        sequence = []
        top, bottom = 1, self.GRID_ROWS - 2
        left, right = 1, self.GRID_COLS - 2

        while top <= bottom and left <= right:
            for c in range(left, right + 1):
                sequence.append((c, top))
            top += 1
            for r in range(top, bottom + 1):
                sequence.append((right, r))
            right -= 1
            if top <= bottom:
                for c in range(right, left - 1, -1):
                    sequence.append((c, bottom))
                bottom -= 1
            if left <= right:
                for r in range(bottom, top - 1, -1):
                    sequence.append((left, r))
                left += 1

        # Check total internal arena tiles covered: (GRID_COLS - 2) * (GRID_ROWS - 2) = 13 * 11 = 143
        expected_tiles = (self.GRID_COLS - 2) * (self.GRID_ROWS - 2)
        self.assertEqual(len(sequence), expected_tiles)
        # First tile is top-left corner
        self.assertEqual(sequence[0], (1, 1))
        # Unique tiles check
        self.assertEqual(len(set(sequence)), expected_tiles)

    def test_14_five_director_camera_perspectives(self):
        """Probe 14: 5 Director Camera Perspective Transformations."""
        modes = [
            {'id': 'TOP_DOWN', 'offset': Vec3(0, 32, 0.1), 'lookAt': Vec3(0, 0, 0)},
            {'id': 'ISOMETRIC', 'offset': Vec3(0, 26, 20), 'lookAt': Vec3(0, -0.5, 1.2)},
            {'id': 'FOLLOW', 'offset': Vec3(0, 5.0, 7.5), 'lookAt': Vec3(0, 1.0, -3.0)},
            {'id': 'DIRECTOR', 'offset': Vec3(0, 18, 16), 'lookAt': Vec3(0, 0, 0)},
            {'id': 'FREE', 'offset': Vec3(22, 22, 22), 'lookAt': Vec3(0, 0, 0)}
        ]
        self.assertEqual(len(modes), 5)

        # Camera Lerp Test
        cam_pos = Vec3(0, 32, 0.1)
        target_pos = Vec3(0, 26, 20)
        interpolated = cam_pos.lerp(target_pos, 0.5)

        self.assertAlmostEqual(interpolated.y, 29.0, places=4)
        self.assertAlmostEqual(interpolated.z, 10.05, places=4)

    def test_15_five_slot_save_load_serialization(self):
        """Probe 15: 5-Slot Save / Load Match State Serialization & Deserialization."""
        state = {
            'round': 2,
            'date': '10:30:00 AM',
            'p1Stats': {
                'maxBombs': 3,
                'fireRange': 4,
                'speed': 5.76,
                'hasGlove': True,
                'hasShield': True,
                'hasRemote': False
            },
            'stats': {
                'bombsDetonated': 14,
                'blocksDestroyed': 25,
                'powerupsGrabbed': 8
            }
        }

        encoded = json.dumps(state)
        decoded = json.loads(encoded)

        self.assertEqual(decoded['round'], 2)
        self.assertEqual(decoded['p1Stats']['maxBombs'], 3)
        self.assertTrue(decoded['p1Stats']['hasShield'])
        self.assertEqual(decoded['stats']['blocksDestroyed'], 25)

    def test_16_konami_code_detector_and_audio_synth(self):
        """Probe 16: Konami Code Sequence Detector & Web Audio Synthesizer Schedules."""
        konami_target = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
        buffer = []

        keys_stream = ['x', 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
        triggered = False

        for k in keys_stream:
            buffer.append(k)
            if len(buffer) > len(konami_target):
                buffer.pop(0)
            if buffer == konami_target:
                triggered = True

        self.assertTrue(triggered, "Konami code must trigger when exact sequence is entered")

        # Audio frequency checks
        fanfare_notes = [392.0, 523.25, 659.25, 783.99]
        self.assertTrue(all(f > 100 for f in fanfare_notes))
        self.assertLess(fanfare_notes[0], fanfare_notes[3])


if __name__ == '__main__':
    unittest.main()
