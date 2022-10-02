import { Hamburger } from './../models/hamburger.model';
import { createAction, props } from '@ngrx/store';

export const addHamburger = createAction(
  '[PreviousHamburgers Add] Add Hamburger',
  props<{ hamburger: Hamburger }>()
);

export const removeHamburger = createAction(
  '[PreviousHamburgers Remove] Remove Hamburger',
  props<{ index: number }>()
);

export const replacePreviouses = createAction(
  '[PreviousHamburgers Replace] Replace Hamburger',
  props<{ hamburgers: any }>()
);
