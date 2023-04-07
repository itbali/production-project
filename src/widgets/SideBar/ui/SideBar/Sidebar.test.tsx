import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { rendererWithMocks } from 'helpers/tests/renderWithMocks';
import { SideBar } from './SideBar';

describe('Sidebar should ', () => {
    it('be rendered', () => {
        rendererWithMocks(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });
    it('be rendered and have class collapsed after click', () => {
        rendererWithMocks(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        const toggle = screen.getByTestId('sidebar-toggle');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(sidebar).toHaveClass('collapsed');
    });
});
