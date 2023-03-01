import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const selectUsername = createSelector([getLoginState], (loginState) => loginState?.username || '');
