import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Avatar } from './Avatar';
import AvatarImg from '../../../assets/test/storybook-avatar.png';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
        alt: {
            control: {
                type: 'text',
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
    args: {
        src: AvatarImg,
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarSmall = Template.bind({});
export const AvatarSmallDark = Template.bind({});
AvatarSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AvatarMedium = Template.bind({});
AvatarMedium.args = {
    size: 'medium',
};
export const AvatarMediumDark = Template.bind({});
AvatarMediumDark.args = {
    size: 'medium',
};
AvatarMediumDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AvatarLarge = Template.bind({});
AvatarLarge.args = {
    size: 'large',
};
export const AvatarLargeDark = Template.bind({});
AvatarLargeDark.args = {
    size: 'large',
};
AvatarLargeDark.decorators = [ThemeDecorator(Theme.DARK)];
