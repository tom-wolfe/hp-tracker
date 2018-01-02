import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../state';
import * as HP from '../../state/characters/character/hp';
import * as Modals from '../../state/modals';
import { currentCharacter } from '../../state/characters/characters.selectors';

@Component({
  selector: 'app-temp-max-hp-modal',
  templateUrl: 'temp-max-hp-modal.component.html'
})
export class TempMaxHPModalComponent {
  value: number;
  show: boolean;

  @ViewChild('input') input: ElementRef;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.tracker.modals.tempMaxHP).subscribe(show => this.show = show);
    this.store.select(s => s.tracker).select(currentCharacter).subscribe(c => this.value = c.hp.tempMax);
  }

  setTempMaxHP() {
    this.store.dispatch(new HP.SetTemporaryMaxHP(this.value));
    this.close();
  }

  close() {
    this.store.dispatch(new Modals.CloseAll());
  }

  onShown() {
    setTimeout(() => { this.input.nativeElement.focus(); }, 1);
  }
}
