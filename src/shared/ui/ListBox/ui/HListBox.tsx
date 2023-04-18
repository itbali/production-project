import { memo, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from 'helpers/classNames';
import cls from './HListBox.module.scss';
import { Button, Variant } from '../../Button';
import { DropDownDirection } from '../../../types/ui';

interface ListBoxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean,
}

interface ListBoxProps {
    className?: string,
    value?: string,
    defaultValue?: string,
    onChange: <T extends string>(value: T) => void,
    items: ListBoxItem[],
    disabled?: boolean,
    direction?: DropDownDirection,
    label?: string,
}

export const HListBox = memo((props: ListBoxProps) => {
    const {
        className,
        value,
        defaultValue,
        onChange,
        items,
        disabled,
        direction = 'down left',
        label,
    } = props;

    const optionsMods = {
        [cls.optionsUpRight]: direction === 'up right',
        [cls.optionsUpLeft]: direction === 'up left',
        [cls.optionsBottomRight]: direction === 'down right',
        [cls.optionsBottomLeft]: direction === 'down left',
    };

    return (
        <Listbox
            disabled={disabled}
            as="div"
            className={classNames(cls.HListBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <Listbox.Button className={cls.trigger}>
                {label && !disabled && <span className={cls.label}>{label}</span>}
                <Button disabled={disabled} variant={Variant.OUTLINE}>
                    {value ?? defaultValue}
                </Button>
            </Listbox.Button>
            <Listbox.Options className={classNames(cls.options, optionsMods)}>
                {items.map((item) => (
                    <Listbox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.selected]: selected,
                                        [cls.disabled]: item.disabled,
                                    },
                                )}
                            >
                                {item.value}
                            </li>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
});
