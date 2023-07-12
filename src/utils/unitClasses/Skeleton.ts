import { Melee } from "../typeClasses";
import { UNITS } from "../constants";
import { Team, Description } from "../interfaces";

export class Skeleton extends Melee {
  constructor(id: number, team: Team) {
    super(UNITS[0], 25, id, team);
  }
  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${source.team} attacks ${target.name} on position ${target.id} from ${target.team} team!`;
  };
}
