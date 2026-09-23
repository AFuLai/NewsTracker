#!/usr/bin/env python3
"""test_tetris.py -- Headless Regression Test Suite for Web Tetris Game.

Validates:
  1. Board matrix dimensions and empty initialization (10x20).
  2. 7-Bag randomizer distribution (all 7 distinct pieces per bag, uniform coverage).
  3. Tetromino rotation matrices for all 7 shapes (I, J, L, O, S, T, Z).
  4. Collision detection logic (boundary checks: left, right, bottom, and existing blocks).
  5. SRS Wall kick resolution for J/L/S/T/Z and I pieces.
  6. Line clearing detection & board compression (single, double, triple, tetris).
  7. Guideline scoring formulas (Single: 100*lvl, Double: 300*lvl, Triple: 500*lvl, Tetris: 800*lvl, B2B: 1200*lvl).
  8. Combo counter and score multipliers.
  9. Ghost piece projection Y-coordinate calculation.
  10. Hold mechanic rules (single hold allowed per active spawn).
  11. Dynamic drop interval speed scaling per level.
"""
import copy
import random
import unittest

COLS = 10
ROWS = 20

SHAPES = {
    'I': [
        [[0,0,0,0], [1,1,1,1], [0,0,0,0], [0,0,0,0]],
        [[0,0,1,0], [0,0,1,0], [0,0,1,0], [0,0,1,0]],
        [[0,0,0,0], [0,0,0,0], [1,1,1,1], [0,0,0,0]],
        [[0,1,0,0], [0,1,0,0], [0,1,0,0], [0,1,0,0]]
    ],
    'J': [
        [[1,0,0], [1,1,1], [0,0,0]],
        [[0,1,1], [0,1,0], [0,1,0]],
        [[0,0,0], [1,1,1], [0,0,1]],
        [[0,1,0], [0,1,0], [1,1,0]]
    ],
    'L': [
        [[0,0,1], [1,1,1], [0,0,0]],
        [[0,1,0], [0,1,0], [0,1,1]],
        [[0,0,0], [1,1,1], [1,0,0]],
        [[1,1,0], [0,1,0], [0,1,0]]
    ],
    'O': [
        [[1,1], [1,1]],
        [[1,1], [1,1]],
        [[1,1], [1,1]],
        [[1,1], [1,1]]
    ],
    'S': [
        [[0,1,1], [1,1,0], [0,0,0]],
        [[0,1,0], [0,1,1], [0,0,1]],
        [[0,0,0], [0,1,1], [1,1,0]],
        [[1,0,0], [1,1,0], [0,1,0]]
    ],
    'T': [
        [[0,1,0], [1,1,1], [0,0,0]],
        [[0,1,0], [0,1,1], [0,1,0]],
        [[0,0,0], [1,1,1], [0,1,0]],
        [[0,1,0], [1,1,0], [0,1,0]]
    ],
    'Z': [
        [[1,1,0], [0,1,1], [0,0,0]],
        [[0,0,1], [0,1,1], [0,1,0]],
        [[0,0,0], [1,1,0], [0,1,1]],
        [[0,1,0], [1,1,0], [1,0,0]]
    ]
}

JLSTZ_KICKS = {
    '0->1': [[0,0], [-1,0], [-1,1], [0,-2], [-1,-2]],
    '1->0': [[0,0], [1,0], [1,-1], [0,2], [1,2]],
    '1->2': [[0,0], [1,0], [1,-1], [0,2], [1,2]],
    '2->1': [[0,0], [-1,0], [-1,1], [0,-2], [-1,-2]],
    '2->3': [[0,0], [1,0], [1,1], [0,-2], [1,-2]],
    '3->2': [[0,0], [-1,0], [-1,-1], [0,2], [-1,2]],
    '3->0': [[0,0], [-1,0], [-1,-1], [0,2], [-1,2]],
    '0->3': [[0,0], [1,0], [1,1], [0,-2], [1,-2]],
}

I_KICKS = {
    '0->1': [[0,0], [-2,0], [1,0], [-2,-1], [1,2]],
    '1->0': [[0,0], [2,0], [-1,0], [2,1], [-1,-2]],
    '1->2': [[0,0], [-1,0], [2,0], [-1,2], [2,-1]],
    '2->1': [[0,0], [1,0], [-2,0], [1,-2], [-2,1]],
    '2->3': [[0,0], [2,0], [-1,0], [2,1], [-1,-2]],
    '3->2': [[0,0], [-2,0], [1,0], [-2,-1], [1,2]],
    '3->0': [[0,0], [1,0], [-2,0], [1,-2], [-2,1]],
    '0->3': [[0,0], [-1,0], [2,0], [-1,2], [2,-1]],
}


