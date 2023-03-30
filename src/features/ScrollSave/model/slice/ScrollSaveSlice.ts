import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const ScrollSaveSlice = createSlice({
    name: 'ScrollSave',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{path: string, position: number}>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const {
    actions: ScrollSaveActions,
    reducer: ScrollSaveReducer,
} = ScrollSaveSlice;
