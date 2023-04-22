import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/storeProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { ScrollSaveReducer } from 'features/ScrollSave';
import { rtkApi } from 'shared/api/rtkApi';
import { StateSchema, ThunkExtraArgument } from './StateSchema';

export const createReduxStore = (
    InitialState?:StateSchema,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scrollSave: ScrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
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
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

const store = createReduxStore();
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
