import { StateSchema } from 'app/providers/storeProvider';
import { getAddCommentData } from './getAddCommentData';

describe('getAddCommentData should ', () => {
    const state: DeepPartial<StateSchema> = {
        addComment: {
            text: 'test',
            error: undefined,
        },
    };
    it('return slice if provided', () => {
        const result = getAddCommentData(state as StateSchema);
        expect(result).toEqual(state.addComment);
    });
    it('return undefined if slice is not provided', () => {
        const result = getAddCommentData({} as StateSchema);
        expect(result).toBeUndefined();
    });
    it('return undefined if slice is undefined', () => {
        const result = getAddCommentData({ addComment: undefined } as StateSchema);
        expect(result).toBeUndefined();
    });
});
