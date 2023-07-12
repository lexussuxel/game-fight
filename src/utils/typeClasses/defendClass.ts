import { Action, Description, Unit } from "../interfaces";

export class Defend extends Unit {
  constructor() {
    super({ maxHP: 100, name: "defender", initiative: 0, img: "" }, 100, "red");
  }
  action: Action = (redTeam, blueTeam) => {
    return { redTeam, blueTeam };
  };
  generateActionDescription: Description = () => {
    return "";
  };
}
