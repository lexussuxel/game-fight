export interface IUnit {
  maxHP: number;
  initiative: number;
  name: string;
  img: string;
}

export type Team = "red" | "blue";

export abstract class Unit implements IUnit {
  readonly maxHP: number;
  HP: number;
  initiative: number;
  name: string;
  img: string;
  id: number;
  paralyzed: boolean;
  team: Team;

  constructor(object: IUnit, id: number, team: Team) {
    this.maxHP = object.maxHP;
    this.HP = object.maxHP;
    this.initiative = object.initiative;
    this.name = object.name;
    this.img = object.img;
    this.id = id;
    this.paralyzed = false;
    this.team = team;
  }

  abstract action: Action;
}

export interface HelperTextType {
  [name: string]: string;
}

export interface ActionReturn {
  blueTeam: Array<Unit>;
  redTeam: Array<Unit>;
}
export type Action = (
  redTeam: Array<Unit>,
  blueTeam: Array<Unit>,
  targetId: number
) => ActionReturn;

export type GameAction = () => ActionReturn