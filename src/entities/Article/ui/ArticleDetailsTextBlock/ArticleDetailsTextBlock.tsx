import { classNames } from 'helpers/classNames';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text';
import cls from './ArticleDetailsTextBlock.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleDetailsTextBlockProps {
    block: ArticleTextBlock;
    classname?: string;
}

export const ArticleDetailsTextBlock = memo((props: ArticleDetailsTextBlockProps) => {
    const { classname, block } = props;
    return (
        <div className={classNames(cls.ArticleDetailsTextBlock, {}, [classname])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map(
                (p, index) => <Text key={p} text={p} className={cls.paragraph} />,
            )}
        </div>
    );
});
