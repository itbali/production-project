import { classNames } from 'helpers/classNames/ui/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, Variant } from 'shared/ui/Button';
import cls from './SideBar.module.scss';
import { SideBarItems } from '../../model/item';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SideBarProps {
    className?: string,
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(() => SideBarItems.map((item) => (
        <SideBarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [collapsed]);

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
                {itemsList}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} />
            </div>
        </div>
    );
});
