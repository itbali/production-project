import React, {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Spinner } from 'shared/ui/Spinner';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<Spinner />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    const routes = useMemo(() => (
        Object.values(routeConfig).map(renderWithWrapper)
    ), [renderWithWrapper]);
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                {routes}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
