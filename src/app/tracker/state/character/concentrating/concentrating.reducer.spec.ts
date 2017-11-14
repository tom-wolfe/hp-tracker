import * as Concentrating from './';

describe('concentratingReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = Concentrating.concentratingReducer(undefined, action);
      expect(result).toEqual(false);
    });
  });

  describe('set action', () => {
    it('should set concentrating', () => {
      const action = new Concentrating.SetConcentrating(true);
      const state = false;
      const result = Concentrating.concentratingReducer(state, action);
      expect(result).toEqual(true);
    });
  });
});
