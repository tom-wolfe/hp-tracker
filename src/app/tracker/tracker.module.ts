import { MaxHPModalComponent } from './max-hp-modal/max-hp-modal.component';
import { NgModule } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { SharedModule } from '../shared/shared.module';
import { KeypadComponent } from './keypad';
import { hpReducer } from './state/hp';
import { keypadReducer } from './state/keypad';
import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['hp'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

const COMPONENTS = [
  TrackerComponent,
  KeypadComponent,
  MaxHPModalComponent
];

const reducers = {
  hp: hpReducer,
  keypad: keypadReducer
};

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    TrackerRoutingModule,
    StoreModule.forFeature('tracker', reducers, { metaReducers }),
  ],
  providers: []
})
export class TrackerModule { }
