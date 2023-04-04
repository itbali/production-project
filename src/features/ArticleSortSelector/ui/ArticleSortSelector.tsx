import { memo, useMemo } from 'react';
import { classNames } from 'helpers/classNames';
import { Select, SelectOption } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortView } from 'entities/Article';
import { Card } from 'shared/ui/Card';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string,
    sort: ArticleSortView,
    order: 'asc' | 'desc',
    onChangeSortBy: (value: ArticleSortView) => void,
    onChangeSortDirection: (value: 'asc' | 'desc') => void,
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeSortBy,
        sort,
        onChangeSortDirection,
        order,
    } = props;
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOption<'asc'|'desc'>[]>(() => [
        { value: 'asc', content: t('ascending') },
        { value: 'desc', content: t('descending') },
    ], [t]);
    const sortByOptions = useMemo<SelectOption<ArticleSortView>[]>(() => [
        { value: ArticleSortView.CREATED_AT, content: t('createdAt') },
        { value: ArticleSortView.TITLE, content: t('title') },
        { value: ArticleSortView.VIEWS, content: t('views') },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Card>
                <Select
                    className={cls.sortSelect}
                    value={sort}
                    label={t('sortBy')}
                    options={sortByOptions}
                    onChange={onChangeSortBy}
                />
            </Card>
            <Card>
                <Select
                    className={cls.sortSelect}
                    value={order}
                    label={t('sortDirection')}
                    options={orderOptions}
                    onChange={onChangeSortDirection}
                />
            </Card>
        </div>
    );
});
