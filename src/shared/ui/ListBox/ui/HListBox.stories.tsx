import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { HListBox } from './HListBox';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/ListBox',
    component: HListBox,
    argTypes: {
        onChange: { action: 'onChange', table: { disable: true } },
    },
    args: {
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2' },
            { value: '3', content: '3', disabled: true },
            { value: '4', content: '4' },
            { value: '5', content: '5' },
        ],
        defaultValue: '1',
        value: '1',
    },
    decorators: [
        (Story) => (<div style={{ padding: '200px' }}><Story /></div>),
    ],
} as ComponentMeta<typeof HListBox>;

const Template: ComponentStory<typeof HListBox> = (args) => <HListBox {...args} />;

export const ListBoxPrimary = Template.bind({});
export const ListBoxDark = Template.bind({});
ListBoxDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ListBoxGreen = Template.bind({});
ListBoxGreen.decorators = [ThemeDecorator(Theme.GREEN)];
export const ListBoxDisabled = Template.bind({});
ListBoxDisabled.args = {
    disabled: true,
};
export const ListBoxDisabledDark = Template.bind({});
ListBoxDisabledDark.args = {
    disabled: true,
};
ListBoxDisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ListBoxDisabledGreen = Template.bind({});
ListBoxDisabledGreen.args = {
    disabled: true,
};
ListBoxDisabledGreen.decorators = [ThemeDecorator(Theme.GREEN)];
export const ListBoxDropdownUp = Template.bind({});
ListBoxDropdownUp.args = {
    direction: 'up right',
};
export const ListBoxDropdownUpDark = Template.bind({});
ListBoxDropdownUpDark.args = {
    direction: 'up right',
};
ListBoxDropdownUpDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ListBoxDropdownUpGreen = Template.bind({});
ListBoxDropdownUpGreen.args = {
    direction: 'up right',
};
export const ListBoxWithLabel = Template.bind({});
ListBoxWithLabel.args = {
    label: 'Label',
};
export const ListBoxWithLabelDark = Template.bind({});
ListBoxWithLabelDark.args = {
    label: 'Label',
};
ListBoxWithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ListBoxWithLabelGreen = Template.bind({});
ListBoxWithLabelGreen.args = {
    label: 'Label',
};
ListBoxWithLabelGreen.decorators = [ThemeDecorator(Theme.GREEN)];
