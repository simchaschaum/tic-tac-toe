const Square = (props) => {

    const show = props.squareState === null ? null
        : props.squareState === 'x' ? 'X' : 'O'; 

    // const horiz = <span id="horizontal"></span>
    
    return(
        <div id={props.winningSquares.includes(props.squareNum) ? "winner" : "loser"} className="square" onClick={()=>props.handleMove()}>
            {show}
            {/* {horiz} */}
        </div>
    )
}

export default Square;

