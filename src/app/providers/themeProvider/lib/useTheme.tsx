import { useContext } from 'react';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import { Theme } from 'app/providers/themeProvider/consts/EnumTheme';
import { ThemeContext } from './ThemeContext';

export interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.GREEN;
                break;
            case Theme.GREEN:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        localStorage.setItem(LOCAL_STORAGE.theme, newTheme);
        setTheme?.(newTheme);
    };

    document.body.className = theme || Theme.LIGHT;

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
