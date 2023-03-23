import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileErrors {
    FIRST_NAME_ERROR = 'First name error',
    LAST_NAME_ERROR = 'Last name error',
    AGE_ERROR = 'Age error',
    NO_DATA_ERROR = 'No data error',
    SERVER_ERROR = 'Server error',
}

export interface Profile {
    id?: string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile,
    formData?: Profile,
    error?: string,
    validateErrors?: ValidateProfileErrors[],
    isLoading: boolean,
    readonly: boolean,
}
