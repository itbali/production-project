import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesSortOrder = createSelector(
    getArticles,
    (articles) => (articles?.order || 'asc'),
);
