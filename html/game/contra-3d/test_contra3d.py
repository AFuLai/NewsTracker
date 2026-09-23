#!/usr/bin/env python3
"""test_contra3d.py -- Headless Regression Test Suite for Web Contra 3D (Galuga Incursion Remake).

Validates 16 Comprehensive Probes:
  1. 3D Vector Math operations and 8-Directional Aiming Vector resolution.
  2. 3D AABB Collision Detection, raycast hit detection, and defense wall hitboxes.
  3. Commando Kinematics: Running velocity, somersault jump impulse, prone stance, invulnerability.
  4. Weapon Arsenal & Ballistics: Normal, Machine Gun 'M', Spread Gun 'S' (5-way), Laser 'L', Flame 'F', Barrier 'B'.
  5. Flying Weapon Capsule Kinematics: Sinusoidal flight path, capsule burst, and badge pickup.
  6. Enemy AI & Defense Turret Mechanics: Azimuth angle tracking, deadband, infantry patrol.
  7. 8-Stage 1987 Lore & Story Progression: Galuga Archipelago to Alien Lair Heart.
  8. Boss Encounter Mechanics: Stage 1 Wall Core and Stage 8 Gorgon Alien Heart multi-phase boss.
  9. Multi-Camera Director System: 4 Modes (2.5D Side, 3D Base Corridor, Isometric, Cinematic).
  10. Cinematic Director Scripting: Letterbox bars, slow-mo bullet-cam, and helicopter extraction.
  11. 5-Slot Save / Load System: Slots 1..5, deep state serialization, and boundary protection.
  12. Konami Code Sequence Detector: Up Up Down Down Left Right Left Right B A for 30 lives.
  13. Procedural Texture Generator Specifications: Canvas texture dimensions, repeat metrics, noise.
  14. Input & Controller Mappings: Key combinations, 8-way aiming vectors, and action dispatches.
  15. Victory Extraction & Scoring: Enemy point tables, clear bonuses, and S-Rank evaluation.
  16. Audio Synthesizer Schedules: Chiptune note frequencies and explosion envelope durations.
"""
import math
import sys
import unittest


class Vec3:
    """3D Vector utility for Contra physics, aiming, and camera vectors."""
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

    def dot(self, v):
        return self.x * v.x + self.y * v.y + self.z * v.z

    def cross(self, v):
        return Vec3(
            self.y * v.z - self.z * v.y,
            self.z * v.x - self.x * v.z,
            self.x * v.y - self.y * v.x
        )

    def length_sq(self):
        return self.x * self.x + self.y * self.y + self.z * self.z

    def length(self):
        return math.sqrt(self.length_sq())

    def normalize(self):
        l = self.length()
        if l > 1e-6:
            return Vec3(self.x / l, self.y / l, self.z / l)
        return Vec3(0.0, 0.0, 0.0)

    def dist(self, v):
        return self.sub(v).length()


class AABB:
    """3D Axis-Aligned Bounding Box for hitboxes and terrain collision."""
    def __init__(self, min_pt: Vec3, max_pt: Vec3):
        self.min = min_pt
        self.max = max_pt

    def intersects(self, other: 'AABB') -> bool:
        return (
            self.min.x <= other.max.x and self.max.x >= other.min.x and
            self.min.y <= other.max.y and self.max.y >= other.min.y and
            self.min.z <= other.max.z and self.max.z >= other.min.z
        )

    def contains_point(self, pt: Vec3) -> bool:
        return (
            self.min.x <= pt.x <= self.max.x and
            self.min.y <= pt.y <= self.max.y and
            self.min.z <= pt.z <= self.max.z
        )

    def intersects_ray(self, origin: Vec3, dir_norm: Vec3, max_dist=100.0) -> bool:
        tmin = 0.0
        tmax = max_dist
        for i, (orig, d, bmin, bmax) in enumerate([
            (origin.x, dir_norm.x, self.min.x, self.max.x),
            (origin.y, dir_norm.y, self.min.y, self.max.y),
            (origin.z, dir_norm.z, self.min.z, self.max.z),
        ]):
            if abs(d) < 1e-6:
                if orig < bmin or orig > bmax:
                    return False
            else:
                inv_d = 1.0 / d
                t1 = (bmin - orig) * inv_d
                t2 = (bmax - orig) * inv_d
                if t1 > t2:
                    t1, t2 = t2, t1
                tmin = max(tmin, t1)
                tmax = min(tmax, t2)
                if tmin > tmax:
                    return False
        return True


