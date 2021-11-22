const Square = (props) => {

    const show = props.squareState === null ? null
        : props.squareState === 'x' ? 'X' : 'O'; 

    const winnerClasses = props.winDirection === "45deg" ? "square winner-45"
        :  props.winDirection === "135deg" ? "square winner-135"
            :  props.winDirection === "90deg" ? "square winner-90"
                : "square winner"
 
    
    return(
        <div>
            <div className={!props.winningSquares.includes(props.squareNum) ? "square" : winnerClasses}  onClick={()=>props.handleMove()}>
                {show}
            </div>
        </div>
    )
}

export default Square;

