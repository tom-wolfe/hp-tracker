import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

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

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.tracker.modals.maxHP).subscribe(show => this.show = show);
    this.store.select(s => s.tracker.character.hp.max).subscribe(m => this.value = m);
  }

  setMaxHP() {
    this.store.dispatch(new HP.SetMax(this.value));
    this.close();
  }

  close() {
    this.store.dispatch(new Modals.CloseAll());
  }
}
