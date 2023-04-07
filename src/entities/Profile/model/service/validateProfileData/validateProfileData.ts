import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile): ValidateProfileErrors[] => {
    const errors: ValidateProfileErrors[] = [];

    if (!profile) {
        errors.push(ValidateProfileErrors.NO_DATA_ERROR);
        return errors;
    }

    const { first, lastname, age } = profile;

    if (!first?.trim()) {
        errors.push(ValidateProfileErrors.FIRST_NAME_ERROR);
    }

    if (!lastname?.trim()) {
        errors.push(ValidateProfileErrors.LAST_NAME_ERROR);
    }

    if (!age || age < 18 || age > 120 || Number.isNaN(age)) {
        errors.push(ValidateProfileErrors.AGE_ERROR);
    }

    return errors;
};
