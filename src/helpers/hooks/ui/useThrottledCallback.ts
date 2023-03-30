import { useCallback, useRef } from 'react';

export const useThrottledCallback = (callback: (...args: any[]) => void, delay: number) => {
    const throttledRef = useRef(false);

    return useCallback(
        (...args: any[]) => {
            if (throttledRef.current) {
                return;
            }

            throttledRef.current = true;
            callback(...args);

            setTimeout(() => {
                throttledRef.current = false;
            }, delay);
        },
        [callback, delay],
    );
};
