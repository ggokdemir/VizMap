/**
 * @jest-environment jsdom
 */
import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VizMap from '../VizMap';

test('renders with default name', async () => {
    const { getByTestId } = render(<VizMap />);
    expect(getByTestId('greeting')).toHaveTextContent('Hello, User!');
});

test('renders with custom name', async () => {
    const name = 'World';
    const { getByTestId } = render(<VizMap name={name} />);
    expect(getByTestId('greeting')).toHaveTextContent(`Hello, ${name}!`);
});

test('increases counter when button is clicked', async () => {
    const { findByRole, getByTestId } = render(<VizMap />);
    const button = await findByRole('button');
    button.click();
    expect(getByTestId('message')).toHaveTextContent("You've clicked the button 1 time");
});

test('displays the correct message when counter is zero', async () => {
    const { getByTestId } = render(<VizMap />);
    expect(getByTestId('message')).toHaveTextContent('You should try clicking the button.');
});