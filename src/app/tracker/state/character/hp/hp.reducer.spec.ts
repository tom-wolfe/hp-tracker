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
        current: 45,
        max: 50,
        temp: 0,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.current).toEqual(50);
    });
    it('should not heal into temp', () => {
      const action = new HP.Heal(10);
      const state: HP.HPState = {
        current: 45,
        max: 50,
        temp: 5,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.current).toEqual(50);
    });
    it('should heal into temp max', () => {
      const action = new HP.Heal(10);
      const state: HP.HPState = {
        current: 45,
        max: 50,
        temp: 0,
        tempMax: 5
      };
      const result = HP.hpReducer(state, action);
      expect(result.current).toEqual(55);
    });
    it('should not heal over temp max', () => {
      const action = new HP.Heal(20);
      const state: HP.HPState = {
        current: 45,
        max: 50,
        temp: 0,
        tempMax: 5
      };
      const result = HP.hpReducer(state, action);
      expect(result.current).toEqual(55);
    });
  });
  describe('hurt action', () => {
    it('should not hurt below min', () => {
      const action = new HP.Hurt(50);
      const state: HP.HPState = {
        current: 25,
        max: 50,
        temp: 0,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.current).toEqual(0);
    });
    it('should hurt temp hp first', () => {
      const action = new HP.Hurt(10);
      const state: HP.HPState = {
        current: 25,
        max: 50,
        temp: 10,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.current).toEqual(25);
      expect(result.temp).toEqual(0);
    });
    it('should carry hurt over after temp hp', () => {
      const action = new HP.Hurt(20);
      const state: HP.HPState = {
        current: 25,
        max: 50,
        temp: 10,
        tempMax: 5
      };
      const result = HP.hpReducer(state, action);
      expect(result.current).toEqual(15);
      expect(result.temp).toEqual(0);
    });
  });
  describe('set max action', () => {
    it('should set maximum HP and not raise current', () => {
      const action = new HP.SetMax(50);
      const state: HP.HPState = {
        current: 25,
        max: 25,
        temp: 0,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.max).toEqual(50);
      expect(result.current).toEqual(25);
    });
    it('should set maximum HP and lower current', () => {
      const action = new HP.SetMax(40);
      const state: HP.HPState = {
        current: 50,
        max: 50,
        temp: 0,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.max).toEqual(40);
      expect(result.current).toEqual(40);
    });
    it('should set maximum HP and lower current down to temp', () => {
      const action = new HP.SetMax(40);
      const state: HP.HPState = {
        current: 60,
        max: 50,
        temp: 0,
        tempMax: 10
      };
      const result = HP.hpReducer(state, action);
      expect(result.max).toEqual(40);
      expect(result.current).toEqual(50);
    });
    it('should cast to number', () => {
      const action = new HP.SetMax(<any>'40');
      const state: HP.HPState = {
        current: 50,
        max: 50,
        temp: 0,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.max).toEqual(40);
    });
  });
  describe('set temp action', () => {
    it('should set temporary HP', () => {
      const action = new HP.SetTemporaryHP(15);
      const state: HP.HPState = {
        current: 25,
        max: 25,
        temp: 0,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.temp).toEqual(15);
    });
    it('should cast to number', () => {
      const action = new HP.SetTemporaryHP(<any>'40');
      const state: HP.HPState = {
        current: 50,
        max: 50,
        temp: 0,
        tempMax: 0
      };
      const result = HP.hpReducer(state, action);
      expect(result.temp).toEqual(40);
    });
  });
});
