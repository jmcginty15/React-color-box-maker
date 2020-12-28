import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

// smoke test
it('renders without crashing', function () {
    render(<Box height="250" width="250" backgroundColor="green" />);
});

// snapshot test
it('matches snapshot', function () {
    const { asFragment } = render(<Box height="250" width="250" backgroundColor="green" />);
    expect(asFragment()).toMatchSnapshot();
});