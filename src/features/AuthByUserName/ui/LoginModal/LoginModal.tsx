import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Spinner } from 'shared/ui/Spinner';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
    className?: string,
    isOpened: boolean,
    onClose: () => void,
}

export const LoginModal = ({
    className, isOpened, onClose,
}: LoginModalProps) => (
    <Modal
        isOpen={isOpened}
        onClose={onClose}
        className={className}
        lazy
    >
        <Suspense fallback={<Spinner />}>
            <LoginFormAsync onSuccessfulLogin={onClose} />
        </Suspense>
    </Modal>
);
