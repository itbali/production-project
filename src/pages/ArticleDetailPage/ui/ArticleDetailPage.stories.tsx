import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import ArticleDetailPage from './ArticleDetailPage';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/ArticleDetailPage',
    component: ArticleDetailPage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailPage>;

const Template: ComponentStory<typeof ArticleDetailPage> = (
    args,
) => <ArticleDetailPage {...args} />;

export const ArticleDetailPagePrimary = Template.bind({});
export const ArticleDetailPageDark = Template.bind({});
ArticleDetailPageDark.decorators = [ThemeDecorator(Theme.DARK)];
