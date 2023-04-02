import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailCommentsSchema } from '../types/ArticleDetailCommentsSchema';
import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});
const initialState = commentsAdapter.getInitialState<ArticleDetailCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
});

export const ArticleDetailCommentsSlice = createSlice({
    name: 'ArticleDetailCommentsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    selectAll: selectAllComments,
} = commentsAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => (
        state.articleDetailsPage?.articleDetailsComments || commentsAdapter.getInitialState()
    ),
);
export const {
    reducer: ArticleDetailCommentsReducer,
} = ArticleDetailCommentsSlice;
