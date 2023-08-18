export interface IUnit {
  maxHP: number;
  initiative: number;
  name: string;
  img: string;
}

export abstract class Unit implements IUnit {
  readonly maxHP: number;
  HP: number;
  initiative: number;
  name: string;
  img: string;
  id: number;
  paralyzed: boolean;
  defend = false;
  team: number;

  constructor(object: IUnit, id: number) {
    this.maxHP = object.maxHP;
    this.HP = object.maxHP;
    this.initiative = object.initiative;
    this.name = object.name;
    this.img = object.img;
    this.id = id;
    this.paralyzed = false;
    this.team = Math.floor(id / 6) + 1;
  }

  defendSelf() {
    this.defend = true;
  }

  abstract action: Action;
  preAction: Action = (players, targetUnit) => {
    if (this.HP !== 0 && !this.paralyzed)
      return this.action(
        players.map((player) => {
          if (player.id === this.id) player.defend = false;
          return player;
        }),
        targetUnit
      );
    else return players;
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

export type Action = (players: Array<Unit>, targetUnit: Unit) => Array<Unit>;
