const Display = (props) => {
    const player = props.turn === 'x' ? 'X' : 'O';

    return(
        <div>
            <h3>Player {player}, it's your turn!</h3>
            {!props.winner ? null 
                : "Tie Game" ? "Tie Game!"
                    :<h4>Player {props.winner} is the winner!</h4>}
        </div>
    )
}

export default Display;