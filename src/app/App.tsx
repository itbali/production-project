import './styles/index.scss';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { SideBar } from 'widgets/SideBar';

import 'shared/config/i18n/i18n';
import { Suspense } from 'react';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>...</div>}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
