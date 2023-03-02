import { classNames } from 'helpers/classNames/ui/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { SideBar } from 'widgets/SideBar';

import 'shared/config/i18n/i18n';
import { Suspense, useEffect } from 'react';
import { Spinner } from 'shared/ui/Spinner';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'helpers/hooks';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.initUser());
    }, [dispatch]);
    return (
        <div id="root-app" className={classNames('app')}>
            <Suspense fallback={<Spinner />}>
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
