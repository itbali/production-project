import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE.theme) as Theme || Theme.LIGHT;

interface initialTheme {
    initialTheme?: Theme,
}

const ThemeProvider: FC<initialTheme> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProviderProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProviderProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
