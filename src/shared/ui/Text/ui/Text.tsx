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

    'data-testid'?: string,
}

type HeaderTagType = 'h1' | 'h2' | 'h3';
const mapSizeToTag: Record<TextSize, HeaderTagType> = {
    small: 'h3',
    medium: 'h2',
    large: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        size = 'medium',
        variant = 'primary',
        align = 'left',
        'data-testid': dataTestId = 'text',
    } = props;

    const HeaderTag = mapSizeToTag[size];
    return (
        <div className={classNames(cls.Text, {}, [className, cls[variant], cls[align], cls[size]])}>
            {title
                && (
                    <HeaderTag className={cls.title} data-testid={`${dataTestId}.title`}>
                        {title}
                    </HeaderTag>
                )}
            {text
                && (
                    <p className={cls.text} data-testid={`${dataTestId}.text`}>
                        {text}
                    </p>
                )}
        </div>
    );
});
