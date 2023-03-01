import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { reduxStoreWithReducerManager } from 'app/providers/storeProvider';
import { useAppDispatch } from 'app/providers/storeProvider/config/store';
import { StateSchemaKey } from 'app/providers/storeProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>;
type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    shouldBeRemoved?: boolean;
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, shouldBeRemoved,
    } = props;

    const dispatch = useAppDispatch();
    const store = useStore() as reduxStoreWithReducerManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]:ReducersListEntry) => {
            store.reducerManager.add(reducerName, reducer);
            dispatch({ type: `@INIT reducer ${reducerName}` });
        });

        return () => {
            if (shouldBeRemoved) {
                Object.keys(reducers).forEach((reducerName:StateSchemaKey) => {
                    store.reducerManager.remove(reducerName);
                });
            }
        };
    }, [dispatch, reducers, shouldBeRemoved, store.reducerManager]);
    return children as JSX.Element;
};
