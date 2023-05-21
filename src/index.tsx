import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import { StoreProvider } from 'app/providers/storeProvider';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import ThemeProvider from './app/providers/themeProvider/ui/ThemeProvider';
import './app/styles/index.scss';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
