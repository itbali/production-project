import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { LoginForm as LoginFormComponent } from './LoginForm';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

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
