import {IInitialState} from "./countries-reducer.ts";

export interface IState {
    countries: IInitialState
}
export const allCountriesInfo = (state: IState)  => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list?.length,
})

export const allCountriesSelectors = (state:IState) => state.countries.list;
export const visibleCounties = ((state: IState, {search='', region=''}) => {
    return state.countries.list?.filter(country => (country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)))
})