import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import { EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { AddCommentSchema } from 'features/AddComment';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollSaveSchema } from 'features/ScrollSave';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailPage/model/types';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/EditableProfileCard';
import { createReducerManager } from './reducerManager';

export interface StateSchema {
    user: UserSchema,
    scrollSave: ScrollSaveSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    addComment?: AddCommentSchema,
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema,
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
