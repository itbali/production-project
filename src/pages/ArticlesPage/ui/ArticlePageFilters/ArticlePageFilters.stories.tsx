import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticlePageFilters } from './ArticlePageFilters';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'page/Article/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => (
    <ArticlePageFilters {...args} />
);

export const ArticlePageFiltersPrimary = Template.bind({});
export const ArticlePageFiltersDark = Template.bind({});
ArticlePageFiltersDark.decorators = [ThemeDecorator(Theme.DARK)];
