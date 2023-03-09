import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/storeProvider/config/store';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: StateSchema,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const navigate = useNavigate();
    const store = createReduxStore(initialState, asyncReducers, navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
