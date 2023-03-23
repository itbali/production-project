import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { ArticlesList } from './ArticlesList';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/Article/ArticlesList',
    component: ArticlesList,
    argTypes: {},
    args: {
        articles: Array(10).fill(0).map((e, i) => ({ ...mockArticle, id: String(i) })),
    },
} as ComponentMeta<typeof ArticlesList>;

const Template: ComponentStory<typeof ArticlesList> = (args) => <ArticlesList {...args} />;

export const ArticlesListPrimary = Template.bind({});
export const ArticlesListGrid = Template.bind({});
ArticlesListGrid.args = {
    view: 'grid',
};
export const ArticlesListLoading = Template.bind({});
ArticlesListLoading.args = {
    isLoading: true,
};
export const ArticlesListDark = Template.bind({});
ArticlesListDark.decorators = [ThemeDecorator(Theme.DARK)];
