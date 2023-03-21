import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string,
    comment: Comment,
    isLoading?: boolean,
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={60} height={60} borderRadius="50%" />
                    <Skeleton classname={cls.username} width={150} height={30} />
                </div>
                <Skeleton classname={cls.text} width="100%" height={150} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user?.avatar && <Avatar size="small" src={comment.user.avatar} />}
                <Text className={cls.username} title={comment.user.username} size="small" />
            </div>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});
