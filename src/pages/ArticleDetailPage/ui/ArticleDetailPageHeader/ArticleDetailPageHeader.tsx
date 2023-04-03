import { memo, useCallback } from 'react';
import { classNames } from 'helpers/classNames';
import { Button, Variant } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailPageHeader.module.scss';
import { selectCanEdit } from '../../model/selectors/article/selectCanEdit/selectCanEdit';

interface ArticleDetailPageHeaderProps {
    className?: string,
}

export const ArticleDetailPageHeader = memo((props: ArticleDetailPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useSelector(selectArticleDetailsData);
    const canEdit = useSelector(selectCanEdit);

    const onGoBackClick = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);
    const onEditClick = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit}`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
            <Button variant={Variant.OUTLINE} onClick={onGoBackClick}>{t('backToList')}</Button>
            {canEdit && (
                <Button
                    className={cls.editButton}
                    variant={Variant.OUTLINE}
                    onClick={onEditClick}
                >
                    {t('edit')}
                </Button>
            )}
        </div>
    );
});
