import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import ArticleDetailPage from './ArticleDetailPage';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'pages/ArticleDetailPage',
    component: ArticleDetailPage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailPage>;

const Template: ComponentStory<typeof ArticleDetailPage> = (
    args,
) => <ArticleDetailPage {...args} />;

export const ArticleDetailPagePrimary = Template.bind({});
ArticleDetailPagePrimary.decorators = [StoreDecorator({
    articleDetails: {
        data: mockArticle,
    },
})];
export const ArticleDetailPageDark = Template.bind({});
ArticleDetailPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
        data: mockArticle,
    },
})];

export const ArticleDetailPageError = Template.bind({});
ArticleDetailPageError.decorators = [StoreDecorator({
    articleDetails: {
        error: 'Error',
    },
})];
export const ArticleDetailPageLoading = Template.bind({});
ArticleDetailPageLoading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];
