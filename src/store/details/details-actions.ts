import {ICountry} from "../../types/types.ts";

export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const SET_COUNTRY = '@@details/SET_COUNTRY'
export const CLEAR_DETAILS = '@@details/SET_COUNTRY'
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS'

const setLoading = () => ({
    type: SET_LOADING,
})
const setError = (err: string) => ({
    type: SET_ERROR,
    payload: err
})
const setCountry = (country: ICountry) => ({
    type: SET_COUNTRY,
    payload: country
})
const setNeighbor = (countries: string[]) => ({
    type: SET_NEIGHBORS,
    payload: countries
})
export const clearDetails = () => ({
    type: CLEAR_DETAILS,
})

interface dataType {
    data : ICountry[]
}

// @ts-ignore
export const loadCountryByName = (name) => (dispatch, _ , {client, api}) => {
    dispatch(setLoading());
    client.get(api.searchByCountry(name)).then(({data} :dataType) => dispatch(setCountry(data[0]))).catch((err: Error) => dispatch(setError(err.message)))
}

// @ts-ignore
export const loadNeighborsByBorder = (border) => (dispatch, _, {client, api}) => {
    client.get(api.filterByCode(border)).then(({data}:dataType) => dispatch(setNeighbor(data.map((c)=> c.name)))).catch(console.error)
}