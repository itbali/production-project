import { TestAsyncThunk } from 'helpers/tests/testAsyncThunk';
import { StateSchema } from 'app/providers/storeProvider';
import { fetchNextArticles } from './fetchNextArticles';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { ArticlesPageActions } from '../../slice/articlePageSlice';

jest.mock('../fetchArticles/fetchArticles');
jest.mock('../../slice/articlePageSlice');

describe('fetchNextArticles', () => {
    const state: DeepPartial<StateSchema> = {
        articlesPage: {
            page: 1,
            hasMore: true,
            isLoading: false,
        },
    };
    it('should call fetchArticles with page + 1 if not loading and hasMore', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, state);
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalled();
        expect(fetchArticles).toBeCalledWith({ page: 2 });
        expect(fetchArticles).toBeCalledTimes(1);
        expect(ArticlesPageActions.setPage).toBeCalledWith(2);
    });
    it('should not call fetchArticles if loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            ...state,
            articlesPage: {
                ...state.articlesPage,
                isLoading: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticles).not.toBeCalled();
    });
    it('should not call fetchArticles if not hasMore', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            ...state,
            articlesPage: {
                ...state.articlesPage,
                hasMore: false,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticles).not.toBeCalled();
    });
});
