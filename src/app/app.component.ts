import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './state';
import { CharacterState } from './tracker/state/character';
import { SetConcentrating } from './tracker/state/character/concentrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  character: CharacterState;

  constructor(private store: Store<AppState>) {
    store.select(s => s.shared).select(a => a.title).subscribe(t => this.title = t);
    store.select(s => s.tracker.character).subscribe(c => this.character = c);
  }

  toggleConcentrating(checked: boolean) {
    console.log('face');
    this.store.dispatch(new SetConcentrating(checked));
  }
}
