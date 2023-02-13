import React from 'react';
import { classNames } from 'helpers/classNames/ui/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string,
}

export function NavBar({ className }: NavBarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <h2>{t('logo')}</h2>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    {t('mainPage')}
                </AppLink>
                <AppLink to="/about">{t('aboutPage')}</AppLink>
            </div>
        </div>
    );
}
