import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { CharacterComponent } from './character/character.component';
import { ConcentrationModalComponent, UnconsciousModalComponent } from './character/concentration-modals';
import {
  CurrentHPModalComponent,
  MaxHPModalComponent,
  TempHPModalComponent,
  TempMaxHPModalComponent,
} from './character/hp-modals';
import { NameModalComponent } from './character/name-modal/name-modal.component';
import { KeypadComponent } from './keypad';
import { effects, metaReducers, reducers } from './state';
import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';

const COMPONENTS = [
  TrackerComponent,
  CharacterComponent,
  KeypadComponent,
  CurrentHPModalComponent,
  MaxHPModalComponent,
  TempHPModalComponent,
  TempMaxHPModalComponent,
  NameModalComponent,
  ConcentrationModalComponent,
  UnconsciousModalComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    TrackerRoutingModule,
    StoreModule.forFeature('tracker', reducers, { metaReducers }),
    EffectsModule.forFeature(effects),
  ],
  providers: []
})
export class TrackerModule { }
