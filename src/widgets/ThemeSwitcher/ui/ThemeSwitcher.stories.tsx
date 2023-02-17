import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { ThemeSwitcher as ThemeSwitcherComponent } from './ThemeSwitcher';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcherComponent,
    argTypes: {
    },
    args: {
    },
} as ComponentMeta<typeof ThemeSwitcherComponent>;

const Template: ComponentStory<typeof ThemeSwitcherComponent> = () => <ThemeSwitcherComponent />;

export const ThemeSwitcher = Template.bind({});
export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
