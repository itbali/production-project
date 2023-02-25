import { classNames } from 'helpers/classNames';
import React, {
    ChangeEvent, InputHTMLAttributes, memo, useCallback, useState,
} from 'react';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    className?: string,
    placeholder?:string,
    value?: string,
    onChange?: (value: string) => void,
    dataTestId?: string,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        placeholder,
        value,
        onChange,
        dataTestId,
    } = props;

    const [isSelected, setIsSelected] = useState(false);

    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    }, [onChange]);

    return (
        <div
            className={classNames(cls.Input, {}, [className])}
            data-testid={dataTestId}
        >
            {placeholder && (
                <span
                    role="tooltip"
                    className={classNames(cls.label, {
                        [cls.isSelected]: isSelected,
                        [cls.isInvisible]: !isSelected && value,
                    })}
                >
                    {placeholder}
                </span>
            )}
            <input
                type={props.type || 'text'}
                value={value}
                onChange={onInputChange}
                onBlur={() => setIsSelected(false)}
                onFocus={() => setIsSelected(true)}
                className={classNames(cls.input)}
            />
        </div>
    );
});
