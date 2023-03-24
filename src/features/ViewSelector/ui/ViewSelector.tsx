import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import ListIcon from 'shared/assets/icons/list.svg';
import GridIcon from 'shared/assets/icons/grid.svg';
import cls from './ViewSelector.module.scss';

type ViewSelectorProps = {
    className?: string,
    view?: 'list' | 'grid',
    onChangeView: (view: 'list' | 'grid') => void,
}

export const ViewSelector = memo((props: ViewSelectorProps) => {
    const {
        className,
        view = 'list',
        onChangeView,
    } = props;

    return (
        <div className={classNames(cls.ViewSelector, {}, [className])}>
            <Button onClick={() => onChangeView('list')}>
                <Icon className={classNames('', { [cls.unActive]: view !== 'list' })} Svg={ListIcon} />
            </Button>
            <Button onClick={() => onChangeView('grid')}>
                <Icon className={classNames('', { [cls.unActive]: view !== 'grid' })} Svg={GridIcon} />
            </Button>
        </div>
    );
});
