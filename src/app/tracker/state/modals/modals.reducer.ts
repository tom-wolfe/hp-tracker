import { merge } from 'lodash';

import * as ModalsActions from './modals.actions';
import { ModalsState } from './modals.state';

export const initialState: ModalsState = {
  maxHP: false,
  tempHP: false,
  tempMaxHP: false
};

export function modalsReducer(state: ModalsState = initialState, action: ModalsActions.Action): ModalsState {
  switch (action.type) {
    case ModalsActions.CLOSE_ALL: {
      return merge({}, initialState);
    }
    case ModalsActions.SHOW_MAX_HP: {
      return merge({}, initialState, { maxHP: true });
    }
    case ModalsActions.SHOW_TEMP_HP: {
      return merge({}, initialState, { tempHP: true });
    }
    case ModalsActions.SHOW_TEMP_MAX_HP: {
      return merge({}, initialState, { tempMaxHP: true });
    }
    default: {
      return state;
    }
  }
}
