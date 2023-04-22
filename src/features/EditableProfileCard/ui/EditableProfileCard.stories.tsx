import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { EditableProfileCard } from './EditableProfileCard';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (
    args,
) => <EditableProfileCard {...args} />;

export const EditableProfileCardPrimary = Template.bind({});
export const EditableProfileCardDark = Template.bind({});
EditableProfileCardDark.decorators = [ThemeDecorator(Theme.DARK)];
