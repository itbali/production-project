import { memo, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs';
import { ArticleType } from 'entities/Article';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
    className?: string,
    value: ArticleType,
    onTabClick: (tab: TabItem) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onTabClick } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('all'),
        },
        {
            value: ArticleType.IT,
            content: t('it'),
        },
        {
            value: ArticleType.ECONOMY,
            content: t('economy'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('science'),
        },
    ], [t]);
    return (
        <Tabs
            className={className}
            tabs={typeTabs}
            onTabClick={onTabClick}
            value={value}
        />
    );
});
