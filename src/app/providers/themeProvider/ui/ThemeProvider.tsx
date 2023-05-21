import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import { Theme } from 'app/providers/themeProvider';
import { ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE.theme) as Theme || Theme.LIGHT;

interface initialTheme extends React.PropsWithChildren {
    initialTheme?: Theme
}

const ThemeProvider = (props: initialTheme) => {
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
