import { TestAsyncThunk } from 'helpers/tests/testAsyncThunk';
import { StateSchema } from 'app/providers/storeProvider';
import { addCommentForArticle } from './addCommentForArticle';

describe('addCommentForArticle should', () => {
    const data = {
        articleId: '1',
        userId: '1',
        text: 'text',
        id: 'aaAFQF',
    };
    const state: DeepPartial<StateSchema> = {
        user: {
            authData: {
                id: '1',
            },
        },
    };
    test(' return comment if success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk({ text: 'text', articleId: '1' });
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('return error if not logged in', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ text: 'text', articleId: '1' });
        expect(thunk.api.post).not.toBeCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
    test('return error if invalid data', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 400 }));
        const result = await thunk.callThunk({ text: '', articleId: '1' });
        expect(thunk.api.post).not.toBeCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
