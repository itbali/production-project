import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { LoginModal as LoginModalComponent } from './LoginModal';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'features/LoginModal',
    component: LoginModalComponent,
    argTypes: {
        isOpened: {
            control: 'boolean',
            defaultValue: true,
        },
        onClose: {
            action: 'onClose',
        },
    },
} as ComponentMeta<typeof LoginModalComponent>;

const Template: ComponentStory<typeof LoginModalComponent> = (
    args,
) => <LoginModalComponent {...args} />;

export const LoginModal = Template.bind({});

export const LoginModalDark = Template.bind({});
LoginModalDark.decorators = [ThemeDecorator(Theme.DARK)];
