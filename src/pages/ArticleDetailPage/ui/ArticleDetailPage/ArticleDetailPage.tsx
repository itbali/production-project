import { classNames } from 'helpers/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetailsBlock, ArticlesList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'helpers/hooks';
import { AddComment } from 'features/AddComment';
import { Button, Variant } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailPage.module.scss';
import { selectAllComments } from '../../model/slice/ArticleDetailCommentsSlice';
import {
    selectCommentsError,
} from '../../model/selectors/comments/selectCommentsError/selectCommentsError';
import {
    selectAreCommentsLoading,
} from '../../model/selectors/comments/selectAreCommentsLoading/selectAreCommentsLoading';
import {
    selectAllArticleDetailRecommendations,
} from '../../model/slice/ArticleDetailRecomendationsSlice';
import {
    selectArticleRecommendationsLoading,
} from '../../model/selectors/recommendations/selectArticleRecommendationsLoading/selectArticleRecommendationsLoading';
import { articleDetailsPageReducer } from '../../model/slice';

interface ArticleDetailPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(selectAllComments);
    const error = useSelector(selectCommentsError);
    const isLoading = useSelector(selectAreCommentsLoading);
    const recommendationsIsLoading = useSelector(selectArticleRecommendationsLoading);
    const recommendations = useSelector(selectAllArticleDetailRecommendations);
    const navigate = useNavigate();

    useInitialEffect(() => {
        if (id) dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    const addComment = useCallback((text:string) => {
        if (!text.trim() || !id) return;
        dispatch(addCommentForArticle({ text, articleId: id }));
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    const onGoBackClick = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <Button variant={Variant.OUTLINE} onClick={onGoBackClick}>{t('backToList')}</Button>
                <ArticleDetailsBlock articleId={id} />
                <Text size="large" className={cls.commentTitle} title={t('recommend')} />
                <ArticlesList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    view="grid"
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text size="large" className={cls.commentTitle} title={t('comments')} />
                <AddComment onSendComment={addComment} />
                <CommentList
                    error={error}
                    isLoading={isLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
