import { Action } from '@ngrx/store';

export const SET_NAME = '[Name] Set Name';

export class SetName implements Action {
  readonly type = SET_NAME;
  constructor(public name: string) { }
}

export type Action = SetName;
