import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { CharacterComponent } from './character/character.component';
import { ConcentrationModalComponent } from './character/concentration-modal/concentration-modal.component';
import { MaxHPModalComponent, TempHPModalComponent, TempMaxHPModalComponent } from './character/hp-modals';
import { NameModalComponent } from './character/name-modal/name-modal.component';
import { KeypadComponent } from './keypad';
import { effects, metaReducers, reducers } from './state';
import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';

const COMPONENTS = [
  TrackerComponent,
  CharacterComponent,
  KeypadComponent,
  MaxHPModalComponent,
  TempHPModalComponent,
  TempMaxHPModalComponent,
  NameModalComponent,
  ConcentrationModalComponent
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
