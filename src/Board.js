function Board(props) {
    return (
        <div data-testid="Board">
            <img src={props.black ? "black.png": "white.png"} alt="chess board" style={{height:"170px",width:"auto"}} data-testid="img-board"/>
        </div>
    );
};

export default Board;