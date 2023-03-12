import { classNames } from 'helpers/classNames/ui/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { SideBar } from 'widgets/SideBar';

import 'shared/config/i18n/i18n';
import { Suspense, useEffect } from 'react';
import { Spinner } from 'shared/ui/Spinner';
import { selectIsInitialized, userActions } from 'entities/User';
import { useAppDispatch } from 'helpers/hooks';
import { useSelector } from 'react-redux';

function App() {
    const dispatch = useAppDispatch();
    const isInitialized = useSelector(selectIsInitialized);
    useEffect(() => {
        dispatch(userActions.initUser());
    }, [dispatch]);
    return (
        <div id="root-app" className={classNames('app')}>
            <Suspense fallback={<Spinner />}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    {isInitialized && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
