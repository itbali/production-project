import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { Spinner as SpinnerComponent } from './Spinner';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'widgets/Spinner',
    component: SpinnerComponent,
    argTypes: {},
} as ComponentMeta<typeof SpinnerComponent>;

const Template: ComponentStory<typeof SpinnerComponent> = () => <SpinnerComponent />;

export const Spinner = Template.bind({});
export const SpinnerDark = Template.bind({});
SpinnerDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SpinnerGreen = Template.bind({});
SpinnerGreen.decorators = [ThemeDecorator(Theme.GREEN)];
