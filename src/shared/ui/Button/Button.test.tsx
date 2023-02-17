import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button ', () => {
    it(' should be rendered', () => {
        render(<Button>TEST</Button>);
        const button = screen.getByText('TEST');
        expect(button).toBeInTheDocument();
    });
    it(' should be rendered with clear class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        const button = screen.getByText('TEST');
        expect(button).toHaveClass('clear');
    });
});
