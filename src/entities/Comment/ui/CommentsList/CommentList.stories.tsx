import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { CommentList } from './CommentList';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/CommentList',
    component: CommentList,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const CommentListPrimary = Template.bind({});
export const CommentListDark = Template.bind({});
CommentListDark.decorators = [ThemeDecorator(Theme.DARK)];
