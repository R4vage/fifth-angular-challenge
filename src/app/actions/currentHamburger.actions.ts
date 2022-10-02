import { createAction, props } from '@ngrx/store';

export const addIngredient = createAction(
  '[CurrentHamburger Add] Add Ingredient',
  props<{ ingredient: string; index: number }>()
);

export const removeIngredient = createAction(
  '[CurrentHamburger Remove] Remove Ingredient',
  props<{ index: number }>()
);

export const replaceCurrent = createAction(
  '[CurrentHamburger Replace] Replace Hamburger',
  props<{ hamburger: any }>()
);
