import { classNames } from 'helpers/classNames';
import React from 'react';
import cls from './ArticleDetailsImageBlock.module.scss';

interface ArticleDetailsImageBlockProps {
	classname?: string;
}

function ArticleDetailsImageBlock(props: ArticleDetailsImageBlockProps) {
    const { classname } = props;
    return (
        <div className={classNames(cls.ArticleDetailsImageBlock, {}, [classname])}>
            ArticleDetailsImageBlock
        </div>
    );
}

export default ArticleDetailsImageBlock;
