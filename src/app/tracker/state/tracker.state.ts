import { HPState } from './hp/hp.state';
import { KeypadState } from './keypad/keypad.state';

export interface TrackerState {
  hp: HPState;
  keypad: KeypadState;
}
