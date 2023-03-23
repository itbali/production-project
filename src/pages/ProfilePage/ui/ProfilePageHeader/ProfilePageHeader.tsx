import { classNames } from 'helpers/classNames';
import { Text } from 'shared/ui/Text';
import { Button, Variant } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { profileActions, selectProfileReadOnly, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'helpers/hooks';
import cls from './ProfilePageHeader.module.scss';
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
        <div className={classNames(cls.header, {}, [className])}>
            <Text title={t('profile')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
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
                </div>
            )}

        </div>
    );
};
