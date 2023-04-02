import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'helpers/url/addQueryParams/addQueryParams';
import {
    selectArticlesSortOrder,
} from '../../selectors/selectArticlesSortOrder/selectArticlesSortOrder';
import { selectArticlesSortBy } from '../../selectors/selectArticlesSortBy/selectArticlesSortBy';
import {
    selectArticlesPageSearchValue,
} from '../../selectors/selectArticlesPageSearchValue/selectArticlesPageSearchValue';
import {
    selectArticlesPageNumber,
} from '../../selectors/selectArticlesPageNumber/selectArticlesPageNumber';
import {
    selectArticlesPageLimit,
} from '../../selectors/selectArticlesPageLimit/selectArticlesPageLimit';
import {
    selectArticlesPageTabValue,
} from '../../selectors/selectArticlesPageTabValue/selectArticlesPageTabValue';

interface FetchArticlesParams {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesParams, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (params, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const limit = selectArticlesPageLimit(getState());
        const selectOrder = selectArticlesSortOrder(getState());
        const selectSortBy = selectArticlesSortBy(getState());
        const articleSearchValue = selectArticlesPageSearchValue(getState());
        const page = selectArticlesPageNumber(getState());
        const type = selectArticlesPageTabValue(getState());

        try {
            addQueryParams({
                sortBy: selectSortBy, order: selectOrder, search: articleSearchValue, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: selectSortBy,
                    _order: selectOrder,
                    q: articleSearchValue,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error('No data');
            }

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error?.message || error?.code || 'Unknown error');
            }
            return rejectWithValue('Unknown error');
        }
    },
);
