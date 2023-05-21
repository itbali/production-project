import React from 'react';
import { rest } from 'msw';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'features/Article/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {},
    args: {},
    parameters: {
        msw: {
            handlers: [
                rest.get(`${__API__}/articles`, (req, res, ctx) => res(
                    ctx.json(
                        Array(3).fill(0).map((e, i) => ({ ...mockArticle, id: String(i) })),
                    ),
                )),
            ],
        },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (
    args,
) => <ArticleRecommendationsList {...args} />;

export const ArticleRecommendationsListPrimary = Template.bind({});
export const ArticleRecommendationsListDark = Template.bind({});
ArticleRecommendationsListDark.decorators = [ThemeDecorator(Theme.DARK)];
