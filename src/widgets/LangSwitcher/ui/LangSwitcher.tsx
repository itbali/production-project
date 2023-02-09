import {classNames} from "helpers/classNames";
import cls from './LangSwitcher.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {MouseEvent, useCallback} from "react";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation()
    const handleTranslation = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }, [i18n])

    return (
        <Button className={classNames(cls.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR}
                onClick={handleTranslation}>{t('language')}</Button>
    );
};