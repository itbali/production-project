import React from 'react';
import { classNames } from 'helpers/classNames/ui/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string,
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <h2>{t('logo')}</h2>
            <div className={cls.links} />
        </div>
    );
};
