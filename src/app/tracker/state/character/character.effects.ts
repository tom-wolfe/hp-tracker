import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../state';
import * as Modals from '../modals';
import { CharacterState } from './character.state';
import * as Concentration from './concentration';
import * as HP from './hp';

@Injectable()
export class CharacterEffects {
  private isConcentrating: boolean;

  @Effect() concentrationCheck = this.actions$
    .ofType<HP.Hurt>(HP.HURT)
    .withLatestFrom(this.store$.select(s => s.tracker.character))
    .mergeMap(([action, character]: [HP.Hurt, CharacterState], con: any) => {

      if (!character.concentration.concentrating) {
        return Observable.from([]);
      }
      if (character.hp.current > 0) {
        return Observable.from([
          new Concentration.SetSaveDC(Math.max(10, Math.floor(action.amount / 2))),
          new Modals.ShowConcentration()
        ]);
      } else {
        return Observable.from([
          new Concentration.SetConcentrating(false),
          // TODO: Make a new dialog telling them they're unconscious and lost concentration.
          new Modals.ShowConcentration()
        ]);
      }
    });

  constructor(private actions$: Actions<HP.Action>, private store$: Store<AppState>) { }
}
