import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game } from "../utils/gameInterface";
import { randomSetPlayers } from "../utils/functions";
import { Unit } from "../utils/interfaces";

const initialState: Game = {
  blueTeam: randomSetPlayers("blue"),
  redTeam: randomSetPlayers("red"),
  redUnitAction: null,
  blueUnitAction: null,
  helperText: "",
  round: 1,
  redTeamDefend: false,
  blueTeamDefed: false,
  source: null,
  sourceType: null,
  blueUnitActionText: null,
  redUnitActionText: null
};

interface ClickProps {
  source: Unit;
  target?: Unit;
  defend?: boolean;
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setHelperText: (state, action: PayloadAction<string>) => {
      state.helperText = action.payload;
    },
    setRedTeamAction: (state, action: PayloadAction<ClickProps>) => {
      null;
    },
    setBlueTeamAction: (state, action: PayloadAction<ClickProps>) => {
      null;
    },
    setSource: (state, action: PayloadAction<Unit>) => {
      state.source = action.payload;
      state.sourceType = Object.getPrototypeOf(action.payload.constructor).name;
    },
    removeSource: (state) => {
      state.source = null;
    },
  },
});

export const {
  setHelperText,
  setSource,
  removeSource,
  setRedTeamAction,
  setBlueTeamAction,
} = gameSlice.actions;

export default gameSlice.reducer;
