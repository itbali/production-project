import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'helpers/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article } from '../../model/types/article';
import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    error?: string,
    view?: 'grid' | 'list',
    target?: HTMLAttributeAnchorTarget,
}

export const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = 'list',
        error,
        target = '_self',
    } = props;
    const { t } = useTranslation();

    if (error && !isLoading) {
        return (
            <Text text={error} />
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            target={target}
        />
    );

    if (!articles?.length && !isLoading) {
        return (
            <Text text={t('NoArticles')} />
        );
    }
    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles?.map((article) => (
                renderArticle(article)
            ))}
            {isLoading && (
                <div className={classNames('', {}, [className, cls[view]])}>
                    {Array(view === 'grid' ? 9 : 3).fill(0).map((_, i) => (
                        <ArticleListItemSkeleton key={i} view={view} />
                    ))}
                </div>
            )}
        </div>
    );
});
