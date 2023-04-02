import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articles/fetchArticleRecommendations',
    async (params, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
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
