import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortView, ArticleType } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error: string | undefined;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    order: 'asc' | 'desc';
    sort: ArticleSortView;
    search: string;
    view: 'list' | 'grid';
    _inited: boolean;
    tabValue: ArticleType;
}
