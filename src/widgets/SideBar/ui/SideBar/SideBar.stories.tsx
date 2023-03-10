import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { SideBar as SideBarComponent } from './SideBar';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';
import { StoreDecorator } from '../../../../../config/.storybook/decorators/storeDecorator';

export default {
    title: 'widgets/SideBar',
    component: SideBarComponent,
    argTypes: {},
} as ComponentMeta<typeof SideBarComponent>;

const Template: ComponentStory<typeof SideBarComponent> = (args) => <SideBarComponent {...args} />;

export const SideBar = Template.bind({});

export const SideBarDark = Template.bind({});
SideBarDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SideBarAuth = Template.bind({});
SideBarAuth.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: { authData: {} },
})];

export const SideBarAuthDark = Template.bind({});
SideBarAuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} },
})];
