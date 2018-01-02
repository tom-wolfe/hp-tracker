import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../state';
import * as Name from '../../state/characters/character/name';
import { currentCharacter } from '../../state/characters/characters.selectors';
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
    this.store.select(s => s.tracker).select(currentCharacter).subscribe(c => this.value = c.name);
  }

  setName() {
    this.store.dispatch(new Name.SetName(this.value));
    this.close();
  }

  close() {
    this.store.dispatch(new Modals.CloseAll());
  }
}
