import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders game', () => {
    render(<Game />);
    
    const board = screen.getByTestId("Game");
    expect(board).toBeInTheDocument();
  
  });
