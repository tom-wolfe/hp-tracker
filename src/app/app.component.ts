import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { GlobalState } from './state/global.state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private store: Store<GlobalState>) {
    store.select(s => s.app).select(a => a.title).subscribe(t => this.title = t);
  }
}
