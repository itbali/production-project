import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesPageNumber = createSelector(
    getArticles,
    (articlesPage) => articlesPage?.page || 1,
);
