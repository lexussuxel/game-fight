import { Team, Unit } from "../interfaces";
import {
  Archimage,
  Bandit,
  Bishop,
  Centaur,
  Elf,
  Monk,
  Sirena,
  Skeleton,
  SkeletonMage,
} from "../unitClasses";

export function randomSetPlayers(team: Team): Array<Unit> {
  const players = [];
  for (let i = 0; i < 6; i++) {
    players.push(getRandomUnit(i, team));
  }
  return players;
}

function getRandomUnit(id: number, team: Team): Unit {
  const number = getRandomNumber(0, 9);
  switch (number) {
    case 0: {
      return new Skeleton(id, team);
    }
    case 1: {
      return new Centaur(id, team);
    }
    case 2: {
      return new Bandit(id, team);
    }
    case 3: {
      return new Elf(id, team);
    }
    case 4: {
      return new SkeletonMage(id, team);
    }
    case 5: {
      return new Archimage(id, team);
    }
    case 6: {
      return new Monk(id, team);
    }
    case 7: {
      return new Bishop(id, team);
    }
    default: {
      return new Sirena(id, team);
    }
  }
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function chooseOrder(blueUnit: Unit, redUnit: Unit) {
  if (blueUnit.initiative > redUnit.initiative) return 1;
  else if (blueUnit.initiative < redUnit.initiative) return 0;
  else return getRandomNumber(0, 2);
}
