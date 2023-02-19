import { classNames } from 'helpers/classNames/ui/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR= 'clear',
    OUTLINE= 'outline',
    BACKGROUND= 'background',
    BACKGROUND_INVERTED= 'backgroundInverted',
}

export enum ButtonSize {
    S= 'size_s',
    M= 'size_m',
    L= 'size_l',
    XL= 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    isSquare?: boolean,
    theme?: ButtonTheme,
    size?:ButtonSize,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        isSquare,
        size = ButtonSize.M,
        ...rest
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: isSquare,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...rest}
        >
            {children}
        </button>
    );
};
