import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../state';
import * as Name from '../../state/character/name';
import * as Modals from '../../state/modals';

@Component({
  selector: 'app-name-modal',
  templateUrl: 'name-modal.component.html'
})
export class NameModalComponent {
  value: string;
  show: boolean;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.tracker.modals.name).subscribe(show => this.show = show);
    this.store.select(s => s.tracker.character.name).subscribe(n => this.value = n);
  }

  setName() {
    this.store.dispatch(new Name.SetName(this.value));
    this.close();
  }

  close() {
    this.store.dispatch(new Modals.CloseAll());
  }
}
