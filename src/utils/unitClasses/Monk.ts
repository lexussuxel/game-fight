import { HealerSingle } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";

export class Monk extends HealerSingle {
  constructor(id: number) {
    super(UNITS[6], 25, id);
  }
  generateActionDescription: Description = (source, target) => {
    return `${source.name} from ${""} heals ${target.name} on position ${""} from its team!`;
  };
}
