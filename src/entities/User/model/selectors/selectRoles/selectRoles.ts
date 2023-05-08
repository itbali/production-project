import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '../getUserAuthData';

export const selectRoles = createSelector(getUserAuthData, (user) => user?.roles || []);
