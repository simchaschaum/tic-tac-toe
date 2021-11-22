const Square = (props) => {

       const show = props.squareState === null ? null
        : props.squareState === 'x' ? 'X' : 'O'; 

    return(
        <div  className="square" onClick={()=>props.handleMove()}>
            {show}
        </div>
    )
}

export default Square;

