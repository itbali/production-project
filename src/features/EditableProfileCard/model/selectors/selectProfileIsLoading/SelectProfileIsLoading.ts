import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile/getProfiled';

export const selectProfileIsLoading = createSelector(
    [getProfile],
    (profileData) => profileData?.isLoading,
);
