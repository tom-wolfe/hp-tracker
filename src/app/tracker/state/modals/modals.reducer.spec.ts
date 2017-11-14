import * as Modals from './';
import { mapValues, values } from 'lodash';

describe('modalsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = Modals.modalsReducer(undefined, action);
      expect(result).toEqual(Modals.initialState);
    });
  });
  describe('close all action', () => {
    it('should close all the modals', () => {
      const action = new Modals.CloseAll();
      const state: Modals.ModalsState = mapValues(Modals.initialState, () => true);
      const result = Modals.modalsReducer(state, action);
      values(result).forEach(v => {
        expect(v).toEqual(false);
      });
    });
  });
  describe('show max hp action', () => {
    it('should show max HP modal', () => {
      const action = new Modals.ShowMaxHP();
      const state: Modals.ModalsState = Modals.initialState;
      const result = Modals.modalsReducer(state, action);
      expect(result.maxHP).toEqual(true);
    });
    it('should show only max HP modal', () => {
      const action = new Modals.ShowMaxHP();
      const state: Modals.ModalsState = Modals.initialState;
      const result = Modals.modalsReducer(state, action);
      Object.keys(result).forEach(k => {
        expect(result[k]).toEqual(k === 'maxHP');
      });
    });
  });
  describe('show temp hp action', () => {
    it('should show temp HP modal', () => {
      const action = new Modals.ShowTemporaryHP();
      const state: Modals.ModalsState = Modals.initialState;
      const result = Modals.modalsReducer(state, action);
      expect(result.tempHP).toEqual(true);
    });
    it('should show only temp HP modal', () => {
      const action = new Modals.ShowTemporaryHP();
      const state: Modals.ModalsState = Modals.initialState;
      const result = Modals.modalsReducer(state, action);
      Object.keys(result).forEach(k => {
        expect(result[k]).toEqual(k === 'tempHP');
      });
    });
  });
  describe('show temp max hp action', () => {
    it('should show temp max HP modal', () => {
      const action = new Modals.ShowTemporaryMaxHP();
      const state: Modals.ModalsState = Modals.initialState;
      const result = Modals.modalsReducer(state, action);
      expect(result.tempMaxHP).toEqual(true);
    });
    it('should show only temp max HP modal', () => {
      const action = new Modals.ShowTemporaryMaxHP();
      const state: Modals.ModalsState = Modals.initialState;
      const result = Modals.modalsReducer(state, action);
      Object.keys(result).forEach(k => {
        expect(result[k]).toEqual(k === 'tempMaxHP');
      });
    });
  });
  describe('show concentration action', () => {
    it('should show concentration modal', () => {
      const action = new Modals.ShowConcentration();
      const state: Modals.ModalsState = Modals.initialState;
      const result = Modals.modalsReducer(state, action);
      expect(result.concentration).toEqual(true);
    });
    it('should show only concentration modal', () => {
      const action = new Modals.ShowConcentration();
      const state: Modals.ModalsState = Modals.initialState;
      const result = Modals.modalsReducer(state, action);
      Object.keys(result).forEach(k => {
        expect(result[k]).toEqual(k === 'concentration');
      });
    });
  });
});
