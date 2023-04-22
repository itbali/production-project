import { memo, useCallback } from 'react';
import { classNames } from 'helpers/classNames';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useAppDispatch } from 'helpers/hooks';
import { Page } from 'widgets/Page';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageReducer } from '../../model/slice/articlePageSlice';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';

interface ArticlesPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articlesPage: ArticlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

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
                <ArticlesInfiniteList className={cls.articlesList} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
