import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/AuthByUserName';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { ArticleDetailsSchema } from 'entities/Article';
import { createReducerManager } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
}

export type StateSchemaKey = keyof StateSchema;
export interface reduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager: ReturnType<typeof createReducerManager>;
}

export interface ThunkExtraArgument {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}
export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArgument,
    state: StateSchema,
}
