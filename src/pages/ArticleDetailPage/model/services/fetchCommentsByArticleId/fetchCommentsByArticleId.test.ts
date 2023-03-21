import { TestAsyncThunk } from 'helpers/tests/testAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchProfileData should', () => {
    const comment1 = { id: '1', text: 'text', user: { id: '1', username: 'username' } };
    it(' success return data', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: [comment1] }));

        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toBeCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual([comment1]);
    });
    it(' fail return error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toEqual('rejected');
    });
});
