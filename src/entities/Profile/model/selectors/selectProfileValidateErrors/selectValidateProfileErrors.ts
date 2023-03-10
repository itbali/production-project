import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile/getProfiled';

export const selectProfileValidateErrors = createSelector(
    [getProfile],
    (profileData) => profileData?.validateErrors,
);
