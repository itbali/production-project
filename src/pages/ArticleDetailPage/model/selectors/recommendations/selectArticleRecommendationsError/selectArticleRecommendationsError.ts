import { createSelector } from '@reduxjs/toolkit';
import { getArticleRecommendations } from '../getArticleRecommendations/getArticleRecommendations';

export const selectArticleRecommendationsError = createSelector(
    getArticleRecommendations,
    (articleRecommendations) => articleRecommendations?.error || '',
);
