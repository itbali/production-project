import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str:string) => str,
        i18n: {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            changeLanguage: () => new Promise(() => {}),
        },
    }),
    initReactI18next: {
        type: '3rdParty',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        init: () => {},
    },
}));

describe('Sidebar should ', () => {
    it('be rendered', () => {
        render(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });
    it('be rendered and have class collapsed after click', () => {
        render(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        const toggle = screen.getByTestId('sidebar-toggle');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(sidebar).toHaveClass('collapsed');
    });
});
