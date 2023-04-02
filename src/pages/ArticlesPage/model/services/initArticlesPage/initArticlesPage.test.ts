import { StateSchema } from 'app/providers/storeProvider';
import { TestAsyncThunk } from 'helpers/tests/testAsyncThunk';
import { fetchArticles } from '../../../model/services/fetchArticles/fetchArticles';
import { ArticlesPageActions } from '../../../model/slice/articlePageSlice';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../../services/fetchArticles/fetchArticles');
jest.mock('../../../model/slice/articlePageSlice', () => ({
    ArticlesPageActions: {
        setInited: jest.fn(),
        setPage: jest.fn(),
    },
}));
const searchParams = new URLSearchParams();
describe('initArticlesPage', () => {
    const state: DeepPartial<StateSchema> = {
        articlesPage: {
            _inited: false,
            hasMore: true,
            isLoading: false,
        },
    };
    it('should call init actions if _inited is false', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, state);
        await thunk.callThunk(searchParams);

        expect(fetchArticles).toBeCalledTimes(1);
        expect(ArticlesPageActions.setInited).toBeCalledTimes(1);
    });
    it('should not call init actions if _inited is true', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            ...state,
            articlesPage: {
                ...state.articlesPage,
                _inited: true,
            },
        });
        await thunk.callThunk(searchParams);

        expect(fetchArticles).not.toBeCalled();
        expect(ArticlesPageActions.setInited).not.toBeCalled();
    });
    it('should not call init actions if view is set', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            ...state,
            articlesPage: {
                ...state.articlesPage,
                view: 'list',
            },
        });
        await thunk.callThunk(searchParams);

        expect(fetchArticles).not.toBeCalled();
        expect(ArticlesPageActions.setInited).not.toBeCalled();
    });
});
