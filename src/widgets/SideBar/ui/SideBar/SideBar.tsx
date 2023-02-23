import { classNames } from 'helpers/classNames/ui/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, Variant } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeSVG from 'shared/assets/icons/home.svg';
import AboutSVG from 'shared/assets/icons/about.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string,
}

export function SideBar({ className }: SideBarProps) {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };
    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    cls.SideBar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <Button
                variant={Variant.BACKGROUND_INVERTED}
                isSquare
                size={ButtonSize.L}
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapsedBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.links}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.link}
                >
                    <HomeSVG />
                    {!collapsed && t('main-page')}
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.link}
                >
                    <AboutSVG />
                    {!collapsed && t('about-page')}
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} />
            </div>
        </div>
    );
}
