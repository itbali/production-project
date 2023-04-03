import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'entities/Article/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailPageHeader>;

const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args) => (
    <ArticleDetailPageHeader {...args} />
);

export const ArticleDetailPageHeaderPrimary = Template.bind({});
export const ArticleDetailPageHeaderDark = Template.bind({});
ArticleDetailPageHeaderDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ArticleDetailPageHeaderAuthorized = Template.bind({});
ArticleDetailPageHeaderAuthorized.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
        },
    },
    articleDetails: {
        data: {
            user: {
                id: '1',
            },
        },
    },
})];
