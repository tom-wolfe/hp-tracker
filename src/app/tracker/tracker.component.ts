import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../state';
import { HPState } from './state/hp';

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  hp: HPState;

  constructor(private store: Store<AppState>) {
    store.select(s => s.tracker.hp).subscribe(hp => this.hp = hp);
  }

  ngOnInit() { }
}
