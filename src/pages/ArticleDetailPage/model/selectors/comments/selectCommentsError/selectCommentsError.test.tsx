import { StateSchema } from 'app/providers/storeProvider';
import { selectCommentsError } from './selectCommentsError';

describe('selectCommentsError should', () => {
    it(' return error if provided', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'error',
            },
        };
        const result = selectCommentsError(state as StateSchema);
        expect(result).toBe('error');
    });
    it(' return falsy if no errors', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: undefined,
            },
        };
        const result = selectCommentsError(state as StateSchema);
        expect(result).toBeFalsy();
    });
    it(' return falsy if not provided', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: undefined,
        };
        const result = selectCommentsError(state as StateSchema);
        expect(result).toBeFalsy();
    });
});
