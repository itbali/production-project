import React from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    GREEN = 'green',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
});
