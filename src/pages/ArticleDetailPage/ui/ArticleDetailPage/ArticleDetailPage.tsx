import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import { ArticleDetailsBlock } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'helpers/hooks/ui/useInitialEffect';
import { useAppDispatch } from 'helpers/hooks';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailPage.module.scss';
import {
    ArticleDetailCommentsReducer,
    selectAllComments,
} from '../../model/slice/ArticleDetailCommentsSlice';
import {
    selectCommentsError,
} from '../../model/selectors/comments/selectCommentsError/selectCommentsError';
import {
    selectAreCommentsLoading,
} from '../../model/selectors/comments/selectAreCommentsLoading/selectAreCommentsLoading';

interface ArticleDetailPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsComments: ArticleDetailCommentsReducer,
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(selectAllComments);
    const error = useSelector(selectCommentsError);
    const isLoading = useSelector(selectAreCommentsLoading);

    useInitialEffect(() => {
        if (id) dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <DynamicModuleLoader reducers={reducers} shouldBeRemoved>
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <ArticleDetailsBlock articleId={id} />
                <Text className={cls.commentTitle} title={t('comments')} />
                <CommentList
                    error={error}
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
