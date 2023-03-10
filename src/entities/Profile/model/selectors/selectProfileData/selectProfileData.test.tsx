import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/storeProvider';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData should', () => {
    const state = {
        profile: {
            data: {
                first: 'John',
                age: 25,
                lastname: 'Doe',
                country: Country.USA,
                currency: Currency.EUR,
                city: 'New York',
                username: 'johndoe',
            },
        },
    };
    it(' should return data', () => {
        const result = selectProfileData(state as StateSchema);
        expect(result).toEqual(state.profile.data);
    });
    it(' should return undefined with empty state', () => {
        const result = selectProfileData({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
