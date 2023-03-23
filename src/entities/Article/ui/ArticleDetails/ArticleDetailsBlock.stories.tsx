import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { ArticleDetailsBlock } from './ArticleDetailsBlock';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'entities/Article/ArticleDetailsBlock',
    component: ArticleDetailsBlock,
    argTypes: {},
    args: {
        articleId: '1',
    },
} as ComponentMeta<typeof ArticleDetailsBlock>;

const Template: ComponentStory<typeof ArticleDetailsBlock> = (
    args,
) => <ArticleDetailsBlock {...args} />;

export const ArticleDetailsBlockLight = Template.bind({});
ArticleDetailsBlockLight.decorators = [StoreDecorator({
    articleDetails: {
        data: mockArticle,
    },
})];
export const ArticleDetailsBlockDark = Template.bind({});
ArticleDetailsBlockDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
        data: mockArticle,
    },
})];
export const ArticleDetailsBlockLoading = Template.bind({});
ArticleDetailsBlockLoading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];
export const ArticleDetailsBlockError = Template.bind({});
ArticleDetailsBlockError.decorators = [StoreDecorator({
    articleDetails: {
        error: 'Error',
    },
})];
