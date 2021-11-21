const Game = (props) => {
    return(
        <div className="game-board">
            {props.board.map((item,index) => 
                <div className="square" key={"square" + index}>
                    {props.board[index] === null ? "?" 
                        : props.board[index] === "X" ? "X" : "Y"}
                </div>
            )}
        </div>
    )
}

export default Game;