import {
  addHamburger,
  removeHamburger,
  replacePreviouses,
} from './../actions/previousHamburgers.actions';
import { createReducer, on } from '@ngrx/store';
import { Hamburger } from '../models/hamburger.model';

export const initialState: Hamburger[] = [];

export const previousHamburgersReducer = createReducer(
  initialState,
  on(addHamburger, (state, payload) => {
    let newArray: Hamburger[] = state.slice(0);
    newArray.unshift(payload.hamburger);
    if (newArray.length > 5) {
      newArray.splice(5);
    }
    return newArray;
  }),

  on(removeHamburger, (state, payload) => {
    let newArray = state.slice(0);
    newArray.splice(payload.index, 1);
    return newArray;
  }),

  on(replacePreviouses, (state, payload) => {
    let hamburgers = payload.hamburgers.slice(0);
    hamburgers.sort((a: any, b: any) => {
      return b.id - a.id;
    });
    hamburgers.splice(5);
    return hamburgers;
  })
);
