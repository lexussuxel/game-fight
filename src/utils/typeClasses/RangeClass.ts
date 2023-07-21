import { Action, IUnit,  Unit } from "../interfaces";

export abstract class Range extends Unit {
  fullDamage: number;
  halfDamage: number;
  damage: number;

  constructor(object: IUnit, damage: number, id: number) {
    super(object, id);
    this.fullDamage = damage;
    this.halfDamage = damage / 2;
    this.damage = damage;
  }
  action: Action = (players, targetUnit) => {
    return players.map((player)=>{
      if(player.id === targetUnit.id && targetUnit.team !== this.team){
        if(player.defend)
          player.HP -= this.halfDamage
        else 
          player.HP -= this.fullDamage
        if(player.HP < 0)
          player.HP = 0
      }
      return player
    })
  };
}
