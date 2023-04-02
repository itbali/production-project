import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { AppLink as AppLinkComponent, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/AppLink',
    component: AppLinkComponent,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
            defaultValue: 'Link',
        },
        theme: {
            control: {
                type: 'select',
                options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY],
            },
        },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLinkComponent>;

const Template: ComponentStory<typeof AppLinkComponent> = (args) => <AppLinkComponent {...args} />;

export const AppLink = Template.bind({});
export const AppLinkSecondary = Template.bind({});
AppLinkSecondary.args = {
    theme: AppLinkTheme.SECONDARY,
};

export const AppLinkDark = Template.bind({});
AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];
export const AppLinkDarkSecondary = Template.bind({});
AppLinkDarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];
AppLinkDarkSecondary.args = {
    theme: AppLinkTheme.SECONDARY,
};

export const AppLinkGreen = Template.bind({});
AppLinkGreen.decorators = [ThemeDecorator(Theme.GREEN)];
export const AppLinkGreenSecondary = Template.bind({});
AppLinkGreenSecondary.decorators = [ThemeDecorator(Theme.GREEN)];
AppLinkGreenSecondary.args = {
    theme: AppLinkTheme.SECONDARY,
};
