import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        theme: {
            control: 'select',
            options: [
                undefined,
                ButtonTheme.CLEAR,
                ButtonTheme.OUTLINE,
                ButtonTheme.BACKGROUND,
                ButtonTheme.BACKGROUND_INVERTED,
            ],
        },
        isSquare: {
            control: 'boolean',
        },
        size: {
            control: 'select',
            options: [undefined, 'size_s', 'size_m', 'size_l', 'size_xl'],
        },
        children: {
            control: 'text',
        },
    },
    args: {
        children: 'Button',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    size: 'size_s',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    size: 'size_l',
};

export const PrimaryExtraLarge = Template.bind({});
PrimaryExtraLarge.args = {
    size: 'size_xl',
};

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    isSquare: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareDark = Template.bind({});
SquareDark.args = {
    children: '>',
    isSquare: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];
