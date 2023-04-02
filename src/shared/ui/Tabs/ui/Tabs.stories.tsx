import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Tabs } from './Tabs';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        onTabClick: { action: 'onTabClick' },
    },
    args: {
        tabs: [
            { value: 'tab1', content: 'tab1' },
            { value: 'tab2', content: 'tab2' },
        ],
        value: 'tab2',
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsPrimary = Template.bind({});
export const TabsDark = Template.bind({});
TabsDark.decorators = [ThemeDecorator(Theme.DARK)];
export const GreenTabs = Template.bind({});
GreenTabs.decorators = [ThemeDecorator(Theme.GREEN)];
