import * as HPActions from './hp.actions';
import { HPState } from './hp.state';

export const initialState: HPState = {
  currentHp: 30,
  maxHp: 30,
  tempHp: 0,
  tempMaxHp: 0,
};

export function hpReducer(state: HPState = initialState, action: HPActions.Action): HPState {
  switch (action.type) {
    case HPActions.SET_MAX: {
      return Object.assign({}, state, { maxHp: action.max });
    }
    case HPActions.TEMP_HP: {
      return Object.assign({}, state, { maxHp: action.amount });
    }
    case HPActions.TEMP_MAX_HP: {
      return Object.assign({}, state, { tempMaxHp: action.amount });
    }
    case HPActions.HEAL: {
      return Object.assign({}, state, {
        currentHp: Math.min(state.maxHp + state.tempMaxHp, state.currentHp + action.amount)
      });
    }
    case HPActions.HURT: {
      const newState = Object.assign({}, state);
      if (newState.tempHp > 0) {
        newState.tempHp -= action.amount;
        if (newState.tempHp < 0) {
          newState.currentHp += newState.tempHp;
          newState.tempHp = 0;
        }
      } else {
        newState.currentHp = Math.max(0, newState.currentHp - action.amount);
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
