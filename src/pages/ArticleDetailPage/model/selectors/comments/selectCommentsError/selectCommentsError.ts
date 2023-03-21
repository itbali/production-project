import {
    getArticleDetailsComments,
} from 'pages/ArticleDetailPage/model/selectors/comments/getArticleDetailsComments/getArticleDetailsComments';
import { createSelector } from '@reduxjs/toolkit';

export const selectCommentsError = createSelector(
    getArticleDetailsComments,
    (articleDetailsComments) => articleDetailsComments?.error,
);
