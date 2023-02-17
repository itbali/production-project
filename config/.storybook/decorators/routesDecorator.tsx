import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export const RoutesDecorator = (Story:Story) => (
    <MemoryRouter initialEntries={['/']}>
        <Story/>
    </MemoryRouter>
)
