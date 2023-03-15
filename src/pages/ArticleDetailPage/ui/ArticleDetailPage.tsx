import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import { ArticleDetailsBlock } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string,
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetailsBlock articleId={id} />
        </div>
    );
};
export default memo(ArticleDetailPage);
