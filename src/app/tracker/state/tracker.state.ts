import { CharactersState } from './characters';
import { KeypadState } from './keypad';
import { ModalsState } from './modals';

export interface TrackerState {
  characters: CharactersState;
  keypad: KeypadState;
  modals: ModalsState;
}
