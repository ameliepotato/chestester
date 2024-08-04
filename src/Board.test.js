import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './Board';

test('renders board', () => {
  render(<Board />);
  
  const board = screen.getByTestId("Board");
  expect(board).toBeInTheDocument();
});
