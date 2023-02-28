import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import { useDispatch } from 'react-redux';
import { StateSchema } from './StateSchema';

const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
};

export const createReduxStore = (InitialState?:StateSchema) => configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__ || false,
    preloadedState: InitialState,
});

const store = createReduxStore();
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
