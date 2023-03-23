import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { selectProfileData } from '../../selectors/selectProfileData/selectProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const data = selectProfileData(getState());
        const errors = validateProfileData(data);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put(`/profile/${data?.id}`, data);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    },
);
