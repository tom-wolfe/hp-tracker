import { Action, ActionReducer, combineReducers, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { characterReducer } from './character';
import { keypadReducer } from './keypad';
import { modalsReducer } from './modals';
import { TrackerState } from './tracker.state';

export function localStorageSyncReducer(reducer: ActionReducer<TrackerState>): ActionReducer<TrackerState> {
  return localStorageSync({ keys: ['character'], rehydrate: true, removeOnUndefined: true })(reducer);
}

export function randomizeEmptyName(reducer: ActionReducer<TrackerState>): ActionReducer<TrackerState> {
  const RANDOM_NAMES: string[] = [
    'Artificer',
    'Barbarian',
    'Bard',
    'Cleric',
    'Fighter',
    'Druid',
    'Monk',
    'Rogue',
    'Paladin',
    'Ranger',
    'Sorcerer',
    'Warlock',
    'Wizard',
  ];
  return function newReducer(state: TrackerState, action: Action) {
    const nextState = reducer(state, action);
    if (!nextState.character.name) {
      nextState.character.name = RANDOM_NAMES[_.random(0, RANDOM_NAMES.length)];
    }
    return nextState;
  };
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer, randomizeEmptyName];

export const reducers = {
  character: characterReducer,
  keypad: keypadReducer,
  modals: modalsReducer
};
