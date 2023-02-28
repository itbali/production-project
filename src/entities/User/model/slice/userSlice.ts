import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import { User, UserSchema } from '../types/user';

const initialState:UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initUser: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE.user);
            state.authData = user ? JSON.parse(user) : undefined;
        },
        logoutUser: (state) => {
            localStorage.removeItem(LOCAL_STORAGE.user);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