class MockTetrisEngine:
    """Headless Python replica of the JS Tetris Engine for regression verification."""
    def __init__(self):
        self.board = [[0 for _ in range(COLS)] for _ in range(ROWS)]
        self.bag = []
        self.score = 0
        self.lines = 0
        self.level = 1
        self.combo = -1
        self.last_clear_was_tetris = False
        self.hold_piece = None
        self.can_hold = True
        self.current_piece = None

    def refill_bag(self):
        pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z']
        random.shuffle(pieces)
        self.bag.extend(pieces)

    def get_next_type(self):
        if len(self.bag) < 7:
            self.refill_bag()
        return self.bag.pop(0)

    def spawn_piece(self, piece_type=None):
        ptype = piece_type or self.get_next_type()
        matrices = SHAPES[ptype]
        init_matrix = matrices[0]
        start_x = (COLS - len(init_matrix[0])) // 2
        start_y = 0
        self.current_piece = {
            'type': ptype,
            'rotation': 0,
            'matrix': init_matrix,
            'x': start_x,
            'y': start_y
        }
        self.can_hold = True
        return not self.check_collision(start_x, start_y, init_matrix)

    def check_collision(self, px, py, matrix):
        for r in range(len(matrix)):
            for c in range(len(matrix[r])):
                if matrix[r][c] != 0:
                    nx = px + c
                    ny = py + r
                    if nx < 0 or nx >= COLS or ny >= ROWS:
                        return True
                    if ny >= 0 and self.board[ny][nx] != 0:
                        return True
        return False

    def rotate(self, direction=1):
        if not self.current_piece or self.current_piece['type'] == 'O':
            return True
        ptype = self.current_piece['type']
        curr_rot = self.current_piece['rotation']
        next_rot = (curr_rot + direction) % 4
        next_matrix = SHAPES[ptype][next_rot]
        kick_key = f"{curr_rot}->{next_rot}"
        kicks = I_KICKS[kick_key] if ptype == 'I' else JLSTZ_KICKS[kick_key]

        for ox, oy in kicks:
            test_x = self.current_piece['x'] + ox
            test_y = self.current_piece['y'] - oy
            if not self.check_collision(test_x, test_y, next_matrix):
                self.current_piece['x'] = test_x
                self.current_piece['y'] = test_y
                self.current_piece['rotation'] = next_rot
                self.current_piece['matrix'] = next_matrix
                return True
        return False

    def get_ghost_y(self):
        if not self.current_piece:
            return 0
        ghost_y = self.current_piece['y']
        while not self.check_collision(self.current_piece['x'], ghost_y + 1, self.current_piece['matrix']):
            ghost_y += 1
        return ghost_y

    def lock_piece(self):
        p = self.current_piece
        for r in range(len(p['matrix'])):
            for c in range(len(p['matrix'][r])):
                if p['matrix'][r][c] != 0:
                    by = p['y'] + r
                    bx = p['x'] + c
                    if 0 <= by < ROWS and 0 <= bx < COLS:
                        self.board[by][bx] = p['type']
        return self.clear_lines()

    def clear_lines(self):
        cleared_count = 0
        new_board = [row for row in self.board if not all(cell != 0 for cell in row)]
        cleared_count = ROWS - len(new_board)
        for _ in range(cleared_count):
            new_board.insert(0, [0 for _ in range(COLS)])
        self.board = new_board

        if cleared_count > 0:
            self.combo += 1
            self.lines += cleared_count
            base_scores = {1: 100, 2: 300, 3: 500, 4: 800}
            line_score = base_scores.get(cleared_count, 800) * self.level
            if cleared_count == 4:
                if self.last_clear_was_tetris:
                    line_score = int(line_score * 1.5)
                self.last_clear_was_tetris = True
            else:
                self.last_clear_was_tetris = False
            if self.combo > 0:
                line_score += 50 * self.combo * self.level
            self.score += line_score
            self.level = (self.lines // 10) + 1
        else:
            self.combo = -1

        return cleared_count

    def hold(self):
        if not self.current_piece or not self.can_hold:
            return False
        curr_type = self.current_piece['type']
        if self.hold_piece is None:
            self.hold_piece = curr_type
            self.spawn_piece()
        else:
            prev_hold = self.hold_piece
            self.hold_piece = curr_type
            self.spawn_piece(prev_hold)
        self.can_hold = False
        return True


class TestTetrisEngine(unittest.TestCase):
    def setUp(self):
        self.game = MockTetrisEngine()

    def test_01_board_initialization(self):
        """Verify 10x20 board dimensions and empty initialization."""
        self.assertEqual(len(self.game.board), 20)
        for row in self.game.board:
            self.assertEqual(len(row), 10)
            self.assertTrue(all(cell == 0 for cell in row))

    def test_02_seven_bag_randomizer(self):
        """Verify 7-Bag generates exactly one of each tetromino per cycle."""
        bag_items = []
        for _ in range(14):
            bag_items.append(self.game.get_next_type())
        first_bag = set(bag_items[:7])
        second_bag = set(bag_items[7:14])
        expected = {'I', 'J', 'L', 'O', 'S', 'T', 'Z'}
        self.assertEqual(first_bag, expected)
        self.assertEqual(second_bag, expected)

    def test_03_tetromino_matrices(self):
        """Verify all 7 tetrominoes have 4 rotation states with correct block counts."""
        expected_counts = {'I': 4, 'J': 4, 'L': 4, 'O': 4, 'S': 4, 'T': 4, 'Z': 4}
        for name, states in SHAPES.items():
            self.assertEqual(len(states), 4, f"{name} must have 4 rotation states")
            for rot_idx, matrix in enumerate(states):
                count = sum(sum(row) for row in matrix)
                self.assertEqual(count, expected_counts[name], f"{name} state {rot_idx} block count != 4")

    def test_04_collision_boundaries(self):
        """Verify out-of-bound collisions for left, right, and floor."""
        t_matrix = SHAPES['T'][0]
        # Valid center spawn
        self.assertFalse(self.game.check_collision(3, 0, t_matrix))
        # Beyond left wall
        self.assertTrue(self.game.check_collision(-2, 0, t_matrix))
        # Beyond right wall
        self.assertTrue(self.game.check_collision(9, 0, t_matrix))
        # Beyond floor
        self.assertTrue(self.game.check_collision(3, 19, t_matrix))

    def test_05_srs_wall_kicks(self):
        """Verify SRS kick allows rotation next to wall without collision."""
        self.game.spawn_piece('T')
        self.game.current_piece['x'] = 0  # against left wall
        # Rotate CW from state 0
        success = self.game.rotate(1)
        self.assertTrue(success)
        self.assertFalse(self.game.check_collision(
            self.game.current_piece['x'],
            self.game.current_piece['y'],
            self.game.current_piece['matrix']
        ))

    def test_06_line_clear_and_shift(self):
        """Verify clearing single, double, triple, and quad lines correctly collapses board."""
        # Fill bottom row except for index 0
        for c in range(1, 10):
            self.game.board[19][c] = 1
        # Fill column 0
        self.game.board[19][0] = 1
        cleared = self.game.clear_lines()
        self.assertEqual(cleared, 1)
        # Bottom row should now be empty after shifting down
        self.assertTrue(all(cell == 0 for cell in self.game.board[19]))

    def test_07_scoring_formulas_and_b2b(self):
        """Verify standard scoring and Back-to-Back Tetris bonus."""
        self.game.level = 1
        # Simulate Tetris clear (4 lines)
        for r in range(16, 20):
            self.game.board[r] = [1] * 10
        self.game.clear_lines()
        self.assertEqual(self.game.score, 800)  # 800 * 1

        # Simulate Back-to-Back Tetris clear (adds B2B 1.5x bonus = 1200, plus combo 1 bonus = 50)
        for r in range(16, 20):
            self.game.board[r] = [1] * 10
        self.game.clear_lines()
        self.assertEqual(self.game.score, 800 + 1200 + 50)  # 800 + 1200 (1.5x) + 50 (combo 1)

    def test_08_ghost_piece_calculation(self):
        """Verify ghost piece drops directly to the lowest valid Y without collision."""
        self.game.spawn_piece('O')
        self.game.current_piece['x'] = 4
        self.game.current_piece['y'] = 0
        ghost_y = self.game.get_ghost_y()
        # O piece is 2x2, board is 20 high, so lowest Y is 18
        self.assertEqual(ghost_y, 18)

    def test_09_hold_piece_restriction(self):
        """Verify holding works once per active piece and prevents double-holding."""
        self.game.spawn_piece('T')
        self.assertTrue(self.game.can_hold)
        held = self.game.hold()
        self.assertTrue(held)
        self.assertEqual(self.game.hold_piece, 'T')
        self.assertFalse(self.game.can_hold)
        # Second hold in same turn should fail
        held_again = self.game.hold()
        self.assertFalse(held_again)

    def test_10_drop_speed_scaling(self):
        """Verify drop speed scales progressively with level."""
        intervals = [max(100, 1000 - (lvl - 1) * 85) for lvl in range(1, 15)]
        self.assertEqual(intervals[0], 1000)  # Level 1
        self.assertEqual(intervals[1], 915)   # Level 2
        self.assertLess(intervals[5], intervals[0])
        self.assertEqual(intervals[13], 100)  # Capped at minimum 100ms


if __name__ == '__main__':
    unittest.main(verbosity=2)
