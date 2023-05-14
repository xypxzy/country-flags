import {IControlsInitialState} from "./controls-reducers.ts";

interface IState {
    controls: IControlsInitialState
}
export const controlSearchSelectors = (state:IState) => state.controls.search
export const controlRegionSelectors = (state:IState) => state.controls.region
export const allControlSelectors = (state:IState) => state.controls