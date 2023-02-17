import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import MainPageComponent from './MainPage';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'pages/MainPage',
    component: MainPageComponent,
    argTypes: {
    },
    args: {
    },
} as ComponentMeta<typeof MainPageComponent>;

const Template: ComponentStory<typeof MainPageComponent> = () => <MainPageComponent />;

export const MainPage = Template.bind({});
export const MainPageDark = Template.bind({});
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
