import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { ArticlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import { selectArticlesHasMore } from '../../selectors/selectArticlesHasMore/selectArticlesHasMore';
import {
    selectArticlesPageNumber,
} from '../../selectors/selectArticlesPageNumber/selectArticlesPageNumber';
import {
    selectIsLoadingArticles,
} from '../../selectors/selectIsLoadingArticles/selectIsLoadingArticles';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/fetchNextArticles',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const hasMore = selectArticlesHasMore(getState());
        const isLoading = selectIsLoadingArticles(getState());
        const page = selectArticlesPageNumber(getState());

        if (!isLoading && hasMore) {
            dispatch(ArticlesPageActions.setPage(page + 1));
            dispatch(fetchArticles({}));
        }
    },
);
