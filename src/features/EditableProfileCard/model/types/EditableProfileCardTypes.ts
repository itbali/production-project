import { Profile } from 'entities/Profile';

export enum ValidateProfileErrors {
    FIRST_NAME_ERROR = 'First name error',
    LAST_NAME_ERROR = 'Last name error',
    AGE_ERROR = 'Age error',
    NO_DATA_ERROR = 'No data error',
    SERVER_ERROR = 'Server error',
}

export interface ProfileSchema {
    data?: Profile,
    formData?: Profile,
    error?: string,
    validateErrors?: ValidateProfileErrors[],
    isLoading: boolean,
    readonly: boolean,
}
