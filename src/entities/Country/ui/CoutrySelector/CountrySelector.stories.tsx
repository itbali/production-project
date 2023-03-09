import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { CountrySelector } from './CoutrySelector';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/CountrySelector',
    component: CountrySelector,
    argTypes: {
    },
    args: {
    },
} as ComponentMeta<typeof CountrySelector>;

const Template: ComponentStory<typeof CountrySelector> = (args) => <CountrySelector {...args} />;

export const CountrySelectorLight = Template.bind({});
export const CountrySelectorDark = Template.bind({});
CountrySelectorDark.decorators = [ThemeDecorator(Theme.DARK)];
