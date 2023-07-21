import { Action, IUnit,  Unit } from "../interfaces";

export abstract class HealerMass extends Unit {
  heal: number;

  constructor(object: IUnit, heal: number, id: number) {
    super(object, id);
    this.heal = heal;
  }

  action: Action = (players) => {
    return players.map((player)=>{
      if(player.team === this.team){
        if(player.HP !== 0)
        player.HP += this.heal
        if(player.HP > player.maxHP)
          player.HP = player.maxHP
      }
      return player
    })
  };
}
