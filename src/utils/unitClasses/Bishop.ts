import { HealerMass } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class Bishop extends HealerMass {
  constructor(id: number, team: Team) {
    super(UNITS[7], 25, id, team);
  }
}
