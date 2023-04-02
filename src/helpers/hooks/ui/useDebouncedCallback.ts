import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebouncedCallback = (callback: (...args: any[]) => void, delay: number) => {
    const timer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};
