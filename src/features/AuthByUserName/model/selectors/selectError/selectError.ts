import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { createSelector } from '@reduxjs/toolkit';

export const selectError = createSelector([getLoginState], (loginState) => loginState?.error || '');
