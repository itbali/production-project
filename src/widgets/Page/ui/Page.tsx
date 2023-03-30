import {
    MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { classNames } from 'helpers/classNames';
import {
    useAppDispatch,
    useInfinitiveScroll,
    useInitialEffect,
    useThrottledCallback,
} from 'helpers/hooks';
import { ScrollSaveActions, selectScrollPositionByPath } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/storeProvider';
import cls from './Page.module.scss';

interface PagePorps {
    children: ReactNode;
    className?: string;
    onScrollEnd?: () => void;
}

export const Page = (props: PagePorps) => {
    const { children, className, onScrollEnd } = props;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => selectScrollPositionByPath(state, location.pathname),
    );
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinitiveScroll({ wrapperRef, triggerRef, onIntersect: onScrollEnd });

    const onSectionScroll = useThrottledCallback((event: UIEvent<HTMLElement>) => {
        console.log('scroll');
        dispatch(
            ScrollSaveActions.setScrollPosition(
                { path: location.pathname, position: event.currentTarget.scrollTop },
            ),
        );
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onSectionScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
