import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React, { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import i18n from '../../../../__mock__/i18n';

const Wrapper = ({ children }: { children: ReactNode }) => (
    <StoreProvider>
        <I18nextProvider i18n={i18n}>
            <MemoryRouter>{children}</MemoryRouter>
        </I18nextProvider>
    </StoreProvider>
);

export const renderWithMocks = (ui: ReactElement, options = {}) => (
    render(ui, { wrapper: Wrapper, ...options })
);

export const rendererWithMocks = (children:ReactNode, initialState?: DeepPartial<StateSchema>) => (
    render(
        <StoreProvider initialState={initialState as StateSchema}>
            <I18nextProvider i18n={i18n}>
                <MemoryRouter>{children}</MemoryRouter>
            </I18nextProvider>
        </StoreProvider>,
    )
);
