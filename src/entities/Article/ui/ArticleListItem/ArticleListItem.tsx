import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'helpers/classNames';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card';
import { useHover } from 'helpers/hooks/ui/useHover';
import { Avatar } from 'shared/ui/Avatar';
import { Button, Variant } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ArticleDetailsTextBlock } from '../ArticleDetailsTextBlock/ArticleDetailsTextBlock';
import { Article, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: 'grid' | 'list',
    target?: HTMLAttributeAnchorTarget,
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const [isHovered, bindHover] = useHover();
    const { t } = useTranslation();

    const articleTextBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;

    if (view === 'list') {
        return (

            <div {...bindHover} className={classNames('', {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size="small" src={article.user.avatar!} alt={article.user.username} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {
                        articleTextBlock
                    && (
                        <ArticleDetailsTextBlock
                            block={articleTextBlock}
                            className={cls.textBlock}
                        />
                    )
                    }
                    <div className={cls.footer}>
                        <AppLink target={target} to={RoutePath.article_detail + article.id}>
                            <Button variant={Variant.OUTLINE}>{t('readMore')}</Button>
                        </AppLink>
                        <div>
                            <Text text={String(article.views)} className={cls.views} />
                            <Icon Svg={EyeIcon} />
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            {...bindHover}
            to={RoutePath.article_detail + article.id}
            className={classNames('', {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
