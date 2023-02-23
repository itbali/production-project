import { classNames } from 'helpers/classNames';
import { MouseEvent, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/ui/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    children?: React.ReactNode,
    className?: string,
    isOpen?: boolean,
    onClose?: () => void,
}

export const Modal = (props: ModalProps) => {
    const {
        children, className, isOpen, onClose,
    } = props;
    const mods: Record<string, boolean> = {
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
