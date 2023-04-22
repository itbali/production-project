import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleDetailComments } from './ArticleDetailComments';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/ArticleDetailComments',
    component: ArticleDetailComments,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailComments>;

const Template: ComponentStory<typeof ArticleDetailComments> = (
    args,
) => <ArticleDetailComments {...args} />;

export const ArticleDetailCommentsPrimary = Template.bind({});
export const ArticleDetailCommentsDark = Template.bind({});
ArticleDetailCommentsDark.decorators = [ThemeDecorator(Theme.DARK)];