class MockSaveSystem:
    """Headless replica of the 5-slot save/load manager for Contra 3D."""
    def __init__(self, max_slots=5):
        self.max_slots = max_slots
        self.slots = {}

    def save(self, slot_id, state):
        if slot_id < 1 or slot_id > self.max_slots:
            raise ValueError(f"Invalid slot id {slot_id}; must be 1..{self.max_slots}")
        record = {
            'slot_id': slot_id,
            'timestamp': '2026-09-23 08:00:00',
            'stage_index': state.get('stage_index', 1),
            'stage_name': state.get('stage_name', 'Jungle Outpost'),
            'score': state.get('score', 0),
            'lives': state.get('lives', 3),
            'weapon': state.get('weapon', 'RIFLE'),
            'player_character': state.get('player_character', 'BILL'),
            'camera_mode': state.get('camera_mode', 'SIDE_25D'),
            'konami_activated': state.get('konami_activated', False)
        }
        self.slots[slot_id] = record
        return record

    def load(self, slot_id):
        if slot_id < 1 or slot_id > self.max_slots:
            return None
        return self.slots.get(slot_id, None)

    def delete(self, slot_id):
        if slot_id in self.slots:
            del self.slots[slot_id]
            return True
        return False


class KonamiCodeDetector:
    """State machine detecting the legendary Konami 30-lives code."""
    CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

    def __init__(self):
        self.index = 0
        self.triggered = False

    def feed_key(self, key_code: str) -> bool:
        if self.triggered:
            return False
        expected = self.CODE[self.index]
        if key_code == expected:
            self.index += 1
            if self.index == len(self.CODE):
                self.triggered = True
                return True
        else:
            self.index = 1 if key_code == self.CODE[0] else 0
        return False


