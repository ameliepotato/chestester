import './Game.css';
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import Board from "./Board";
import chessLogic from "./chess";

function Game(props) {
    const [position, setPosition] = useState(() => {
        return chessLogic.getRandomPosition();
      });
    const [tries, setTries] = useState(0);
    const [correctGuesses, setCorrectGuesses] = useState(0);

    const handleGuess = (black) => {
        if (black === !chessLogic.squareIsWhite(position)) {
            setCorrectGuesses((correctGuesses) => correctGuesses + 1);
            speak("Correct");
        } else {
            speak("Incorrect");
        }
        setTries((tries) => tries + 1);
        setPosition(chessLogic.getRandomPosition());
    }

    const handleKeyPress = (event) => {
        console.log('Key pressed:', event.key, " position:",  position);
        if (event.code === 'Period') {  // '>' key
            handleGuess(true);
        }
        if (event.code === 'Comma') {  // '<' key
            handleGuess(false);
        }
    };

    function speak(phrase) {
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.voice = speechSynthesis.getVoices()[0]; 
      
        // Speak the text
        speechSynthesis.speak(utterance);
    }

    useEffect(() => {
        console.log('Adding event listener for keydown');
        window.addEventListener('keydown', handleKeyPress);

        speak(position);

        // Cleanup event listener on component unmount
        return () => {
            console.log('Removing event listener for keydown');
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [position]);

    return (
        <div data-testid="Game" className='Game'>
            <div className='GameImportantText'>
                {position} is...
            </div>
            <Button onClick={() => handleGuess(false)}>
                White
            </Button>
            <Button onClick={() => handleGuess(true)}>
                Black
            </Button>
            <Board black={props.black} />
            <p className='GameText'>
                {(props.black ? "Black: " : "White: ")} {correctGuesses} correct guesses out of {tries} ({(correctGuesses / (tries ? tries : 1) * 100).toFixed(2)}%)
                <br></br>
            </p>
        </div>
    );
}

export default Game;
