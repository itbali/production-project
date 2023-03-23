import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import AddComment from './AddComment';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'entities/Comments/AddComment',
    component: AddComment,
    argTypes: {
        onSendComment: { action: 'onSendComment' },
    },
    args: {},
} as ComponentMeta<typeof AddComment>;

const Template: ComponentStory<typeof AddComment> = (args) => <AddComment {...args} />;

export const AddCommentPrimary = Template.bind({});
AddCommentPrimary.decorators = [StoreDecorator({
    addComment: { text: 'test' },
})];
export const AddCommentDark = Template.bind({});
AddCommentDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    addComment: { text: 'test' },
})];
