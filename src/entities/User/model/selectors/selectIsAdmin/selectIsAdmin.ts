import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../types/user';
import { selectRoles } from '../selectRoles/selectRoles';

export const selectIsAdmin = createSelector(
    selectRoles,
    (roles) => roles.includes(UserRole.ADMIN),
);
