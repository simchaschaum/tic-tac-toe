const Square = (props) => {

       const show = props.squareState === null ? "?"
        : props.squareState === 'x' ? 'X' : 'O'; // replace this with something nicer eventually

    return(
        <div  className="square" onClick={()=>props.handleMove()}>
            {show}
        </div>
    )
}

export default Square;

