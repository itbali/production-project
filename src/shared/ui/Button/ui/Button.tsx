import { classNames } from 'helpers/classNames/ui/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum Variant {
    CLEAR= 'clear',
    CLEAR_INVERTED= 'clearInverted',
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
    variant?: Variant,
    size?:ButtonSize,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        isSquare,
        size = ButtonSize.M,
        disabled,
        ...rest
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: isSquare,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            {...rest}
        >
            {children}
        </button>
    );
};
