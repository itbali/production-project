import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile/getProfiled';

export const selectProfileReadOnly = createSelector(
    [getProfile],
    (profileData) => profileData?.readonly,
);
