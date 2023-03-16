import { StateSchema } from 'app/providers/storeProvider';
import { selectError } from './selectError';

describe('selectError should', () => {
    const state: DeepPartial<StateSchema> = {
        articleDetails: {
            error: 'error',
        },
    };
    it(' should return error if provided', () => {
        const result = selectError(state as StateSchema);
        expect(result).toEqual('error');
    });
    it(' should return undefined if not provided', () => {
        const result = selectError({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
