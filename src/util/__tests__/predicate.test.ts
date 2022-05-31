import * as predicateUtil from '../predicate';

describe('predicateUtil', () => {
  describe('isPresent', () => {
    it.each([[undefined], [null]])('should return false for %p', (param) => {
      expect(predicateUtil.isPresent(param)).toBe(false);
    });

    it.each([[1], ['a'], [true]])('should return true for %p', (param) => {
      expect(predicateUtil.isPresent(param)).toBe(true);
    });
  });
});
