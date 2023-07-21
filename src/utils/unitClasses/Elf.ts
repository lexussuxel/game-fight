import { Range } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";

export class Elf extends Range {
  constructor(id: number) {
    super(UNITS[3], 45, id);
  }
  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${""} attacks ${target.name} on position ${target.id} from ${""} team!`;
  };
}
