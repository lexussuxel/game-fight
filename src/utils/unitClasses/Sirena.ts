import { Paralyzer } from "../typeClasses";
import { UNITS } from "../constants";
import { Team, Description } from "../interfaces";

export class Sirena extends Paralyzer {
  constructor(id: number, team: Team) {
    super(UNITS[8], id, team);
  }
  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${source.team} paralyzes ${target.name} on position ${target.id} from ${target.team} team!`;
  };
}
