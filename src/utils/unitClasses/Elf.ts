import { Range } from "../typeClasses";
import { UNITS } from "../constants";
import { Team, Description } from "../interfaces";

export class Elf extends Range {
  constructor(id: number, team: Team) {
    super(UNITS[3], 45, id, team);
  }
  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${source.team} attacks ${target.name} on position ${target.id} from ${target.team} team!`;
  };
}
