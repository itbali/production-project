import { StateSchema } from 'app/providers/storeProvider';
import { selectIsLoadingArticles } from './selectIsLoadingArticles';

describe('selectIsLoadingArticles', () => {
    it('should return true if the articles are loading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(selectIsLoadingArticles(state as StateSchema)).toBe(true);
    });
    it('should return false if the articles are not loading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
            },
        };
        expect(selectIsLoadingArticles(state as StateSchema)).toBe(false);
    });
    it('should return falsy if the state is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: undefined,
        };
        expect(selectIsLoadingArticles(state as StateSchema)).toBeFalsy();
    });
});
