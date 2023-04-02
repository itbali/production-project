import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleSortView, ArticleType } from 'entities/Article/model/types/article';

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
