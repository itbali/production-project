import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article, ArticleSortView, ArticleType } from 'entities/Article';
import { ArticlesPageSchema } from '../../model/types/articlePageSchema';
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
    hasMore: true,
    page: 1,
    limit: 9,
    _inited: false,
    order: 'asc',
    sort: ArticleSortView.CREATED_AT,
    search: '',
    tabValue: ArticleType.ALL,
});

export const ArticlesPageSlice = createSlice({
    name: 'ArticlesPageSlice',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<'grid'|'list'>) => {
            state.view = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setOrder: (state, action: PayloadAction<'asc'|'desc'>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortView>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setInited: (state) => {
            state._inited = true;
        },
        setTabValue: (state, action: PayloadAction<ArticleType>) => {
            state.tabValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesPageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                articlesPageAdapter.upsertMany(state, action.payload);
                state.hasMore = action.payload.length === state.limit;
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
