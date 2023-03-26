import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesHasMore = createSelector(
    getArticles,
    (articlesPage) => articlesPage?.hasMore,
);
