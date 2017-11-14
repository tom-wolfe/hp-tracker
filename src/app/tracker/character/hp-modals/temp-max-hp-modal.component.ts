import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { ModalComponent } from '../../../shared/modal/modal.component';
import { AppState } from '../../../state';
import * as HP from '../../state/character/hp';
import * as Modals from '../../state/modals';

@Component({
  selector: 'app-temp-max-hp-modal',
  templateUrl: 'temp-max-hp-modal.component.html'
})
export class TempMaxHPModalComponent {
  value: number;
  show: boolean;
  @ViewChild('modal') modal: ModalComponent;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.tracker.modals.tempMaxHP).subscribe(show => this.show = show);
    this.store.select(s => s.tracker.character.hp.tempMax).subscribe(m => this.value = m);
  }

  setTempMaxHP() {
    this.store.dispatch(new HP.SetTemporaryMaxHP(this.value));
    this.close();
  }

  close() {
    this.store.dispatch(new Modals.CloseAll());
  }
}
