import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/test/storybook-avatar.png';
import { ProfileCard as ProfileCardComponent } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCardComponent,
    argTypes: {},
} as ComponentMeta<typeof ProfileCardComponent>;

const Template: ComponentStory<typeof ProfileCardComponent> = (
    args,
) => <ProfileCardComponent {...args} />;

export const ProfileCardLight = Template.bind({});
ProfileCardLight.args = {
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
};
export const ProfiileIsLoading = Template.bind({});
ProfiileIsLoading.args = {
    isLoading: true,
};
export const ProfileHasError = Template.bind({});
ProfileHasError.args = {
    error: 'Error',
};
export const ProfileIsReadOnly = Template.bind({});
ProfileIsReadOnly.args = {
    readonly: true,
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
};
