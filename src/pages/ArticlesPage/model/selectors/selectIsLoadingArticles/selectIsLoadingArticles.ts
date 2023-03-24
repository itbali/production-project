import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectIsLoadingArticles = createSelector(
    getArticles,
    (articlesPage) => articlesPage?.isLoading,
);
