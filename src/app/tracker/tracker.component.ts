import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../state';
import { CharacterState } from './state/character';

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  currentCharacter: CharacterState;

  constructor(private store: Store<AppState>) {
    store.select(s => s.tracker.character).subscribe(c => this.currentCharacter = c);
  }

  ngOnInit() { }
}
