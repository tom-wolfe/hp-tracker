import { CharacterState } from './character/character.state';
import { KeypadState } from './keypad/keypad.state';

export interface TrackerState {
  character: CharacterState;
  keypad: KeypadState;
}
