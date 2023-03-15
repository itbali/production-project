import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        width: {
            control: {
                type: 'number',
            },
        },
        height: {
            control: {
                type: 'number',
            },
        },
        borderRadius: {
            control: {
                type: 'number',
            },
        },
    },
    args: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (
    args,
) => <Skeleton {...args} />;

export const SkeletonLightText = Template.bind({});
export const SkeletonLightBlock = Template.bind({});
SkeletonLightBlock.args = {
    height: 100,
    width: '100%',
};
export const SkeletonRounded = Template.bind({});
SkeletonRounded.args = {
    borderRadius: '100%',
    height: 100,
    width: 100,
};
export const SkeletonDarkText = Template.bind({});
SkeletonDarkText.decorators = [ThemeDecorator(Theme.DARK)];
