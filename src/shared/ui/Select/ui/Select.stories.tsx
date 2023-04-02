import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Select } from './Select';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
    },
    args: {
        options: [
            {
                value: '1',
                content: 'Option 1',
            },
            {
                value: '2',
                content: 'Option 2',
            },
        ],
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectWithLabel = Template.bind({});
SelectWithLabel.args = {
    label: 'Label',
};
export const SelectWithoutLabel = Template.bind({});
SelectWithoutLabel.args = {
    label: '',
};
export const SelectWithLabelDark = Template.bind({});
SelectWithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SelectWithoutLabelDark = Template.bind({});
SelectWithoutLabelDark.decorators = [ThemeDecorator(Theme.DARK)];
SelectWithoutLabelDark.args = {
    label: '',
};
export const SelectWithLabelGreen = Template.bind({});
SelectWithLabelGreen.decorators = [ThemeDecorator(Theme.GREEN)];
