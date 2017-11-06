import { Action } from '@ngrx/store';

export const SET_MAX = '[HP] Set Max';
export const HEAL = '[HP] Heal';
export const HURT = '[HP] Hurt';
export const TEMP_HP = '[HP] Temporary Hit Points';
export const TEMP_MAX_HP = '[HP] Temporary Max Hit Points';

export class SetMax implements Action {
  readonly type = SET_MAX;
  constructor(public max: number) { }
}

export class Heal implements Action {
  readonly type = HEAL;
  constructor(public amount: number) { }
}

export class Hurt implements Action {
  readonly type = HURT;
  constructor(public amount: number) { }
}

export class SetTemporaryHP implements Action {
  readonly type = TEMP_HP;
  constructor(public amount: number) { }
}

export class SetTemporaryMaxHP implements Action {
  readonly type = TEMP_MAX_HP;
  constructor(public amount: number) { }
}

export type Action = SetMax | Heal | Hurt | SetTemporaryHP | SetTemporaryMaxHP;
