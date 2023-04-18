import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from 'helpers/classNames';
import { DropDownDirection } from 'shared/types/ui';
import { AppLink } from '../../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropDownItem {
    content: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    href?: string,
}

interface DropdownProps {
    className?: string,
    items: DropDownItem[],
    trigger: ReactNode,
    direction?: DropDownDirection,
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className, trigger, items, direction = 'down left',
    } = props;

    const menuMods = {
        [cls.optionsUpRight]: direction === 'up right',
        [cls.optionsUpLeft]: direction === 'up left',
        [cls.optionsDownRight]: direction === 'down right',
        [cls.optionsDownLeft]: direction === 'down left',
    };

    return (
        <Menu
            as="menu"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button className={cls.menuButton}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menuItems, menuMods)}>
                {items.map((item) => {
                    const content = ({ active }: { active:boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(
                                cls.menuItem,
                                {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                },
                            )}
                        >
                            {item.content}
                        </button>
                    );
                    return item.href
                        ? (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={JSON.stringify(item.content)}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        )
                        : (
                            <Menu.Item
                                as={Fragment}
                                key={JSON.stringify(item.content)}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                })}
            </Menu.Items>
        </Menu>
    );
});
