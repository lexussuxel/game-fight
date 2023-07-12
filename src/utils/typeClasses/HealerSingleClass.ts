import { IUnit, Unit, Action, Team } from "../interfaces";

export abstract class HealerSingle extends Unit {
  heal: number;

  constructor(object: IUnit, heal: number, id: number, team: Team) {
    super(object, id, team);
    this.heal = heal;
  }
  action: Action = (redTeam, blueTeam, defend, targetId) => {
    if (this.team === "red") {
      const newPlayers = redTeam.map((pl) => {
        if (pl.id === targetId) {
          pl.HP += this.heal;
          if (pl.HP > pl.maxHP) {
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
        if (pl.id === targetId) {
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
