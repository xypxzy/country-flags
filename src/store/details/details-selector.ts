import {IDetailsInitial} from "./details-reducer.ts";

interface IState {
    details: IDetailsInitial
}

export const currentCountrySelector = (state: IState) => state.details.currentCountry
export const countrySelector = (state: IState) => state.details
export const neighborsSelector = (state: IState) => state.details.neighbors