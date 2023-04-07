import { CounterSchema } from '../types/counterSchema';
import { counterSlice } from './counterSlice';

describe('counterSlice', () => {
    const { actions, reducer } = counterSlice;
    const initialState: CounterSchema = {
        value: 10,
    };
    it(' should decreament value ', () => {
        const result = reducer(initialState, actions.decrement());
        expect(result).toEqual({
            value: 9,
        });
    });
    it(' should increament value', () => {
        const result = reducer(initialState, actions.increment());
        expect(result).toEqual({
            value: 11,
        });
    });
    it(' should work with empty state', () => {
        const result = reducer(undefined, actions.increment());
        expect(result).toEqual({
            value: 1,
        });
    });
});
