export const SET_THEME = '@@theme/SET_THEME';

export type typeTheme = 'light'| 'dark';

export  interface ITheme{
    type: string,
    payload: typeTheme
}
export const setTheme = (theme: typeTheme): ITheme => ({
    type: SET_THEME,
    payload: theme
})