import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../types/EditableProfileCardTypes';
import { validateProfileData } from './validateProfileData';

jest.mock('shared/ui/ListBox', () => ({}));

describe('validateProfileData should', () => {
    const profile: Profile = {
        first: 'John',
        age: 25,
        lastname: 'Doe',
        country: Country.USA,
        currency: Currency.EUR,
        city: 'New York',
        username: 'johndoe',
    };

    it(' return empty array if no errors', () => {
        const result = validateProfileData(profile);
        expect(result).toHaveLength(0);
    });
    it(' return error if first name is empty', () => {
        const result = validateProfileData({ ...profile, first: '' });
        expect(result).toHaveLength(1);
        expect(result).toEqual([ValidateProfileErrors.FIRST_NAME_ERROR]);
    });
    it(' return error if last name is empty', () => {
        const result = validateProfileData({ ...profile, lastname: '' });
        expect(result).toHaveLength(1);
        expect(result).toEqual([ValidateProfileErrors.LAST_NAME_ERROR]);
    });
    it(' return error if age is empty', () => {
        const result = validateProfileData({ ...profile, age: undefined });
        expect(result).toHaveLength(1);
        expect(result).toEqual([ValidateProfileErrors.AGE_ERROR]);
    });
    it(' return error if age is less than 18', () => {
        const result = validateProfileData({ ...profile, age: 17 });
        expect(result).toHaveLength(1);
        expect(result).toEqual([ValidateProfileErrors.AGE_ERROR]);
    });
    it(' return error if age is more than 120', () => {
        const result = validateProfileData({
            ...profile,
            age: 121,
        });
        expect(result).toHaveLength(1);
        expect(result).toEqual([ValidateProfileErrors.AGE_ERROR]);
    });
    it(' return two errors if age is less than 18 and last name is empty', () => {
        const result = validateProfileData({
            ...profile,
            age: 17,
            lastname: '',
        });
        expect(result).toHaveLength(2);
        expect(result)
            .toEqual([ValidateProfileErrors.LAST_NAME_ERROR, ValidateProfileErrors.AGE_ERROR]);
    });
    it(' return all errors if all fields are empty', () => {
        const result = validateProfileData({
            ...profile,
            first: '',
            lastname: '',
            age: undefined,
        });
        expect(result).toHaveLength(3);
        expect(result)
            .toEqual([
                ValidateProfileErrors.FIRST_NAME_ERROR,
                ValidateProfileErrors.LAST_NAME_ERROR,
                ValidateProfileErrors.AGE_ERROR,
            ]);
    });
    it(' return no data error if no data', () => {
        const result = validateProfileData(undefined);
        expect(result).toHaveLength(1);
        expect(result).toEqual([ValidateProfileErrors.NO_DATA_ERROR]);
    });
});
