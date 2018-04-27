import * as HPActions from './hp.actions';
import { HPState } from './hp.state';
import { merge } from 'lodash';

export const initialState: HPState = {
  current: 30,
  max: 30,
  temp: 0,
  tempMax: 0,
};

function boundedHP(curState: HPState, value: number): number {
  const max = curState.max + curState.tempMax;
  if (value < 0) { return 0; }
  return Math.min(max, value);
}

export function hpReducer(state: HPState = initialState, action: HPActions.Action): HPState {
  switch (action.type) {
    case HPActions.SET_CURRENT: {
      return merge({}, state, { current: boundedHP(state, Number(action.current)) });
    }
    case HPActions.SET_MAX: {
      const newState = merge({}, state, { max: Number(action.max) });
      newState.current = boundedHP(newState, newState.current);
      return newState;
    }
    case HPActions.TEMP_HP: {
      return merge({}, state, { temp: Number(action.amount) });
    }
    case HPActions.TEMP_MAX_HP: {
      const tempMax = Number(action.amount);
      const newState = merge({}, state, { tempMax });
      newState.current = boundedHP(newState, newState.current);
      return newState;
    }
    case HPActions.HEAL: {
      return merge({}, state, { current: boundedHP(state, state.current + action.amount) });
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
        newState.current = boundedHP(newState, newState.current - action.amount);
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
