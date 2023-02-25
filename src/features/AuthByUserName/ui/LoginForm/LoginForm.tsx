import { classNames } from 'helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('username')}
                className={cls.input}
                type="text"
                value={userName}
                onChange={setUserName}
            />
            <Input
                placeholder={t('password')}
                className={cls.input}
                type="text"
                value={password}
                onChange={setPassword}
            />
            <Button className={cls.inputBtn}>{t('login')}</Button>
        </div>
    );
};
