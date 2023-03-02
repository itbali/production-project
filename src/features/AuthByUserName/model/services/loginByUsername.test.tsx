import axios from 'axios';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'helpers/tests/testAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
const userData = { username: 'username', id: '1' };

describe('loginByUsername should', () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    it('should be called and return value', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'username', password: 'password' });
        expect(mockedAxios.post).toBeCalled();
        expect(thunk.dispatch).toBeCalledWith(userActions.setUser(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });
    it('should be called and return error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'username', password: 'password' });
        expect(mockedAxios.post).toBeCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
