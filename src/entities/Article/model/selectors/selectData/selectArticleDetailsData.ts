import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from '../getArticleDetailsData/getArticleDetails';

export const selectArticleDetailsData = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.data,
);
