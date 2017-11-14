import { combineReducers } from '@ngrx/store/src/utils';

import { hpReducer } from './hp';
import { nameReducer } from './name';

export * from './character.state';

export const characterReducer = combineReducers({
  name: nameReducer,
  hp: hpReducer
});
