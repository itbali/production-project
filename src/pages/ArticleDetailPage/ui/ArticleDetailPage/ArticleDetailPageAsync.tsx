import { lazy } from 'react';

const ArticleDetailPageAsync = lazy(() => (import('./ArticleDetailPage')));

export default ArticleDetailPageAsync;
