import { Action } from '@ngrx/store';

import { AppState } from '../app.state.interface';
import * as AppActions from './app.actions';

const initialState: AppState = {
  title: 'HP Tracker'
};

export function appReducer(state: AppState = initialState, action: AppActions.Action): AppState {
  switch (action.type) {
    case AppActions.SET_TITLE: {
      return Object.assign({}, state, {
        title: action.title
      });
    }
    default: {
      return state;
    }
  }
};