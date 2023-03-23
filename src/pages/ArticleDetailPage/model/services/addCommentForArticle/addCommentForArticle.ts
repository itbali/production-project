import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    { articleId: string, text: string },
    ThunkConfig<string>
>(
    'articleDetailsPage/addCommentForArticle',
    async ({ articleId, text }, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const userData = getUserAuthData(getState());

        if (!text?.trim() || !articleId || !userData) {
            return rejectWithValue('invalid data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('server error');
        }
    },
);
