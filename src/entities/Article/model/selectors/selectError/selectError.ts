import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from '../getArticleDetailsData/getArticleDetails';

export const selectError = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.error,
);
