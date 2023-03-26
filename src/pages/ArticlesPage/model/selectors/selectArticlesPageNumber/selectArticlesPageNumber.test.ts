import { StateSchema } from 'app/providers/storeProvider';
import { selectArticlesPageNumber } from './selectArticlesPageNumber';

describe('selectArticlesPageNumber', () => {
    it('should return the page number', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: 1,
            },
        };
        expect(selectArticlesPageNumber(state as StateSchema)).toBe(1);
    });
    it('should return 1 even if the state is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: undefined,
        };
        expect(selectArticlesPageNumber(state as StateSchema)).toBe(1);
    });
});
