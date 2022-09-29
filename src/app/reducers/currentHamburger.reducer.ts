import { addIngredient, removeIngredient, replaceCurrent } from './../actions/currentHamburger.actions';
import { createReducer, on } from "@ngrx/store";
import { Hamburger } from "../models/hamburger.model";

export const initialState: Hamburger = {
    createdAt: "",
    ingredients: []
}

export const currentHamburgerReducer = createReducer (
    initialState,
    on(addIngredient, (state, payload) => {
        let newList = state.ingredients.slice(0)
        newList.splice (payload.index, 0, payload.ingredient)
        return {...state, ingredients: newList}        
    }),

    on(removeIngredient, (state, payload) => {
        let newList = state.ingredients.slice(0)
        newList.splice (payload.index, 1)
        return {...state, ingredients: newList}        
    }),

    on(replaceCurrent, (state, payload) => {
        return {createdAt:payload.hamburger.createdAt, ingredients:payload.hamburger.ingredients}        
    }),
)
