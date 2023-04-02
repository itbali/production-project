import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const ArticleViewSelectorPrimary = Template.bind({});
export const ArticleViewSelectorDark = Template.bind({});
ArticleViewSelectorDark.decorators = [ThemeDecorator(Theme.DARK)];
