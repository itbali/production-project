import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { mockedComment } from 'shared/assets/test/mockedComment';
import ArticleDetailPage from './ArticleDetailPage';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'pages/ArticleDetailPage',
    component: ArticleDetailPage,
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            data: mockArticle,
        },
        articleDetailsPage: {
            articleDetailsComments: {
                entities: {
                    1: mockedComment,
                },
                ids: [1],
            },
        },
    })],
} as ComponentMeta<typeof ArticleDetailPage>;

const Template: ComponentStory<typeof ArticleDetailPage> = (args) => (
    <ArticleDetailPage {...args} />
);

export const ArticleDetailsPrimary = Template.bind({});
export const ArticleDetailsDark = Template.bind({});
ArticleDetailsDark.decorators = [ThemeDecorator(Theme.DARK)];
