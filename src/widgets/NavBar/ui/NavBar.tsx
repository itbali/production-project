import React, { useCallback, useState } from 'react';
import { classNames } from 'helpers/classNames/ui/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button, Variant } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string,
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpened((prevState) => !prevState);
    }, []);

    const onModalClose = useCallback(() => {
        setIsAuthModalOpened(false);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <h2>{t('logo')}</h2>
            <Button onClick={onToggleModal} className={cls.links} variant={Variant.CLEAR_INVERTED}>
                {t('enter')}
            </Button>
            <Modal isOpen={isAuthModalOpened} onClose={onModalClose}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                    itaque magni mollitia possimus quas ratione. At deleniti
                    dolor doloribus ducimus,
                    in nemo, non nulla optio praesentium quas ullam veniam veritatis?
                </div>
            </Modal>

        </div>
    );
};
