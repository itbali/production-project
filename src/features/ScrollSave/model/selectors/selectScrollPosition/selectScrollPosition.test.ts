import { StateSchema } from 'app/providers/storeProvider';
import { selectScrollPosition, selectScrollPositionByPath } from './selectScrollPosition';

describe('selectScrollPosition should', () => {
    const state: DeepPartial<StateSchema> = {
        scrollSave: {
            scroll: { '/articles': 100 },
        },
    };
    it(' return scroll position if provided', () => {
        expect(selectScrollPosition(state as StateSchema)).toEqual(state.scrollSave?.scroll);
    });
    it(' return empty object if scroll position is not provided', () => {
        expect(selectScrollPosition({} as StateSchema)).toEqual({});
    });
});

describe('selectScrollPositionByPath should', () => {
    const state: DeepPartial<StateSchema> = {
        scrollSave: {
            scroll: { '/articles': 100 },
        },
    };
    it(' return scroll position if provided', () => {
        expect(selectScrollPositionByPath(state as StateSchema, '/articles')).toEqual(100);
    });
    it(' return 0 if scroll position is not provided', () => {
        expect(selectScrollPositionByPath(state as StateSchema, '/home')).toEqual(0);
    });
});
