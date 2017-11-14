import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { characterReducer } from './character';
import { keypadReducer } from './keypad';
import { modalsReducer } from './modals';

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['character'], rehydrate: true })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const reducers = {
  character: characterReducer,
  keypad: keypadReducer,
  modals: modalsReducer
};
