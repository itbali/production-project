import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string,
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            ArticleDetailPage
        </div>
    );
};
export default memo(ArticleDetailPage);
