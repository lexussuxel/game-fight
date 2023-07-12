import { Melee } from "../typeClasses";
import { UNITS } from "../constants";
import { Team, Description } from "../interfaces";

export class Centaur extends Melee {
  constructor(id: number, team: Team) {
    super(UNITS[1], 50, id, team);
  }

  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${source.team} attacks ${target.name} on position ${target.id} from ${target.team} team!`;
  };
}
