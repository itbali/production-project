import { classNames } from 'helpers/classNames';
import { Select } from 'shared/ui/Select';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
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
        <Select
            label={t('country')}
            readonly={readonly}
            value={value}
            options={countryOptions}
            onChange={onSelectChange}
            className={classNames('', {}, [className])}
        />
    );
};
