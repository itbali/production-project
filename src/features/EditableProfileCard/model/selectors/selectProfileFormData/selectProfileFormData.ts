import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile/getProfiled';

export const selectProfileFormData = createSelector(
    [getProfile],
    (profileData) => profileData?.formData,
);
