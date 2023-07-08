import { Action, IUnit, Team, Unit } from "../interfaces";

export abstract class HealerMass extends Unit {
  heal: number;

  constructor(object: IUnit, heal: number, id: number, team: Team) {
    super(object, id, team);
    this.heal = heal;
  }

  action: Action = (redTeam, blueTeam) => {
    if (this.team === "red") {
      const newPlayers = redTeam.map((pl) => {
        if (pl.HP !== 0) {
          pl.HP += this.heal;
          if (pl.HP > pl.maxHP && pl) {
            pl.HP = pl.maxHP;
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
        if (pl.HP !== 0) {
          pl.HP += this.heal;
          if (pl.HP > pl.maxHP) {
            pl.HP = pl.maxHP;
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
