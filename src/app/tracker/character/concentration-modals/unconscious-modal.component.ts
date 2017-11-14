import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../state';
import * as Concentration from '../../state/character/concentration';
import * as Modals from '../../state/modals';

@Component({
  selector: 'app-unconscious-modal',
  templateUrl: 'unconscious-modal.component.html'
})
export class UnconsciousModalComponent {
  show: boolean;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.tracker.modals.unconscious).subscribe(show => this.show = show);
  }

  close() {
    this.store.dispatch(new Modals.CloseAll());
  }
}
