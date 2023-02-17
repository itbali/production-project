import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { NotFoundPage as NotFoundPageComponent } from './NotFoundPage';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPageComponent,
    argTypes: {
    },
    args: {
    },
} as ComponentMeta<typeof NotFoundPageComponent>;

const Template: ComponentStory<typeof NotFoundPageComponent> = (args) => (
    <NotFoundPageComponent {...args} />
);

export const NotFoundPage = Template.bind({});
export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
