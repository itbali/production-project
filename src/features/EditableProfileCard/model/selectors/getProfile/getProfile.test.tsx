import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { StateSchema } from 'app/providers/storeProvider';
import { Profile } from '../../../../../entities/Profile/model/types/profile';
import { getProfile } from './getProfiled';

describe('getProfile should', () => {
    const profile: Profile = {
        first: 'John',
        age: 25,
        lastname: 'Doe',
        country: Country.USA,
        currency: Currency.EUR,
        city: 'New York',
        username: 'johndoe',
    };
    it(' return profile', () => {
        const state = {
            profile: {
                formData: profile,
            },
        };
        const result = getProfile(state as StateSchema);
        expect(result?.formData).toEqual(profile);
    });
    it(' return undefined with empty state', () => {
        const state = {};
        const result = getProfile(state as StateSchema);
        expect(result).toBeUndefined();
    });
});