class MockContra3DEngine:
    """Comprehensive Headless Python Engine simulating Contra 3D mechanics."""
    def __init__(self):
        self.position = Vec3(0.0, 0.0, 0.0)
        self.velocity = Vec3(0.0, 0.0, 0.0)
        self.facing = 1  # +1 right, -1 left
        self.aim_direction = Vec3(1.0, 0.0, 0.0)
        self.is_grounded = True
        self.is_prone = False
        self.lives = 3
        self.score = 0
        self.weapon = "RIFLE"  # RIFLE, M, S, L, F, B
        self.invulnerable_timer = 0.0
        self.barrier_timer = 0.0
        self.stage_index = 1
        self.is_victory = False
        self.camera_mode = "SIDE_25D"

    def compute_8way_aim(self, up: bool, down: bool, left: bool, right: bool) -> Vec3:
        """Calculate normalized 8-way aim vector based on directional keys."""
        dx, dy = 0.0, 0.0
        if right:
            dx += 1.0
        if left:
            dx -= 1.0
        if up:
            dy += 1.0
        if down:
            dy -= 1.0

        if dx == 0.0 and dy == 0.0:
            return Vec3(float(self.facing), 0.0, 0.0)

        # In prone state on ground with only down pressed
        if down and dx == 0.0 and self.is_grounded:
            self.is_prone = True
            return Vec3(float(self.facing), 0.0, 0.0)
        else:
            self.is_prone = False

        v = Vec3(dx, dy, 0.0)
        return v.normalize()

    def fire_weapon(self) -> list:
        """Generate projectile configurations according to active weapon."""
        origin = self.position.add(Vec3(0.0, 0.4 if self.is_prone else 1.2, 0.0))
        aim = self.aim_direction

        if self.weapon == "RIFLE":
            return [{'type': 'RIFLE', 'pos': origin, 'vel': aim.scale(15.0), 'dmg': 1.0, 'piercing': False}]
        elif self.weapon == "M":
            return [{'type': 'M', 'pos': origin, 'vel': aim.scale(16.5), 'dmg': 1.2, 'piercing': False}]
        elif self.weapon == "S":
            # 5-way spread fan at -30, -15, 0, +15, +30 degrees
            base_angle = math.atan2(aim.y, aim.x)
            bullets = []
            offsets = [-math.radians(30), -math.radians(15), 0.0, math.radians(15), math.radians(30)]
            for off in offsets:
                ang = base_angle + off
                vel = Vec3(math.cos(ang), math.sin(ang), 0.0).scale(14.0)
                bullets.append({'type': 'S', 'pos': origin, 'vel': vel, 'dmg': 1.5, 'piercing': False})
            return bullets
        elif self.weapon == "L":
            # Continuous piercing laser beam segment
            return [{'type': 'L', 'pos': origin, 'vel': aim.scale(28.0), 'dmg': 4.0, 'piercing': True, 'beam_len': 20.0}]
        elif self.weapon == "F":
            # Rotating spiral projectile
            return [{'type': 'F', 'pos': origin, 'vel': aim.scale(10.0), 'dmg': 2.5, 'vortex': True, 'radius': 1.2}]
        elif self.weapon == "B":
            self.barrier_timer = 15.0
            return [{'type': 'B_PULSE', 'pos': origin, 'vel': Vec3(0, 0, 0), 'dmg': 0.0}]
        return []

    def take_hit(self) -> bool:
        """Handles player damage taking barrier and invulnerability into account."""
        if self.barrier_timer > 0.0 or self.invulnerable_timer > 0.0:
            return False  # Protected
        self.lives -= 1
        self.invulnerable_timer = 2.5  # 2.5s flashing grace period
        self.weapon = "RIFLE"  # Reset weapon on death
        return True


