import { classNames } from 'helpers/classNames';
import React, { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useAppDispatch } from 'helpers/hooks';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import cls from './ArticleDetailsBlock.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { selectError } from '../../model/selectors/selectError/selectError';
import { selectIsLoading } from '../../model/selectors/selectIsLoading/selectIsLoading';
import { selectData } from '../../model/selectors/selectData/selectIsLoading';

interface ArticleDetailsBlockProps {
	classname?: string;
    articleId?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetailsBlock = memo((props: ArticleDetailsBlockProps) => {
    const { classname, articleId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const error = useSelector(selectError);
    // const isLoading = useSelector(selectIsLoading);
    const isLoading = true;
    const article = useSelector(selectData);

    useEffect(() => {
        if (articleId) dispatch(fetchArticleById(articleId));
    }, [articleId, dispatch]);

    let content = null;
    if (isLoading) {
        content = (
            <div>
                <Skeleton classname={cls.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton classname={cls.title} width={300} height={32} />
                <Skeleton classname={cls.skeleton} width={600} height={24} />
                <Skeleton classname={cls.skeleton} height={200} />
                <Skeleton classname={cls.skeleton} height={200} />
            </div>
        );
    } else if (error) {
        content = <Text variant="error" text={error} align="center" />;
    } else if (!articleId) {
        content = <Text variant="error" text={t('article-not-found')} align="center" />;
    } else {
        content = <div>ARTICLE DETAILS</div>;
    }
    console.log(content);
    return (
        <DynamicModuleLoader reducers={reducers} shouldBeRemoved>
            <div className={classNames(cls.ArticleDetailsBlock, {}, [classname])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
