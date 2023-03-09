import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Spinner } from 'shared/ui/Spinner';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const filteredRoutes = useMemo(() => Object.values(routeConfig).filter((route) => (
        !route.authOnly || (route.authOnly && isAuth))), [isAuth]);
    const routes = useMemo(() => (filteredRoutes
        .map(({
            path,
            element,
        }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <div className="page-wrapper">
                        {element}
                    </div>
                )}
            />
        ))), [filteredRoutes]);
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                {routes}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
