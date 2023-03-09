import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { CurrencySelect } from './CurrencySelect';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
    },
    args: {
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const CurrencySelectLight = Template.bind({});
export const CurrencySelectDark = Template.bind({});
CurrencySelectDark.decorators = [ThemeDecorator(Theme.DARK)];
