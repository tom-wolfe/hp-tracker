import * as Name from './';

describe('hpReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = Name.nameReducer(undefined, action);
      expect(result).toEqual('Paladin');
    });
  });

  describe('set action', () => {
    it('should set name', () => {
      const action = new Name.SetName('Jeff');
      const state = 'George';
      const result = Name.nameReducer(state, action);
      expect(result).toEqual('Jeff');
    });
  });
});
