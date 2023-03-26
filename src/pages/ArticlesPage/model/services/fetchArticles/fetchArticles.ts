import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';
import {
    selectArticlesPageLimit,
} from '../../selectors/selectArticlesPageLimit/selectArticlesPageLimit';

interface FetchArticlesParams {
    page: number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesParams, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (params, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const { page } = params;
        const limit = selectArticlesPageLimit(getState());
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
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
