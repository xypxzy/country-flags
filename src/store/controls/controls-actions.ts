export const SET_SEARCH = '@@/controls/SET_SEARCH';
export const SET_REGION = '@@/controls/SET_REGION';
export const CLEAR_CONTROLS = '@@/controls/CLEAR_CONTROLS';

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    payload: search,
})

export const setRegion = (search: string) => ({
    type: SET_REGION,
    payload: search,
})

export const clearControls = () => ({
    type: CLEAR_CONTROLS,
})
