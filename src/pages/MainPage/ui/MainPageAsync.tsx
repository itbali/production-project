import { lazy } from 'react';

const MainPageAsync = lazy(() => new Promise((resolve) => {
    // just imitating loading
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));

export default MainPageAsync;
