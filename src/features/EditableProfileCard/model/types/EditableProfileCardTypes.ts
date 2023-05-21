import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../consts/ValidateProfileErrors';

export interface ProfileSchema {
    data?: Profile,
    formData?: Profile,
    error?: string,
    validateErrors?: ValidateProfileErrors[],
    isLoading: boolean,
    readonly: boolean,
}
