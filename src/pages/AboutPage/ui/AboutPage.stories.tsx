import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import AboutPageComponent from './AboutPage';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPageComponent,
    argTypes: {
    },
    args: {
    },
} as ComponentMeta<typeof AboutPageComponent>;

const Template: ComponentStory<typeof AboutPageComponent> = () => (
    <AboutPageComponent />
);

export const AboutPage = Template.bind({});
export const AboutPageDark = Template.bind({});
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
