import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { random } from 'lodash';
import { localStorageSync } from 'ngrx-store-localstorage';

import { charactersReducer } from './characters';
import { keypadReducer } from './keypad';
import { modalsReducer } from './modals';
import { TrackerState } from './tracker.state';

export function localStorageSyncReducer(reducer: ActionReducer<TrackerState>): ActionReducer<TrackerState> {
  return localStorageSync({ keys: ['characters'], rehydrate: true, removeOnUndefined: true })(reducer);
}

export function randomizeEmptyName(reducer: ActionReducer<TrackerState>): ActionReducer<TrackerState> {
  const RANDOM_NAMES: string[] = [
    'Arcanist',
    'Artificer',
    'Barbarian',
    'Bard',
    'Bloodhunter',
    'Cleric',
    'Fighter',
    'Gunslinger',
    'Druid',
    'Monk',
    'Rogue',
    'Paladin',
    'Ranger',
    'Shadowdancer',
    'Songblade',
    'Sorcerer',
    'Spellsword',
    'Warlock',
    'Wizard',
  ];
  return function newReducer(state: TrackerState, action: Action) {
    const nextState = reducer(state, action);
    if (nextState.characters.list.length === 0) {
      nextState.characters.list.push({
        name: '',
        concentration: {
          concentrating: false,
          saveDC: 0
        },
        hp: {
          current: 10,
          max: 10,
          temp: 0,
          tempMax: 0,
        }
      });
    }
    nextState.characters.list.forEach(character => {
      // TODO: Remove naming collisions
      character.name = character.name || RANDOM_NAMES[random(0, RANDOM_NAMES.length)];
    });
    return nextState;
  };
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer, randomizeEmptyName];

export const reducers = {
  characters: charactersReducer,
  keypad: keypadReducer,
  modals: modalsReducer
};
