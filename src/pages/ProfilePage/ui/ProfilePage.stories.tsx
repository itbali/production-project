import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/test/storybook-avatar.png';
import ProfilePageComponent from './ProfilePage';
import { StoreDecorator } from '../../../../config/.storybook/decorators/storeDecorator';
import { ThemeDecorator } from '../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePageComponent,
    argTypes: {},
} as ComponentMeta<typeof ProfilePageComponent>;

const Template: ComponentStory<typeof ProfilePageComponent> = (
    args,
) => <ProfilePageComponent {...args} />;

export const ProfilePage = Template.bind({});
ProfilePage.decorators = [StoreDecorator({
    profile: {
        data: {
            first: 'John',
            age: 25,
            lastname: 'Doe',
            country: Country.USA,
            currency: Currency.EUR,
            city: 'New York',
            username: 'johndoe',
            avatar: Avatar,
        },
        formData: {
            first: 'John',
            age: 25,
            lastname: 'Doe',
            country: Country.USA,
            currency: Currency.EUR,
            city: 'New York',
            username: 'johndoe',
            avatar: Avatar,
        },
    },
})];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            data: {
                first: 'John',
                age: 25,
                lastname: 'Doe',
                country: Country.USA,
                currency: Currency.EUR,
                city: 'New York',
                username: 'johndoe',
                avatar: Avatar,
            },
            formData: {
                first: 'John',
                age: 25,
                lastname: 'Doe',
                country: Country.USA,
                currency: Currency.EUR,
                city: 'New York',
                username: 'johndoe',
                avatar: Avatar,
            },
        },
    }),
];
