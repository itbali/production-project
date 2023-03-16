import { classNames } from 'helpers/classNames';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text';
import cls from './ArticleDetailsImageBlock.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleDetailsImageBlockProps {
    block: ArticleImageBlock
    classname?: string;
}

export const ArticleDetailsImageBlock = memo((props: ArticleDetailsImageBlockProps) => {
    const { classname, block } = props;
    return (
        <div className={classNames(cls.ArticleDetailsImageBlock, {}, [classname])}>
            <img
                className={cls.image}
                src={block.src}
                alt={block.title}
            />
            {block.title && <Text text={block.title} align="center" />}
        </div>
    );
});
