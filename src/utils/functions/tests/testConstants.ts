import { UNITS } from "./../../constants";
import { Action, Description, Unit } from "../../interfaces";
import { Bishop, Centaur, Skeleton } from "../../unitClasses";

function killUnit() {
  const unit = UNITS[0];
  unit.maxHP = 0;
  return unit;
}

class MOCK_DEAD extends Unit {
  constructor(id: number) {
    super(killUnit(), id);
  }
  action: Action = (players) => {
    return players;
  };
  generateActionDescription: Description = () => {
    return "";
  };
}

export const MOCK_TEAM = [
  new Skeleton(0),
  new Centaur(1),
  new Bishop(2),
  new Skeleton(3),
  new Centaur(4),
  new Bishop(5),
  new Skeleton(6),
  new Centaur(7),
  new Bishop(8),
  new Skeleton(9),
  new Centaur(10),
  new Bishop(11),
];

export const MOCK_FIRST_TEAM_FIRST_LINE_DEAD = [
  new Skeleton(0),
  new Centaur(1),
  new Bishop(2),
  new MOCK_DEAD(3),
  new MOCK_DEAD(4),
  new MOCK_DEAD(5),
  new Skeleton(6),
  new Centaur(7),
  new Bishop(8),
  new Skeleton(9),
  new Centaur(10),
  new Bishop(11),
];

export const MOCK_SECOND_TEAM_FIRST_LINE_DEAD = [
  new Skeleton(0),
  new Centaur(1),
  new Bishop(2),
  new Skeleton(3),
  new Centaur(4),
  new Bishop(5),
  new MOCK_DEAD(6),
  new MOCK_DEAD(7),
  new MOCK_DEAD(8),
  new Skeleton(9),
  new Centaur(10),
  new Bishop(11),
];
