const Reset = (props) => {

    return(
        <div>
            <button id="resetBtn" onClick={()=>props.resetGame()}>
                Reset Game
            </button>
        </div>
    )
}

export default Reset;