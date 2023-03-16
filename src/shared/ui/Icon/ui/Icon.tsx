import { classNames } from 'helpers/classNames';
import React from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string
}

export const Icon = (props: IconProps) => {
    const { className, Svg } = props;
    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
};
