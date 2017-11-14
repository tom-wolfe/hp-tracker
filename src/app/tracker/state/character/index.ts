import { combineReducers } from '@ngrx/store/src/utils';

import { concentratingReducer } from './concentrating';
import { hpReducer } from './hp';
import { nameReducer } from './name';

export * from './character.state';

export const characterReducer = combineReducers({
  name: nameReducer,
  concentrating: concentratingReducer,
  hp: hpReducer
});
