import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { mockedComment } from 'shared/assets/test/mockedComment';
import { ArticleDetailComments } from './ArticleDetailComments';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'features/Comments/ArticleDetailComments',
    component: ArticleDetailComments,
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({
        articleDetailsPage: {
            articleDetailsComments: {
                entities: {
                    1: mockedComment,
                },
                ids: [1],
            },
        },
    })],
} as ComponentMeta<typeof ArticleDetailComments>;

const Template: ComponentStory<typeof ArticleDetailComments> = (
    args,
) => <ArticleDetailComments {...args} />;

export const ArticleDetailCommentsPrimary = Template.bind({});
export const ArticleDetailCommentsDark = Template.bind({});
ArticleDetailCommentsDark.decorators = [ThemeDecorator(Theme.DARK)];
