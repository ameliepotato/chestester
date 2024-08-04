import React, { useState } from 'react';
import { Button } from '@mui/material';
import Game from './Game';

const Intro = () => {
  const [gameStatus, setGameStatus] = useState(0);

  return (
    <div data-testid="Intro">
      {gameStatus === 0 &&
        (<Button onClick={() => setGameStatus(1)} data-testid="button-white">
          White
        </Button>
        )}

      {gameStatus === 0 &&
        (<Button onClick={() => setGameStatus(Math.random() < 0.5 ? 1 : 2)} data-testid="button-random">
          Random
        </Button>)
      }
      {gameStatus === 0 &&
        (<Button onClick={() => setGameStatus(2)} data-testid="button-black">
          Black
        </Button>
        )}
      {gameStatus !== 0 &&
        (<div>
          <Game black={gameStatus === 2} />
        </div>)
      }
      {
        gameStatus !== 0 &&
        (<Button onClick={() => setGameStatus(0)} data-testid="button-back">
          Back
        </Button>)
      }
    </div>
  );
};

export default Intro;
