import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./root-reducer.ts";
import * as api from '../config.ts'
import axios from "axios";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({client: axios, api}))
))

export {store}