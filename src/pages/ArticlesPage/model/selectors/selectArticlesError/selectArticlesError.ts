import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesError = createSelector(
    getArticles,
    (articlesPage) => articlesPage?.error,
);
