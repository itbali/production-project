import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'helpers/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children?: ReactNode,
    variant?: 'default' | 'outlined',
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'default',
        ...otherProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
