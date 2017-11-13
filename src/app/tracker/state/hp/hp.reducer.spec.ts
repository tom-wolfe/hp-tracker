import * as HP from './';

describe('hpReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = HP.hpReducer(undefined, action);
      expect(result).toEqual(HP.initialState);
    });
  });
  describe('heal action', () => {
    it('should not heal over max', () => {
      const action = new HP.Heal(10);
      const state: HP.HPState = {
        currentHp: 45,
        maxHp: 50,
        tempHp: 0,
        tempMaxHp: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.currentHp).toEqual(50);
    });
    it('should not heal into temp', () => {
      const action = new HP.Heal(10);
      const state: HP.HPState = {
        currentHp: 45,
        maxHp: 50,
        tempHp: 5,
        tempMaxHp: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.currentHp).toEqual(50);
    });
    it('should heal into temp max', () => {
      const action = new HP.Heal(10);
      const state: HP.HPState = {
        currentHp: 45,
        maxHp: 50,
        tempHp: 0,
        tempMaxHp: 5
      };
      const result = HP.hpReducer(state, action);
      expect(result.currentHp).toEqual(55);
    });
    it('should not heal over temp max', () => {
      const action = new HP.Heal(20);
      const state: HP.HPState = {
        currentHp: 45,
        maxHp: 50,
        tempHp: 0,
        tempMaxHp: 5
      };
      const result = HP.hpReducer(state, action);
      expect(result.currentHp).toEqual(55);
    });
  });
  describe('hurt action', () => {
    it('should not hurt below min', () => {
      const action = new HP.Hurt(50);
      const state: HP.HPState = {
        currentHp: 25,
        maxHp: 50,
        tempHp: 0,
        tempMaxHp: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.currentHp).toEqual(0);
    });
    it('should hurt temp hp first', () => {
      const action = new HP.Hurt(10);
      const state: HP.HPState = {
        currentHp: 25,
        maxHp: 50,
        tempHp: 10,
        tempMaxHp: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.currentHp).toEqual(25);
      expect(result.tempHp).toEqual(0);
    });
    it('should carry hurt over after temp hp', () => {
      const action = new HP.Hurt(20);
      const state: HP.HPState = {
        currentHp: 25,
        maxHp: 50,
        tempHp: 10,
        tempMaxHp: 5
      };
      const result = HP.hpReducer(state, action);
      expect(result.currentHp).toEqual(15);
      expect(result.tempHp).toEqual(0);
    });
  });
});
