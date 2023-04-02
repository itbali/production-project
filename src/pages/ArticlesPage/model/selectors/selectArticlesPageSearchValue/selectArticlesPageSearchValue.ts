import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesPageSearchValue = createSelector(
    getArticles,
    (articles) => articles?.search || '',
);
