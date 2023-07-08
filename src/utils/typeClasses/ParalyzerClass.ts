import { Unit, IUnit, Action, Team } from "../interfaces";

export class Paralyzer extends Unit {
  constructor(object: IUnit, id: number, team: Team) {
    super(object, id, team);
  }
  action: Action = (redTeam, blueTeam, targetId) => {
    if (this.team === "blue") {
      const newPlayers = redTeam.map((pl) => {
        if (pl.id === targetId) {
          pl.paralyzed = true;
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
          pl.paralyzed = true;
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
