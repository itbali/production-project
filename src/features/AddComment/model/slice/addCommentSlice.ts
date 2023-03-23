import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentSchema } from '../types/addComment';

const initialState: AddCommentSchema = {
    text: '',
    error: undefined,
};

export const addCommentSlice = createSlice({
    name: 'addCommentSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const {
    actions: addCommentSliceActions,
    reducer: addCommentReducer,
} = addCommentSlice;
