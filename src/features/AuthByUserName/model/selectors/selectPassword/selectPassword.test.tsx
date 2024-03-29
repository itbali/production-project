import { StateSchema } from 'app/providers/storeProvider';
import { selectPassword } from '../selectPassword/selectPassword';

describe('selectPassword should', () => {
    it(' return password if provided', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
            },
        };
        const result = selectPassword(state as StateSchema);
        expect(result).toBe('password');
    });
    it(' return empty string if not provided', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: undefined,
            },
        };
        const result = selectPassword(state as StateSchema);
        expect(result).toBe('');
    });
    it(' work correct if state is undefined', () => {
        const result = selectPassword({} as StateSchema);
        expect(result).toBe('');
    });
});
