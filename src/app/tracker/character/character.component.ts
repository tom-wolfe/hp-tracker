import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../state';
import { CharacterState } from '../state/character';
import * as Modals from '../state/modals';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() character: CharacterState;

  constructor(private store: Store<AppState>) { }

  showMaxHP() {
    this.store.dispatch(new Modals.ShowMaxHP());
  }
}
