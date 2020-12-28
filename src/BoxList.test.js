import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// smoke test
it('renders without crashing', function () {
    render(<BoxList />);
});

// snapshot test
it('matches snapshot', function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('adds a box on form submit', function () {
    const { queryByText } = render(<BoxList />);
    const submitButton = queryByText('Add Box');
    fireEvent.click(submitButton);
    const newBox = queryByText('X').parentElement;
    expect(newBox).toHaveStyle('height: 0');
    expect(newBox).toHaveStyle('width: 0');
    expect(newBox).toHaveStyle('background-color: #000000');
});

it('removes a box when remove button is clicked', function () {
    const { queryByText } = render(<BoxList />);
    const submitButton = queryByText('Add Box');
    fireEvent.click(submitButton);
    const newBoxRemoveButton = queryByText('X');
    const newBox = newBoxRemoveButton.parentElement;
    fireEvent.click(newBoxRemoveButton);
    expect(newBoxRemoveButton).not.toBeInTheDocument();
    expect(newBox).not.toBeInTheDocument();
});

it('displays and uses form inputs correctly', function () {
    const { queryByText, queryByTestId } = render(<BoxList />);
    const submitButton = queryByText('Add Box');

    const heightInput = queryByTestId('height-input');
    const widthInput = queryByTestId('width-input');
    const colorInput = queryByTestId('color-input');
    fireEvent.change(heightInput, { target: { value: 250 }});
    fireEvent.change(widthInput, { target: { value: 250 }});
    fireEvent.change(colorInput, { target: { value: '#555555' }});

    expect(heightInput.value).toBe("250");
    expect(widthInput.value).toBe("250");
    expect(colorInput.value).toBe("#555555");

    fireEvent.click(submitButton);
    const newBox = queryByText('X').parentElement;
    expect(newBox).toHaveStyle('height: 250px');
    expect(newBox).toHaveStyle('width: 250px');
    expect(newBox).toHaveStyle('background-color: #555555');

    expect(heightInput.value).toBe("0");
    expect(widthInput.value).toBe("0");
    expect(colorInput.value).toBe("#000000");
});