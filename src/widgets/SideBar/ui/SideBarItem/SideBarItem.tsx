import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames';
import { SideBarItemType } from '../../model/item';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item?: SideBarItemType
        collapsed: boolean,
}

export const SideBarItem = memo(({ collapsed, item }: SideBarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
        >
            {item.icon}
            {t(item.text)}
        </AppLink>
    );
});
