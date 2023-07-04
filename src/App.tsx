import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import "./global.css"



function App() {
  const game = useSelector((state: RootState)=> state.gameSlice)
  const dispatch = useDispatch()
 
  return (
    <div>
    </div>
  );
}

export default App;
