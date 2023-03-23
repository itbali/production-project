import { StateSchema } from 'app/providers/storeProvider';
import { selectAddCommentError } from './selectAddCommentError';

describe('selectAddCommentError should ', () => {
    it('return error if provided', () => {
        const state: DeepPartial<StateSchema> = {
            addComment: {
                error: 'error',
            },
        };
        const result = selectAddCommentError(state as StateSchema);
        expect(result).toBe('error');
    });
    it('return undefined if error is not provided', () => {
        const state: DeepPartial<StateSchema> = {
            addComment: {
                error: undefined,
            },
        };
        const result = selectAddCommentError(state as StateSchema);
        expect(result).toBeUndefined();
    });
    it('return undefined if slice is not provided', () => {
        const result = selectAddCommentError({} as StateSchema);
        expect(result).toBeUndefined();
    });
    it('return undefined if slice is undefined', () => {
        const result = selectAddCommentError({ addComment: undefined } as StateSchema);
        expect(result).toBeUndefined();
    });
});
