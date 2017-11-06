import { Action } from '@ngrx/store';

import { SharedState } from './app.state';
import * as SharedActions from './shared.actions';

const initialState: SharedState = {
  title: 'HP Tracker'
};

export function sharedReducer(state: SharedState = initialState, action: SharedActions.Action): SharedState {
  switch (action.type) {
    case SharedActions.SET_TITLE: {
      return Object.assign({}, state, {
        title: action.title
      });
    }
    default: {
      return state;
    }
  }
}
