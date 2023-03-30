import { ScrollSaveActions, ScrollSaveReducer } from './ScrollSaveSlice';

describe('ScrollSaveSlice should', () => {
    it(' set scroll position', () => {
        const path = '/articles';
        const position = 100;
        const state = ScrollSaveReducer(
            undefined,
            ScrollSaveActions.setScrollPosition({ path, position }),
        );
        expect(state.scroll[path]).toEqual(position);
    });
    it(' set scroll position for different paths', () => {
        const path1 = '/articles';
        const position1 = 100;
        const path2 = '/home';
        const position2 = 200;
        const state = ScrollSaveReducer(
            ScrollSaveReducer(
                undefined,
                ScrollSaveActions.setScrollPosition({ path: path1, position: position1 }),
            ),
            ScrollSaveActions.setScrollPosition({ path: path2, position: position2 }),
        );
        expect(state.scroll[path1]).toEqual(position1);
        expect(state.scroll[path2]).toEqual(position2);
    });
});
