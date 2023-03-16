import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from '../getArticleDetailsData/getArticleDetails';

export const selectData = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.data,
);
