import { ComponentType, lazy } from 'react';
import { ArticleEditPageProps } from './ArticleEditPage';

const ArticleEditPageAsync = lazy<ComponentType<ArticleEditPageProps>>(
    () => new Promise((resolve) => {
    // just imitating loading
    // @ts-ignore
        setTimeout(() => resolve(import('./ArticleEditPage')), 500);
    }),
);

export default ArticleEditPageAsync;
