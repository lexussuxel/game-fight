import { Melee } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";

export class Centaur extends Melee {
  constructor(id: number) {
    super(UNITS[1], 50, id);
  }

  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${""} attacks ${target.name} on position ${
      target.id
    } from ${""} team!`;
  };
}
