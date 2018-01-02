import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../state';
import { CharacterState } from '../state/characters';
import * as Modals from '../state/modals';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() character: CharacterState;

  constructor(private store: Store<AppState>) { }

  get hpBarStyle(): {} {
    const hp = this.character.hp;
    const p = hp.current / (hp.max + hp.tempMax) * 100;
    return {
      width: `${p}%`,
      'background-color': this.getHpColor(p)
    };
  }

  private getHpColor(p) {
    if (p > 50) { return '#00bc8c'; }
    if (p > 25) { return '#f39c12'; }
    return '#e12e1c';
  }

  showMaxHP() {
    this.store.dispatch(new Modals.ShowMaxHP());
  }

  showTempHP() {
    this.store.dispatch(new Modals.ShowTemporaryHP());
  }

  showTempMaxHP() {
    this.store.dispatch(new Modals.ShowTemporaryMaxHP());
  }

  showName() {
    this.store.dispatch(new Modals.ShowName());
  }
}
