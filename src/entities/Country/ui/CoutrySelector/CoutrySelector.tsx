import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { HListBox } from 'shared/ui/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectorProps {
    className?: string,
    value?: Country,
    onChange?: (value?: Country) => void,
    readonly?: boolean,
}

const countryOptions = Object.values(Country).map((country) => ({
    value: country,
    content: country,
}));

export const CountrySelector = (props: CountrySelectorProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;
    const { t } = useTranslation();
    const onSelectChange = useCallback((value?: string) => {
        if (onChange) {
            onChange(value as Country);
        }
    }, [onChange]);

    return (
        <HListBox
            label={t('country')}
            items={countryOptions}
            value={value}
            onChange={onSelectChange}
            className={className}
            defaultValue={countryOptions[0].value}
            disabled={readonly}
            direction="up right"
        />
    );
};
