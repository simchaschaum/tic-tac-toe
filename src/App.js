import React, {useState} from "react";
import './App.css'
import Game from './components/game';
import Header from './components/header';
import Display from './components/display';

function App() {

  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null]);
  const [turn, setTurn] = useState('x');
  const [winner, setWinner] = useState(null);
  const [winningSquares, setWinningSquares] = useState([]);

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
      let isFull = true;
      let win = null;
      winnerCombos.forEach(arr => {
        if(tb[arr[0]] && tb[arr[1]] && tb[arr[2]]){
          if(tb[arr[0]]===tb[arr[1]]){
            if(tb[arr[0]]===tb[arr[2]]){
              let ws = [arr[0],arr[1],arr[2]];
              setWinningSquares(ws);
              win = tb[arr[0]];
              setWinner(win);
            }
          }
        } else {
          isFull = false
        }
      });
      if(isFull && !winner){
        setWinner('t')
      }
    }
  }

  const resetGame = () => {
    setBoard([null,null,null,null,null,null,null,null,null]);
    setTurn('x');
    setWinner(null);
    setWinningSquares([]);
  }

  return (
    <div className="App">
      <Header />
      <Game 
        turn={turn}
        board={board} 
        handleMove={index => handleMove(index)}
        winningSquares={winningSquares}
      />
      <Display 
        turn={turn}
        winner={winner}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;

/*

*/