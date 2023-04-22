import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import { AddComment } from 'features/AddComment';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { useAppDispatch } from 'helpers/hooks';
import { selectAllComments } from '../../model/slice/ArticleDetailCommentsSlice';
import { selectCommentsError } from '../../model/selectors/comments/selectCommentsError/selectCommentsError';
import { selectAreCommentsLoading } from '../../model/selectors/comments/selectAreCommentsLoading/selectAreCommentsLoading';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailCommentsProps {
    id?: string,
}

export const ArticleDetailComments = memo((props: ArticleDetailCommentsProps) => {
    const { id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const comments = useSelector(selectAllComments);
    const error = useSelector(selectCommentsError);
    const isLoading = useSelector(selectAreCommentsLoading);

    const addComment = useCallback((text:string) => {
        if (!text.trim() || !id) return;
        dispatch(addCommentForArticle({ text, articleId: id }));
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    return (
        <VStack gap={8}>
            <Text size="large" title={t('comments')} />
            <AddComment onSendComment={addComment} />
            <CommentList
                error={error}
                isLoading={isLoading}
                comments={comments}
            />
        </VStack>
    );
});
