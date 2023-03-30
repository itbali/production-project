import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { ArticlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import {
    selectArticlesPageNumber,
} from '../../selectors/selectArticlesPageNumber/selectArticlesPageNumber';
import {
    selectArticlesPageView,
} from '../../selectors/selectArticlesPageView/selectArticlesPageView';
import {
    selectArticlesPageInited,
} from '../../selectors/selectArticlesPageInited/selectArticlesPageInited';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/initArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const view = selectArticlesPageView(getState());
        const inited = selectArticlesPageInited(getState());
        const page = selectArticlesPageNumber(getState());
        if (!view && !inited) {
            const viewFromLocalStorage = localStorage.getItem(LOCAL_STORAGE.articlesPageView);
            dispatch(fetchArticles({ page }));
            dispatch(ArticlesPageActions.setInited());
            if (viewFromLocalStorage) {
                dispatch(ArticlesPageActions.setView(viewFromLocalStorage as 'list' | 'grid'));
            }
        }
    },
);
