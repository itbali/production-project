import { lazy } from 'react';

const ArticleDetailPageAsync = lazy(() => new Promise((resolve) => {
    // just imitating loading
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailPage')), 500);
}));

export default ArticleDetailPageAsync;
