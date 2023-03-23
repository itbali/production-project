import { createSelector } from '@reduxjs/toolkit';
import { getAddCommentData } from '../getAddCommentData/getAddCommentData';

export const selectAddCommentError = createSelector(
    getAddCommentData,
    (addComment) => addComment?.error,
);
