import { TestAsyncThunk } from 'helpers/tests/testAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

describe('fetchProfileData should', () => {
    const data: Profile = {
        id: '1',
        first: 'John',
        age: 25,
        lastname: 'Doe',
        country: Country.USA,
        currency: Currency.EUR,
        city: 'New York',
        username: 'johndoe',
    };
    it(' success return data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();
        expect(thunk.api.put).toBeCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(data);
    });
    it(' fail return server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
    });
    it(' fail return validation error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { data: { ...data, first: '' } } });

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.FIRST_NAME_ERROR]);
    });
});
