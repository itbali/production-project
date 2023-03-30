import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import { ThunkConfig } from 'app/providers/storeProvider';

interface authData {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk< User, authData, ThunkConfig<string> >(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error('No data');
            }
            localStorage.setItem(LOCAL_STORAGE.user, JSON.stringify(response.data));
            dispatch(userActions.setUser(response.data));
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error?.message || error?.code || 'Unknown error');
            }
            return rejectWithValue(error as string || 'Unknown error');
        }
    },
);
