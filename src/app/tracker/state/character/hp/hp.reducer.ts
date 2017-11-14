import * as HPActions from './hp.actions';
import { HPState } from './hp.state';
import { merge } from 'lodash';

export const initialState: HPState = {
  current: 30,
  max: 30,
  temp: 0,
  tempMax: 0,
};

export function hpReducer(state: HPState = initialState, action: HPActions.Action): HPState {
  switch (action.type) {
    case HPActions.SET_MAX: {
      const newState = merge({}, state, { max: Number(action.max) });
      const max = newState.max + newState.tempMax;
      if (newState.current > max) {
        newState.current = max;
      }
      return newState;
    }
    case HPActions.TEMP_HP: {
      return merge({}, state, { temp: Number(action.amount) });
    }
    case HPActions.TEMP_MAX_HP: {
      return merge({}, state, { tempMax: Number(action.amount) });
    }
    case HPActions.HEAL: {
      return merge({}, state, {
        current: Math.min(state.max + state.tempMax, state.current + action.amount)
      });
    }
    case HPActions.HURT: {
      const newState = merge({}, state);
      if (newState.temp > 0) {
        newState.temp -= action.amount;
        if (newState.temp < 0) {
          newState.current += newState.temp;
          newState.temp = 0;
        }
      } else {
        newState.current = Math.max(0, newState.current - action.amount);
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
