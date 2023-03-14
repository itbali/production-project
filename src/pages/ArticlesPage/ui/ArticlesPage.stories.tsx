import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import ArticlesPage from './ArticlesPage';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/ArticlesPage',
    component: ArticlesPage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const ArticlesPagePrimary = Template.bind({});
export const ArticlesPageDark = Template.bind({});
ArticlesPageDark.decorators = [ThemeDecorator(Theme.DARK)];
