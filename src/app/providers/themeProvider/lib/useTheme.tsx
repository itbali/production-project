import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme?.(newTheme);
    };

    document.body.className = theme || Theme.LIGHT;

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
