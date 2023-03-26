import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error: string | undefined;
    view: 'list' | 'grid';
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
}
