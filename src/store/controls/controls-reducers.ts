import {CLEAR_CONTROLS, SET_REGION, SET_SEARCH} from "./controls-actions.ts";

export interface IControlsInitialState {
    search: string,
    region: string,
}
const initialState:IControlsInitialState = {
    search:'',
    region:''
}

interface IPayload {
    type: string ,
    payload: IControlsInitialState
}

export const controlsReducer = (state = initialState, {type, payload}:IPayload ) => {
    switch (type) {
        case SET_SEARCH :
            return {
                ...state,
                search: payload
            }
        case SET_REGION:
            return {
                ...state,
                region: payload
            }
        case CLEAR_CONTROLS:
            return initialState;

        default:
            return state;
    }
}