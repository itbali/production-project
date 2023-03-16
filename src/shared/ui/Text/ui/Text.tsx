import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error';
type TextAlign = 'left' | 'center' | 'right';
type TextSize = 'small' | 'medium' | 'large';

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    variant?: TextVariant,
    align?: TextAlign,
    size?: TextSize,
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        size = 'medium',
        variant = 'primary',
        align = 'left',
    } = props;
    return (
        <div className={classNames(cls.Text, {}, [className, cls[variant], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
