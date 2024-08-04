import './Game.css';
import { Button } from "@mui/material";
import { useState } from "react";
import Board from "./Board";
import chessLogic from "./chess";

function Game(props) {
    const [position, setPosition] = useState(chessLogic.getRandomPosition());
    const [tries, setTries] = useState(0);
    const [correctGuesses, setCorrectGuesses] = useState(0);

    return (
        <div data-testid="Game" className='Game'>
            <p>
                {(props.black ? "Black: " : "White: ")} {correctGuesses} correct guesses out of {tries} ({(correctGuesses/(tries?tries:1)*100).toFixed(2)}%)
                <br></br>
                {position}
                <br></br>
            </p>
           
            <Button onClick={() => {
                if (chessLogic.squareIsWhite(position)) setCorrectGuesses((correctGuesses) => correctGuesses + 1);
                setTries((tries) => tries + 1);
                setPosition(chessLogic.getRandomPosition());
            }} >
                White
            </Button>
            <Button onClick={() => {
                if (!chessLogic.squareIsWhite(position)) setCorrectGuesses((correctGuesses) => correctGuesses + 1);
                setTries((tries) => tries + 1);
                setPosition(chessLogic.getRandomPosition());
            }}>
                Black
            </Button>
            <Board black={props.black} />

        </div>)
};

export default Game;