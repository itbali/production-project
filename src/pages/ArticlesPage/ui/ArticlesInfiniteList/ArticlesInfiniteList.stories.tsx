import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticlesInfiniteList >;

const Template: ComponentStory<typeof ArticlesInfiniteList > = (
    args,
) => <ArticlesInfiniteList {...args} />;

export const ArticlesInfiniteListPrimary = Template.bind({});
export const ArticlesInfiniteListDark = Template.bind({});
ArticlesInfiniteListDark.decorators = [ThemeDecorator(Theme.DARK)];
