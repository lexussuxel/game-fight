import { Unit, IUnit, Action } from "../interfaces";

export abstract class Paralyzer extends Unit {
  constructor(object: IUnit, id: number) {
    super(object, id);
  }
  action: Action = (players, targetUnit) => {
    return players.map((player)=>{
      if(player.id === targetUnit.id && targetUnit.team !== this.team)
        player.paralyzed = true
      return player
    })
  };
}
