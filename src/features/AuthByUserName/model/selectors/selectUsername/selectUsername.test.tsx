import { StateSchema } from 'app/providers/storeProvider';
import { selectUsername } from '../selectUsername/selectUsername';

describe('selectUsername should', () => {
    it(' return username if provided', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        const result = selectUsername(state as StateSchema);
        expect(result).toBe('username');
    });
    it(' return empty string if not provided', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username: undefined,
            },
        };
        const result = selectUsername(state as StateSchema);
        expect(result).toBe('');
    });
    it(' work correct if state is undefined', () => {
        const result = selectUsername({} as StateSchema);
        expect(result).toBe('');
    });
});
