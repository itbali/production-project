import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: __API__,
            prepareHeaders: (headers) => {
                headers.set('Authorization', localStorage.getItem(LOCAL_STORAGE.user) || '');
            },
        },
    ),
    endpoints: () => ({}),
});
