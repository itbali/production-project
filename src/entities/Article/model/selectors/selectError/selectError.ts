import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from '../../selectors/getArticleDetails';

export const selectError = createSelector(
    getArticleDetails,
    (articleDetails) => articleDetails?.error,
);
