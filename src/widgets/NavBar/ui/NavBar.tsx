import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'helpers/classNames/ui/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Variant } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'helpers/hooks';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string,
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserAuthData);
    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

    const openModal = useCallback(() => {
        setIsAuthModalOpened(() => true);
    }, []);

    const closeModal = useCallback(() => {
        setIsAuthModalOpened(() => false);
    }, []);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logoutUser());
    }, [dispatch]);

    if (userData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <h2>{t('logo')}</h2>
                <Button
                    onClick={handleLogout}
                    className={cls.links}
                    variant={Variant.CLEAR_INVERTED}
                >
                    {t('logout')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>

            <h2>{t('logo')}</h2>
            <Button onClick={openModal} className={cls.links} variant={Variant.CLEAR_INVERTED}>
                {t('login')}
            </Button>
            {isAuthModalOpened && <LoginModal isOpened={isAuthModalOpened} onClose={closeModal} />}

        </header>
    );
});
