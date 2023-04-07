import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';
import { ArticleDetailRecommendationsSchema } from '../types/ArticleDetailRecommendationsSchema';
import {
    fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});
const initialState = recommendationsAdapter.getInitialState<ArticleDetailRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
});

export const ArticleDetailRecommendationsSlice = createSlice({
    name: 'ArticleDetailRecommendationsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    selectAll: selectAllRecommendations,
} = recommendationsAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => (
        state.articleDetailsPage?.ArticleDetailRecommendations
        || recommendationsAdapter.getInitialState()
    ),
);
export const {
    reducer: ArticleDetailRecommendationsReducer,
} = ArticleDetailRecommendationsSlice;
