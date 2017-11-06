import * as HPActions from './hp.actions';
import { HPState } from './tracker.state';

const initialState: HPState = {
  current: 0,
  max: 0
};

export function hpReducer(state: HPState = initialState, action: HPActions.Action): HPState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}