import {ITheme, SET_THEME, typeTheme} from "./theme-actions.ts";

export const themeReducers = (state:typeTheme = 'light', {type, payload}: ITheme): typeTheme => {
    switch (type) {
        case SET_THEME:
            return payload;
        default:
            return state;
    }
}