import { StateSchema } from 'app/providers/storeProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError should', () => {
    const state = {
        profile: {
            error: 'error',
        },
    };
    it('', () => {
        const result = selectProfileError(state as StateSchema);
        expect(result).toBe('error');
    });
    it(' should return undefined with empty state', () => {
        const result = selectProfileError({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
