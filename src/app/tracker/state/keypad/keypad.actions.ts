import { Action } from '@ngrx/store';

export const CLEAR = '[Keypad] Clear';
export const NUMBER_PRESSED = '[Keypad] Number Pressed';

export class Clear implements Action {
  readonly type = CLEAR;
  constructor() { }
}

export class NumberPressed implements Action {
  readonly type = NUMBER_PRESSED;
  constructor(public number: number) { }
}

export type Action = Clear | NumberPressed;
