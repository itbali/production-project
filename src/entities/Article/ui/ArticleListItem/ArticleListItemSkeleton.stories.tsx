import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/Article/ArticleListItemSkeleton',
    component: ArticleListItemSkeleton,
    argTypes: {},
    args: {
        view: 'grid',
    },
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (
    args,
) => <ArticleListItemSkeleton {...args} />;

export const ArticleListItemSkeletonGrid = Template.bind({});
export const ArticleListItemSkeletonList = Template.bind({});
ArticleListItemSkeletonList.args = {
    view: 'list',
};
export const ArticleListItemDark = Template.bind({});
ArticleListItemDark.decorators = [ThemeDecorator(Theme.DARK)];
