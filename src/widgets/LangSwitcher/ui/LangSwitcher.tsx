import { classNames } from 'helpers/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();
    const handleTranslation = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }, [i18n]);

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={handleTranslation}
        >
            {t('language')}
        </Button>
    );
}
