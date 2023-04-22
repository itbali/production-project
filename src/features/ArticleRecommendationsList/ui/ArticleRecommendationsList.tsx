import { memo } from 'react';
import { classNames } from 'helpers/classNames';
import { ArticlesList } from 'entities/Article';
import { Text } from 'shared/ui/Text';
import cls from 'pages/ArticleDetailPage/ui/ArticleDetailPage/ArticleDetailPage.module.scss';
import { VStack } from 'shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { useArticleRecommendationsList } from '../api/ArticleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string,
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, error, isLoading } = useArticleRecommendationsList(3);

    if (error) {
        return (
            <Text text={error.toString()} variant="error" />
        );
    }

    return (
        <VStack
            className={classNames('', {}, [className])}
            gap={12}
        >
            <Text size="large" className={cls.commentTitle} title={t('recommend')} />
            <ArticlesList
                articles={articles}
                isLoading={isLoading}
                view="grid"
                target="_blank"
            />

        </VStack>
    );
});
