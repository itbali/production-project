import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Profile } from '../../types/profile';
import { selectProfileFormData } from '../../selectors/selectProfileFormData/selectProfileFormData';

interface authData {
    username: string,
    password: string,
}

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const formData = selectProfileFormData(getState());
        try {
            const response = await extra.api.put('/profile', formData);

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error?.message || error?.code || 'Unknown error');
            }
            return rejectWithValue('Unknown error');
        }
    },
);
