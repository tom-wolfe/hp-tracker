import { Action, ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store/src/utils';

import { CharacterState } from './character.state';
import { concentratingReducer } from './concentrating';
import { hpReducer } from './hp';
import { nameReducer } from './name';

export * from './character.state';

const combinedReducers: ActionReducer<CharacterState> = combineReducers({
  name: nameReducer,
  concentrating: concentratingReducer,
  hp: hpReducer
});

export function characterReducer(state: CharacterState, action: Action) {
  return combinedReducers(state, action);
}