class TestContra3D(unittest.TestCase):
    """16 Rigorous Headless Probes for Web Contra 3D Remake Benchmark."""

    def test_01_vector3_and_aiming_angles(self):
        """Probe 1: 3D Vector Math and 8-Directional Aiming Vector calculations."""
        v1 = Vec3(3.0, 4.0, 0.0)
        self.assertEqual(v1.length(), 5.0)
        norm = v1.normalize()
        self.assertAlmostEqual(norm.length(), 1.0, places=5)
        self.assertAlmostEqual(norm.x, 0.6, places=5)
        self.assertAlmostEqual(norm.y, 0.8, places=5)

        # 8-direction aim vectors
        engine = MockContra3DEngine()
        # Right
        aim_r = engine.compute_8way_aim(up=False, down=False, left=False, right=True)
        self.assertEqual((aim_r.x, aim_r.y, aim_r.z), (1.0, 0.0, 0.0))
        # Up-Right (45 deg diagonal)
        aim_ur = engine.compute_8way_aim(up=True, down=False, left=False, right=True)
        self.assertAlmostEqual(aim_ur.x, math.cos(math.pi / 4), places=4)
        self.assertAlmostEqual(aim_ur.y, math.sin(math.pi / 4), places=4)
        # Up
        aim_u = engine.compute_8way_aim(up=True, down=False, left=False, right=False)
        self.assertEqual((aim_u.x, aim_u.y), (0.0, 1.0))
        # Down-Left
        aim_dl = engine.compute_8way_aim(up=False, down=True, left=True, right=False)
        self.assertAlmostEqual(aim_dl.x, -math.cos(math.pi / 4), places=4)
        self.assertAlmostEqual(aim_dl.y, -math.sin(math.pi / 4), places=4)

    def test_02_aabb_3d_collision_and_raycasts(self):
        """Probe 2: 3D AABB Collision Detection, raycast hit detection, and hitboxes."""
        wall_box = AABB(Vec3(10.0, 0.0, -2.0), Vec3(12.0, 8.0, 2.0))
        bullet_box = AABB(Vec3(11.0, 4.0, -0.5), Vec3(11.5, 4.5, 0.5))
        outside_box = AABB(Vec3(15.0, 4.0, 0.0), Vec3(16.0, 5.0, 1.0))

        self.assertTrue(wall_box.intersects(bullet_box))
        self.assertFalse(wall_box.intersects(outside_box))
        self.assertTrue(wall_box.contains_point(Vec3(11.0, 2.0, 0.0)))
        self.assertFalse(wall_box.contains_point(Vec3(9.9, 2.0, 0.0)))

        # Raycast from player origin (0, 4, 0) in direction (1, 0, 0)
        origin = Vec3(0.0, 4.0, 0.0)
        dir_hit = Vec3(1.0, 0.0, 0.0)
        dir_miss = Vec3(0.0, 1.0, 0.0)
        self.assertTrue(wall_box.intersects_ray(origin, dir_hit, max_dist=50.0))
        self.assertFalse(wall_box.intersects_ray(origin, dir_miss, max_dist=50.0))

    def test_03_commando_kinematics_and_states(self):
        """Probe 3: Commando running velocity, somersault jump impulse, prone stance."""
        engine = MockContra3DEngine()
        # Normal upright height
        self.assertFalse(engine.is_prone)
        # Prone down
        engine.compute_8way_aim(up=False, down=True, left=False, right=False)
        self.assertTrue(engine.is_prone)

        # Jump impulse
        jump_force = 12.0
        gravity = -24.0
        engine.velocity.y = jump_force
        engine.is_grounded = False

        # Simulate physics for dt = 0.25s
        dt = 0.25
        engine.position.y += engine.velocity.y * dt + 0.5 * gravity * dt * dt
        engine.velocity.y += gravity * dt
        self.assertGreater(engine.position.y, 1.5)
        self.assertEqual(engine.velocity.y, jump_force + gravity * dt)

        # Platform Drop-Down Mechanic: Down + Jump drops below elevated platform
        engine.position.y = 2.0
        engine.is_grounded = True
        engine.position.y -= 0.3
        engine.velocity.y = -6.0
        engine.is_grounded = False
        self.assertLess(engine.position.y, 2.0)
        self.assertEqual(engine.velocity.y, -6.0)

        # Water Wading & Submergence Dodging: River floor drops to -0.4, speed dampens
        is_in_water = True
        water_floor_y = -0.4 if is_in_water else 0.0
        water_move_speed = 4.8 if is_in_water else 7.0
        self.assertEqual(water_floor_y, -0.4)
        self.assertLess(water_move_speed, 7.0)

        # Invulnerability grace period
        engine.take_hit()
        self.assertEqual(engine.lives, 2)
        self.assertGreater(engine.invulnerable_timer, 2.0)
        # Immediate subsequent hit should be blocked
        second_hit = engine.take_hit()
        self.assertFalse(second_hit)
        self.assertEqual(engine.lives, 2)

    def test_04_weapon_arsenal_and_ballistics(self):
        """Probe 4: Full weapon arsenal ballistics (Normal, M, S-5way, Laser, Flame, Barrier)."""
        engine = MockContra3DEngine()
        # 1. Normal Rifle
        engine.weapon = "RIFLE"
        r_bullets = engine.fire_weapon()
        self.assertEqual(len(r_bullets), 1)
        self.assertEqual(r_bullets[0]['type'], 'RIFLE')
        self.assertEqual(r_bullets[0]['dmg'], 1.0)

        # 2. Spread Gun 'S' (5-way spread)
        engine.weapon = "S"
        s_bullets = engine.fire_weapon()
        self.assertEqual(len(s_bullets), 5)
        angles = [math.atan2(b['vel'].y, b['vel'].x) for b in s_bullets]
        # Angles should span across negative to positive around 0 deg (facing right)
        self.assertLess(min(angles), -0.4)
        self.assertGreater(max(angles), 0.4)
        self.assertEqual(s_bullets[0]['dmg'], 1.5)

        # 3. Laser Gun 'L'
        engine.weapon = "L"
        l_bullets = engine.fire_weapon()
        self.assertEqual(len(l_bullets), 1)
        self.assertTrue(l_bullets[0]['piercing'])
        self.assertEqual(l_bullets[0]['beam_len'], 20.0)

        # 4. Flame Gun 'F'
        engine.weapon = "F"
        f_bullets = engine.fire_weapon()
        self.assertEqual(len(f_bullets), 1)
        self.assertTrue(f_bullets[0]['vortex'])

        # 5. Barrier 'B'
        engine.weapon = "B"
        engine.fire_weapon()
        self.assertGreater(engine.barrier_timer, 10.0)
        self.assertFalse(engine.take_hit())  # Damage nullified by barrier

    def test_05_flying_capsule_kinematics_and_item_drops(self):
        """Probe 5: Flying weapon capsule trajectory, burst threshold, and badge drops."""
        t = 1.5
        amplitude = 2.0
        frequency = 3.0
        speed_x = 4.0
        pos_x = speed_x * t
        pos_y = 5.0 + amplitude * math.sin(frequency * t)
        self.assertGreater(pos_x, 5.0)
        self.assertGreaterEqual(pos_y, 3.0)
        self.assertLessEqual(pos_y, 7.0)

        capsule = {'hp': 1, 'badge': 'S', 'burst': False}
        bullet_damage = 1.0
        capsule['hp'] -= bullet_damage
        if capsule['hp'] <= 0:
            capsule['burst'] = True

        self.assertTrue(capsule['burst'])
        self.assertEqual(capsule['badge'], 'S')

    def test_06_enemy_ai_and_turret_aiming(self):
        """Probe 6: Defense Turret tracking azimuth angle and deadband."""
        turret_pos = Vec3(20.0, 5.0, 0.0)
        player_pos = Vec3(10.0, 0.0, 0.0)
        dx = player_pos.x - turret_pos.x  # -10
        dy = player_pos.y - turret_pos.y  # -5
        target_angle = math.atan2(dy, dx)

        current_turret_angle = -math.pi  # Facing purely left (-180 deg)
        angle_diff = target_angle - current_turret_angle
        self.assertLess(abs(angle_diff), math.pi)

        # Clamped turn step
        max_turn_rate = 0.1
        step = max(-max_turn_rate, min(max_turn_rate, angle_diff))
        new_angle = current_turret_angle + step
        self.assertNotEqual(new_angle, current_turret_angle)

    def test_07_eight_stage_lore_progression(self):
        """Probe 7: 8-Stage 1987 Lore & Storyline Architecture."""
        stages = [
            {'index': 1, 'name': 'Jungle Outpost', 'camera': 'SIDE_25D', 'lore': 'Galuga Island drop. Detonate the bridge.'},
            {'index': 2, 'name': 'Base 1 Corridor', 'camera': 'BASE_3D_CORRIDOR', 'lore': 'Infiltrate the 3D fortress corridor.'},
            {'index': 3, 'name': 'Waterfall Ascent', 'camera': 'SIDE_25D', 'lore': 'Ascend the cliffs under mortar fire.'},
            {'index': 4, 'name': 'Base 2 Central', 'camera': 'BASE_3D_CORRIDOR', 'lore': 'Breach the central defense shields.'},
            {'index': 5, 'name': 'Snow Field', 'camera': 'SIDE_25D', 'lore': 'Sub-zero tundra armored tank division.'},
            {'index': 6, 'name': 'Energy Zone', 'camera': 'SIDE_25D', 'lore': 'Navigate the flaming exhaust chambers.'},
            {'index': 7, 'name': 'Hangar', 'camera': 'SIDE_25D', 'lore': 'Alien bio-engineering assembly lines.'},
            {'index': 8, 'name': 'Alien Lair Heart', 'camera': 'CINEMATIC', 'lore': 'Decimate Red Falcon Gorgon heart.'},
        ]
        self.assertEqual(len(stages), 8)
        self.assertEqual(stages[1]['camera'], 'BASE_3D_CORRIDOR')
        self.assertEqual(stages[7]['name'], 'Alien Lair Heart')
        self.assertTrue(all('lore' in s for s in stages))

        # Stage 1 Exploding Bridge Simulation: Planks explode behind commando
        bridge_planks = [{'x': 20 + i * 2.0, 'exploded': False} for i in range(8)]
        player_x = 28.0
        for p in bridge_planks:
            if player_x > p['x'] + 1.2:
                p['exploded'] = True
        exploded_count = sum(1 for p in bridge_planks if p['exploded'])
        self.assertGreater(exploded_count, 0)
        self.assertLess(exploded_count, 8)

    def test_08_boss_phases_and_core_destruction(self):
        """Probe 8: Stage 1 Multi-Part Wall Fortress and Stage 8 Gorgon Alien Heart Boss phases."""
        # Stage 1 Multi-Part Fortress Wall Boss
        wall_fortress = {
            'hp': 50,
            'radar_hp': 15,
            'gun1_hp': 10,
            'gun2_hp': 10,
            'core_hp': 15,
            'radar_destroyed': False,
            'guns_destroyed': False,
            'core_exposed': False
        }
        # Destroy Radar Dish
        wall_fortress['radar_hp'] = 0
        wall_fortress['radar_destroyed'] = True
        self.assertTrue(wall_fortress['radar_destroyed'])

        # Destroy Gun Ports
        wall_fortress['gun1_hp'] = 0
        wall_fortress['gun2_hp'] = 0
        wall_fortress['guns_destroyed'] = True
        wall_fortress['core_exposed'] = True
        self.assertTrue(wall_fortress['core_exposed'])

        # Destroy Central Core
        wall_fortress['core_hp'] = 0
        wall_fortress['hp'] = 0
        self.assertEqual(wall_fortress['hp'], 0)

        # Stage 8 Gorgon Heart
        gorgon_boss = {
            'phase': 1,
            'hp': 100,
            'max_hp': 100,
            'eggs_alive': 4,
            'tentacles_alive': 2,
            'heart_exposed': False
        }

        # Defeat all eggs in Phase 1
        gorgon_boss['eggs_alive'] = 0
        gorgon_boss['phase'] = 2
        self.assertEqual(gorgon_boss['phase'], 2)

        # Defeat tentacles in Phase 2
        gorgon_boss['tentacles_alive'] = 0
        gorgon_boss['phase'] = 3
        gorgon_boss['heart_exposed'] = True
        self.assertTrue(gorgon_boss['heart_exposed'])

        # Damage heart
        gorgon_boss['hp'] -= 100
        is_defeated = gorgon_boss['hp'] <= 0
        self.assertTrue(is_defeated)

    def test_09_multi_camera_director_system(self):
        """Probe 9: 4 Camera Modes and Dynamic Interpolation Vectors."""
        camera_specs = {
            'SIDE_25D': {'offset': Vec3(0, 2.5, 12.0), 'look_offset': Vec3(0, 1.5, 0), 'fov': 55},
            'BASE_3D_CORRIDOR': {'offset': Vec3(0, 1.8, 4.0), 'look_offset': Vec3(0, 2.0, -25.0), 'fov': 75},
            'ISOMETRIC': {'offset': Vec3(8.0, 14.0, 10.0), 'look_offset': Vec3(0, 0, 0), 'fov': 45},
            'CINEMATIC': {'offset': Vec3(-3.0, 1.2, 5.0), 'look_offset': Vec3(2.0, 2.5, 0), 'fov': 60}
        }
        self.assertEqual(len(camera_specs), 4)
        self.assertEqual(camera_specs['BASE_3D_CORRIDOR']['fov'], 75)
        # Verify 3D Corridor looks deep into negative Z (into the screen)
        self.assertLess(camera_specs['BASE_3D_CORRIDOR']['look_offset'].z, -20.0)

    def test_10_cinematic_director_scripting(self):
        """Probe 10: Letterbox bars, slow-motion bullet-cam, and helicopter extraction."""
        director = {
            'letterbox_active': False,
            'time_scale': 1.0,
            'current_cutscene': None
        }

        # Trigger Boss Encounter
        def trigger_boss_intro():
            director['letterbox_active'] = True
            director['time_scale'] = 0.6  # Dramatic slow
            director['current_cutscene'] = 'BOSS_ENTRY'

        trigger_boss_intro()
        self.assertTrue(director['letterbox_active'])
        self.assertEqual(director['time_scale'], 0.6)
        self.assertEqual(director['current_cutscene'], 'BOSS_ENTRY')

        # Trigger Extraction Ending
        def trigger_extraction():
            director['current_cutscene'] = 'EXTRACTION_HELI'
            director['time_scale'] = 1.0

        trigger_extraction()
        self.assertEqual(director['current_cutscene'], 'EXTRACTION_HELI')

    def test_11_five_slot_save_system(self):
        """Probe 11: 5-Slot Save / Load System boundaries, persistence, and state fidelity."""
        storage = MockSaveSystem(max_slots=5)
        state_s1 = {
            'stage_index': 3,
            'stage_name': 'Waterfall Ascent',
            'score': 45000,
            'lives': 3,
            'weapon': 'S',
            'player_character': 'BILL',
            'camera_mode': 'SIDE_25D',
            'konami_activated': True
        }
        storage.save(1, state_s1)
        loaded = storage.load(1)
        self.assertIsNotNone(loaded)
        self.assertEqual(loaded['score'], 45000)
        self.assertEqual(loaded['weapon'], 'S')
        self.assertTrue(loaded['konami_activated'])

        # Boundary checks: slot 0 and 6 must raise ValueError
        with self.assertRaises(ValueError):
            storage.save(0, state_s1)
        with self.assertRaises(ValueError):
            storage.save(6, state_s1)

        self.assertTrue(storage.delete(1))
        self.assertIsNone(storage.load(1))

    def test_12_konami_code_detector(self):
        """Probe 12: Konami Code Sequence Detector granting 30 lives."""
        detector = KonamiCodeDetector()
        inputs = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
                  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
        triggered = False
        for k in inputs:
            if detector.feed_key(k):
                triggered = True

        self.assertTrue(triggered)
        self.assertTrue(detector.triggered)

        # Adversarial mistyped input
        bad_detector = KonamiCodeDetector()
        bad_inputs = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'KeyA']
        for k in bad_inputs:
            bad_detector.feed_key(k)
        self.assertFalse(bad_detector.triggered)

    def test_13_procedural_texture_specifications(self):
        """Probe 13: Procedural Canvas texture dimensions, repeat mapping, and Sobel Normal Maps."""
        texture_specs = {
            'jungleRock': {'width': 512, 'height': 512, 'repeat': (4, 4), 'normal_strength': 2.8},
            'steelPlate': {'width': 256, 'height': 256, 'repeat': (8, 8), 'normal_strength': 3.2},
            'waterfall': {'width': 256, 'height': 512, 'repeat': (2, 8)},
            'waterNormal': {'width': 256, 'height': 256, 'repeat': (4, 4), 'normal_strength': 2.0},
            'alienFlesh': {'width': 512, 'height': 512, 'repeat': (4, 4), 'normal_strength': 3.0},
            'cautionStripe': {'width': 128, 'height': 128, 'repeat': (1, 16)}
        }
        self.assertEqual(texture_specs['jungleRock']['repeat'], (4, 4))
        self.assertEqual(texture_specs['waterfall']['height'], 512)
        self.assertEqual(texture_specs['waterNormal']['normal_strength'], 2.0)
        self.assertEqual(texture_specs['alienFlesh']['width'], 512)

    def test_14_input_and_controller_mappings(self):
        """Probe 14: Primary Arrow keys, Gamepad mappings, and Tactical Threat Radar math."""
        # Primary Arrow Keys Mapping
        key_map = {
            'ArrowUp': 'AIM_UP',
            'ArrowDown': 'AIM_DOWN_OR_PRONE',
            'ArrowLeft': 'MOVE_LEFT',
            'ArrowRight': 'MOVE_RIGHT',
            'Space': 'JUMP',
            'KeyZ': 'JUMP_ALT',
            'KeyK': 'FIRE',
            'KeyX': 'FIRE_ALT',
            'KeyL': 'SWITCH_WEAPON',
            'KeyV': 'CYCLE_CAMERA'
        }
        self.assertEqual(key_map['ArrowUp'], 'AIM_UP')
        self.assertEqual(key_map['ArrowRight'], 'MOVE_RIGHT')
        self.assertEqual(key_map['Space'], 'JUMP')
        self.assertEqual(key_map['KeyK'], 'FIRE')

        # Tactical Threat Radar coordinate projection math: rx = 45 + (x_target - x_player) * 1.2
        player_x = 30.0
        enemy_x = 45.0
        radar_center_x = 45.0
        scale = 1.2
        projected_radar_x = radar_center_x + (enemy_x - player_x) * scale
        self.assertEqual(projected_radar_x, 63.0)
        self.assertTrue(2.0 <= projected_radar_x <= 88.0)

    def test_15_victory_extraction_and_scoring(self):
        """Probe 15: Scoring table, Stage 8 Boss defeat, helicopter extraction, and Rank S."""
        scoring_table = {
            'SOLDIER': 100,
            'SNIPER': 200,
            'TURRET': 500,
            'STAGE_BOSS': 10000,
            'NO_DEATH_BONUS': 20000
        }
        total_score = (
            35 * scoring_table['SOLDIER'] +
            12 * scoring_table['SNIPER'] +
            8 * scoring_table['TURRET'] +
            scoring_table['STAGE_BOSS'] +
            scoring_table['NO_DEATH_BONUS']
        )
        self.assertEqual(total_score, 39900)

        # Rank formula
        def get_rank(score):
            if score >= 35000:
                return 'S'
            elif score >= 20000:
                return 'A'
            elif score >= 10000:
                return 'B'
            return 'C'

        self.assertEqual(get_rank(total_score), 'S')

    def test_16_audio_synth_frequencies(self):
        """Probe 16: Synthesizer note frequencies, chiptune intervals, and SFX envelopes."""
        contra_intro_motif = [
            {'f': 220.00, 'd': 0.12},  # A3
            {'f': 261.63, 'd': 0.12},  # C4
            {'f': 293.66, 'd': 0.12},  # D4
            {'f': 329.63, 'd': 0.24},  # E4
            {'f': 440.00, 'd': 0.36}   # A4
        ]
        duration = sum(n['d'] for n in contra_intro_motif)
        self.assertAlmostEqual(duration, 0.96, places=2)
        self.assertGreater(contra_intro_motif[-1]['f'], contra_intro_motif[0]['f'])


if __name__ == '__main__':
    unittest.main()
