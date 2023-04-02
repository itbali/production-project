import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <ArticleSortSelector {...args} />
);

export const ArticleSortSelectorPrimary = Template.bind({});
export const ArticleSortSelectorDark = Template.bind({});
ArticleSortSelectorDark.decorators = [ThemeDecorator(Theme.DARK)];
