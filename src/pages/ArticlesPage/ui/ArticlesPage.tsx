import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import { ArticlesList } from 'entities/Article/ui/ArticlesList/ArticlesList';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string,
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticlesList
                articles={
                    Array(10).fill(0).map((e, i) => ({ ...mockArticle, id: String(i) }))
                }
                view="list"
            />
        </div>
    );
};
export default memo(ArticlesPage);
