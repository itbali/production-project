import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../types/user';
import { selectRoles } from '../selectRoles/selectRoles';

export const selectIsManager = createSelector(
    selectRoles,
    (roles) => roles.includes(UserRole.MANAGER),
);
