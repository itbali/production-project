import { lazy } from 'react';

const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // just imitating loading
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));

export default AboutPageAsync;
