import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game } from "../utils/gameInterface";
import {  meleeValidation, randomSetPlayers, targetValidation } from "../utils/functions";
import { Unit } from "../utils/interfaces";
import { newRound, nextSource, setOrder } from "../utils/functions/setOrder";
import { Melee } from "../utils/typeClasses";

const initialState: Game = {
  players: randomSetPlayers(),
  order:[],
  round: 1,
  source: null,
  sourceNum: 0,
  sourceType: null,
  currentTarget: null,
  attackNow: false
};


export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    init: (state) =>{
      state.order = setOrder(state.players)
      state.source = state.players[state.order[state.sourceNum]]
      state.sourceType = Object.getPrototypeOf(state.source.constructor).name;
    },
    pickTarget: (state, action: PayloadAction<Unit>)=>{
      if(state.source instanceof Melee)
        if(!meleeValidation(state.source, action.payload, state.players))
          return;

      if(targetValidation(action.payload)){
        state.currentTarget = action.payload
      }
      
    },
    attack: (state)=>{
      if(state.source){
        if(state.currentTarget)
          state.players = state.source.preAction(state.players, state.currentTarget)
        else 
          state.players = state.source.preAction(state.players, state.players[0])
      }
      const {players, sourceNum} = nextSource(state.players, state.order, state.sourceNum)
      state.players = players
      if(state.sourceNum - sourceNum > 0){
        state.round += 1
        state.players = newRound(state.players)
      }
      state.sourceNum = sourceNum
      state.source = state.players[state.order[state.sourceNum]]
      state.attackNow = false;
      state.currentTarget = null;

      
    },
    defend: (state)=>{
      state.players = state.players.map((player)=> {
        if(player.id === state.source?.id){
          player.defend = true
        }
        return player
      })
      const {players, sourceNum} = nextSource(state.players, state.order, state.sourceNum)
      state.players = players
      if(state.sourceNum - sourceNum > 0){
        state.round += 1
        state.players = newRound(state.players)
      }
      state.sourceNum = sourceNum
      state.source = state.players[state.order[state.sourceNum]]
      state.currentTarget = null;
    },
    preAttack:(state)=>{
      state.attackNow = true;
    }
    
  },
});

export const {
  init,
  pickTarget,
  attack,
  defend,
  preAttack
} = gameSlice.actions;

export default gameSlice.reducer;
