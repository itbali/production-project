import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from '../../selectors/getArticleDetails';

export const selectData = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.data,
);
