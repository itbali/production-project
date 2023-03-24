import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';
import { ArticlesPageSchema } from '../types/ArticlePageSchema';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';

const articlesPageAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});
const initialState = articlesPageAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: 'grid',
});

export const ArticlesPageSlice = createSlice({
    name: 'ArticlesPageSlice',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<'grid'|'list'>) => {
            state.view = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                articlesPageAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    selectAll: selectAllArticles,
} = articlesPageAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => state.articlesPage || articlesPageAdapter.getInitialState(),
);
export const {
    actions: ArticlesPageActions,
    reducer: ArticlesPageReducer,
} = ArticlesPageSlice;