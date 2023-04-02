import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { Text } from './Text';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        title: {
            control: 'text',
        },
        text: {
            control: 'text',
        },
        variant: {
            control: 'select',
            options: [undefined, 'primary', 'error'],
        },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Title = Template.bind({});
Title.args = {
    title: 'Title',
};

export const TitleDark = Template.bind({});
TitleDark.args = {
    title: 'Title',
};
TitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleAndText = Template.bind({});
TitleAndText.args = {
    title: 'Title',
    text: 'Text',
};

export const TitleAndTextDark = Template.bind({});
TitleAndTextDark.args = {
    title: 'Title',
    text: 'Text',
};
TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextGreen = Template.bind({});
OnlyTextGreen.args = {
    text: 'Text',
};
OnlyTextGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const OnlyTitleGreen = Template.bind({});
OnlyTitleGreen.args = {
    title: 'Title',
};
OnlyTitleGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const TitleAndTextGreen = Template.bind({});
TitleAndTextGreen.args = {
    title: 'Title',
    text: 'Text',
};
TitleAndTextGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const TitleAndTextSizeSmall = Template.bind({});
TitleAndTextSizeSmall.args = {
    title: 'Title',
    text: 'Text',
    size: 'small',
};
export const TitleAndTextSizeMedium = Template.bind({});
TitleAndTextSizeMedium.args = {
    title: 'Title',
    text: 'Text',
    size: 'medium',
};
export const TitleAndTextSizeLarge = Template.bind({});
TitleAndTextSizeLarge.args = {
    title: 'Title',
    text: 'Text',
    size: 'large',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    variant: 'error',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title',
    text: 'Text',
    variant: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
