import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../state';
import * as Concentration from '../../state/characters/character/concentration';
import { currentCharacter } from '../../state/characters/characters.selectors';
import * as Modals from '../../state/modals';

@Component({
  selector: 'app-concentration-modal',
  templateUrl: 'concentration-modal.component.html',
  styleUrls: ['./concentration-modal.component.scss']
})
export class ConcentrationModalComponent {
  show: boolean;
  dc = 10;
  constructor(private store: Store<AppState>) {
    this.store.select(s => s.tracker.modals.concentration).subscribe(show => this.show = show);
    this.store.select(s => s.tracker).select(currentCharacter).subscribe(c => this.dc = c.concentration.saveDC);
  }

  pass() {
    this.close();
  }

  fail() {
    this.store.dispatch(new Concentration.SetConcentrating(false));
    this.close();
  }

  close() {
    this.store.dispatch(new Modals.CloseAll());
  }
}
