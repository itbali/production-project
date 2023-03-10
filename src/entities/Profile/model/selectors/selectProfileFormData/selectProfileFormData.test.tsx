import { StateSchema } from 'app/providers/storeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { selectProfileFormData } from './selectProfileFormData';

describe('selectProfileFormData should', () => {
    const state = {
        profile: {
            formData: {
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
        const result = selectProfileFormData(state as StateSchema);
        expect(result).toEqual(state.profile.formData);
    });
    it(' should return undefined with empty state', () => {
        const result = selectProfileFormData({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
