import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'helpers/classNames';
import { ArticlesList } from 'entities/Article/ui/ArticlesList/ArticlesList';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'helpers/hooks';
import { ViewSelector } from 'features/ViewSelector';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
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

    useInitialEffect(() => {
        dispatch(fetchArticles());
        if (!view) {
            const viewFromLocalStorage = localStorage.getItem(LOCAL_STORAGE.articlesPageView);
            if (viewFromLocalStorage) {
                dispatch(ArticlesPageActions.setView(viewFromLocalStorage as 'list' | 'grid'));
            }
        }
    });
    const handleChangeView = (view: 'list' | 'grid') => {
        dispatch(ArticlesPageActions.setView(view));
        localStorage.setItem(LOCAL_STORAGE.articlesPageView, view);
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ViewSelector view={view} onChangeView={handleChangeView} />
                <ArticlesList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
