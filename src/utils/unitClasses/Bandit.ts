import { Range } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";

export class Bandit extends Range {
  constructor(id: number) {
    super(UNITS[2], 30, id);
  }

  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${""} attacks ${target.name} on position ${
      target.id
    } from ${""} team!`;
  };
}
