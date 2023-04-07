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
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleDetailsCodeBlock } from '../ArticleDetailsCodeBlock/ArticleDetailsCodeBlock';
import { ArticleDetailsImageBlock } from '../ArticleDetailsImageBlock/ArticleDetailsImageBlock';
import { ArticleDetailsTextBlock } from '../ArticleDetailsTextBlock/ArticleDetailsTextBlock';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { selectError } from '../../model/selectors/selectError/selectError';
import { selectIsLoading } from '../../model/selectors/selectIsLoading/selectIsLoading';
import {
    selectArticleDetailsData,
} from '../../model/selectors/selectData/selectArticleDetailsData';
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
    const article = useSelector(selectArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case 'CODE':
                return (
                    <ArticleDetailsCodeBlock
                        key={block.id}
                        block={block}
                    />
                );
            case 'TEXT':
                return (
                    <ArticleDetailsTextBlock
                        key={block.id}
                        block={block}
                    />
                );
            case 'IMAGE':
                return (
                    <ArticleDetailsImageBlock
                        key={block.id}
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
            <VStack gap={16} max justify="start" align="start">
                <HStack justify="center" max>
                    <Skeleton width={120} height={120} borderRadius="50%" />
                </HStack>
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton height={200} />
                <Skeleton height={200} />
            </VStack>
        );
    } else if (error) {
        content = <Text variant="error" text={error} align="center" />;
    } else if (!article) {
        content = <Text variant="error" text={t('articleNotFound')} align="center" />;
    } else {
        content = (
            <VStack max gap={12} align="start">
                <HStack justify="center" max>
                    <Avatar size="medium" src={article.img} />
                </HStack>
                <Text
                    size={article.title.length > 50 ? 'small' : 'medium'}
                    title={article.title}
                    text={article.subtitle}
                />
                <HStack gap={4}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article.views)} />
                </HStack>
                <HStack gap={4}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article.createdAt} />
                </HStack>
                <VStack gap={16} max>
                    {article.blocks.map((block) => renderBlock(block))}
                </VStack>
            </VStack>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack className={classNames('', {}, [classname])}>
                {content}
            </HStack>
        </DynamicModuleLoader>
    );
});
