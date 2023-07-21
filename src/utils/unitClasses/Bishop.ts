import { HealerMass } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";

export class Bishop extends HealerMass {
  constructor(id: number) {
    super(UNITS[7], 25, id);
  }
  generateActionDescription: Description = (source) => {
    return `${source.name} from ${""} heals everyone!`;
  };
}
