import { Range } from "../typeClasses";
import { UNITS } from "../constants";
import { Description, Team } from "../interfaces";

export class Bandit extends Range {
  constructor(id: number, team: Team) {
    super(UNITS[2], 30, id, team);
  }

  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${source.team} attacks ${target.name} on position ${target.id} from ${target.team} team!`;
  };
}
