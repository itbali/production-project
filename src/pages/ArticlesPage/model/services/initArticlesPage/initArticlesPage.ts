import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { ArticleSortView, ArticleType } from 'entities/Article';
import { ArticlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import {
    selectArticlesPageView,
} from '../../selectors/selectArticlesPageView/selectArticlesPageView';
import {
    selectArticlesPageInited,
} from '../../selectors/selectArticlesPageInited/selectArticlesPageInited';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>>(
        'articles/initArticlesPage',
        async (searchParams, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const view = selectArticlesPageView(getState());
            const inited = selectArticlesPageInited(getState());
            if (!view && !inited) {
                const viewFromLocalStorage = localStorage.getItem(LOCAL_STORAGE.articlesPageView);
                const sortBy = searchParams.get('sortBy');
                const search = searchParams.get('search');
                const order = searchParams.get('order');
                const type = searchParams.get('type');

                if (sortBy) {
                    dispatch(ArticlesPageActions.setSort(sortBy as ArticleSortView));
                }
                if (search) {
                    dispatch(ArticlesPageActions.setSearch(search));
                }
                if (order) {
                    dispatch(ArticlesPageActions.setOrder(order as 'asc' | 'desc'));
                }
                if (type) {
                    dispatch(ArticlesPageActions.setTabValue(type as ArticleType));
                }
                dispatch(fetchArticles({}));
                dispatch(ArticlesPageActions.setInited());
                if (viewFromLocalStorage) {
                    dispatch(ArticlesPageActions.setView(viewFromLocalStorage as 'list' | 'grid'));
                }
            }
        },
    );
