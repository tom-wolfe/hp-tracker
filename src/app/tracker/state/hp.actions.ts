import { Action } from '@ngrx/store';

export const SET_MAX = '[HP] Set Max';

export class SetMax implements Action {
  readonly type = SET_MAX;
  constructor(public max: number) { }
}

export type Action = SetMax;
