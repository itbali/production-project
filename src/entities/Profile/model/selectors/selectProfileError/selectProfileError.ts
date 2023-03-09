import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile/getProfiled';

export const selectProfileError = createSelector(getProfile, (profileData) => profileData?.error);
