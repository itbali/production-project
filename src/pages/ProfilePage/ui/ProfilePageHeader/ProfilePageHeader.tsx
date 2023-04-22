import { classNames } from 'helpers/classNames';
import { Text } from 'shared/ui/Text';
import { Button, Variant } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'helpers/hooks';
import { HStack } from 'shared/ui/Stack';
import { profileActions } from 'features/EditableProfileCard/model/slice/profileSlice';
import {
    updateProfileData,
} from 'features/EditableProfileCard/model/service/updateProfileData/updateProfileData';
import {
    selectProfileReadOnly,
} from 'features/EditableProfileCard/model/selectors/selectProfileReadOnly/selectProfileReadOnly';
import { selectCanEdit } from '../../model/selectors/selectCanEdit/selectCanEdit';

interface ProfilePageHeaderProps {
    className?: string,
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
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
                        >
                            {t('reset')}
                        </Button>
                    )}
                    <Button
                        onClick={onEditClick}
                        variant={Variant.OUTLINE}
                    >
                        {t(readonly ? 'edit' : 'save')}
                    </Button>
                </HStack>
            )}
        </HStack>
    );
};
