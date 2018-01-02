import { Action } from '@ngrx/store';

export const ADD_CHARACTER = '[Character] Add Character';
export const SET_CHARACTER = '[Character] Set Character';
export const REMOVE_CHARACTER = '[Character] Remove Character';

export class AddCharacter implements Action {
  readonly type = ADD_CHARACTER;
  constructor() { }
}

export class SetCharacter implements Action {
  readonly type = SET_CHARACTER;
  constructor(public id: number) { }
}

export class RemoveCharacter implements Action {
  readonly type = REMOVE_CHARACTER;
  constructor(public id: number) { }
}

export type Action = AddCharacter | SetCharacter | RemoveCharacter;
