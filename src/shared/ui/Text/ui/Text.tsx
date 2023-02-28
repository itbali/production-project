import { classNames } from 'helpers/classNames';
import cls from './Text.module.scss';

export type TextTheme = 'primary' | 'error';

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = 'primary',
    } = props;
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
