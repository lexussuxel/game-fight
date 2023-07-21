import { Unit, IUnit, Action} from "../interfaces";

export abstract class Melee extends Unit {
  fullDamage: number;
  halfDamage: number;
  damage: number;

  constructor(object: IUnit, damage: number, id: number) {
    super(object, id);
    this.damage = damage;
    this.fullDamage = damage;
    this.halfDamage = damage / 2;
  }
  action: Action = (players, targetUnit) => {
    return players.map((player)=>{
      if(player.id === targetUnit.id){
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
