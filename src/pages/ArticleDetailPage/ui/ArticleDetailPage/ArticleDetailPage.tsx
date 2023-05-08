import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import { ArticleDetailsBlock } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { ArticleDetailComments } from '../ArticleDeatilComments/ArticleDetailComments';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import cls from './ArticleDetailPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';

interface ArticleDetailPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <ArticleDetailPageHeader />
                <ArticleDetailsBlock articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
