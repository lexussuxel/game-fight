import { HealerSingle } from "../typeClasses";
import { UNITS } from "../constants";
import { Team, Description } from "../interfaces";

export class Monk extends HealerSingle {
  constructor(id: number, team: Team) {
    super(UNITS[6], 25, id, team);
  }
  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${source.team} heals ${target.name} on position ${target.id} from its team!`;
  };
}
