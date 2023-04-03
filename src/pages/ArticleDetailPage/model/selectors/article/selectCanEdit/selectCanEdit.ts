import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { selectArticleDetailsData } from 'entities/Article/';

export const selectCanEdit = createSelector(
    [selectArticleDetailsData, getUserAuthData],
    (article, user) => {
        if (!article || !user) {
            return false;
        }
        return article.user.id === user.id;
    },
);
