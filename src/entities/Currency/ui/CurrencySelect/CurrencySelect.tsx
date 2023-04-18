import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { HListBox } from 'shared/ui/ListBox';
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
        <HListBox
            label={t('currency')}
            items={currencyOptions}
            value={value}
            onChange={onSelectChange}
            className={className}
            defaultValue={currencyOptions[0].value}
            disabled={readonly}
            direction="up right"
        />
    );
});
