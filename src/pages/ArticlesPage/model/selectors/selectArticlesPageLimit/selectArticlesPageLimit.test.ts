import { StateSchema } from 'app/providers/storeProvider';
import { selectArticlesPageLimit } from './selectArticlesPageLimit';

describe('selectArticlesPageLimit', () => {
    it('should return the limit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 10,
            },
        };
        expect(selectArticlesPageLimit(state as StateSchema)).toBe(10);
    });
    it('should return undefined if the state is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: undefined,
        };
        expect(selectArticlesPageLimit(state as StateSchema)).toBeUndefined();
    });
});
