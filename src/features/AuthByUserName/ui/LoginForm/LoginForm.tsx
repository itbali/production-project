import { classNames } from 'helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Variant } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/storeProvider/config/store';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { selectError } from '../../model/selectors/selectError/selectError';
import { selectUsername } from '../../model/selectors/selectUsername/selectUsername';
import { selectPassword } from '../../model/selectors/selectPassword/selectPassword';
import { selectIsLoading } from '../../model/selectors/selectIsLoading/selectIsLoading';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername';

export interface LoginFormProps {
    className?: string,
}

const initialReducers:ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(selectUsername);
    const password = useSelector(selectPassword);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const setPassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const setUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onLoginClick = useCallback(
        () => dispatch(loginByUsername({ username, password })),
        [dispatch, username, password],
    );
    const onkeydown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            onLoginClick();
        }
    }, [onLoginClick]);

    useEffect(
        () => {
            document.addEventListener('keydown', onkeydown);

            return () => {
                document.removeEventListener('keydown', onkeydown);
            };
        },
        [onkeydown],
    );

    return (
        <DynamicModuleLoader reducers={initialReducers} shouldBeRemoved>

            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('loginForm')} className={cls.title} />
                {error && <Text text={error} theme="error" className={cls.error} />}
                <Input
                    placeholder={t('username')}
                    className={cls.input}
                    type="text"
                    value={username}
                    onChange={setUserName}
                />
                <Input
                    placeholder={t('password')}
                    className={cls.input}
                    type="text"
                    value={password}
                    onChange={setPassword}
                />
                <Button
                    onClick={onLoginClick}
                    className={cls.inputBtn}
                    disabled={isLoading}
                    variant={Variant.OUTLINE}
                >
                    {t('login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
