import Board from "./Board";

function Game(props) {

    return (
        <div data-testid="Game">
            {props.black ? "Black" : "White"}
            <Board black={props.black} />
        </div>)
};

export default Game;