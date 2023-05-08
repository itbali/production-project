import { classNames } from 'helpers/classNames';
import { Text } from 'shared/ui/Text';
import { Button, Variant } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'helpers/hooks';
import { HStack } from 'shared/ui/Stack';
import { testIds } from 'shared/const/testIds';
import { selectCanEdit } from '../../model/selectors/selectCanEdit/selectCanEdit';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import { selectProfileReadOnly } from '../../model/selectors/selectProfileReadOnly/selectProfileReadOnly';

interface ProfilePageHeaderProps {
    className?: string,
}

export const EditableProfileCardHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(selectProfileReadOnly);
    const canEdit = useSelector(selectCanEdit);
    const onEditClick = useCallback(() => {
        dispatch(profileActions.setReadOnly(!readonly));
        if (!readonly) {
            dispatch(updateProfileData());
        }
    }, [dispatch, readonly]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    return (
        <HStack
            className={classNames('', {}, [className])}
            gap={16}
            justify="space-between"
            max
        >
            <Text title={t('profile')} />
            {canEdit && (
                <HStack align="end" gap={8}>
                    {!readonly && (
                        <Button
                            onClick={onCancelEdit}
                            variant={Variant.ERROR}
                            data-testid={`${testIds.EditableProfileCard}.cancelEdit`}
                        >
                            {t('reset')}
                        </Button>
                    )}
                    <Button
                        onClick={onEditClick}
                        variant={Variant.OUTLINE}
                        data-testid={`${testIds.EditableProfileCard}.edit`}
                    >
                        {t(readonly ? 'edit' : 'save')}
                    </Button>
                </HStack>
            )}
        </HStack>
    );
};
