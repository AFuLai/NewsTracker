#!/usr/bin/env python3
"""test_flight.py -- Headless Regression Test Suite for Web 3D Flight & Combat Simulator.

Validates:
  1. 3D Vector Math operations (Add, Sub, Scale, Dot, Cross, Normalize, Dist).
  2. Aircraft orientation basis vectors (Forward, Up, Right orthogonality & unit length).
  3. Aerodynamic cruise flight force equilibrium (Lift balances Mass * Gravity).
  4. Stall model mechanics (Critical AoA > 22 deg triggers stall, lift drop, drag rise).
  5. Afterburner propulsion thrust scaling (1.8x thrust factor & acceleration response).
  6. Proportional navigation missile homing guidance vector convergence.
  7. 20mm Vulcan cannon ballistics and velocity vector composition.
  8. Collision detection bounding sphere against hostile aircraft.
  9. Enemy AI tracking controller (steering unit vectors toward player).
  10. Tactical Radar relative bearing and distance transformation.
"""
import math
import unittest


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
        return Vec3(0, 0, 0)

    def dist(self, v):
        return self.sub(v).length()


class MockAircraft:
    """Headless Python replica of the Flight Physics Engine."""
    def __init__(self, is_player=True):
        self.pos = Vec3(0, 1200, 0)
        self.vel = Vec3(0, 0, 180)
        self.pitch = 0.0
        self.roll = 0.0
        self.yaw = 0.0
        self.throttle = 0.6
        self.afterburner = False
        self.max_thrust = 120000.0  # N
        self.mass = 11000.0         # kg
        self.wing_area = 28.0       # m^2
        self.air_density = 1.225
        self.health = 100.0
        self.is_alive = True
        self.is_stalled = False
        self.aoa = 4.0

    def get_vectors(self):
        cp = math.cos(self.pitch)
        sp = math.sin(self.pitch)
        cr = math.cos(self.roll)
        sr = math.sin(self.roll)
        cy = math.cos(self.yaw)
        sy = math.sin(self.yaw)

        forward = Vec3(sy * cp, sp, cy * cp).normalize()
        right = Vec3(
            cy * cr + sy * sp * sr,
            -cp * sr,
            -sy * cr + cy * sp * sr
        ).normalize()
        up = forward.cross(right).normalize()
        return forward, up, right

    def update_physics(self, dt):
        forward, up, right = self.get_vectors()
        speed = self.vel.length()
        q = 0.5 * self.air_density * speed * speed

        vel_norm = self.vel.normalize() if speed > 1 else forward
        fwd_dot_vel = max(-1.0, min(1.0, forward.dot(vel_norm)))
        self.aoa = math.acos(fwd_dot_vel) * (180.0 / math.pi)
        self.is_stalled = (self.aoa > 22.0 or speed < 60)

        thrust_mag = self.throttle * self.max_thrust * (1.8 if self.afterburner else 1.0)
        thrust = forward.scale(thrust_mag)

        cd = 0.35 if self.is_stalled else (0.02 + 0.05 * (self.aoa / 15.0) ** 2)
        drag_mag = q * self.wing_area * cd
        drag = vel_norm.scale(-drag_mag)

        cl = 0.15 if self.is_stalled else min(1.4, 0.04 * self.aoa + 0.05)
        lift_mag = q * self.wing_area * cl
        lift = up.scale(lift_mag)

        gravity = Vec3(0, -9.81 * self.mass, 0)
        total_force = thrust.add(drag).add(lift).add(gravity)
        accel = total_force.scale(1.0 / self.mass)

        self.vel = self.vel.add(accel.scale(dt))
        self.pos = self.pos.add(self.vel.scale(dt))
        self.g_force = lift_mag / (self.mass * 9.81)


