import { classNames } from 'helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

const reloadPage = () => window.location.reload();

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('error')}
            <Button onClick={reloadPage}>{t('reload')}</Button>
        </div>
    );
};
