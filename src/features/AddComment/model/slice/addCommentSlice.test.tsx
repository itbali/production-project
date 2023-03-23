import { AddCommentSchema } from 'features/AddComment';
import { addCommentReducer, addCommentSliceActions } from './addCommentSlice';

describe('addCommentSlice should', () => {
    const slice: AddCommentSchema = {
        text: '',
        error: undefined,
    };
    it(' enter text', () => {
        const result = addCommentReducer(slice, addCommentSliceActions.setText('test'));
        expect(result.text).toEqual('test');
    });
});
