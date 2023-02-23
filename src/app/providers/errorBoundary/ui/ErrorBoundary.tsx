import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';
import { Spinner } from 'shared/ui/Spinner';

interface ErrorBoundaryProps {
    children: ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}

const hasValidError = (
    _error: string | Error | null | { message: string },
): boolean => true;

export class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        if (hasValidError(error)) {
            // eslint-disable-next-line no-console
            console.error(error.message, { error, errorInfo });
        } else {
            // eslint-disable-next-line no-console
            console.warn(error.message, { error, errorInfo });
        }
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback={<Spinner />}>
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}
