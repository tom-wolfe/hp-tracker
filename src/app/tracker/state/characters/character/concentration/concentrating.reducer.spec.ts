import { initialState } from './concentration.reducer';
import * as Concentrating from './';

describe('concentrationReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = Concentrating.concentrationReducer(undefined, action);
      expect(result).toEqual(initialState);
    });
  });
  describe('set concentrating action', () => {
    it('should set concentrating', () => {
      const action = new Concentrating.SetConcentrating(true);
      const state: Concentrating.ConcentrationState = {
        concentrating: false,
        saveDC: 0
      };
      const result = Concentrating.concentrationReducer(state, action);
      expect(result.concentrating).toEqual(true);
    });
  });
  describe('set save DC action', () => {
    it('should set DC', () => {
      const action = new Concentrating.SetSaveDC(40);
      const state: Concentrating.ConcentrationState = {
        concentrating: false,
        saveDC: 0
      };
      const result = Concentrating.concentrationReducer(state, action);
      expect(result.saveDC).toEqual(40);
    });
  });
});
