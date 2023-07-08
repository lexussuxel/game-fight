import { Mage } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class Archimage extends Mage {
  constructor(id: number, team: Team) {
    super(UNITS[5], 30, id, team);
  }
}
