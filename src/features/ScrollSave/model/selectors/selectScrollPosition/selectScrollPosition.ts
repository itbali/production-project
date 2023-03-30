import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getScrollSaveState } from '../getScrollSsaveState/getScrollSaveState';

export const selectScrollPosition = createSelector(
    getScrollSaveState,
    (state) => state?.scroll || {},
);
export const selectScrollPositionByPath = createSelector(
    selectScrollPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
