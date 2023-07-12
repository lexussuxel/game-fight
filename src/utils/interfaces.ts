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
  preAction: Action = (redTeam, blueTeam, defend, targetId) => {
    if (this.HP !== 0 && !this.paralyzed) {
      return this.action(redTeam, blueTeam, defend, targetId);
    } else if (this.paralyzed) this.paralyzed = false;
    return { redTeam, blueTeam };
  };
  abstract generateActionDescription: Description;
}

export interface HelperTextType {
  [name: string]: string;
}

export interface ActionReturn {
  blueTeam: Array<Unit>;
  redTeam: Array<Unit>;
}

export type Description = (source: Unit, targetId: Unit) => string;

export type Action = (
  redTeam: Array<Unit>,
  blueTeam: Array<Unit>,
  defend: boolean,
  targetId: number
) => ActionReturn;
