import { lazy } from 'react';

const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // just imitating loading
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 500);
}));

export default ArticlesPageAsync;
