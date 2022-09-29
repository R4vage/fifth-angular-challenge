import { Hamburger } from './../models/hamburger.model';
import { Store } from '@ngrx/store';
import { RestService } from './../home/rest.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class HamburgerEffects {
  $hamburger: Hamburger;
  hamburgerChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[CurrentHamburger Add] Add Ingredient') ||
        ofType('[CurrentHamburger Remove] Remove Ingredient'),
      mergeMap(() => {this.RestService.updateCurrent(this.$hamburger)}),
      catchError(() => EMPTY)
    )
  );

  constructor(
    private actions$: Actions,
    private RestService: RestService,
    private store: Store<{
      currentHamburger: Hamburger;
      previousHamburgers: Hamburger[];
    }>
  ) {
    this.$hamburger = {
      createdAt: '',
      ingredients: [],
    };
    this.store.select('currentHamburger').subscribe((state) => {
      this.$hamburger = state;
      console.log(this.$hamburger);
    });
  }
}
