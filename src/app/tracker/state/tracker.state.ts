import { CharacterState } from './character';
import { KeypadState } from './keypad';
import { ModalsState } from './modals';

export interface TrackerState {
  character: CharacterState;
  keypad: KeypadState;
  modals: ModalsState;
}
