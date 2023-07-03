import { useState } from "react";
import  {Game} from "./utils/gameClass";

const game = new Game()

function App() {
  

  const [round, setRound] = useState(game.round)
  function clickhandler(){
    game.incrementRound();
    //setRound(game.round)
   // console.log(round)
  }
  return (
    <div>
      <div>{game.round}</div>
      <div onClick={clickhandler}>click</div>
    </div>
  );
}

export default App;
