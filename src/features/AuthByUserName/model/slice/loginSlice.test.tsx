import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';
import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';

describe('loginSlice should', () => {
    test(' set username', () => {
        const state : DeepPartial<LoginSchema> = {
            username: '',
        };
        const result = loginReducer(state as LoginSchema, loginActions.setUsername('username'));
        expect(result.username).toBe('username');
    });
    test(' set password', () => {
        const state : DeepPartial<LoginSchema> = {
            password: '',
        };
        const result = loginReducer(state as LoginSchema, loginActions.setPassword('password'));
        expect(result.password).toBe('password');
    });
    test(' set isLoading', () => {
        const state : DeepPartial<LoginSchema> = {
            isLoading: false,
        };
        const result = loginReducer(state as LoginSchema, loginByUsername.pending('', { username: '', password: '' }));
        expect(result.isLoading).toBe(true);
    });
});
