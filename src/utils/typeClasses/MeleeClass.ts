import { Unit, IUnit, Action, Team } from "../interfaces";

export abstract class Melee extends Unit {
  fullDamage: number;
  halfDamage: number;
  damage: number;

  constructor(object: IUnit, damage: number, id: number, team: Team) {
    super(object, id, team);
    this.damage = damage;
    this.fullDamage = damage;
    this.halfDamage = damage / 2;
  }
  action: Action = (redTeam, blueTeam, defend, targetId) => {
    this.damage = defend ? this.halfDamage : this.fullDamage;
    if (this.team === "blue") {
      const newPlayers = redTeam.map((pl) => {
        if (pl.id === targetId) {
          pl.HP -= this.damage;
          if (pl.HP < 0) {
            pl.HP = 0;
          }
        }
        return pl;
      });
      return {
        blueTeam,
        redTeam: newPlayers,
      };
    } else {
      const newPlayers = blueTeam.map((pl) => {
        if (pl.id === targetId) {
          pl.HP -= this.damage;
          if (pl.HP < 0) {
            pl.HP = 0;
          }
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
