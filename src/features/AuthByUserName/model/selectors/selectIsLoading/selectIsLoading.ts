import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const selectIsLoading = createSelector(
    [getLoginState],
    (loginState) => Boolean(loginState?.isLoading),
);
