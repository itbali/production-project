import { classNames } from 'helpers/classNames';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    profileReducer,
    selectProfileError,
    selectProfileFormData,
    selectProfileIsLoading,
    selectProfileReadOnly,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'helpers/hooks';
import { useSelector } from 'react-redux';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const formData = useSelector(selectProfileFormData);
    const error = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);
    const readonly = useSelector(selectProfileReadOnly);
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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} shouldBeRemoved>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
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
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
