import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (
    args,
) => <ArticleRecommendationsList {...args} />;

export const ArticleRecommendationsListPrimary = Template.bind({});
export const ArticleRecommendationsListDark = Template.bind({});
ArticleRecommendationsListDark.decorators = [ThemeDecorator(Theme.DARK)];
