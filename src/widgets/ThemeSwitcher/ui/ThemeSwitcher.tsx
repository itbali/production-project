import { classNames } from 'helpers/classNames/ui/classNames';
import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/themeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, Variant } from 'shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = memo(({ className }:ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant={Variant.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
