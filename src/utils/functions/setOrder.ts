import { Unit } from "../interfaces";
import { getRandomNumber } from "./randomUnits";

export function setOrder(allTeam: Array<Unit>): Array<number> {
  return [...allTeam]
    .sort((unit, nextUnit) => {
      if (nextUnit.initiative - unit.initiative === 0) {
        return getRandomNumber(0, 2) ? 1 : -1;
      } else return nextUnit.initiative - unit.initiative;
    })
    .map((player) => player.id);
}

type NextSourceReturn = {
  sourceNum: number;
  players: Array<Unit>;
};

export function nextSource(
  players: Array<Unit>,
  order: Array<number>,
  sourceNum: number
): NextSourceReturn {
  let i: number = sourceNum;
  while (i < 12) {
    i++;
    if (i === 12) {
      i = -1;
      continue;
    }
    if (players[order[i]].HP !== 0) {
      if (players[order[i]].paralyzed) players[order[i]].paralyzed = false;
      else return { players, sourceNum: i };
    }
  }
  return { players, sourceNum: i };
}

export function newRound(players: Array<Unit>) {
  return players.map((player) => {
    player.defend = false;
    return player;
  });
}
