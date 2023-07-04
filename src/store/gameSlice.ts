import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../utils/gameInterface";
import { randomSetPlayers } from "../utils/functions";


const initialState: Game = {
    blueTeam: randomSetPlayers(),
    redTeam: randomSetPlayers(),
    redUnitAction: null,
    blueUnitAction: null,
    helperText: "",
    round: 1
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers:{
        init:(state)=>{
            null
        }
    }
})

export const {init} = gameSlice.actions

export default gameSlice.reducer;