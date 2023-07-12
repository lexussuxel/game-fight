import { Mage } from "../typeClasses";
import { UNITS } from "../constants";
import { Description, Team } from "../interfaces";

export class Archimage extends Mage {
  constructor(id: number, team: Team) {
    super(UNITS[5], 30, id, team);
  }

  generateActionDescription: Description = (source) => {
    return `${source.name} from ${source.team} team attacks all enemy team!`;
  };
}
