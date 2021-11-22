import Reset from './reset';

const Display = (props) => {
    const turnMsg = props.turn === 'x' ? "Player X, it's your turn!" : "Player O, it's your turn!";
    const endMsg = props.winner === 'x' ? "Player X Wins!" 
        : props.winner === 'o' ? "Player O Wins!"
            : "Tie Game!";

    return(
        <div id="display">
            <h4>
                {!props.winner ? turnMsg : endMsg}
            </h4>
            <Reset 
                resetGame={props.resetGame}
                winner={props.winner}
            />
        </div>
    )
}

export default Display;