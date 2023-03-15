import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleDetailsBlock } from './ArticleDetailsBlock';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/ArticleDetailsBlock',
    component: ArticleDetailsBlock,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsBlock>;

const Template: ComponentStory<typeof ArticleDetailsBlock> = (
    args,
) => <ArticleDetailsBlock {...args} />;

export const ArticleDetailsBlockLight = Template.bind({});
export const ArticleDetailsBlockDark = Template.bind({});
ArticleDetailsBlockDark.decorators = [ThemeDecorator(Theme.DARK)];
