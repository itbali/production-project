import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Button } from '../../Button';
import { Dropdown } from './Dropdown';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {},
    args: {
        items: [
            {
                content: 'Item 1 long long long',
                onClick: () => 'click',
            },
            {
                content: 'Item 2 long long long',
                onClick: () => 'click',
            },
            {
                content: 'Item 3 long long long',
                onClick: () => 'click',
            },
        ],
        trigger: <Button>MENU</Button>,
    },

} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DropdownPrimary = Template.bind({});
export const DropdownDark = Template.bind({});
DropdownDark.decorators = [ThemeDecorator(Theme.DARK)];
