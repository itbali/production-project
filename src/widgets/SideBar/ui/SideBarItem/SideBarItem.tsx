import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SideBarItemType } from '../../model/item';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item: SideBarItemType
        collapsed: boolean,
}

export const SideBarItem = memo(({ collapsed, item }: SideBarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={item.path}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
        >
            {item.icon}
            {t(item.text)}
        </AppLink>
    );
});
