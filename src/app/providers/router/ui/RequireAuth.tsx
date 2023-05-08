import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData, selectRoles } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { UserRole } from 'entities/User/model/types/user';

interface RequireAuthProps {
    children: JSX.Element,
    roles?: UserRole[],
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(selectRoles);

    const hasRequiredRole = roles
        ? roles.some((role) => userRoles.includes(role))
        : true;

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRole) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
