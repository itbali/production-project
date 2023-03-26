import { StateSchema } from 'app/providers/storeProvider';
import { selectArticlesHasMore } from './selectArticlesHasMore';

describe('selectArticlesHasMore', () => {
    it('should return the hasMore', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                hasMore: true,
            },
        };
        expect(selectArticlesHasMore(state as StateSchema)).toBe(true);
    });
    it('should return undefined if the state is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: undefined,
        };
        expect(selectArticlesHasMore(state as StateSchema)).toBeUndefined();
    });
});
