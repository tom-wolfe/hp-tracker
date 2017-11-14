import { Action } from '@ngrx/store';

export const CLOSE_ALL = '[Modals] Close All';
export const SHOW_MAX_HP = '[Modals] Show Max HP';

export class CloseAll implements Action {
  readonly type = CLOSE_ALL;
  constructor() { }
}

export class ShowMaxHP implements Action {
  readonly type = SHOW_MAX_HP;
  constructor() { }
}

export type Action = CloseAll | ShowMaxHP;
