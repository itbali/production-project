import { classNames } from 'helpers/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} shouldBeRemoved>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {t('profilePage')}
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
