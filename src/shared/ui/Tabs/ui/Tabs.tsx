import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'helpers/classNames';
import { Card } from '../../Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string,
    content: ReactNode,
}

interface TabsProps {
    className?: string,
    tabs: TabItem[],
    onTabClick: (tab: TabItem) => void,
    value: string,
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, onTabClick, value,
    } = props;

    const onCardClick = useCallback((tab: TabItem) => () => onTabClick(tab), [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    onClick={onCardClick(tab)}
                    key={tab.value}
                    className={cls.tab}
                    variant={tab.value === value ? 'outlined' : 'default'}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
