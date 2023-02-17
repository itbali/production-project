import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { NavBar as NavBarComponent } from './NavBar';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'widgets/NavBar',
    component: NavBarComponent,
    argTypes: {},
} as ComponentMeta<typeof NavBarComponent>;

const Template: ComponentStory<typeof NavBarComponent> = (args) => <NavBarComponent {...args} />;

export const NavBar = Template.bind({});

export const NavBarDark = Template.bind({});
NavBarDark.decorators = [ThemeDecorator(Theme.DARK)];
