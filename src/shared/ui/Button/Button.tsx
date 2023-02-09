import {classNames} from "helpers/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";
import {ValueOf} from "helpers/ValueOf";

export const ThemeButton = {
    CLEAR: 'clear',
} as const
export type ThemeButtonType = ValueOf<typeof ThemeButton>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButtonType
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...rest
    } = props
    return (
        <button
            className={classNames(cls.navbar, {}, [className, cls[theme]])}
            {...rest}
        >{children}
        </button>
    );
};