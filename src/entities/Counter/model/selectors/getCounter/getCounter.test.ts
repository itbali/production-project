import { StateSchema } from 'app/providers/storeProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    const state:DeepPartial<StateSchema> = {
        counter: {
            value: 10,
        },
    };
    it(' should return correct value', () => {
        const result = getCounter(state as StateSchema);
        expect(result).toEqual({
            value: 10,
        });
    });
});
