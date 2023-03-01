import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = createSelector(
    [getLoginState],
    (loginState) => loginState?.isLoading || false,
);
