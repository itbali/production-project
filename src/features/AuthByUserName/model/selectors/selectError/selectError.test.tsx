import { selectError } from 'features/AuthByUserName/model/selectors/selectError/selectError';
import { StateSchema } from 'app/providers/storeProvider';

describe('selectError should', () => {
    it('return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        const result = selectError(state as StateSchema);
        expect(result)
            .toBe('error');
    });
    it('return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: undefined,
            },
        };
        const result = selectError(state as StateSchema);
        expect(result)
            .toBe(undefined);
    });
    it(' work correct if state is undefined', () => {
        const result = selectError({} as StateSchema);
        expect(result)
            .toBe(undefined);
    });
});
