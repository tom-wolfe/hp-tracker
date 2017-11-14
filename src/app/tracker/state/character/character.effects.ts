import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TrackerState } from '../tracker.state';
import * as HP from './hp';
import * as Concentration from './concentration';
import * as Modals from '../modals';

@Injectable()
export class CharacterEffects {
  @Effect() concentrationCheck = this.actions$
    .ofType(HP.HURT)
    .mergeMap((action: HP.Hurt) => {
      // TODO: Only do this is player is concentrating.
      // TODO: If player is knocked unconscious, set concentrating to false and display different dialog.
      return Observable.from([
        new Concentration.SetSaveDC(Math.max(10, Math.floor(action.amount / 2))),
        new Modals.ShowConcentration()
      ]);
    });

  constructor(private actions$: Actions<HP.Action>, private store$: Store<TrackerState>) {
  }
}
