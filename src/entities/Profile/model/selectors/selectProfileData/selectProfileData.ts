import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile/getProfiled';

export const selectProfileData = createSelector(getProfile, (profileData) => profileData?.data);
