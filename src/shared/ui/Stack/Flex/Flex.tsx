import { memo, ReactNode } from 'react';
import { classNames } from 'helpers/classNames';
import cls from './Flex.module.scss';

type Justify = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type Align = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export interface FlexProps {
    className?: string,
    children: ReactNode,
    justify?: Justify,
    align?: Align,
    direction?: Direction,
    gap?: 4 | 8 | 12 | 16 | 24,
    max?: boolean,
}

const justifyMap = {
    start: cls.JustifyStart,
    end: cls.JustifyEnd,
    center: cls.JustifyCenter,
    'space-between': cls.JustifyBetween,
    'space-around': cls.JustifyAround,
    'space-evenly': cls.JustifyEvenly,
};
const alignMap = {
    start: cls.AlignStart,
    end: cls.AlignEnd,
    center: cls.AlignCenter,
    stretch: cls.AlignStretch,
    baseline: cls.AlignBaseline,
};
const directionMap = {
    row: cls.DirectionRow,
    'row-reverse': cls.DirectionRowReverse,
    column: cls.DirectionColumn,
    'column-reverse': cls.DirectionColumnReverse,
};
const gapMap = {
    4: cls.Gap4,
    8: cls.Gap8,
    12: cls.Gap12,
    16: cls.Gap16,
    24: cls.Gap24,
};

export const Flex = memo((props: FlexProps) => {
    const {
        gap,
        max,
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'center',
    } = props;

    const mods = {
        [cls.max]: max,
    };
    return (
        <div className={classNames(cls.Flex, mods, [
            className,
            justifyMap[justify],
            alignMap[align],
            directionMap[direction],
            gap && gapMap[gap],
        ])}
        >
            {children}
        </div>
    );
});
