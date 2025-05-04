const {getFirstPlayer,addScore} = require('../src/player');

describe('Player Functions', () => {
    // Tests for getFirstPlayer function
    describe('getFirstPlayer', () => {
      test('should return the first player when two players are provided', () => {
        const player1 = { name: 'John', score: 0 };
        const player2 = { name: 'Jane', score: 0 };
        
        expect(getFirstPlayer(player1, player2)).toBe(player1);
      });
  
      test('should return undefined when no players are provided', () => {
        expect(getFirstPlayer()).toBeUndefined();
      });
    });
  
    // Tests for addScore function
    describe('addScore', () => {
      test('should add positive score to player', () => {
        const player = { name: 'John', score: 0 };
        addScore(player, 10);
        expect(player.score).toBe(10);
      });
  
      test('should handle negative scores', () => {
        const player = { name: 'John', score: 10 };
        addScore(player, -5);
        expect(player.score).toBe(5);
      });
  
      test('should handle zero score addition', () => {
        const player = { name: 'John', score: 10 };
        addScore(player, 0);
        expect(player.score).toBe(10);
      });
  
      test('should handle decimal scores', () => {
        const player = { name: 'John', score: 0 };
        addScore(player, 5.5);
        expect(player.score).toBe(5.5);
      });
  
      test('should throw error when player is null', () => {
        expect(() => {
          addScore(null, 10);
        }).toThrow();
      });
  
      test('should throw error when player is undefined', () => {
        expect(() => {
          addScore(undefined, 10);
        }).toThrow();
      });
    });
  });