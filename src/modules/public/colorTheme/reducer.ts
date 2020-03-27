import {
    CHANGE_COLOR_THEME,
    TOGGLE_MARKET_SELECTOR,
    TOGGLE_SIDEBAR,
} from './constants';

export interface ColorThemeState {
    color: string;
    sideBarActive: boolean;
    marketSelectorActive: boolean;
}

const currentColorTheme: string = localStorage.getItem('colorTheme') || 'light';

export const initialChangeColorThemeState: ColorThemeState = {
    color: currentColorTheme,
    sideBarActive: true,
    marketSelectorActive: false,
};

export const changeColorThemeReducer = (state = initialChangeColorThemeState, action) => {
    switch (action.type) {
        case CHANGE_COLOR_THEME:
            localStorage.setItem('colorTheme', action.payload);
            return {
                ...state,
                color: action.payload,
             };
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sideBarActive: action.payload,
            };
        case TOGGLE_MARKET_SELECTOR:
            return {
                ...state,
                marketSelectorActive: !state.marketSelectorActive,
            };
        default:
            return state;
    }
};
