import React, {act} from 'react';
import { render, screen } from '@testing-library/react';
import Intro from './Intro';

test('renders intro', () => {
    render(<Intro />);
    
    const board = screen.getByTestId("Intro");
    expect(board).toBeInTheDocument();
  
    var button = screen.getByTestId("button-white");
    expect(button).toBeInTheDocument();
  
    button = screen.getByTestId("button-black");
    expect(button).toBeInTheDocument();
  
    button = screen.getByTestId("button-random");
    expect(button).toBeInTheDocument();
  
  });


  test('start game works', () => {
    render(<Intro />);
  
    var button = screen.getByTestId("button-white");
    expect(button).toBeInTheDocument();
  
    act(() => {
        button.click();
      });
    

    button = screen.getByTestId("button-back");
    expect(button).toBeInTheDocument();
  
    var game = screen.getByTestId("Game");
    expect(game).toBeInTheDocument();
  
  });

