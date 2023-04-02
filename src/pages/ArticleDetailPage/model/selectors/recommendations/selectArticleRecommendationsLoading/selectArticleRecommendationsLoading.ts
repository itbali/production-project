import { createSelector } from '@reduxjs/toolkit';
import { getArticleRecommendations } from '../getArticleRecommendations/getArticleRecommendations';

export const selectArticleRecommendationsLoading = createSelector(
    getArticleRecommendations,
    (articleRecommendations) => articleRecommendations?.isLoading || false,
);
