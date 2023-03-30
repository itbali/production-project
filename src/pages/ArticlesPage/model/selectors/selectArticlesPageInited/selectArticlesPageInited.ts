import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from '../getArticles/getArticles';

export const selectArticlesPageInited = createSelector(
    getArticles,
    (articles) => articles?._inited,
);
