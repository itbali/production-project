import { lazy } from 'react';

const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // just imitating loading
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 300);
}));

export default ArticlesPageAsync;
