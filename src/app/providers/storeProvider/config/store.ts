import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/storeProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { StateSchema, ThunkExtraArgument } from './StateSchema';

export const createReduxStore = (
    InitialState?:StateSchema,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };
    const extraArgument: ThunkExtraArgument = {
        api: $api,
        navigate,
    };
    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__ || false,
        preloadedState: InitialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: { extraArgument },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

const store = createReduxStore();
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
