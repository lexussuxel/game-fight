import { Action, IUnit, Team, Unit } from "../interfaces";

export abstract class Mage extends Unit {
  damage: number;

  constructor(object: IUnit, damage: number, id: number, team: Team) {
    super(object, id, team);

    this.damage = damage;
  }
  action: Action = (redTeam, blueTeam) => {
    if (this.team === "blue") {
      const newPlayers = redTeam.map((pl) => {
        pl.HP -= this.damage;
        if (pl.HP < 0) {
          pl.HP = 0;
        }
        return pl;
      });
      return {
        blueTeam,
        redTeam: newPlayers,
      };
    } else {
      const newPlayers = blueTeam.map((pl) => {
        pl.HP -= this.damage;
        if (pl.HP < 0) {
          pl.HP = 0;
        }
        return pl;
      });
      return {
        blueTeam: newPlayers,
        redTeam,
      };
    }
  };
}
