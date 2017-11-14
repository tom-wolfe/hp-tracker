import { Action } from '@ngrx/store';

export const SET_CONCENTRATING = '[Concentrating] Set Concentrating';

export class SetConcentrating implements Action {
  readonly type = SET_CONCENTRATING;
  constructor(public concentrating: boolean) { }
}

export type Action = SetConcentrating;
