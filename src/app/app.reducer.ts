
import { Action, createSelector } from "@ngrx/store";

export interface appState {
    user: string
}


export function miReducer(state: appState = { user: 'Ruber'} , action: Action) {
    console.log(action);
    return state;
}