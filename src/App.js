import React, {useState} from "react";
import './App.css'
import Game from './components/game';
import Reset from './components/reset';
import Display from './components/display';

function App() {

  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null]);
  const [turn, setTurn] = useState('x');
  const [winner, setWinner] = useState(null);

   // triggered by click event in Square; sends index of square
  const handleMove = (index) => {
    if(!winner){
      let tb = board;
      tb[index] = turn;
      setBoard([...tb]);
      if(turn === 'x'){
        setTurn('o')
      } else {
        setTurn('x')
      }
      // Check each combination to figure out a winner
      const winnerCombos = [[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]];
      let win = null;
      winnerCombos.forEach(arr => {
        if(tb[arr[0]] === tb[arr[1]] && tb[arr[1]] === tb[arr[2]] && tb[arr[0]] & tb[arr[1]] && tb[arr[2]]){
          console.log("we have a winner!")
          win = tb[arr[0]];
          setWinner(win);
        }
      });
      // work on this!
      if(checkFull(tb)){
        setWinner("Tie Game")
      }
    }
  }

  // WORK ON THIS NEXT
  const checkFull = (arr) => {
    arr.forEach(item => {
      if(item === null){
        return false
      }
    }
    ) 
    return true;
  }

  const resetGame = () => {
    setBoard([null,null,null,null,null,null,null,null,null]);
    setTurn('x');
    setWinner(null);
  }

  return (
    <div className="App">
      <Game 
        turn={turn}
        board={board} 
        handleMove={index => handleMove(index)}
      />
      <Display 
        turn={turn}
        winner={winner}
      />
      <Reset 
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;

