import { ActionReducer, combineReducers } from '@ngrx/store';

import { Action } from '../../../state';
import { CharacterState } from './character.state';
import { concentrationReducer } from './concentration';
import { hpReducer } from './hp';
import { nameReducer } from './name';

export * from './character.state';

const combinedReducers: ActionReducer<CharacterState> = combineReducers({
  name: nameReducer,
  concentration: concentrationReducer,
  hp: hpReducer
});

export function characterReducer(state: CharacterState, action: Action) {
  return combinedReducers(state, action);
}
