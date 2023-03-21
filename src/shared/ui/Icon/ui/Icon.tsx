import { classNames } from 'helpers/classNames';
import React from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGElement>>;
    className?: string
}

export const Icon = (props: IconProps) => {
    const { className, Svg } = props;
    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
};
