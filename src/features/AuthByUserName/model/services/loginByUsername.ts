import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';

interface authData {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, authData, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error('No data');
            }
            localStorage.setItem(LOCAL_STORAGE.user, response.data);
            thunkAPI.dispatch(userActions.setUser(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    },
);
