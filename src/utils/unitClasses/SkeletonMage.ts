import { Mage } from "../typeClasses";
import { UNITS } from "../constants";
import { Description } from "../interfaces";

export class SkeletonMage extends Mage {
  constructor(id: number) {
    super(UNITS[4], 20, id);
  }
  generateActionDescription: Description = (source) => {
    return `${source.name} from ${source} attacks all enemy team!`;
  };
}
