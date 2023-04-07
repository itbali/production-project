import { MutableRefObject, useEffect } from 'react';

interface useInfinitiveScrollProps {
    triggerRef: MutableRefObject<HTMLElement> ;
    wrapperRef: MutableRefObject<HTMLElement>;
    onIntersect?: () => void;
}

export const useInfinitiveScroll = (props: useInfinitiveScrollProps) => {
    const { triggerRef, wrapperRef, onIntersect } = props;

    useEffect(() => {
        if (!triggerRef || !wrapperRef || !onIntersect) {
            return;
        }

        const options = {
            root: wrapperRef.current,
            rootMargin: '0px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onIntersect();
            }
        }, options);

        observer.observe(triggerRef.current);
        return () => observer.disconnect();
    }, [onIntersect, triggerRef, wrapperRef]);
};
