import { merge } from 'lodash';

import * as ModalsActions from './modals.actions';
import { ModalsState } from './modals.state';

export const initialState: ModalsState = {
  maxHP: false,
  tempHP: false,
  tempMaxHP: false,
  name: false,
  concentration: false,
  unconscious: false,
  characterMenu: false,
};

export function modalsReducer(state: ModalsState = initialState, action: ModalsActions.Action): ModalsState {
  switch (action.type) {
    case ModalsActions.CLOSE_ALL: {
      return merge({}, initialState);
    }
    case ModalsActions.SHOW_MAX_HP: {
      return merge({}, state, { maxHP: true });
    }
    case ModalsActions.SHOW_TEMP_HP: {
      return merge({}, state, { tempHP: true });
    }
    case ModalsActions.SHOW_TEMP_MAX_HP: {
      return merge({}, state, { tempMaxHP: true });
    }
    case ModalsActions.SHOW_NAME: {
      return merge({}, state, { name: true });
    }
    case ModalsActions.SHOW_CONCENTRATION: {
      return merge({}, state, { concentration: true });
    }
    case ModalsActions.SHOW_UNCONSCIOUS: {
      return merge({}, state, { unconscious: true });
    }
    case ModalsActions.TOGGLE_CHARACTER_MENU: {
      return merge({}, state, { characterMenu: !state.characterMenu });
    }
    default: {
      return state;
    }
  }
}
