import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/CommentCard',
    component: CommentCard,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const CommentCardPrimary = Template.bind({});
export const CommentCardDark = Template.bind({});
CommentCardDark.decorators = [ThemeDecorator(Theme.DARK)];
