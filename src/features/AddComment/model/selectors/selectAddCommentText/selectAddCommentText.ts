import { createSelector } from '@reduxjs/toolkit';
import { getAddCommentData } from '../getAddCommentData/getAddCommentData';

export const selectAddCommentText = createSelector(getAddCommentData, (addComment) => addComment?.text ?? '');
