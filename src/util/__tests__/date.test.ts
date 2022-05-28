import * as dateUtil from '../date';

describe('dateUtil', () => {
  describe('getRandomDate', () => {
    it('should return a random date', () => {
      const date = dateUtil.getRandomDate();
      expect(date).toBeInstanceOf(Date);
    });
  });

  describe('getRandomDateBetween', () => {
    it('should return a random date', () => {
      const date = dateUtil.getRandomDateBetween(
        new Date(2020, 0, 1),
        new Date(2020, 0, 2)
      );
      expect(date).toBeInstanceOf(Date);
      expect(date.getFullYear()).toBe(2020);
      expect(date.getMonth()).toBe(0);
      expect(date.getDate()).toBe(1);
    });
  });
});
