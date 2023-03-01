import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import LoginForm from './LoginForm';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (
    args,
) => <LoginForm {...args} />;

export const LoginFormComponent = Template.bind({});

export const LoginFormDark = Template.bind({});
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoginFormWithError = Template.bind({});
LoginFormWithError.decorators = [StoreDecorator({
    loginForm: { error: 'error' },
})];

export const LoginFormWithErrorDark = Template.bind({});
LoginFormWithErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { error: 'error' },
    }),
];

export const LoginFormWithLoading = Template.bind({});
LoginFormWithLoading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];

export const LoginFormWithLoadingDark = Template.bind({});
LoginFormWithLoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
