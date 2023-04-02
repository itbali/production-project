import {
    getArticleRecommendations,
} from 'pages/ArticleDetailPage/model/selectors/recommendations/getArticleRecommendations/getArticleRecommendations';
import { createSelector } from '@reduxjs/toolkit';

export const selectArticleRecommendationsError = createSelector(
    getArticleRecommendations,
    (articleRecommendations) => articleRecommendations?.error || '',
);
