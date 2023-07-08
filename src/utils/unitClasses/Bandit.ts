import { Range } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class Bandit extends Range {
  constructor(id: number, team: Team) {
    super(UNITS[2], 30, id, team);
  }
}
