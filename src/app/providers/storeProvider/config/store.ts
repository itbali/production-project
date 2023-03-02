import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/storeProvider/config/reducerManager';
import { StateSchema } from './StateSchema';

export const createReduxStore = (
    InitialState?:StateSchema,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };
    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__ || false,
        preloadedState: InitialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

const store = createReduxStore();
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
