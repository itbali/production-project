import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ArticleDetailsTextBlock } from './ArticleDetailsTextBlock';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'entities/ArticleDetailsTextBlock',
    component: ArticleDetailsTextBlock,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsTextBlock>;

const Template: ComponentStory<typeof ArticleDetailsTextBlock> = (
    args,
) => <ArticleDetailsTextBlock {...args} />;

export const ArticleDetailsTextBlockLight = Template.bind({});
export const ArticleDetailsTextBlockDark = Template.bind({});
ArticleDetailsTextBlockDark.decorators = [ThemeDecorator(Theme.DARK)];
