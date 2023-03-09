import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React, { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import i18n from '../../../__mock__/i18n';

const Wrapper = ({ children }: { children: ReactNode }) => (
    <MemoryRouter>
        <StoreProvider>
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </StoreProvider>
    </MemoryRouter>
);

export const renderWithMocks = (ui: ReactElement, options = {}) => (
    render(ui, { wrapper: Wrapper, ...options })
);

export const rendererWithMocks = (children:ReactNode, initialState?: DeepPartial<StateSchema>) => (
    render(
        <MemoryRouter>
            <StoreProvider initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18n}>
                    {children}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    )
);
