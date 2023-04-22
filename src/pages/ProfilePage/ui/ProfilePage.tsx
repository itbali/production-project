import { classNames } from 'helpers/classNames';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap={12} align="start">
                <ProfilePageHeader />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};
export default ProfilePage;
