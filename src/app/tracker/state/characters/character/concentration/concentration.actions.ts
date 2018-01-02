import { Action } from '@ngrx/store';

export const SET_CONCENTRATING = '[Concentrating] Set Concentrating';
export const SET_SAVE_DC = '[Concentrating] Set Save DC';

export class SetConcentrating implements Action {
  readonly type = SET_CONCENTRATING;
  constructor(public concentrating: boolean) { }
}

export class SetSaveDC implements Action {
  readonly type = SET_SAVE_DC;
  constructor(public dc: number) { }
}

export type Action = SetConcentrating | SetSaveDC;
