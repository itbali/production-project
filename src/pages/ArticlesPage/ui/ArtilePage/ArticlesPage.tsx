import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'helpers/classNames';
import { ArticlesList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'helpers/hooks';
import { Page } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import {
    selectIsLoadingArticles,
} from '../../model/selectors/selectIsLoadingArticles/selectIsLoadingArticles';
import { selectArticlesError } from '../../model/selectors/selectArticlesError/selectArticlesError';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageReducer, selectAllArticles } from '../../model/slice/articlePageSlice';
import {
    selectArticlesPageView,
} from '../../model/selectors/selectArticlesPageView/selectArticlesPageView';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';

interface ArticlesPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articlesPage: ArticlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(selectArticlesPageView);
    const articles = useSelector(selectAllArticles);
    const isLoading = useSelector(selectIsLoadingArticles);
    const error = useSelector(selectArticlesError);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onScrollEnd = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onScrollEnd}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlePageFilters />
                <ArticlesList
                    className={cls.articlesList}
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                    error={error}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
