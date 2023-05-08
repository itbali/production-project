import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { getProfile } from '../getProfile/getProfiled';

export const selectCanEdit = createSelector(
    [getUserAuthData, getProfile],
    (user, profile) => user?.id === profile?.data?.id,
);
