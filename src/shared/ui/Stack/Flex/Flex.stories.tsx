import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Flex } from './Flex';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'path/Flex',
    component: Flex,
    argTypes: {},
    args: {
        children:
    <div>
        <div>Text 1</div>
        <div>Text 2</div>
        <div>Text 3</div>
    </div>,
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const FlexPrimary = Template.bind({});
export const FlexDark = Template.bind({});
FlexDark.decorators = [ThemeDecorator(Theme.DARK)];
export const FlexColumn = Template.bind({});
FlexColumn.args = {
    direction: 'column',
};
export const FlexColumnReverse = Template.bind({});
FlexColumnReverse.args = {
    direction: 'column-reverse',
};
export const FlexRowReverse = Template.bind({});
FlexRowReverse.args = {
    direction: 'row-reverse',
};
export const FlexJustifyStart = Template.bind({});
FlexJustifyStart.args = {
    justify: 'start',
};
export const FlexJustifyEnd = Template.bind({});
FlexJustifyEnd.args = {
    justify: 'end',
};
export const FlexJustifyCenter = Template.bind({});
FlexJustifyCenter.args = {
    justify: 'center',
};
export const FlexJustifyBetween = Template.bind({});
FlexJustifyBetween.args = {
    justify: 'space-between',
};
export const FlexJustifyAround = Template.bind({});
FlexJustifyAround.args = {
    justify: 'space-around',
};
export const FlexJustifyEvenly = Template.bind({});
FlexJustifyEvenly.args = {
    justify: 'space-evenly',
};
export const FlexAlignStart = Template.bind({});
FlexAlignStart.args = {
    align: 'start',
};
export const FlexAlignEnd = Template.bind({});
FlexAlignEnd.args = {
    align: 'end',
};
export const FlexAlignCenter = Template.bind({});
FlexAlignCenter.args = {
    align: 'center',
};
export const FlexAlignStretch = Template.bind({});
FlexAlignStretch.args = {
    align: 'stretch',
};
export const FlexAlignBaseline = Template.bind({});
FlexAlignBaseline.args = {
    align: 'baseline',
};
export const FlexGap4 = Template.bind({});
FlexGap4.args = {
    gap: 4,
};
export const FlexGap8 = Template.bind({});
FlexGap8.args = {
    gap: 8,
};
export const FlexGap12 = Template.bind({});
FlexGap12.args = {
    gap: 12,
};
export const FlexGap16 = Template.bind({});
FlexGap16.args = {
    gap: 16,
};
export const FlexGap24 = Template.bind({});
FlexGap24.args = {
    gap: 24,
};
