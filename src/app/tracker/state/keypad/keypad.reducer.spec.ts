import * as Keypad from './';

describe('hpReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = Keypad.keypadReducer(undefined, action);
      expect(result).toEqual(Keypad.initialState);
    });
  });
  describe('clear action', () => {
    it('should clear the value', () => {
      const action = new Keypad.Clear();
      const state: Keypad.KeypadState = {
        value: 123
      };
      const result = Keypad.keypadReducer(state, action);
      expect(result.value).toEqual(0);
    });
  });
  describe('number action', () => {
    it('should replace zero', () => {
      const action = new Keypad.NumberPressed(5);
      const state: Keypad.KeypadState = {
        value: 0
      };
      const result = Keypad.keypadReducer(state, action);
      expect(result.value).toEqual(5);
    });
    it('should append non-zero', () => {
      const action = new Keypad.NumberPressed(5);
      const state: Keypad.KeypadState = {
        value: 3
      };
      const result = Keypad.keypadReducer(state, action);
      expect(result.value).toEqual(35);
    });
  });
});
