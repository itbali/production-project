import { classNames } from 'helpers/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Spinner } from 'shared/ui/Spinner';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelector } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { testIds } from 'shared/const/testIds';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    data?: Profile
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    className?: string,
    onChangeFirstName?: (value?: string) => void,
    onChangeLastName?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUserName?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (value?: Currency) => void,
    onChangeCountry?: (value?: Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeCountry,
        onChangeUserName,
        onChangeAvatar,
        onChangeCurrency,
        readonly,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <HStack max className={classNames(cls.ProfileCard, {}, [className])}>
                <Spinner />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack max className={classNames(cls.ProfileCard, {}, [className])}>
                <Text align="center" variant="error" title={t('error')} text={error} />
            </HStack>
        );
    }

    return (
        <VStack
            max
            gap={16}
            className={classNames(cls.ProfileCard, { [cls.readonly]: readonly }, [className])}
        >
            {data
                    && (
                        <>
                            {data.avatar
                            && (
                                <div className={cls.avatarWrapper}>
                                    <Avatar src={data.avatar} alt={data.username} size="large" />
                                </div>
                            )}
                            <VStack
                                max
                                gap={16}
                                align="start"
                            >
                                <Input
                                    placeholder={t('firstName')}
                                    value={data.first}
                                    onChange={onChangeFirstName}
                                    readonly={readonly}
                                    data-testid={`${testIds.ProfileCard}.firstName`}
                                />
                                <Input
                                    placeholder={t('lastName')}
                                    value={data.lastname}
                                    onChange={onChangeLastName}
                                    readonly={readonly}
                                    data-testid={`${testIds.ProfileCard}.lastName`}
                                />
                                <Input
                                    type="number"
                                    placeholder={t('age')}
                                    value={data.age}
                                    onChange={onChangeAge}
                                    readonly={readonly}
                                    data-testId={`${testIds.ProfileCard}.age`}
                                />
                                <Input
                                    placeholder={t('city')}
                                    value={data.city}
                                    onChange={onChangeCity}
                                    readonly={readonly}
                                />
                                <CountrySelector
                                    value={data.country}
                                    onChange={onChangeCountry}
                                    readonly={readonly}
                                />
                                <Input
                                    placeholder={t('avatar')}
                                    value={data.avatar}
                                    onChange={onChangeAvatar}
                                    readonly={readonly}
                                />
                                <Input
                                    placeholder={t('username')}
                                    value={data.username}
                                    onChange={onChangeUserName}
                                    readonly={readonly}
                                />
                                <CurrencySelect
                                    value={data.currency}
                                    onChange={onChangeCurrency}
                                    readonly={readonly}
                                />
                            </VStack>
                        </>
                    )}
        </VStack>
    );
};
