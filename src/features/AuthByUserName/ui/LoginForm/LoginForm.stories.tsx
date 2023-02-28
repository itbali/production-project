import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { LoginForm as LoginFormComponent } from './LoginForm';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginFormComponent,
    argTypes: {},
} as ComponentMeta<typeof LoginFormComponent>;

const Template: ComponentStory<typeof LoginFormComponent> = (
    args,
) => <LoginFormComponent {...args} />;

export const LoginForm = Template.bind({});

export const LoginFormDark = Template.bind({});
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoginFormWithError = Template.bind({});
LoginFormWithError.decorators = [StoreDecorator({
    login: { error: 'error' },
})];

export const LoginFormWithErrorDark = Template.bind({});
LoginFormWithErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: { error: 'error' },
    }),
];

export const LoginFormWithLoading = Template.bind({});
LoginFormWithLoading.decorators = [StoreDecorator({
    login: { isLoading: true },
})];

export const LoginFormWithLoadingDark = Template.bind({});
LoginFormWithLoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: { isLoading: true },
    }),
];
