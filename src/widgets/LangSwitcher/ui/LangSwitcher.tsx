import { classNames } from 'helpers/classNames/ui/classNames';
import { Button, Variant } from 'shared/ui/Button';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
    collapsed: boolean,
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const {
        className,
        collapsed,
    } = props;

    const {
        t,
        i18n,
    } = useTranslation();
    const handleTranslation = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }, [i18n]);

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            variant={Variant.CLEAR}
            onClick={handleTranslation}
        >
            {collapsed
                ? t('language-short')
                : t('language')}
        </Button>
    );
});
