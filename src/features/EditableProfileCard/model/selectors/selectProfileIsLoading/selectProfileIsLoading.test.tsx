import { StateSchema } from 'app/providers/storeProvider';
import { selectProfileIsLoading } from './SelectProfileIsLoading';

describe('selectProfileIsLoading should', () => {
    it(' return true if loading', () => {
        const state = {
            profile: {
                isLoading: true,
            },
        };
        const result = selectProfileIsLoading(state as StateSchema);
        expect(result).toBeTruthy();
    });
    it(' return false if not loading', () => {
        const state = {
            profile: {
                isLoading: false,
            },
        };
        const result = selectProfileIsLoading(state as StateSchema);
        expect(result).toBeFalsy();
    });
    it(' return falsy with empty state', () => {
        const result = selectProfileIsLoading({} as StateSchema);
        expect(result).toBeFalsy();
    });
});
