import { merge } from 'lodash';

import * as ConcentrationActions from './concentration.actions';
import { ConcentrationState } from './concentration.state';

export const initialState: ConcentrationState = {
  concentrating: false,
  saveDC: 0
};

export function concentrationReducer(state: ConcentrationState = initialState, action: ConcentrationActions.Action): ConcentrationState {
  switch (action.type) {
    case ConcentrationActions.SET_CONCENTRATING: {
      console.log(action.concentrating);
      return merge({}, state, { concentrating: action.concentrating });
    }
    case ConcentrationActions.SET_SAVE_DC: {
      return merge({}, state, { saveDC: action.dc });
    }
    default: {
      return state;
    }
  }
}
