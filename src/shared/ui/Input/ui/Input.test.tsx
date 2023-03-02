import { screen } from '@testing-library/react';
import { rendererWithMocks } from 'helpers/tests/renderWithMocks';
import React from 'react';
import { Input } from './Input';

describe('Input should', () => {
    const INPUT_TEST_ID = 'inputTestId';
    const PLACEHOLDER = 'placeholder';
    it('be rendered without placeholder', () => {
        rendererWithMocks(<Input dataTestId={INPUT_TEST_ID} />);
        const inputWrapper = screen.getByTestId(INPUT_TEST_ID);
        expect(inputWrapper).toBeInTheDocument();
        const firstChild = inputWrapper.children[0];
        expect(firstChild.tagName.toLowerCase()).toEqual('input');
    });
    it('be rendered with placeholder', () => {
        rendererWithMocks(<Input dataTestId={INPUT_TEST_ID} placeholder={PLACEHOLDER} />);
        const inputWrapper = screen.getByTestId(INPUT_TEST_ID);
        expect(inputWrapper).toBeInTheDocument();
        const firstChild = inputWrapper.children[0];
        expect(firstChild.tagName.toLowerCase()).toEqual('span');
    });
    it('add placeholder class isSelected when input is active', () => {
        rendererWithMocks(<Input dataTestId={INPUT_TEST_ID} placeholder={PLACEHOLDER} />);
        const inputWrapper = screen.getByTestId(INPUT_TEST_ID);
        expect(inputWrapper).toBeInTheDocument();
        const label = screen.getByRole('tooltip');
        const input = screen.getByRole('textbox');
        input.focus();
        expect(input).toHaveFocus();
        expect(label).toHaveClass('isSelected');
        input.blur();
        expect(input).not.toHaveFocus();
        expect(label).not.toHaveClass('isSelected');
    });
});
