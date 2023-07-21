import { Mage } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";


export class Archimage extends Mage {
  constructor(id: number) {
    super(UNITS[5], 30, id);
  }

  generateActionDescription: Description = (source) => {
    return `${source.name} from ${""} team attacks all enemy team!`;
  };
}
