import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { selectProfileFormData } from '../../selectors/selectProfileFormData/selectProfileFormData';
import { validateProfileData } from '../validateProfileData/validateProfileData';

interface authData {
    username: string,
    password: string,
}

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const formData = selectProfileFormData(getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put('/profile', formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    },
);
