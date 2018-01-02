import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './state';
import { CharacterState } from './tracker/state/characters';
import { SetConcentrating } from './tracker/state/characters/character/concentration';
import { AddCharacter, RemoveCharacter, SetCharacter } from './tracker/state/characters/characters.actions';
import { currentCharacter } from './tracker/state/characters/characters.selectors';
import { ToggleCharacterMenu } from './tracker/state/modals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  character: CharacterState;
  characters: CharacterState[];
  showCharacterMenu: boolean;

  constructor(private store: Store<AppState>) {
    store.select(s => s.shared).select(a => a.title).subscribe(t => this.title = t);
    store.select(s => s.tracker).select(currentCharacter).subscribe(c => this.character = c);
    store.select(s => s.tracker.characters.list).subscribe(c => this.characters = c);
    store.select(s => s.tracker.modals.characterMenu).subscribe(s => this.showCharacterMenu = s);
  }

  toggleConcentrating(checked: boolean) {
    this.store.dispatch(new SetConcentrating(checked));
  }

  toggleCharacterMenu() {
    this.store.dispatch(new ToggleCharacterMenu());
  }

  removeCharacter(id: number) {
    this.store.dispatch(new RemoveCharacter(id));
    this.store.dispatch(new ToggleCharacterMenu());
  }

  setCharacter(id: number) {
    this.store.dispatch(new SetCharacter(id));
    this.store.dispatch(new ToggleCharacterMenu());
  }

  newCharacter() {
    this.store.dispatch(new AddCharacter());
    this.store.dispatch(new ToggleCharacterMenu());
  }
}
