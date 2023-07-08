import { Melee } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class Centaur extends Melee {
  constructor(id: number, team: Team) {
    super(UNITS[1], 50, id, team);
  }
}
