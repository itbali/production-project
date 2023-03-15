import { classNames } from 'helpers/classNames';
import React from 'react';
import cls from './ArticleDetailsCodeBlock.module.scss';

interface ArticleDetailsImageBlockProps {
	classname?: string;
}

function ArticleDetailsCodeBlock(props: ArticleDetailsImageBlockProps) {
    const { classname } = props;
    return (
        <div className={classNames(cls.ArticleDetailsCodeBlock, {}, [classname])}>
            ArticleDetailsCodeBlock
        </div>
    );
}

export default ArticleDetailsCodeBlock;
