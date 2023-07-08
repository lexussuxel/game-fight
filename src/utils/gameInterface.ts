import { GameAction, Unit } from "./interfaces";

export interface Game {
  blueTeam: Array<Unit>;
  redTeam: Array<Unit>;
  redUnitAction: GameAction | null;
  blueUnitAction: GameAction | null;
  round: number;
  helperText: string;
  redTeamDefend: boolean;
  blueTeamDefed: boolean;
  source: Unit | null;
  sourceType: string | null;
  redUnitActionText: string | null;
  blueUnitActionText: string | null;
}
