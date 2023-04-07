import { StateSchema } from 'app/providers/storeProvider';
import { ValidateProfileErrors } from '../../types/profile';
import { selectProfileValidateErrors } from './selectValidateProfileErrors';

describe('selectProfileValidateErrors should', () => {
    it(' return undefined if no errors', () => {
        const state = {
            profile: {
                validateErrors: undefined,
            },
        };
        const result = selectProfileValidateErrors(state as StateSchema);
        expect(result).toBeUndefined();
    });
    it(' return error if error', () => {
        const state = {
            profile: {
                validateErrors: [ValidateProfileErrors.FIRST_NAME_ERROR],
            },
        };
        const result = selectProfileValidateErrors(state as StateSchema);
        expect(result).toEqual([ValidateProfileErrors.FIRST_NAME_ERROR]);
        expect(result).toHaveLength(1);
    });
    it(' return all errors in array if multiple errors', () => {
        const state = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.FIRST_NAME_ERROR,
                    ValidateProfileErrors.LAST_NAME_ERROR,
                ],
            },
        };
        const result = selectProfileValidateErrors(state as StateSchema);
        expect(result).toEqual([
            ValidateProfileErrors.FIRST_NAME_ERROR,
            ValidateProfileErrors.LAST_NAME_ERROR,
        ]);
        expect(result).toHaveLength(2);
    });
    it(' return undefined with empty state', () => {
        const result = selectProfileValidateErrors({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
