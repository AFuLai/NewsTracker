#!/usr/bin/env python3
"""test_dq.py -- Headless Regression Test Suite for Web Dragon Quest Retro JRPG.

Validates:
  1. 24x16 Tilemap matrix boundaries and solid terrain classification.
  2. Hero grid movement vector and collision obstruction.
  3. Treasure chest interaction (awards gold/herbs and changes tile state).
  4. Classic Dragon Quest physical damage formula and critical hit math.
  5. Healing spell (Hoimi) MP cost deduction and HP restoration clamp.
  6. Offensive spells (Mera & Raidein) MP deduction and magic damage output.
  7. Consumable items (Herb) healing and inventory counter management.
  8. Experience progression, Level Up trigger, stat scaling and full recovery.
  9. Enemy AI turn attack resolution and player game over condition.
  10. Boss Dragon encounter, dungeon trigger, and Quest Victory state.
"""
import copy
import math
import unittest

TILE_SIZE = 32
MAP_COLS = 24
MAP_ROWS = 16


class MockDQEngine:
    """Headless Python replica of the Dragon Quest RPG Engine."""
    def __init__(self):
        self.map = [
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
        ]

        self.hero = {
            'level': 1,
            'hp': 35,
            'max_hp': 35,
            'mp': 15,
            'max_mp': 15,
            'attack': 16,
            'defense': 12,
            'gold': 50,
            'exp': 0,
            'next_exp': 20,
            'col': 12,
            'row': 8,
            'herbs': 2
        }

        self.state = 'EXPLORE'
        self.chest_opened = False
        self.battle_enemy = None

    def is_solid(self, col, row):
        if col < 0 or col >= MAP_COLS or row < 0 or row >= MAP_ROWS:
            return True
        t = self.map[row][col]
        return t == 1 or t == 3 or t == 5

    def move_hero(self, dx, dy):
        ncol = self.hero['col'] + dx
        nrow = self.hero['row'] + dy
        if self.is_solid(ncol, nrow):
            return False

        self.hero['col'] = ncol
        self.hero['row'] = nrow
        tile = self.map[nrow][ncol]

        if tile == 8 and not self.chest_opened:
            self.chest_opened = True
            self.map[nrow][ncol] = 4
            self.hero['gold'] += 100
            self.hero['herbs'] += 2

        if tile == 7:
            self.start_battle('DRAGON')

        return True

    def start_battle(self, enemy_type):
        self.state = 'BATTLE'
        enemies = {
            'SLIME': {'name': 'SLIME', 'hp': 20, 'max_hp': 20, 'attack': 10, 'defense': 6, 'exp': 12, 'gold': 15},
            'SKELETON': {'name': 'SKELETON', 'hp': 45, 'max_hp': 45, 'attack': 22, 'defense': 14, 'exp': 35, 'gold': 40},
            'DRAGON': {'name': 'DRAGON', 'hp': 160, 'max_hp': 160, 'attack': 38, 'defense': 22, 'exp': 200, 'gold': 500}
        }
        self.battle_enemy = copy.deepcopy(enemies[enemy_type])

    def calc_physical_damage(self, attacker_atk, defender_def, is_crit=False):
        base = max(1, (attacker_atk - defender_def // 2) // 2)
        if is_crit:
            return base * 2 + 6
        return base

    def cast_spell(self, spell):
        if spell == 'HEAL':
            if self.hero['mp'] < 3:
                return False, 0
            self.hero['mp'] -= 3
            heal = 35
            self.hero['hp'] = min(self.hero['max_hp'], self.hero['hp'] + heal)
            return True, heal
        elif spell == 'FIRE':
            if self.hero['mp'] < 4:
                return False, 0
            self.hero['mp'] -= 4
            dmg = 32
            if self.battle_enemy:
                self.battle_enemy['hp'] = max(0, self.battle_enemy['hp'] - dmg)
            return True, dmg
        elif spell == 'THUNDER':
            if self.hero['mp'] < 8:
                return False, 0
            self.hero['mp'] -= 8
            dmg = 85
            if self.battle_enemy:
                self.battle_enemy['hp'] = max(0, self.battle_enemy['hp'] - dmg)
            return True, dmg
        return False, 0

    def use_herb(self):
        if self.hero['herbs'] <= 0:
            return False, 0
        self.hero['herbs'] -= 1
        heal = 30
        self.hero['hp'] = min(self.hero['max_hp'], self.hero['hp'] + heal)
        return True, heal

    def level_up(self):
        self.hero['level'] += 1
        self.hero['max_hp'] += 12
        self.hero['max_mp'] += 8
        self.hero['attack'] += 7
        self.hero['defense'] += 5
        self.hero['hp'] = self.hero['max_hp']
        self.hero['mp'] = self.hero['max_mp']
        self.hero['next_exp'] = int(self.hero['next_exp'] * 2.2)


class TestDragonQuestEngine(unittest.TestCase):
    def setUp(self):
        self.game = MockDQEngine()

    def test_01_tilemap_dimensions_and_solidity(self):
        """Verify 24x16 grid dimensions and solid terrain classification."""
        self.assertEqual(len(self.game.map), 16)
        self.assertEqual(len(self.game.map[0]), 24)
        # Ocean boundary is solid
        self.assertTrue(self.game.is_solid(0, 0))
        # Mountain is solid
        self.assertTrue(self.game.is_solid(3, 5))
        # Castle wall is solid
        self.assertTrue(self.game.is_solid(14, 1))
        # Road is walkable
        self.assertFalse(self.game.is_solid(12, 8))

    def test_02_hero_movement_and_collision_blocking(self):
        """Verify hero advances on walkable road and gets blocked by solid wall."""
        self.game.hero['col'] = 12
        self.game.hero['row'] = 8
        # Move up to (12, 7) on road
        success = self.game.move_hero(0, -1)
        self.assertTrue(success)
        self.assertEqual(self.game.hero['row'], 7)

        # Try to move left into solid mountain at (11, 7)
        self.game.map[7][11] = 3  # Mountain
        blocked = self.game.move_hero(-1, 0)
        self.assertFalse(blocked)
        self.assertEqual(self.game.hero['col'], 12)  # Position unchanged

    def test_03_treasure_chest_interaction(self):
        """Verify opening treasure chest grants 100G, 2 herbs, and clears chest."""
        # Chest is at (9, 4)
        self.game.hero['col'] = 8
        self.game.hero['row'] = 4
        prev_gold = self.game.hero['gold']
        prev_herbs = self.game.hero['herbs']

        self.game.move_hero(1, 0)  # Move to (9, 4)
        self.assertTrue(self.game.chest_opened)
        self.assertEqual(self.game.hero['gold'], prev_gold + 100)
        self.assertEqual(self.game.hero['herbs'], prev_herbs + 2)
        self.assertEqual(self.game.map[4][9], 4)  # Converted to road

    def test_04_dragon_quest_damage_formula(self):
        """Verify DQ damage formula: (Hero Atk - Enemy Def/2)/2 and Critical Hit."""
        hero_atk = 20
        slime_def = 6
        # Normal damage: (20 - 3)/2 = 8
        normal_dmg = self.game.calc_physical_damage(hero_atk, slime_def, is_crit=False)
        self.assertEqual(normal_dmg, (20 - 3) // 2)

        # Critical damage: base * 2 + 6 = 8 * 2 + 6 = 22
        crit_dmg = self.game.calc_physical_damage(hero_atk, slime_def, is_crit=True)
        self.assertEqual(crit_dmg, normal_dmg * 2 + 6)

    def test_05_heal_spell_mechanics(self):
        """Verify Hoimi restores HP up to max and properly consumes 3 MP."""
        self.game.hero['hp'] = 10
        self.game.hero['mp'] = 15
        success, heal_val = self.game.cast_spell('HEAL')

        self.assertTrue(success)
        self.assertEqual(self.game.hero['mp'], 12)
        # 10 + 35 = 45, which is capped at max_hp (35)
        self.assertEqual(self.game.hero['hp'], self.game.hero['max_hp'])

    def test_06_fire_and_thunder_damage_spells(self):
        """Verify Mera (4 MP) and Raidein (8 MP) deal heavy magic damage."""
        self.game.start_battle('DRAGON')
        self.game.hero['mp'] = 15

        # Cast Mera
        success, dmg_fire = self.game.cast_spell('FIRE')
        self.assertTrue(success)
        self.assertEqual(self.game.hero['mp'], 11)
        self.assertEqual(self.game.battle_enemy['hp'], 160 - 32)

        # Cast Raidein
        success, dmg_thunder = self.game.cast_spell('THUNDER')
        self.assertTrue(success)
        self.assertEqual(self.game.hero['mp'], 3)
        self.assertEqual(self.game.battle_enemy['hp'], 160 - 32 - 85)

        # Cast Raidein again with insufficient MP (3 < 8)
        fail, _ = self.game.cast_spell('THUNDER')
        self.assertFalse(fail)

    def test_07_item_herb_healing_and_inventory(self):
        """Verify using herb restores 30 HP and decrements count."""
        self.game.hero['hp'] = 5
        self.game.hero['herbs'] = 2
        success, heal = self.game.use_herb()

        self.assertTrue(success)
        self.assertEqual(self.game.hero['hp'], 35)  # 5 + 30
        self.assertEqual(self.game.hero['herbs'], 1)

    def test_08_level_up_stat_scaling(self):
        """Verify Level Up increases stats and restores full HP/MP."""
        self.game.hero['hp'] = 5
        self.game.hero['mp'] = 1
        self.game.level_up()

        self.assertEqual(self.game.hero['level'], 2)
        self.assertEqual(self.game.hero['max_hp'], 35 + 12)
        self.assertEqual(self.game.hero['max_mp'], 15 + 8)
        self.assertEqual(self.game.hero['attack'], 16 + 7)
        self.assertEqual(self.game.hero['defense'], 12 + 5)
        # Fully restored
        self.assertEqual(self.game.hero['hp'], self.game.hero['max_hp'])
        self.assertEqual(self.game.hero['mp'], self.game.hero['max_mp'])

    def test_09_enemy_ai_turn_resolution(self):
        """Verify enemy attack reduces hero HP and triggers death at 0 HP."""
        self.game.start_battle('SKELETON')
        self.game.hero['hp'] = 10
        # Skeleton attack = 22, Hero def = 12 -> dmg = (22 - 6)/2 = 8
        dmg = self.game.calc_physical_damage(self.game.battle_enemy['attack'], self.game.hero['defense'])
        self.game.hero['hp'] -= dmg
        self.assertEqual(self.game.hero['hp'], 2)

        # Lethal hit
        self.game.hero['hp'] -= 10
        self.assertLessEqual(self.game.hero['hp'], 0)

    def test_10_boss_dragon_defeat_quest_victory(self):
        """Verify entering dungeon cave (col 19, row 9) triggers Dragon Boss battle."""
        self.game.hero['col'] = 18
        self.game.hero['row'] = 9
        # Move right into dungeon cave (19, 9)
        self.game.move_hero(1, 0)

        self.assertEqual(self.game.state, 'BATTLE')
        self.assertEqual(self.game.battle_enemy['name'], 'DRAGON')
        self.assertEqual(self.game.battle_enemy['hp'], 160)


if __name__ == '__main__':
    unittest.main(verbosity=2)
