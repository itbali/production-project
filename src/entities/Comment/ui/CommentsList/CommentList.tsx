import { memo } from 'react';
import { classNames } from 'helpers/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean,
    error?: string,
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className, comments, isLoading, error,
    } = props;
    const { t } = useTranslation();

    if (error) return <Text variant="error" text={error} />;

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text text={t('noComments')} />}
        </div>
    );
});
