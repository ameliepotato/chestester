import Board from "./Board";

function Game(props) {

    return (
        <div>
            {props.black ? "Black" : "White"}
            <Board black={props.black} />
        </div>)
};

export default Game;