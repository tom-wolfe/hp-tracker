import * as NameActions from './name.actions';

export const initialState: string = undefined;

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
