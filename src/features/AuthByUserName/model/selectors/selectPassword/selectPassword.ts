import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const selectPassword = createSelector([getLoginState], (loginState) => loginState.password);
