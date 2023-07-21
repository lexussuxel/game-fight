import { Paralyzer } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";

export class Sirena extends Paralyzer {
  constructor(id: number, ) {
    super(UNITS[8], id);
  }
  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${source} paralyzes ${target.name} on position ${target.id} from ${target} team!`;
  };
}
