import { TestAsyncThunk } from 'helpers/tests/testAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData should', () => {
    it(' success return data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: { first: 'John' } }));

        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toBeCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual({ first: 'John' });
    });
    it(' fail return error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toEqual('rejected');
    });
});
