import { Action, IUnit, Team, Unit } from "../interfaces";

export abstract class Mage extends Unit {
  fullDamage: number;
  halfDamage: number;
  damage: number;

  constructor(object: IUnit, damage: number, id: number, team: Team) {
    super(object, id, team);
    this.fullDamage = damage;
    this.halfDamage = damage / 2;
    this.damage = damage;
  }
  action: Action = (redTeam, blueTeam, defend) => {
    this.damage = defend ? this.halfDamage : this.fullDamage;
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
