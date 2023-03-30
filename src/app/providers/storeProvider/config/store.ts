import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/storeProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { ScrollSaveReducer } from 'features/ScrollSave';
import { StateSchema, ThunkExtraArgument } from './StateSchema';

export const createReduxStore = (
    InitialState?:StateSchema,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: ScrollSaveReducer,
    };
    const extraArgument: ThunkExtraArgument = {
        api: $api,
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
