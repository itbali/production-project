import { classNames } from 'helpers/classNames';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string,
    value?: Currency,
    onChange?: (value?: Currency) => void,
    readonly?: boolean,
}

const currencyOptions = Object.values(Currency).map((currency) => ({
    value: currency,
    content: currency,
}));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();
    const onSelectChange = useCallback((value?: string) => {
        if (onChange) {
            onChange(value as Currency);
        }
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            value={value}
            onChange={onSelectChange}
            label={t('currency')}
            options={currencyOptions}
            className={classNames('', {}, [className])}
        />
    );
});
