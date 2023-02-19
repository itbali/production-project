import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React, { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../__mock__/i18n';

const Wrapper = ({ children }: { children: ReactNode }) => (
    <I18nextProvider i18n={i18n}>
        <MemoryRouter>{children}</MemoryRouter>
    </I18nextProvider>
);

export const renderWithMocks = (ui: ReactElement, options = {}) => (
    render(ui, { wrapper: Wrapper, ...options })
);
