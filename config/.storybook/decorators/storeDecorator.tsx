import type { Story } from '@storybook/react';
import { StoreProvider } from '../../../src/app/providers/storeProvider';

export const StoreDecorator = (StoryComponent: Story): JSX.Element => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
