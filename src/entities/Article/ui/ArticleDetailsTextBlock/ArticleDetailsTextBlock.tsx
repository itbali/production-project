import { classNames } from 'helpers/classNames';
import React from 'react';
import cls from './ArticleDetailsTextBlock.module.scss';

interface ArticleDetailsTextBlockProps {
	classname?: string;
}

export const ArticleDetailsTextBlock = (props: ArticleDetailsTextBlockProps) => {
    const { classname } = props;
    return (
        <div className={classNames(cls.ArticleDetailsTextBlock, {}, [classname])}>
            ArticleDetailsTextBlock
        </div>
    );
};
