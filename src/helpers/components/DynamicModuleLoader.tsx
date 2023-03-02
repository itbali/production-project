import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { reduxStoreWithReducerManager, StateSchemaKey } from 'app/providers/storeProvider';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'helpers/hooks';

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
