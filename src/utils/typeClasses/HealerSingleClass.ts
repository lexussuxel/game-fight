import { IUnit, Unit, Action } from "../interfaces";

export abstract class HealerSingle extends Unit {
  heal: number;

  constructor(object: IUnit, heal: number, id: number) {
    super(object, id);
    this.heal = heal;
  }
  action: Action = (players, targetUnit) => {
    return players.map((player) => {
      if (player.id === targetUnit.id) {
        if (player.HP !== 0) player.HP += this.heal;
        if (player.HP > player.maxHP) player.HP = player.maxHP;
      }
      return player;
    });
  };
}
