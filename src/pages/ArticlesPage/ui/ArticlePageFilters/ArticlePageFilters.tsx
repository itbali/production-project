import { memo, useCallback } from 'react';
import { classNames } from 'helpers/classNames';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';
import { useAppDispatch, useDebouncedCallback } from 'helpers/hooks';
import { useSelector } from 'react-redux';
import {
    selectArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/selectArticlesPageView/selectArticlesPageView';
import { ArticleViewSelector } from 'features/ViewSelector';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { ArticleSortSelector } from 'features/ArticleSortSelector';
import { ArticleSortView } from 'entities/Article';
import {
    selectArticlesPageSearchValue,
} from 'pages/ArticlesPage/model/selectors/selectArticlesPageSearchValue/selectArticlesPageSearchValue';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { TabItem } from 'shared/ui/Tabs/';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import { ArticlesPageActions } from '../../model/slice/articlePageSlice';
import cls from './ArticlePageFilters.module.scss';
import {
    selectArticlesSortOrder,
} from '../../model/selectors/selectArticlesSortOrder/selectArticlesSortOrder';
import {
    selectArticlesSortBy,
} from '../../model/selectors/selectArticlesSortBy/selectArticlesSortBy';
import {
    selectArticlesPageTabValue,
} from '../../model/selectors/selectArticlesPageTabValue/selectArticlesPageTabValue';

interface ArticlePageFiltersProps {
    className?: string,
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const tabValue = useSelector(selectArticlesPageTabValue);
    const view = useSelector(selectArticlesPageView);
    const selectOrder = useSelector(selectArticlesSortOrder);
    const selectSortBy = useSelector(selectArticlesSortBy);
    const articleSearchValue = useSelector(selectArticlesPageSearchValue);

    const fetchData = useCallback(() => {
        dispatch((fetchArticles({ replace: true })));
    }, [dispatch]);
    const debouncedFetchData = useDebouncedCallback(fetchData, 400);
    const handleChangeView = useCallback((view: 'list' | 'grid') => {
        dispatch(ArticlesPageActions.setView(view));
        dispatch(ArticlesPageActions.setLimit(view === 'list' ? 3 : 6));
        dispatch(ArticlesPageActions.setPage(1));
        localStorage.setItem(LOCAL_STORAGE.articlesPageView, view);
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeSortBy = useCallback((value: ArticleSortView) => {
        dispatch(ArticlesPageActions.setSort(value));
        dispatch(ArticlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeSortDirection = useCallback((value: 'asc' | 'desc') => {
        dispatch(ArticlesPageActions.setOrder(value));
        dispatch(ArticlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeSearch = useCallback((value: string) => {
        dispatch(ArticlesPageActions.setSearch(value));
        dispatch(ArticlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);
    const onTabClick = useCallback((tab: TabItem) => {
        dispatch(ArticlesPageActions.setTabValue(tab.value as ArticleType));
        dispatch(ArticlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={selectOrder}
                    sort={selectSortBy}
                    onChangeSortBy={onChangeSortBy}
                    onChangeSortDirection={onChangeSortDirection}
                />
                <Card>
                    <ArticleViewSelector view={view} onChangeView={handleChangeView} />
                </Card>
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('search')}
                    onChange={onChangeSearch}
                    value={articleSearchValue}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                onTabClick={onTabClick}
                value={tabValue}
            />
        </div>
    );
});
