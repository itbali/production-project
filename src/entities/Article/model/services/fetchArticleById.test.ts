import { TestAsyncThunk } from 'helpers/tests/testAsyncThunk';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById should', () => {
    it(' success return data', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: mockArticle }));

        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toBeCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(mockArticle);
    });
    it(' fail return error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toEqual('rejected');
    });
    it(' return error if no article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: null }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toEqual('rejected');
    });
});
