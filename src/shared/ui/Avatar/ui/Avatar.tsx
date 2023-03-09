import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    src?: string,
    alt?: string,
    size?: 'small' | 'medium' | 'large',
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size = 'small',
        alt,
    } = props;
    return (
        <img
            alt={alt}
            src={src}
            className={classNames(cls.Avatar, {}, [className, cls[size]])}
        />
    );
});
