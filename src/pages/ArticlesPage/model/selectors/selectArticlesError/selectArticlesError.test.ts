import { StateSchema } from 'app/providers/storeProvider';
import { selectArticlesError } from '../selectArticlesError/selectArticlesError';

describe('selectArticlesError', () => {
    it('should return the error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        };
        expect(selectArticlesError(state as StateSchema)).toBe('error');
    });
    it('should return undefined if the state is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: undefined,
        };
        expect(selectArticlesError(state as StateSchema)).toBeUndefined();
    });
});
