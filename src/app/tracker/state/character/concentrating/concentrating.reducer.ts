import * as ConcentratingActions from './concentrating.actions';

export const initialState = false;

export function concentratingReducer(state: boolean = initialState, action: ConcentratingActions.Action): boolean {
  switch (action.type) {
    case ConcentratingActions.SET_CONCENTRATING: {
      return action.concentrating;
    }
    default: {
      return state;
    }
  }
}
