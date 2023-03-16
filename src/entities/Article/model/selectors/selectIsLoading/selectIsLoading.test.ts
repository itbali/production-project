import { StateSchema } from 'app/providers/storeProvider';
import { selectIsLoading } from './selectIsLoading';

describe('selectIsLoading should', () => {
    const state: DeepPartial<StateSchema> = {
        articleDetails: {
            isLoading: true,
        },
    };
    it(' should return article if provided', () => {
        const result = selectIsLoading(state as StateSchema);
        expect(result).toBeTruthy();
    });
    it(' should return undefined if not provided', () => {
        const result = selectIsLoading({} as StateSchema);
        expect(result).toBeFalsy();
    });
});
