import { Counter } from 'entities/Counter';
import { fireEvent, screen } from '@testing-library/react';
import { rendererWithMocks } from 'helpers/tests/renderWithMocks';

describe('Counter should', () => {
    it('', () => {
        rendererWithMocks(<Counter />);
        const counterValue = screen.getByTestId('value-title');
        const incrementBtn = screen.getByTestId('increment-btn');
        const decrementBtn = screen.getByTestId('decrement-btn');
        expect(counterValue.textContent).toBe('0');
        fireEvent.click(incrementBtn);
        expect(counterValue.textContent).toBe('1');
        fireEvent.click(decrementBtn);
        expect(counterValue.textContent).toBe('0');
    });
});
