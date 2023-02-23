import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import { StoreProvider } from 'app/providers/storeProvider';
import App from './app/App';
import ThemeProvider from './app/providers/themeProvider/ui/ThemeProvider';
import './app/styles/index.scss';

render(
    <StoreProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>,
    document.getElementById('root'),
);
