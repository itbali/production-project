import { StateSchema } from 'app/providers/storeProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    const state:DeepPartial<StateSchema> = {
        counter: {
            value: 10,
        },
    };
    it(' should return correct value', () => {
        const result = getCounterValue(state as StateSchema);
        expect(result).toBe(10);
    });
});
