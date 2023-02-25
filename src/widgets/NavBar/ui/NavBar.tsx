import React, { useCallback, useState } from 'react';
import { classNames } from 'helpers/classNames/ui/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Variant } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUserName';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string,
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

    const openModal = useCallback(() => {
        setIsAuthModalOpened(() => true);
    }, []);

    const closeModal = useCallback(() => {
        setIsAuthModalOpened(() => false);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <h2>{t('logo')}</h2>
            <Button onClick={openModal} className={cls.links} variant={Variant.CLEAR_INVERTED}>
                {t('login')}
            </Button>
            <LoginModal isOpened={isAuthModalOpened} onClose={closeModal} />

        </div>
    );
};
