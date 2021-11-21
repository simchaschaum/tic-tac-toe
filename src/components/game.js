import Square from "./square"

const Game = (props) => {

    const handleMove = (index) => {
        if(props.board[index]===null){
            props.handleMove(index)
        }
    }
 
    return(
        <div className="game-board">
            {props.board.map((item,index) => 
                <div key={"square" + index}>
                    <Square 
                        squareState = {props.board[index]}
                        handleMove={() => handleMove(index)}
                    />
                </div>
            )}
        </div>
    )
}

export default Game;