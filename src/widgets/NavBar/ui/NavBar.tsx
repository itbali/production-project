import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'helpers/classNames/ui/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Variant } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import {
    getUserAuthData, selectIsAdmin, selectIsManager, userActions,
} from 'entities/User';
import { useAppDispatch } from 'helpers/hooks';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string,
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserAuthData);
    const isAdmin = useSelector(selectIsAdmin);
    const isManager = useSelector(selectIsManager);
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

    const isAdminPanelAvailable = isAdmin || isManager;

    if (userData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.logo} title={t('logo')} />
                <AppLink
                    to={RoutePath.article_create}
                    className={cls.createArticleLink}
                >
                    <Button
                        onClick={openModal}
                        className={cls.links}
                        variant={Variant.CLEAR}
                    >
                        {t('createArticle')}
                    </Button>
                </AppLink>
                <Dropdown
                    direction="down left"
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [{
                                content: t('admin-panel'),
                                href: RoutePath.admin_panel,
                            }]
                            : []),
                        {
                            content: t('profile'),
                            href: RoutePath.profile + userData.id,
                        },
                        {
                            content: t('logout'),
                            onClick: handleLogout,
                        },
                    ]}
                    trigger={<Avatar size="small" src={userData.avatar || ''} />}
                />

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
