import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsComments } from '../getArticleDetailsComments/getArticleDetailsComments';

export const selectAreCommentsLoading = createSelector(
    getArticleDetailsComments,
    (articleDetailsComments) => articleDetailsComments?.isLoading,
);
