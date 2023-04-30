import {ICountry} from "../../types/types.ts";

export const SET_COUNTRIES = '@@/SET_COUNTRIES';
export const SET_LOADING = '@@/SET_LOADING';
export const SET_ERROR = '@@/SET_ERROR';

export const setCountries = (countries: ICountry[]) => ({
    type: SET_COUNTRIES,
    payload: countries
});
export const setLoading = () => ({
    type: SET_LOADING,
});
export const setError = (error: string) => ({
    type: SET_ERROR,
    payload: error
})

interface dataType {
    data : ICountry[]
}

// @ts-ignore
export const loadCountries = () => (dispatch, _, {client, api}) => {
    dispatch(setLoading());
    client.get(api.ALL_COUNTRIES).then(({data}:dataType) => dispatch(setCountries(data))).catch(dispatch((err: Error) => setError(err.message)))
}