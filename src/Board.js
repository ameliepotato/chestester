function Board(props) {
    return (
        <div>
            <img src={props.black ? "black.png": "white.png"} alt="chess board" style={{height:"170px",width:"auto"}}/>
        </div>
    );
};

export default Board;