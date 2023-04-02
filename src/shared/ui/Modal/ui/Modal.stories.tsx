import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { Modal as ModalComponent } from './Modal';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Modal',
    component: ModalComponent,
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Modal',
        },
        isOpen: {
            control: 'boolean',
            defaultValue: true,
        },
        onClose: {
            action: 'onClose',
        },
    },
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => <ModalComponent {...args} />;

export const Modal = Template.bind({});
export const ModalDark = Template.bind({});
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ModalGreen = Template.bind({});
ModalGreen.decorators = [ThemeDecorator(Theme.GREEN)];
