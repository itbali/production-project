import { Modal } from 'shared/ui/Modal';
import { useEffect, useState } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string,
    isOpened: boolean,
    onClose: () => void,
    lazy?: boolean,
}

export const LoginModal = ({
    className, isOpened, onClose, lazy,
}: LoginModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpened) {
            setIsMounted(true);
        }
    }, [isOpened]);

    if (!isMounted && lazy) {
        return null;
    }
    return (
        <Modal
            isOpen={isOpened}
            onClose={onClose}
            className={className}
        >
            <LoginForm />
        </Modal>
    );
};
