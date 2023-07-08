import { Range } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class Elf extends Range {
  constructor(id: number, team: Team) {
    super(UNITS[3], 45, id, team);
  }
}
