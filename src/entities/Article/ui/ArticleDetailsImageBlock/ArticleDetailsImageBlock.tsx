import { classNames } from 'helpers/classNames';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text';
import cls from './ArticleDetailsImageBlock.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleDetailsImageBlockProps {
    block: ArticleImageBlock
    className?: string;
}

export const ArticleDetailsImageBlock = memo((props: ArticleDetailsImageBlockProps) => {
    const { className, block } = props;
    return (
        <section className={classNames(cls.ArticleDetailsImageBlock, {}, [className])}>
            <img
                className={cls.image}
                src={block.src}
                alt={block.title}
            />
            {block.title && <Text text={block.title} align="center" />}
        </section>
    );
});
