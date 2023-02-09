import {classNames} from "helpers/classNames";
import cls from './ThemeSwitcher.module.scss'
import {FC} from "react";
import {Theme, useTheme} from "app/providers/themeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {

    const {theme, toggleTheme} = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.navbar, {}, [className])}>
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};