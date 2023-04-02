import { createSelector } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/Article';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesPageTabValue = createSelector(
    getArticles,
    (articles) => articles?.tabValue || ArticleType.ALL,
);
