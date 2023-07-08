import { Melee } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class Skeleton extends Melee {
  constructor(id: number, team: Team) {
    super(UNITS[0], 25, id, team);
  }
}
