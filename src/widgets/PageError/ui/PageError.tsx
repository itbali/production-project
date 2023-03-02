import { classNames } from 'helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Variant } from 'shared/ui/Button';
import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

const reloadPage = () => window.location.reload();

function GoHomePage() {
    window.location.href = '/';
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('error')}
            <Button onClick={reloadPage} variant={Variant.OUTLINE}>{t('reload')}</Button>
            <Button onClick={GoHomePage} variant={Variant.OUTLINE}>{t('main-page')}</Button>
        </div>
    );
});
