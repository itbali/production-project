import { classNames } from 'helpers/classNames';
import cls from './Spinner.module.scss';

export const Spinner = () => (
    <div className={classNames(cls.loaderWrapper)}>
        <span className={classNames(cls.loader)} />
    </div>
);
