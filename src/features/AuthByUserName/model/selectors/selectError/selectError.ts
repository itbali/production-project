import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const selectError = createSelector([getLoginState], (loginState) => loginState?.error);
