import React, {useState} from "react";
import Game from './components/game';
import './App.css'

function App() {
  
  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null])

  return (
    <div className="App">
      <Game board={board} />
    </div>
  );
}

export default App;
