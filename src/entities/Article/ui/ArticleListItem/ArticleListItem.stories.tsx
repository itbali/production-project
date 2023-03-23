import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { ArticleListItem } from './ArticleListItem';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {},
    args: {
        article: mockArticle,
        view: 'grid',
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const ArticleListItemGrid = Template.bind({});
export const ArticleListItemList = Template.bind({});
ArticleListItemList.args = {
    view: 'list',
};
export const ArticleListItemDark = Template.bind({});
ArticleListItemDark.decorators = [ThemeDecorator(Theme.DARK)];
