import React from 'react';
import { Theme } from 'app/providers/themeProvider/consts/EnumTheme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
});
