import { FC, lazy } from 'react';
import { AddCommentProps } from './AddComment';

export const AddCommentAsync = lazy<FC<AddCommentProps>>(() => new Promise((resolve) => {
    // just imitating loading
    // @ts-ignore
    setTimeout(() => resolve(import('./AddComment')), 500);
}));
