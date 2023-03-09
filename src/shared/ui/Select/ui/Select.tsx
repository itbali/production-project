import { classNames } from 'helpers/classNames';
import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

interface SelectOption {
    value: string,
    content: string,
}
interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOption[],
    value?: string,
    onChange?: (value?: string) => void,
    readonly?: boolean,
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;
    const onSelectChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
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
});
