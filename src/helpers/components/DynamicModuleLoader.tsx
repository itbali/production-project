import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { reduxStoreWithReducerManager, StateSchemaKey } from 'app/providers/storeProvider';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'helpers/hooks';

export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>;

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    shouldBeRemoved?: boolean;
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        shouldBeRemoved = false,
    } = props;

    const dispatch = useAppDispatch();
    const store = useStore() as reduxStoreWithReducerManager;
    const mountedReducers = Object.keys(store.reducerManager.getReducerMap());
    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            // check if reducer is already mounted
            if (mountedReducers.includes(reducerName)) return;
            store.reducerManager.add(reducerName as StateSchemaKey, reducer);
            dispatch({ type: `@INIT reducer ${reducerName}` });
        });

        return () => {
            if (shouldBeRemoved) {
                Object.keys(reducers).forEach((reducerName) => {
                    store.reducerManager.remove(reducerName as StateSchemaKey);
                });
            }
        };
    }, [dispatch, mountedReducers, reducers, shouldBeRemoved, store.reducerManager]);
    return children as JSX.Element;
};
