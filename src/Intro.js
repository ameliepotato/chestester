import React, { useState } from 'react';
import { Button } from '@mui/material';
import Game from './Game';

const Intro = () => {
  const [gameStatus, setGameStatus] = useState(0);

  return (
    <div>
      {gameStatus===0 &&
        (<Button onClick={() => setGameStatus(1)}>
          White
        </Button>
        )}
      {gameStatus===0 &&
        (<Button onClick={() => setGameStatus(2)}>
          Black
        </Button>
        )}
      {gameStatus===0 &&
        (<Button onClick={() => setGameStatus(Math.random() < 0.5? 1 : 2)}>
          Random
        </Button>)
      }

      {
        gameStatus!==0 &&
        (<Button onClick={() => setGameStatus(0)}>
          Back
        </Button>)
      }
      {gameStatus!==0 && 
        (<div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
          <Game black={gameStatus === 2} />
        </div>)
      }
    </div>
  );
};

export default Intro;
