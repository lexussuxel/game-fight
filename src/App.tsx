import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";



function App() {
  const game = useSelector((state: RootState)=> state.gameSlice)
  const dispatch = useDispatch()
  function clickHandler(){
    null
  }
  return (
    <div>
      {game.round}
      <div onClick={clickHandler}>click</div>
    </div>
  );
}

export default App;
