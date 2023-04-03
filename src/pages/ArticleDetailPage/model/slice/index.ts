import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailCommentsReducer } from '../slice/ArticleDetailCommentsSlice';
import { ArticleDetailRecommendationsReducer } from '../slice/ArticleDetailRecomendationsSlice';

export const articleDetailsPageReducer = combineReducers({
    ArticleDetailRecommendations: ArticleDetailRecommendationsReducer,
    articleDetailsComments: ArticleDetailCommentsReducer,
});
