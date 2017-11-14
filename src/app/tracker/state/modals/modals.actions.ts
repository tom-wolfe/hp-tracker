import { Action } from '@ngrx/store';

export const CLOSE_ALL = '[Modals] Close All';
export const SHOW_MAX_HP = '[Modals] Show Max HP';
export const SHOW_TEMP_HP = '[Modals] Show Temporary HP';
export const SHOW_TEMP_MAX_HP = '[Modals] Show Temporary Max HP';
export const SHOW_NAME = '[Modals] Show Name';
export const SHOW_CONCENTRATION = '[Modals] Show Concentration';

export class CloseAll implements Action {
  readonly type = CLOSE_ALL;
  constructor() { }
}

export class ShowMaxHP implements Action {
  readonly type = SHOW_MAX_HP;
  constructor() { }
}

export class ShowTemporaryHP implements Action {
  readonly type = SHOW_TEMP_HP;
  constructor() { }
}

export class ShowTemporaryMaxHP implements Action {
  readonly type = SHOW_TEMP_MAX_HP;
  constructor() { }
}

export class ShowName implements Action {
  readonly type = SHOW_NAME;
  constructor() { }
}

export class ShowConcentration implements Action {
  readonly type = SHOW_CONCENTRATION;
  constructor() { }
}

export type Action = CloseAll | ShowMaxHP | ShowTemporaryHP | ShowTemporaryMaxHP | ShowName | ShowConcentration;
