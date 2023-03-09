import { lazy } from 'react';

const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // just imitating loading
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));

export default ProfilePageAsync;
