import { addHamburger, removeHamburger, replacePreviouses } from './../actions/previousHamburgers.actions';
import { createReducer, on } from "@ngrx/store";
import { Hamburger } from "../models/hamburger.model";

export const initialState: Hamburger[] = [] 

export const previousHamburgersReducer = createReducer (
    initialState,
    on(addHamburger, (state, payload) => {
        let newArray = state.slice(0)
        newArray.push(payload.hamburger)
        return newArray 
    }),

    on(removeHamburger, (state, payload) => {
        let newArray = state.slice(0)
        newArray.splice(payload.index,1)
        return newArray
    }),

    on(replacePreviouses, (state, payload) => {
        return payload.hamburgers        
    }),
)
