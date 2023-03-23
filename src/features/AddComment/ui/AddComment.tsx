import { memo, useCallback } from 'react';
import { classNames } from 'helpers/classNames';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'helpers/hooks';
import { Text } from 'shared/ui/Text';
import cls from './AddComment.module.scss';
import { addCommentReducer, addCommentSliceActions } from '../model/slice/addCommentSlice';
import { selectAddCommentText } from '../model/selectors/selectAddCommentText/selectAddCommentText';
import {
    selectAddCommentError,
} from '../model/selectors/selectAddCommentError/selectAddCommentError';

export interface AddCommentProps {
    className?: string,
    onSendComment: (text:string) => void,
}

const reducers: ReducersList = {
    addComment: addCommentReducer,
};

const AddComment = memo((props: AddCommentProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(selectAddCommentText);
    const error = useSelector(selectAddCommentError);
    const dispatch = useAppDispatch();
    const handleAddComment = useCallback((text:string) => {
        dispatch(addCommentSliceActions.setText(text));
    }, [dispatch]);

    const onCommentSendClick = useCallback(() => {
        onSendComment(text);
        dispatch(addCommentSliceActions.setText(''));
    }, [dispatch, onSendComment, text]);

    if (error) {
        return <Text variant="error" text={error} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddComment, {}, [className])}>
                <Input
                    value={text}
                    onChange={handleAddComment}
                    className={cls.input}
                    placeholder={t('comment')}
                />
                <Button onClick={onCommentSendClick}>{t('addComment')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default AddComment;
