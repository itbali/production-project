import { classNames } from 'helpers/classNames';
import { memo, ReactNode } from 'react';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    variant?: TextVariant,
    children?: ReactNode,
    align?: TextAlign,
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        children,
        variant = 'primary',
        align = 'left',
    } = props;
    return (
        <div className={classNames(cls.Text, {}, [className, cls[variant], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
