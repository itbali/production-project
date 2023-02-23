import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/storeProvider/config/store';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: StateSchema,
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
