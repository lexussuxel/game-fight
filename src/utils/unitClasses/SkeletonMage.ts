import { Mage } from "../typeClasses";
import { UNITS } from "../constants";
import { Team } from "../interfaces";

export class SkeletonMage extends Mage {
  constructor(id: number, team: Team) {
    super(UNITS[4], 20, id, team);
  }
}
