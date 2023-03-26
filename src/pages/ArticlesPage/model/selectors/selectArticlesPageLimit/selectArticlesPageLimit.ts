import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesPageLimit = createSelector(
    getArticles,
    (articlesPage) => articlesPage?.limit,
);
