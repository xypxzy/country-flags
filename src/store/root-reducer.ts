import { combineReducers} from 'redux'
import {themeReducers} from "./theme/theme-reducers.ts";
import {countriesReducer} from "./countries/countries-reducer.ts";
import {controlsReducer} from "./controls/controls-reducers.ts";
import {detailsReducer} from "./details/details-reducer.ts";

export const rootReducer= combineReducers({
    theme: themeReducers,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
})

