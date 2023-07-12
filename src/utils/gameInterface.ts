import { Unit } from "./interfaces";

export interface Game {
  blueTeam: Array<Unit>;
  redTeam: Array<Unit>;
  round: number;
  redTeamDefend: boolean;
  blueTeamDefend: boolean;
  source: Unit | null;
  sourceType: string | null;
  redUnitActionText: string | null;
  blueUnitActionText: string | null;
  blueUnitAttackSource: Unit | null;
  redUnitAttackSource: Unit | null;
  blueUnitAttackTarget: Unit | null;
  redUnitAttackTarget: Unit | null;
}
