import { ComponentType, lazy } from 'react';
import { ArticleEditPageProps } from './ArticleEditPage';

const ArticleEditPageAsync = lazy<ComponentType<ArticleEditPageProps>>(
    () => (import('./ArticleEditPage')),
);

export default ArticleEditPageAsync;
