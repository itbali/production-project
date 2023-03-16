import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from '../getArticleDetailsData/getArticleDetails';

export const selectIsLoading = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.isLoading,
);
