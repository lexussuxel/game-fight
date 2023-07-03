import { useRef, useState } from "react";
import Game from "./utils/gameClass";

function App() {
  const game = useRef(new Game())
  return (
    <div>
      {game.current.round}
      <div onClick={()=>{game.current.incrementRound();console.log(game.current.round)}}>click</div>
    </div>
  );
}

export default App;
