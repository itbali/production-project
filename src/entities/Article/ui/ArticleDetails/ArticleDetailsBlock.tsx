import { classNames } from 'helpers/classNames';
import React, { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'helpers/components/DynamicModuleLoader';
import { useAppDispatch, useInitialEffect } from 'helpers/hooks';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon';
import {
    ArticleDetailsCodeBlock,
} from 'entities/Article/ui/ArticleDetailsCodeBlock/ArticleDetailsCodeBlock';
import {
    ArticleDetailsImageBlock,
} from 'entities/Article/ui/ArticleDetailsImageBlock/ArticleDetailsImageBlock';
import {
    ArticleDetailsTextBlock,
} from 'entities/Article/ui/ArticleDetailsTextBlock/ArticleDetailsTextBlock';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import cls from './ArticleDetailsBlock.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { selectError } from '../../model/selectors/selectError/selectError';
import { selectIsLoading } from '../../model/selectors/selectIsLoading/selectIsLoading';
import { selectData } from '../../model/selectors/selectData/selectData';
import { ArticleBlock } from '../../model/types/article';

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
    const isLoading = useSelector(selectIsLoading);
    const article = useSelector(selectData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case 'CODE':
                return (
                    <ArticleDetailsCodeBlock
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case 'TEXT':
                return (
                    <ArticleDetailsTextBlock
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case 'IMAGE':
                return (
                    <ArticleDetailsImageBlock
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);

    useInitialEffect(() => {
        if (articleId) dispatch(fetchArticleById(articleId));
    });

    let content;
    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} height={200} />
                <Skeleton className={cls.skeleton} height={200} />
            </div>
        );
    } else if (error) {
        content = <Text variant="error" text={error} align="center" />;
    } else if (!article) {
        content = <Text variant="error" text={t('articleNotFound')} align="center" />;
    } else {
        content = (
            <div>
                <div className={cls.avatarWrapper}>
                    <Avatar size="medium" src={article.img} className={cls.avatar} />
                </div>
                <Text
                    size={article.title.length > 50 ? 'small' : 'medium'}
                    title={article.title}
                    text={article.subtitle}
                    className={cls.title}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article.createdAt} />
                </div>
                {article.blocks.map((block) => renderBlock(block))}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsBlock, {}, [classname])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
