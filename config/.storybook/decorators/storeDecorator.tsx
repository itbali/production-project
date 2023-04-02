import type { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'helpers/components/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentReducer } from 'features/AddComment/model/slice/addCommentSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailPage/model/slice';

export const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    addComment: addCommentReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?:ReducersList
)=> (StoryComponent: Story): JSX.Element => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }} >
        <StoryComponent />
    </StoreProvider>
);