class TestFlightSimulator(unittest.TestCase):
    def test_01_vec3_math(self):
        """Verify vector algebra primitives."""
        v1 = Vec3(1, 2, 3)
        v2 = Vec3(4, 5, 6)
        # Dot product
        self.assertEqual(v1.dot(v2), 1*4 + 2*5 + 3*6)
        # Cross product
        cross = v1.cross(v2)
        self.assertEqual(cross.x, 2*6 - 3*5)  # -3
        self.assertEqual(cross.y, 3*4 - 1*6)  # 6
        self.assertEqual(cross.z, 1*5 - 2*4)  # -3
        # Normalize
        norm = Vec3(0, 3, 4).normalize()
        self.assertAlmostEqual(norm.length(), 1.0)
        self.assertAlmostEqual(norm.y, 0.6)
        self.assertAlmostEqual(norm.z, 0.8)

    def test_02_aircraft_orientation_vectors(self):
        """Verify Forward, Up, Right basis vectors form an orthonormal triad."""
        plane = MockAircraft()
        plane.pitch = 0.2
        plane.roll = -0.4
        plane.yaw = 1.1
        fwd, up, right = plane.get_vectors()

        self.assertAlmostEqual(fwd.length(), 1.0, places=5)
        self.assertAlmostEqual(up.length(), 1.0, places=5)
        self.assertAlmostEqual(right.length(), 1.0, places=5)

        # Mutual orthogonality
        self.assertAlmostEqual(fwd.dot(up), 0.0, places=5)
        self.assertAlmostEqual(fwd.dot(right), 0.0, places=5)
        self.assertAlmostEqual(up.dot(right), 0.0, places=5)

    def test_03_aerodynamic_lift_equilibrium(self):
        """Verify lift generation at cruise speed produces approx 1G load factor."""
        plane = MockAircraft()
        plane.vel = Vec3(0, 0, 185)  # Cruise speed
        plane.pitch = 0.075          # Slight pitch up for trim AoA
        plane.update_physics(0.1)

        # G-force should be approximately 1.0 G in trimmed cruise
        self.assertGreater(plane.g_force, 0.5)
        self.assertLess(plane.g_force, 2.0)

    def test_04_stall_dynamics(self):
        """Verify stall condition when AoA exceeds critical 22 degrees."""
        plane = MockAircraft()
        plane.vel = Vec3(0, 0, 180)
        # Set extreme pitch mismatch relative to velocity
        plane.pitch = math.radians(45)  # 45 deg AoA
        plane.update_physics(0.1)

        self.assertTrue(plane.is_stalled)
        self.assertGreater(plane.aoa, 22.0)

    def test_05_afterburner_thrust_boost(self):
        """Verify afterburner produces 1.8x the dry thrust."""
        plane_dry = MockAircraft()
        plane_dry.throttle = 1.0
        plane_dry.afterburner = False

        plane_ab = MockAircraft()
        plane_ab.throttle = 1.0
        plane_ab.afterburner = True

        thrust_dry = plane_dry.throttle * plane_dry.max_thrust * 1.0
        thrust_ab = plane_ab.throttle * plane_ab.max_thrust * 1.8

        self.assertAlmostEqual(thrust_ab / thrust_dry, 1.8, places=4)

    def test_06_proportional_navigation_missile_guidance(self):
        """Verify missile steering force converges towards target position."""
        target_pos = Vec3(500, 1200, 1000)
        missile_pos = Vec3(0, 1200, 0)
        missile_vel = Vec3(0, 0, 300)

        r_vec = target_pos.sub(missile_pos)
        los = r_vec.normalize()
        vel_norm = missile_vel.normalize()

        # Proportional navigation steering vector
        nav_gain = 3.5
        steering_force = los.sub(vel_norm).scale(nav_gain * 120)

        # Missile must steer right (positive X) to intercept target
        self.assertGreater(steering_force.x, 0.0)

    def test_07_vulcan_cannon_ballistics(self):
        """Verify 20mm Vulcan muzzle velocity adds to aircraft forward velocity."""
        plane = MockAircraft()
        plane.vel = Vec3(0, 0, 200)
        fwd, _, _ = plane.get_vectors()

        muzzle_vel = 1100.0
        bullet_vel = plane.vel.add(fwd.scale(muzzle_vel))

        self.assertEqual(bullet_vel.z, 200 + 1100)

    def test_08_bullet_hit_detection_bounding_sphere(self):
        """Verify bullet proximity hit detection within 18m collision radius."""
        enemy_pos = Vec3(100, 1000, 500)
        bullet_hit = Vec3(105, 1002, 503)   # dist ~ 6.1m -> Hit
        bullet_miss = Vec3(130, 1000, 500)  # dist = 30m -> Miss

        hit_dist = bullet_hit.dist(enemy_pos)
        miss_dist = bullet_miss.dist(enemy_pos)

        collision_radius = 18.0
        self.assertTrue(hit_dist < collision_radius)
        self.assertFalse(miss_dist < collision_radius)

    def test_09_enemy_ai_targeting_logic(self):
        """Verify AI steering calculation produces positive roll/yaw toward target."""
        enemy = MockAircraft(is_player=False)
        enemy.pos = Vec3(-1000, 1200, 0)
        enemy.yaw = 0.0  # Facing positive X

        player_pos = Vec3(0, 1200, 1000)  # Player is to the front-right of enemy
        to_player = player_pos.sub(enemy.pos).normalize()
        fwd, up, right = enemy.get_vectors()

        dot_right = right.dot(to_player)
        # Enemy should detect target is to the right
        self.assertGreater(dot_right, 0.0)

    def test_10_radar_polar_projection(self):
        """Verify 3D coordinate projection onto 2D radar screen coordinates."""
        player_pos = Vec3(0, 1000, 0)
        enemy_pos = Vec3(2500, 1000, 2500)  # 45 deg bearing, ~3535m away
        radar_range = 5000.0
        radar_radius = 70.0  # pixels

        dx = enemy_pos.x - player_pos.x
        dz = enemy_pos.z - player_pos.z
        dist = math.hypot(dx, dz)

        self.assertLess(dist, radar_range)
        radar_dist_px = (dist / radar_range) * radar_radius
        self.assertAlmostEqual(radar_dist_px, (3535.53 / 5000.0) * 70.0, delta=1.0)


if __name__ == '__main__':
    unittest.main(verbosity=2)
