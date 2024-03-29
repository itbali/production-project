import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from '../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>(
    'articles/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            if (!articleId) throw new Error('No articleId');

            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
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
