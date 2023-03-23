import { classNames } from 'helpers/classNames';
import React, { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        width = '100%',
        height = 30,
        borderRadius = 3,
    } = props;
    const style: CSSProperties = {
        width,
        height,
        borderRadius,
    };
    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={style}
        />
    );
});
