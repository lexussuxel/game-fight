import { Paralyzer } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class Sirena extends Paralyzer {
  constructor(id: number, team: Team) {
    super(UNITS[8], id, team);
  }
}
