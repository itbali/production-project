import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import ThemeProvider from './app/providers/themeProvider/ui/ThemeProvider';
import './app/styles/index.scss';

render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root'),
);
