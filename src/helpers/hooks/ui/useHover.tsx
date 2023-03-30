import { useCallback, useMemo, useState } from 'react';

type useHoverReturnType = [
    boolean,
    {
        onMouseEnter: () => void,
        onMouseLeave: () => void,
    }
];
export const useHover = ():useHoverReturnType => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => setIsHovered(true), []);
    const onMouseLeave = useCallback(() => setIsHovered(false), []);

    return useMemo(() => [
        isHovered,
        {
            onMouseEnter,
            onMouseLeave,
        },
    ], [isHovered, onMouseEnter, onMouseLeave]);
};
