import { StateSchema } from 'app/providers/storeProvider';
import { selectAreCommentsLoading } from './selectAreCommentsLoading';

describe('selectAreCommentsLoading should', () => {
    it(' return true if provided', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
            },
        };
        const result = selectAreCommentsLoading(state as StateSchema);
        expect(result).toBeTruthy();
    });
    it(' return false if provided', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: false,
            },
        };
        const result = selectAreCommentsLoading(state as StateSchema);
        expect(result).toBeFalsy();
    });
    it(' return false if not provided', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: undefined,
        };
        const result = selectAreCommentsLoading(state as StateSchema);
        expect(result).toBeFalsy();
    });
});
