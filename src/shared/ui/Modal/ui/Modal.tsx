import { classNames } from 'helpers/classNames';
import {
    MouseEvent, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Mods } from 'helpers/classNames/ui/classNames';
import { Portal } from '../../Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    children?: ReactNode,
    className?: string,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [isMounted, setIsMounted] = useState(false);

    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    const element = document.body;

    const clickAwayListener = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContentClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, []);

    const onkeydown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape' && onClose) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(
        () => {
            if (isOpen) {
                document.addEventListener('keydown', onkeydown);
            }

            return () => {
                document.removeEventListener('keydown', onkeydown);
            };
        },
        [isOpen, onkeydown],
    );

    if (!isMounted && lazy) {
        return null;
    }

    return (
        <Portal element={element}>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={clickAwayListener}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
