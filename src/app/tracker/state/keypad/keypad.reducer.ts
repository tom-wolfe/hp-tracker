import * as KeypadActions from './keypad.actions';
import { KeypadState } from './keypad.state';

export const initialState: KeypadState = {
  value: 0
};

export function keypadReducer(state: KeypadState = initialState, action: KeypadActions.Action): KeypadState {
  switch (action.type) {
    case KeypadActions.CLEAR: {
      return Object.assign({}, state, { value: 0 });
    }
    case KeypadActions.NUMBER_PRESSED: {
      return Object.assign({}, state, { value: Number(`${state.value}${action.number}`) });
    }
    default: {
      return state;
    }
  }
}
