import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const ArticleTypeTabsPrimary = Template.bind({});
export const ArticleTypeTabsDark = Template.bind({});
ArticleTypeTabsDark.decorators = [ThemeDecorator(Theme.DARK)];
