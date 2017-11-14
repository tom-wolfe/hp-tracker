import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { ModalComponent } from '../../shared/modal/modal.component';
import { AppState } from '../../state';
import * as HP from '../state/character/hp';
import * as Modals from '../state/modals';

@Component({
  selector: 'app-max-hp-modal',
  templateUrl: 'max-hp-modal.component.html'
})
export class MaxHPModalComponent {
  value: number;
  show: boolean;
  @ViewChild('modal') modal: ModalComponent;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.tracker.modals.maxHP).subscribe(show => this.show = show);
  }

  setMaxHP() {
    this.store.dispatch(new HP.SetMax(this.value));
    this.store.dispatch(new Modals.CloseAll());
  }
}
