import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/Comments/CommentCard',
    component: CommentCard,
    argTypes: {
        isLoading: { control: 'boolean' },
    },
    args: {
        isLoading: false,
        comment:
            {
                id: '2',
                text: 'some comment 2',
                user: { id: '2', username: 'test2' },
            },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const CommentCardPrimary = Template.bind({});
export const CommentCardLoading = Template.bind({});
CommentCardLoading.args = {
    isLoading: true,
};
export const CommentCardDark = Template.bind({});
CommentCardDark.decorators = [ThemeDecorator(Theme.DARK)];
