import { HealerSingle } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class Monk extends HealerSingle {
  constructor(id: number, team: Team) {
    super(UNITS[6], 25, id, team);
  }
}
