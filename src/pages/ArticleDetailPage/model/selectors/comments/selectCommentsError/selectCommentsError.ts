import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsComments } from '../getArticleDetailsComments/getArticleDetailsComments';

export const selectCommentsError = createSelector(
    getArticleDetailsComments,
    (articleDetailsComments) => articleDetailsComments?.error,
);
