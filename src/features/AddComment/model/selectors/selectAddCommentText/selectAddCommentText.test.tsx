import { StateSchema } from 'app/providers/storeProvider';
import { selectAddCommentText } from './selectAddCommentText';

describe('selectAddCommentText should ', () => {
    it('return text if provided', () => {
        const state: DeepPartial<StateSchema> = {
            addComment: {
                text: 'test',
            },
        };
        const result = selectAddCommentText(state as StateSchema);
        expect(result).toBe('test');
    });
    it('return undefined if text is not provided', () => {
        const state: DeepPartial<StateSchema> = {
            addComment: {
                text: undefined,
            },
        };
        const result = selectAddCommentText(state as StateSchema);
        expect(result).toBeFalsy();
    });
    it('return undefined if slice is not provided', () => {
        const result = selectAddCommentText({} as StateSchema);
        expect(result).toBeFalsy();
    });
});
