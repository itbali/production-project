import { classNames } from 'helpers/classNames';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return (
            <Text title={t('error')} text={t('NoIdProvided')} />
        );
    }

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap={12} align="start">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};
export default ProfilePage;
