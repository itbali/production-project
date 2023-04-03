import { memo } from 'react';
import { classNames } from 'helpers/classNames';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';

export interface ArticleEditPageProps {
    className?: string,
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id:string }>();
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            { id
                ? t('editArticle:') + id
                : t('createArticle')}
        </Page>
    );
});
export default ArticleEditPage;
