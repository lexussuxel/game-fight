import { Mage } from "../typeClasses";
import { UNITS } from "../constants";
import { Team, Description } from "../interfaces";

export class SkeletonMage extends Mage {
  constructor(id: number, team: Team) {
    super(UNITS[4], 20, id, team);
  }
  generateActionDescription: Description = (source) => {
    return `${source.name} from ${source.team} attacks all enemy team!`;
  };
}
