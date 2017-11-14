import * as NameActions from './name.actions';

export const initialState = 'Paladin';

export function nameReducer(state: string = initialState, action: NameActions.Action): string {
  switch (action.type) {
    case NameActions.SET_NAME: {
      return action.name;
    }
    default: {
      return state;
    }
  }
}
