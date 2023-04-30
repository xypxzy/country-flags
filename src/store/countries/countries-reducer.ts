import {ICountry} from "../../types/types.ts";
import {SET_COUNTRIES, SET_ERROR, SET_LOADING} from "./countries-action.ts";


export interface IInitialState {
    status: 'idle' | 'loading' | 'received' | 'rejected',
    error: string | null,
    list?: ICountry[];
}

export interface ICountriesPayload {
    type: string,
    payload : ICountry[]
}

const initialState: IInitialState = {
    status: 'idle',
    error: null,
    list: []
}

export const countriesReducer = (state: IInitialState = initialState, {type, payload}:ICountriesPayload) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            };
        case SET_ERROR:
            return {...state,
                status: 'rejected',
                error: payload};
        case SET_COUNTRIES:
            return {
                ...state,
                status: 'received',
                list: payload
            };
        default: return state;
    }
}