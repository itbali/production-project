import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const profile = {
    first: 'John',
    age: 25,
    lastname: 'Doe',
    country: Country.USA,
    currency: Currency.EUR,
    city: 'New York',
    username: 'johndoe',
};
const slice: ProfileSchema = {
    data: profile,
    formData: profile,
    validateErrors: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
};
describe('profileSlice should', () => {
    it(' set readonly to false', () => {
        const result = profileReducer(slice, profileActions.setReadOnly(false));
        expect(result.readonly).toBe(false);
    });
    it(' cancel edit', () => {
        const result = profileReducer({
            ...slice,
            formData: {
                ...slice.formData,
                first: 'Alex',
            },
            readonly: false,
        }, profileActions.cancelEdit());
        expect(result.readonly).toBe(true);
        expect(result.formData).toEqual(slice.data);
    });
    it(' update formData first name', () => {
        const result = profileReducer(slice, profileActions.updateProfile({ first: 'Alex' }));
        expect(result.data?.first).toBe('Alex');
    });

    it(' isLoading to be true and errors should be undefined', () => {
        const result = profileReducer({
            ...slice,
            isLoading: false,
            validateErrors: [ValidateProfileErrors.FIRST_NAME_ERROR],
        }, updateProfileData.pending);
        expect(result.isLoading).toBe(true);
        expect(result.validateErrors).toBeUndefined();
    });

    it(' data should be set after fulfilled', () => {
        const result = profileReducer({
            ...slice,
            data: undefined,
            formData: undefined,
            isLoading: true,
            readonly: false,
        }, updateProfileData.fulfilled(profile, ''));
        expect(result.data).toEqual(profile);
        expect(result.formData).toEqual(profile);
        expect(result.isLoading).toBe(false);
        expect(result.readonly).toBe(true);
    });
});
