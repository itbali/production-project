import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/AuthByUserName';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailCommentsSchema } from 'pages/ArticleDetailPage';
import { AddCommentSchema } from 'features/AddComment';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollSaveSchema } from 'features/ScrollSave';
import { createReducerManager } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollSave: ScrollSaveSchema,

    // async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsComments?: ArticleDetailCommentsSchema,
    addComment?: AddCommentSchema,
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;
export interface reduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager: ReturnType<typeof createReducerManager>;
}

export interface ThunkExtraArgument {
    api: AxiosInstance,
}
export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArgument,
    state: StateSchema,
}
