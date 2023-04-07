import { classNames } from 'helpers/classNames';
import { MouseEvent, useCallback } from 'react';
import { Button, Variant } from '../../Button';
import { Icon } from '../../Icon';
import CopyIcon from '../../../assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string,
    text: string,
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;
    const onCopyClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} variant={Variant.CLEAR} onClick={onCopyClick}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
