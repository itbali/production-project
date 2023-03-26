import { StateSchema } from 'app/providers/storeProvider';
import { selectArticlesPageView } from './selectArticlesPageView';

describe('selectArticlesPageView', () => {
    it('should return the view as list', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: 'list',
            },
        };
        expect(selectArticlesPageView(state as StateSchema)).toBe('list');
    });
    it('should return the view as grid', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: 'grid',
            },
        };
        expect(selectArticlesPageView(state as StateSchema)).toBe('grid');
    });
    it('should return undefined if the state is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: undefined,
        };
        expect(selectArticlesPageView(state as StateSchema)).toBeUndefined();
    });
});
