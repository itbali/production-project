import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from '../../selectors/getArticleDetails';

export const selectIsLoading = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.isLoading,
);
