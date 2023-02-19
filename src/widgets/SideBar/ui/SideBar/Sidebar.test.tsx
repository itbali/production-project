import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithMocks } from 'shared/config/tests/renderWithMocks';

describe('Sidebar should ', () => {
    it('be rendered', () => {
        renderWithMocks(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });
    it('be rendered and have class collapsed after click', () => {
        renderWithMocks(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        const toggle = screen.getByTestId('sidebar-toggle');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(sidebar).toHaveClass('collapsed');
    });
});
