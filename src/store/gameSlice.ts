import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game } from "../utils/gameInterface";
import { chooseOrder, randomSetPlayers } from "../utils/functions";
import { Unit } from "../utils/interfaces";
import { Defend } from "../utils/typeClasses/defendClass";

const initialState: Game = {
  blueTeam: randomSetPlayers("blue"),
  redTeam: randomSetPlayers("red"),
  round: 1,
  redTeamDefend: false,
  blueTeamDefend: false,
  source: null,
  sourceType: null,
  blueUnitActionText: null,
  redUnitActionText: null,
  blueUnitAttackSource: null,
  redUnitAttackSource: null,
  redUnitAttackTarget: null,
  blueUnitAttackTarget: null,
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
    setRedTeamAction: (state, action: PayloadAction<ClickProps>) => {
      const { source, target, defend } = action.payload;
      if (defend) null;
      else {
        state.redUnitAttackSource = source;
        state.redUnitAttackTarget = target || null;
        state.redUnitActionText = source.generateActionDescription(
          source,
          target || source
        );
      }
    },
    setBlueTeamAction: (state, action: PayloadAction<ClickProps>) => {
      const { source, target, defend } = action.payload;
      if (defend) null;
      else {
        state.blueUnitAttackSource = source;
        state.blueUnitAttackTarget = target || null;
        state.blueUnitActionText = source.generateActionDescription(
          source,
          target || source
        );
      }
    },
    setSource: (state, action: PayloadAction<Unit>) => {
      state.source = action.payload;
      state.sourceType = Object.getPrototypeOf(action.payload.constructor).name;
    },
    removeSource: (state) => {
      state.source = null;
    },
    endRound: (state) => {
      if (state.blueTeamDefend && state.redTeamDefend) {
        state.blueTeamDefend = false;
        state.redTeamDefend = false;
        state.redUnitActionText = "";
        state.blueUnitActionText = "";
        return;
      }
      if (!state.blueUnitAttackSource) {
        state.blueUnitActionText = "Set action for team";
        return;
      } else if (!state.redUnitAttackSource) {
        state.redUnitActionText = "Set action for team";
        return;
      } else {
        state.blueTeam = state.blueTeam.map((pl) => {
          pl.paralyzed = false;
          return pl;
        });
        state.redTeam = state.redTeam.map((pl) => {
          pl.paralyzed = false;
          return pl;
        });
        if (
          chooseOrder(state.blueUnitAttackSource, state.redUnitAttackSource)
        ) {
          const blueResult = state.blueUnitAttackSource.preAction(
            state.redTeam,
            state.blueTeam,
            state.redTeamDefend,
            state.blueUnitAttackTarget?.id || 0
          );
          state.blueTeam = blueResult.blueTeam;
          state.redTeam = blueResult.redTeam;
          const redResult = state.redUnitAttackSource.preAction(
            state.redTeam,
            state.blueTeam,
            state.blueTeamDefend,
            state.redUnitAttackTarget?.id || 0
          );
          state.blueTeam = redResult.blueTeam;
          state.redTeam = redResult.redTeam;
        } else {
          const redResult = state.redUnitAttackSource.preAction(
            state.redTeam,
            state.blueTeam,
            state.blueTeamDefend,
            state.redUnitAttackTarget?.id || 0
          );
          state.blueTeam = redResult.blueTeam;
          state.redTeam = redResult.redTeam;
          const blueResult = state.blueUnitAttackSource.preAction(
            state.redTeam,
            state.blueTeam,
            state.redTeamDefend,
            state.blueUnitAttackTarget?.id || 0
          );
          state.blueTeam = blueResult.blueTeam;
          state.redTeam = blueResult.redTeam;
        }
      }
      state.round += 1;
      state.blueUnitActionText = "";
      state.redUnitActionText = "";
      state.blueUnitAttackSource = null;
      state.blueUnitAttackTarget = null;
      state.redUnitAttackSource = null;
      state.redUnitAttackTarget = null;
      state.blueTeamDefend = false;
      state.redTeamDefend = false;
    },
    setBlueTeamDefend: (state) => {
      state.blueTeamDefend = true;
      state.blueUnitAttackSource = new Defend();
      state.blueUnitAttackTarget = null;
      state.blueUnitActionText = "Blue team defends!";
    },
    setRedTeamDefend: (state) => {
      state.redTeamDefend = true;
      state.redUnitAttackSource = new Defend();
      state.redUnitAttackTarget = null;
      state.redUnitActionText = "Red team defends!";
    },
  },
});

export const {
  setSource,
  removeSource,
  setRedTeamAction,
  setBlueTeamAction,
  endRound,
  setBlueTeamDefend,
  setRedTeamDefend,
} = gameSlice.actions;

export default gameSlice.reducer;
