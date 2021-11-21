const Display = (props) => {
    const turnMsg = props.turn === 'x' ? "Player X, it's your turn!" : "Player O, it's your turn!";
    const endMsg = props.winner === 'x' ? "Player X Wins!" 
        : props.winner === 'o' ? "Player O Wins!"
            : "Tie Game!";

    return(
        <div>
            <h3>
                {!props.winner ? turnMsg : endMsg}
            </h3>
        </div>
    )
}

export default Display;