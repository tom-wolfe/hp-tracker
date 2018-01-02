import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../state';
import { CharacterState } from './state/characters';
import { currentCharacter } from './state/characters/characters.selectors';

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  character: CharacterState;

  constructor(private store: Store<AppState>) {
    store.select(s => s.tracker).select(currentCharacter).subscribe(c => this.character = c);
  }

  ngOnInit() { }
}
