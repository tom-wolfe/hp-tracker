import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../state';
import * as HP from '../../state/characters/character/hp';
import { currentCharacter } from '../../state/characters/characters.selectors';
import * as Modals from '../../state/modals';

@Component({
  selector: 'app-max-hp-modal',
  templateUrl: 'max-hp-modal.component.html'
})
export class MaxHPModalComponent {
  value: number;
  show: boolean;

  @ViewChild('input') input: ElementRef;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.tracker.modals.maxHP).subscribe(show => this.show = show);
    this.store.select(s => s.tracker).select(currentCharacter).subscribe(c => this.value = c.hp.max);
  }

  setMaxHP() {
    this.store.dispatch(new HP.SetMax(this.value));
    this.close();
  }

  close() {
    this.store.dispatch(new Modals.CloseAll());
  }

  onShown() {
    setTimeout(() => { this.input.nativeElement.focus(); }, 1);
  }
}
