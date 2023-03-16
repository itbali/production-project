import { classNames } from 'helpers/classNames';
import React, { memo } from 'react';
import { Code } from 'shared/ui/Code';
import cls from './ArticleDetailsCodeBlock.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleDetailsImageBlockProps {
    block: ArticleCodeBlock
    classname?: string;
}

export const ArticleDetailsCodeBlock = memo((props: ArticleDetailsImageBlockProps) => {
    const { classname, block } = props;
    return (
        <div className={classNames(cls.ArticleDetailsCodeBlock, {}, [classname])}>
            <Code text={block.code} />
        </div>
    );
});
