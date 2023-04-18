import { classNames } from 'helpers/classNames';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text';
import cls from './ArticleDetailsTextBlock.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleDetailsTextBlockProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleDetailsTextBlock = memo((props: ArticleDetailsTextBlockProps) => {
    const { className, block } = props;
    return (
        <section className={classNames(cls.ArticleDetailsTextBlock, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map(
                (p, index) => <Text key={p} text={p} className={cls.paragraph} />,
            )}
        </section>
    );
});
