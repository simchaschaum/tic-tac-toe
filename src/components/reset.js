const Reset = (props) => {

    const btnMsg = props.winner ? "Play Again" : "Reset Game";
     
    return(
        <div>
            <button id="resetBtn" onClick={()=>props.resetGame()}>
                {btnMsg}
            </button>
        </div>
    )
}

export default Reset;