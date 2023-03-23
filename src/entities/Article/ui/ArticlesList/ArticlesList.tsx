import { memo } from 'react';
import { classNames } from 'helpers/classNames';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import {
    ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticlesList.module.scss';
import { Article } from '../../model/types/article';

interface ArticlesListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: 'grid' | 'list',
}

export const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = 'list',
    } = props;

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                {Array(view === 'grid' ? 9 : 3).fill(0).map((_, i) => (
                    <ArticleListItemSkeleton key={i} view={view} />
                ))}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} article={article} view={view} />
    );

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.map((article) => (
                renderArticle(article)
            ))}
        </div>
    );
});
