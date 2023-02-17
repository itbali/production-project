import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { PageError as PageErrorComponent } from './PageError';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'widgets/PageError',
    component: PageErrorComponent,
    argTypes: {},
} as ComponentMeta<typeof PageErrorComponent>;

const Template: ComponentStory<typeof PageErrorComponent> = (args) => (
    <PageErrorComponent {...args} />
);

export const PageError = Template.bind({});

export const PageErrorDark = Template.bind({});
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
