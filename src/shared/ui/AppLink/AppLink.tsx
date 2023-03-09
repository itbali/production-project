import { classNames } from 'helpers/classNames/ui/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.navbar, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
