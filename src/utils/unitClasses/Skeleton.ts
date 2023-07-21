import { Melee } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";

export class Skeleton extends Melee {
  constructor(id: number) {
    super(UNITS[0], 25, id);
  }
  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${source} attacks ${target.name} on position ${target.id} from ${target} team!`;
  };
}
