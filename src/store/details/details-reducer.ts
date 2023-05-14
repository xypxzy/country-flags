import {ICountry} from "../../types/types.ts";
import {CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS} from "./details-actions.ts";

export interface IDetailsInitial {
    currentCountry: ICountry | null,
    status: 'idle' | 'loading' | 'received' | 'rejected',
    error: string | null,
    neighbors: string[],
}

const initialState: IDetailsInitial = {
    currentCountry: null,
    status: 'idle',
    error: null,
    neighbors: [],
}

interface IDetailsPayload {
    type: string,
    payload: ICountry | null
}

export const detailsReducer = (state: IDetailsInitial = initialState, {type, payload}: IDetailsPayload) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                error: null,
                status: 'loading'
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                currentCountry: payload
            }
            case SET_NEIGHBORS:
            return {
                ...state,
                neighbors: payload
            }
        case CLEAR_DETAILS:
            return initialState
        default:
            return state
    }
}
