import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesPageView = createSelector(
    getArticles,
    (articlesPage) => articlesPage?.view,
);
