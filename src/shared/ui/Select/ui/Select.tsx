import { classNames } from 'helpers/classNames';
import { ChangeEvent, useCallback, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: string,
    content: T,
}
interface SelectProps<T extends string> {
    className?: string,
    label?: string,
    options?: SelectOption<T>[],
    value?: T,
    onChange?: (value: T) => void,
    readonly?: boolean,
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;
    const onSelectChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T);
    }, [onChange]);
    const optionsList = useMemo(() => options?.map((option) => (
        <option key={option.value} value={option.value}>{option.content}</option>
    )), [options]);

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                disabled={readonly}
                className={classNames(cls.select, { [cls.disabled]: readonly }, [className])}
                onChange={onSelectChange}
                value={value}
            >
                {optionsList}
            </select>
        </div>
    );
};
