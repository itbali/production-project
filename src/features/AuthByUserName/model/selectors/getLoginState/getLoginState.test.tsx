import { StateSchema } from 'app/providers/storeProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState should', () => {
    const state: DeepPartial<StateSchema> = {
        loginForm: {
            username: 'username',
            password: 'password',
            error: 'error',
            isLoading: true,
        },
    };
    it(' return login data from state if provided', () => {
        const result = getLoginState(state as StateSchema);
        expect(result).toEqual(state.loginForm);
    });
    it(' return undefined if state is undefined', () => {
        const result = getLoginState({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
