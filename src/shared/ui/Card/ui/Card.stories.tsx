import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Text } from 'shared/ui/Text';
import { Card } from './Card';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {},
    args: {
        children: <Text text="text" />,
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardPrimary = Template.bind({});
export const CardDark = Template.bind({});
CardDark.decorators = [ThemeDecorator(Theme.DARK)];
export const CardGreen = Template.bind({});
CardGreen.decorators = [ThemeDecorator(Theme.GREEN)];
