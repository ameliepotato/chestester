import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './Board';

test('renders board', () => {
  render(<Board black="true"/>);
  
  const board = screen.getByTestId("Board");
  expect(board).toBeInTheDocument();

  var img = screen.getByTestId("img-board");
  expect(img.src).toContain("black");
});
