import { Unit } from "./interfaces";

export interface Game {
  players: Array<Unit>;
  order: Array<number>;
  round: number;
  source: Unit | null;
  sourceNum: number;
  currentTarget: Unit | null;
  sourceType: string | null;
  attackNow: boolean;
  hover: Unit | null;
}
