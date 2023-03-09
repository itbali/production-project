import type { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'helpers/components/DynamicModuleLoader';

export const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?:ReducersList
)=> (StoryComponent: Story): JSX.Element => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }} >
        <StoryComponent />
    </StoreProvider>
);
 
