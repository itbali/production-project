import { classNames } from 'helpers/classNames/ui/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, Variant } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import cls from './SideBar.module.scss';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SideBarProps {
    className?: string,
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const sideBarItems = useSelector(getSideBarItems);
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(() => sideBarItems.map((item) => (
        <SideBarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [collapsed, sideBarItems]);

    return (
        <menu
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

            <VStack align="start" gap={12}>
                {itemsList}
            </VStack>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} />
            </div>
        </menu>
    );
});
