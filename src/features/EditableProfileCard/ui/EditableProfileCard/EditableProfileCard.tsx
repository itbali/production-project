import { memo, useCallback } from 'react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useAppDispatch, useInitialEffect } from 'helpers/hooks';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { ProfileCard } from 'entities/Profile';
import { VStack } from 'shared/ui/Stack';
import { testIds } from 'shared/const/testIds';
import { ValidateProfileErrors } from '../../model/types/EditableProfileCardTypes';
import { selectProfileValidateErrors } from '../../model/selectors/selectProfileValidateErrors/selectValidateProfileErrors';
import {
    profileActions,
    profileReducer,
} from '../../model/slice/profileSlice';
import { selectProfileError } from '../../model/selectors/selectProfileError/selectProfileError';
import { selectProfileData } from '../../model/selectors/selectProfileData/selectProfileData';
import { selectProfileIsLoading } from '../../model/selectors/selectProfileIsLoading/SelectProfileIsLoading';
import { selectProfileReadOnly } from '../../model/selectors/selectProfileReadOnly/selectProfileReadOnly';
import { fetchProfileData } from '../../model/service/fetchProfileData/fetchProfileData';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string,
    id: string,
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const data = useSelector(selectProfileData);
    const error = useSelector(selectProfileError);
    const errors = useSelector(selectProfileValidateErrors);
    const isLoading = useSelector(selectProfileIsLoading);
    const readonly = useSelector(selectProfileReadOnly);

    const validateErrorsMap = {
        [ValidateProfileErrors.FIRST_NAME_ERROR]: t('firstNameError'),
        [ValidateProfileErrors.LAST_NAME_ERROR]: t('lastNameError'),
        [ValidateProfileErrors.NO_DATA_ERROR]: t('noDataError'),
        [ValidateProfileErrors.SERVER_ERROR]: t('serverError'),
        [ValidateProfileErrors.AGE_ERROR]: t('ageError'),
    };

    const onChangeProfileFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    }, [dispatch]);
    const onChangeProfileLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onChangeProfileAge = useCallback((value?: string) => {
        if (value?.match(/^[0-9]*$/)) {
            dispatch(profileActions.updateProfile({ age: Number(value) }));
        }
    }, [dispatch]);
    const onChangeProfileCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);
    const onChangeUserName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);
    const onChangeProfileCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);
    const onChangeProfileCountry = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap={12} max>
                <EditableProfileCardHeader />
                {errors && errors.map((error) => (
                    <Text
                        data-testid={`${testIds.EditableProfileCard}.header`}
                        key={error}
                        align="center"
                        variant="error"
                        text={validateErrorsMap[error]}
                    />
                ))}
                <ProfileCard
                    data-testid={testIds.EditableProfileCard}
                    className={className}
                    data={data}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeProfileFirstName}
                    onChangeLastName={onChangeProfileLastName}
                    onChangeAge={onChangeProfileAge}
                    onChangeCity={onChangeProfileCity}
                    onChangeUserName={onChangeUserName}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeProfileCurrency}
                    onChangeCountry={onChangeProfileCountry}
                    readonly={readonly}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
