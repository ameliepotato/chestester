import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);

  var linkElement = screen.getByText(/Chestester/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByTestId("Intro");
  expect(linkElement).toBeInTheDocument();
});
