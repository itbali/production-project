import { createSelector } from '@reduxjs/toolkit';
import { ArticleSortView } from 'entities/Article';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesSortBy = createSelector(
    getArticles,
    (articles) => (articles?.sort || ArticleSortView.CREATED_AT),
);
