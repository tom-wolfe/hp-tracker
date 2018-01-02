import { ActionReducer, combineReducers } from '@ngrx/store';

import { CharacterState } from '../characters.state';
import { concentrationReducer } from './concentration';
import { hpReducer } from './hp';
import { nameReducer } from './name';

export const characterReducer: ActionReducer<CharacterState> = combineReducers({
  name: nameReducer,
  concentration: concentrationReducer,
  hp: hpReducer
});
