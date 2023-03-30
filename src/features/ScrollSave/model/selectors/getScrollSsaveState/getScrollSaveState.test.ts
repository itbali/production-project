import { StateSchema } from 'app/providers/storeProvider';
import { getScrollSaveState } from './getScrollSaveState';

describe('getScrollSaveState should', () => {
    const state: DeepPartial<StateSchema> = {
        scrollSave: {
            scroll: { '/articles': 100 },
        },
    };
    it(' return scrollSave state if provided', () => {
        expect(getScrollSaveState(state as StateSchema)).toEqual(state.scrollSave);
    });
    it(' return empty object if scrollSave state is not provided', () => {
        expect(getScrollSaveState({} as StateSchema)).toEqual({});
    });
});
