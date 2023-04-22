import { useSelector } from 'react-redux';
import { ArticlesList } from 'entities/Article';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useInitialEffect } from 'helpers/hooks';
import {
    selectIsLoadingArticles,
} from '../../model/selectors/selectIsLoadingArticles/selectIsLoadingArticles';
import { selectAllArticles } from '../../model/slice/articlePageSlice';
import { selectArticlesError } from '../../model/selectors/selectArticlesError/selectArticlesError';
import {
    selectArticlesPageView,
} from '../../model/selectors/selectArticlesPageView/selectArticlesPageView';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticlesInfiniteListProps {
    className?: string,
}

export const ArticlesInfiniteList = (props: ArticlesInfiniteListProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const view = useSelector(selectArticlesPageView);
    const articles = useSelector(selectAllArticles);
    const isLoading = useSelector(selectIsLoadingArticles);
    const error = useSelector(selectArticlesError);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });
    return (
        <ArticlesList
            articles={articles}
            view={view}
            isLoading={isLoading}
            error={error}
            className={className}
        />
    );
};
