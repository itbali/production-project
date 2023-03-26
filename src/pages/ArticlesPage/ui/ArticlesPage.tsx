import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'helpers/classNames';
import { ArticlesList } from 'entities/Article/ui/ArticlesList/ArticlesList';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'helpers/hooks';
import { ViewSelector } from 'features/ViewSelector';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import {
    selectArticlesPageNumber,
} from 'pages/ArticlesPage/model/selectors/selectArticlesPageNumber/selectArticlesPageNumber';
import { Page } from 'shared/ui/Page';
import {
    fetchNextArticles,
} from 'pages/ArticlesPage/model/services/fetchNextArticles/fetchNextArticles';
import {
    selectIsLoadingArticles,
} from '../model/selectors/selectIsLoadingArticles/selectIsLoadingArticles';
import { selectArticlesError } from '../model/selectors/selectArticlesError/selectArticlesError';
import cls from './ArticlesPage.module.scss';
import {
    ArticlesPageActions,
    ArticlesPageReducer,
    selectAllArticles,
} from '../model/slice/articlePageSlice';
import {
    selectArticlesPageView,
} from '../model/selectors/selectArticlesPageView/selectArticlesPageView';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';

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
    const page = useSelector(selectArticlesPageNumber);

    useInitialEffect(() => {
        dispatch(fetchArticles({ page }));
        if (!view) {
            const viewFromLocalStorage = localStorage.getItem(LOCAL_STORAGE.articlesPageView);
            if (viewFromLocalStorage) {
                dispatch(ArticlesPageActions.setView(viewFromLocalStorage as 'list' | 'grid'));
            }
        }
    });
    const handleChangeView = useCallback((view: 'list' | 'grid') => {
        dispatch(ArticlesPageActions.setView(view));
        dispatch(ArticlesPageActions.setLimit(view === 'list' ? 3 : 6));
        localStorage.setItem(LOCAL_STORAGE.articlesPageView, view);
    }, [dispatch]);

    const onScrollEnd = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onScrollEnd}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ViewSelector view={view} onChangeView={handleChangeView} />
                <ArticlesList
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
