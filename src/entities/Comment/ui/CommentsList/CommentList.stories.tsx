import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { CommentList } from './CommentList';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/Comments/CommentList',
    component: CommentList,
    argTypes: {
        isLoading: { control: 'boolean' },
        error: { control: 'text' },
        comments: { control: 'array' },
    },
    args: {
        isLoading: false,
        error: '',
        comments: [
            {
                id: '1',
                text: 'some comment',
                user: { id: '1', username: 'test' },
            },
            {
                id: '2',
                text: 'some comment 2',
                user: { id: '2', username: 'test2' },
            },
        ],
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const CommentListPrimary = Template.bind({});
export const CommentsListLoading = Template.bind({});
CommentsListLoading.args = {
    isLoading: true,
};
export const CommentsListEmpty = Template.bind({});
CommentsListEmpty.args = {
    comments: [],
};
export const CommentsListError = Template.bind({});
CommentsListError.args = {
    error: 'error',
};
export const CommentListDark = Template.bind({});
CommentListDark.decorators = [ThemeDecorator(Theme.DARK)];
