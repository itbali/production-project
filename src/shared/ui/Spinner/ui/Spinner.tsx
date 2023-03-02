import { classNames } from 'helpers/classNames';
import { memo } from 'react';
import cls from './Spinner.module.scss';

export const Spinner = memo(() => (
    <div className={classNames(cls.loaderWrapper)}>
        <span className={classNames(cls.loader)} />
    </div>
));
