import { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'helpers/classNames';
import { useInfinitiveScroll } from 'helpers/hooks';
import cls from './Page.module.scss';

interface PagePorps {
    children: ReactNode;
    className?: string;
    onScrollEnd?: () => void;
}

export const Page = (props: PagePorps) => {
    const { children, className, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinitiveScroll({ wrapperRef, triggerRef, onIntersect: onScrollEnd });

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
