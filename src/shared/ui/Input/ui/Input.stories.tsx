import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { Input as InputComponent } from './Input';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Input',
    component: InputComponent,
    argTypes: {
        placeholder: {
            control: 'text',
            defaultValue: '',
        },
        value: {
            control: 'text',
        },
        onChange: {
            action: 'onChange',
        },
    },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
    placeholder: 'Label',
};
export const InputWithLabelAndValue = Template.bind({});
InputWithLabelAndValue.args = {
    placeholder: 'Label',
    value: 'Value',
};
export const InputDark = Template.bind({});
InputDark.decorators = [ThemeDecorator(Theme.DARK)];
