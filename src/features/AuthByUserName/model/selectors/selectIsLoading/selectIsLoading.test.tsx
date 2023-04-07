import { StateSchema } from 'app/providers/storeProvider';
import { selectIsLoading } from '../selectIsLoading/selectIsLoading';

describe('selectIsLoading should', () => {
    it('return true if isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        const result = selectIsLoading(state as StateSchema);
        expect(result).toBe(true);
    });
    it('return false if not isLoading ', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        const result = selectIsLoading(state as StateSchema);
        expect(result).toBe(false);
    });
    it('return false if isLoading is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: undefined,
            },
        };
        const result = selectIsLoading(state as StateSchema);
        expect(result).toBe(false);
    });
    it(' work correct if state is undefined', () => {
        const result = selectIsLoading({} as StateSchema);
        expect(result).toBe(false);
    });
});
